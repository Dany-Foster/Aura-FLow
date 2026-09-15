import { datadropMenu } from "@/lib/data.type"
import EntrepriseMenu from "./entreprise-menu"
import NavGestionCommercial from "./nav-gestioncommercial"
import NavParam from "./nav-param"
import NavRelation from "./nav-relation"
import NavTravail from "./nav-travail"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "./sidebar"

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <EntrepriseMenu />
      </SidebarHeader>
      <SidebarContent>
        <NavTravail items={datadropMenu.navTrav} />
        <NavRelation items={datadropMenu.navRelation} />
        <NavGestionCommercial items={datadropMenu.navGesCom} />
      </SidebarContent>
      <SidebarFooter>
        <NavParam items={datadropMenu.navParam} />
      </SidebarFooter>
    </Sidebar>
  )
}
