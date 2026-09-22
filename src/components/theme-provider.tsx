/* eslint-disable react-refresh/only-export-components */
import { ThemeFont } from "@/lib/color-theme"
import * as React from "react"

type Theme = "default" | "claude"
type Mode = "dark" | "light" | "system"
type ResolvedTheme = "dark" | "light"
type ThemeMode = { theme: Theme; mode: Mode }

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultMode?: Mode
  storageKey?: string
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  themeMode: ThemeMode
  setTheme: (nextTheme: Theme, nextMode: Mode) => void
}

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)"
const MODE_THEME_VALUES: Mode[] = ["dark", "light", "system"]

const ThemeProviderContext = React.createContext<
  ThemeProviderState | undefined
>(undefined)

function isMode(value: string | null): value is Mode {
  if (value === null) {
    return false
  }

  return MODE_THEME_VALUES.includes(value as Mode)
}

/* Vérifie si le système est en mode dark ou light */
function getSystemTheme(): ResolvedTheme {
  if (window.matchMedia(COLOR_SCHEME_QUERY).matches) {
    return "dark"
  }

  return "light"
}

function disableTransitionsTemporarily() {
  const style = document.createElement("style")
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{-webkit-transition:none!important;transition:none!important}"
    )
  )
  document.head.appendChild(style)

  return () => {
    window.getComputedStyle(document.body)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }
}

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
      const root = document.documentElement
      const resolvedTheme = nextMode === "system" ? getSystemTheme() : nextMode
      const restoreTransitions = disableTransitionOnChange
        ? disableTransitionsTemporarily()
        : null

      if (ThemeFont[nextTheme] === undefined) {
        nextTheme = "default"
      }
      const theme = ThemeFont[nextTheme][resolvedTheme]

      Object.entries(theme).forEach(([property, value]) => {
        root.style.setProperty(property, value)
      })

      if (restoreTransitions) {
        restoreTransitions()
      }
    },
    [disableTransitionOnChange]
  )

  React.useEffect(() => {
    const { theme, mode } = themeMode
    applyTheme(theme, mode)

    if (mode !== "system") {
      return undefined
    }

    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY)
    const handleChange = () => {
      applyTheme("default", "system")
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [themeMode, applyTheme])

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
              : getSystemTheme() === "dark"
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
  }, [storageKey])

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
          setThemeModeState(storedTheme as ThemeMode)
          return
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
  }, [defaultTheme, storageKey])

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
