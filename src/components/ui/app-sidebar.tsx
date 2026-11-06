import { datadropMenu } from "@/lib/data.type"
import EntrepriseMenu from "../Custom/entreprise-menu"
import NavGestionCommercial from "../Custom/nav-gestioncommercial"
import NavParam from "../Custom/nav-param"
import NavRelation from "../Custom/nav-relation"
import NavTravail from "../Custom/nav-travail"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "./sidebar"

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar()
  return (
    <Sidebar {...props}>
      <SidebarHeader className={`px-2 ${open ? "py-1" : "py-2"}`}>
        <EntrepriseMenu />
      </SidebarHeader>
      <SidebarContent className="scroll-fade-y">
        <NavTravail items={datadropMenu.navTrav} />
        <NavRelation items={datadropMenu.navRelation} />
        <NavGestionCommercial items={datadropMenu.navGesCom} />
        <NavParam items={datadropMenu.navParam} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
