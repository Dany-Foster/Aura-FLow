import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import { ThemeFont } from "@/lib/color-theme"
import { disableTransitionsTemporarily, isMode } from "@/lib/data.type"
import type {
  Mode,
  Theme,
  ThemeMode,
  ThemeProviderProps,
  ThemeProviderState,
} from "@/lib/Type-data.type"
import * as React from "react"

const ThemeProviderContext = React.createContext<
  ThemeProviderState | undefined
>(undefined)

/* Vérifie si le système est en mode dark ou light */

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  if (target.isContentEditable) {
    return true
  }

  const editableParent = target.closest(
    "input, textarea, select, [contenteditable='true']"
  )
  if (editableParent) {
    return true
  }

  return false
}

export function ThemeProvider({
  children,
  defaultTheme = "default",
  defaultMode = "system",
  storageKey = "Theme",
  disableTransitionOnChange = true,
  ...props
}: ThemeProviderProps) {
  const UpdateTheme = useThemeManagementStore((state) => state.UpdateTheme)
  const ActiveCustomThemeId = useThemeManagementStore((state) => state.ActiveCustomThemeId)
  const ThemeColors = useThemeManagementStore((state) => state.ThemeColors)
  const ThemeSystem = useThemeManagementStore((state) => state.SystemTheme)
  const [themeMode, setThemeModeState] = React.useState<ThemeMode>(() => {
    const storedTheme: ThemeMode | null = JSON.parse(
      localStorage.getItem(storageKey) as string
    )

    if (!storedTheme || storedTheme == undefined) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ theme: defaultTheme, mode: defaultMode })
      )
      return { theme: defaultTheme, mode: defaultMode }
    }

    if (isMode(storedTheme.mode) && storedTheme.theme) {
      return storedTheme
    }

    return { theme: defaultTheme, mode: defaultMode }
  })

  const setTheme = React.useCallback(
    (nextTheme: Theme, nextMode: Mode) => {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ theme: nextTheme, mode: nextMode })
      )
      setThemeModeState({ theme: nextTheme, mode: nextMode })
    },
    [storageKey]
  )

  const applyTheme = React.useCallback(
    (nextTheme: Theme, nextMode: Mode) => {
      const resolvedTheme = nextMode === "system" ? ThemeSystem() : nextMode
      const restoreTransitions = disableTransitionOnChange
        ? disableTransitionsTemporarily()
        : null
      if (ThemeFont[nextTheme] === undefined) {
        nextTheme = "default"
      }

      UpdateTheme(nextTheme, resolvedTheme)

      if (restoreTransitions) {
        restoreTransitions()
      }
    },
    [disableTransitionOnChange, UpdateTheme, ThemeSystem]
  )

  React.useEffect(() => {
    const { theme, mode } = themeMode

    applyTheme(theme, mode)
  }, [themeMode, applyTheme, ActiveCustomThemeId])

  React.useEffect(() => {
    if (!ThemeColors) return
    Object.entries(ThemeColors).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value)
    })
  }, [ThemeColors])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (isEditableTarget(event.target)) {
        return
      }

      if (event.key.toLowerCase() !== "d") {
        return
      }

      setThemeModeState((currentTheme) => {
        const nextMode: Mode =
          currentTheme.mode === "dark"
            ? "light"
            : currentTheme.mode === "light"
              ? "dark"
              : ThemeSystem() === "dark"
                ? "light"
                : "dark"

        const nextTheme = {
          ...currentTheme,
          mode: nextMode,
        }

        localStorage.setItem(storageKey, JSON.stringify(nextTheme))
        return nextTheme
      })
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [storageKey, ThemeSystem])

  React.useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea !== localStorage) {
        return
      }

      if (event.key !== storageKey) {
        return
      }

      try {
        const storedTheme: unknown = JSON.parse(event.newValue as string)

        if (
          typeof storedTheme === "object" &&
          storedTheme !== null &&
          "theme" in storedTheme &&
          "mode" in storedTheme &&
          isMode(storedTheme.mode as Mode)
        ) {
          applyTheme(storedTheme.theme as Theme, storedTheme.mode as Mode)
          setThemeModeState(storedTheme as ThemeMode)
          localStorage.setItem(storageKey, JSON.stringify(storedTheme))
          return
        } else {
          console.log("storedTheme is not a valid ThemeMode object")
        }
      } catch {
        console.log("parsing error")
      }

      setThemeModeState({
        theme: defaultTheme,
        mode: defaultMode,
      })
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [defaultTheme, defaultMode, storageKey, applyTheme])

  const value = React.useMemo(
    () => ({
      themeMode,
      setTheme,
    }),
    [themeMode, setTheme]
  )

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
