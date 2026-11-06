import React from "react"
import { NavLink } from "react-router"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"

export default function NavParam({
  items,
}: {
  items: {
    id: number
    titre: string
    url: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-bold text-xs text-muted-foreground">
        ADMINISTRATION & PARAMETRAGE
      </SidebarGroupLabel>
      <SidebarGroupContent className="flex flex-col gap-4">
        <SidebarMenu className="flex flex-col gap-2">
          {items.map((item, index) => (
            <SidebarMenuItem key={index}>
              <NavLink to={item.url} className="text-inherit no-underline">
                {({ isActive }) => (
                  <SidebarMenuButton
                    data-active={isActive}
                    tooltip={item.titre}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.titre}</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
