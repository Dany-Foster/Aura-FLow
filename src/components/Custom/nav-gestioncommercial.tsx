import React from "react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"

export default function NavGestionCommercial({
  items,
  selectItem,
  setSelectedItem,
}: {
  items: {
    id: number
    titre: string
    url: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
  selectItem: string
  setSelectedItem: (item: string) => void
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-bold text-xs text-muted-foreground">
        GESTION COMMERCIALE
      </SidebarGroupLabel>
      <SidebarGroupContent className="flex flex-col gap-4">
        <SidebarMenu className="flex flex-col gap-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.titre}>
              <SidebarMenuButton
                data-active={selectItem === item.titre}
                onClick={() => setSelectedItem(item.titre)}
                tooltip={item.titre}
              >
                {item.icon && <item.icon />}
                <span>{item.titre}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
