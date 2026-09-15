import { Sidebar, SidebarHeader } from "./sidebar"

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader></SidebarHeader>
    </Sidebar>
  )
}
