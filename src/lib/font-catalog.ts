export type FontCategory = "sans" | "serif" | "mono"
export type FontOption = { id: string; label: string; family: string; cssValue: string; source: "application" | "system" | "google"; googleFamily?: string }
export const FONT_CATALOG: Record<FontCategory, FontOption[]> = {
  sans: [
    { id: "inter", label: "Inter", family: "Inter", cssValue: "Inter, sans-serif", source: "application" },
    { id: "dm-sans", label: "DM Sans", family: "DM Sans Variable", cssValue: '"DM Sans Variable", sans-serif', source: "application" },
    { id: "system-sans", label: "Police système", family: "system-ui", cssValue: "system-ui, sans-serif", source: "system" },
    { id: "arial", label: "Arial", family: "Arial", cssValue: "Arial, sans-serif", source: "system" },
    { id: "roboto", label: "Roboto", family: "Roboto", cssValue: "Roboto, sans-serif", source: "google", googleFamily: "Roboto" },
    { id: "open-sans", label: "Open Sans", family: "Open Sans", cssValue: '"Open Sans", sans-serif', source: "google", googleFamily: "Open Sans" },
    { id: "lato", label: "Lato", family: "Lato", cssValue: "Lato, sans-serif", source: "google", googleFamily: "Lato" },
    { id: "montserrat", label: "Montserrat", family: "Montserrat", cssValue: "Montserrat, sans-serif", source: "google", googleFamily: "Montserrat" },
    { id: "poppins", label: "Poppins", family: "Poppins", cssValue: "Poppins, sans-serif", source: "google", googleFamily: "Poppins" },
    { id: "nunito", label: "Nunito", family: "Nunito", cssValue: "Nunito, sans-serif", source: "google", googleFamily: "Nunito" },
  ],
  serif: [
    { id: "georgia", label: "Georgia", family: "Georgia", cssValue: "Georgia, serif", source: "system" },
    { id: "times", label: "Times New Roman", family: "Times New Roman", cssValue: '"Times New Roman", serif', source: "system" },
    { id: "merriweather", label: "Merriweather", family: "Merriweather", cssValue: "Merriweather, serif", source: "google", googleFamily: "Merriweather" },
    { id: "roboto-slab", label: "Roboto Slab", family: "Roboto Slab", cssValue: '"Roboto Slab", serif', source: "google", googleFamily: "Roboto Slab" },
  ],
  mono: [
    { id: "system-mono", label: "Police système", family: "ui-monospace", cssValue: "ui-monospace, monospace", source: "system" },
    { id: "courier", label: "Courier New", family: "Courier New", cssValue: '"Courier New", monospace', source: "system" },
    { id: "jetbrains", label: "JetBrains Mono", family: "JetBrains Mono", cssValue: '"JetBrains Mono", monospace', source: "google", googleFamily: "JetBrains Mono" },
    { id: "source-code", label: "Source Code Pro", family: "Source Code Pro", cssValue: '"Source Code Pro", monospace', source: "google", googleFamily: "Source Code Pro" },
  ],
}
export const FONT_PROPERTY_BY_CATEGORY = { sans: "--font-sans", serif: "--font-serif", mono: "--font-mono" } as const
