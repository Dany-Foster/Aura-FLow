import React, { useState } from "react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"

export default function NavTravail({
  items,
}: {
  items: {
    id: number
    titre: string
    url: string
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
}) {
  const [selectItem, setSelectedItem] = useState("")
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-bold text-xs text-muted-foreground">
        ESPACE DE TRAVAIL
      </SidebarGroupLabel>
      <SidebarGroupContent className="flex flex-col gap-4">
        <SidebarMenu className="flex flex-col gap-2">
          {items.map((item, index) => (
            <SidebarMenuItem key={item.titre}>
              <SidebarMenuButton
                key={index}
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
