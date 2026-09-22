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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./sidebar"

const IconDropDownMenu = [Info, Settings, Cable]
const Company = {
  name: "Entreprise Test",
  role: "Administrateur",
}

export default function EntrepriseMenu() {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu className="">
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<SidebarMenuButton size="lg" className="" />}
          >
            <div className="flex w-full items-center gap-2.5">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="grid flex-1 gap-1 text-left text-sm leading-tight">
                <span className="truncate text-[12px] font-semibold">
                  {Company.name}
                </span>
                <span className="truncate text-[10px] font-medium">
                  {Company.role}
                </span>
              </div>
            </div>
            <ChevronsUpDown className="ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
            className="flex w-(--radix-dropdown-menu-trigger-width) min-w-56 flex-col gap-2 rounded-lg px-2.5"
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel>Entreprise</DropdownMenuLabel>
              <div className="flex flex-col gap-2">
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
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            <div className="">
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
