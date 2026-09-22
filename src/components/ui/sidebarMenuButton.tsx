import { ChevronsUpDown, GalleryVerticalEnd } from "lucide-react"
import { SidebarMenuButton } from "./sidebar"

const Company = {
  name: "Entreprise Test",
  role: "Administrateur",
}

export default function SideBarDropdown() {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div className="flex w-full items-center gap-2">
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <GalleryVerticalEnd className="size-4" />
        </div>
        <div className="grid flex-1 gap-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{Company.name}</span>
          <span className="truncate text-[10px] font-medium">
            {Company.role}
          </span>
        </div>
      </div>
      <ChevronsUpDown className="ml-auto" />
    </SidebarMenuButton>
  )
}
