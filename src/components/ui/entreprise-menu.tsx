import { datadropMenuEntreprise } from "@/lib/data.type"
import {
  Cable,
  ChevronsUpDown,
  GalleryVerticalEnd,
  Info,
  LogOut,
  Settings,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import { Separator } from "./separator"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./sidebar"

const IconDropDownMenu = [Info, Settings, Cable]
const Company = {
  name: "Entreprise Test",
  role: "Administrateur",
}

export default function EntrepriseMenu() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SidebarMenuButton
              size="lg"
              className="flex data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground lg:gap-10"
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
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex w-58 flex-col gap-2">
            <div className="flex flex-col gap-2 lg:px-1.5">
              {datadropMenuEntreprise.map((item) => {
                const Icon = IconDropDownMenu[item.id - 1]
                return (
                  <DropdownMenuItem key={item.id}>
                    <Icon className="mr-2 size-4" />
                    {item.titre}
                  </DropdownMenuItem>
                )
              })}
            </div>
            <Separator />
            <div className="px-1.5">
              <DropdownMenuItem variant="destructive">
                <LogOut className="mr-2 size-4" />
                <span>Se deconnecter</span>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
