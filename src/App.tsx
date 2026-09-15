import { BellRing, Plus, Search, Settings } from "lucide-react"
import AppSidebar from "./components/ui/app-sidebar"
import { Button } from "./components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./components/ui/input-group"
import PopoverProfil from "./components/ui/popover-profil"
import {
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "./components/ui/sidebar"

export function App() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <header className="sticky flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <SidebarTrigger className="ml-2" />
          <div className="flex items-center justify-between gap-2">
            <InputGroup className="w-xs">
              <InputGroupInput placeholder="Rechercher vos produits, commandes, ...." />
              <InputGroupAddon>
                <Search className="size-4" />
              </InputGroupAddon>
            </InputGroup>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Plus className="size-4" />
              </Button>
              <Button variant="outline" size="icon">
                <BellRing className="size-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="size-4" />
              </Button>
            </div>
            <SidebarSeparator orientation="vertical" />

            <PopoverProfil />
          </div>
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
