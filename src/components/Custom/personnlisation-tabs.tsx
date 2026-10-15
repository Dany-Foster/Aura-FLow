import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import { ListColor, ListItemColors, tabs } from "@/lib/data.type"
import { Accordion } from "../ui/accordion"
import { ScrollArea } from "../ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import ColorCustom from "./color-custom-accordion"
import TypographyCustom from "./typography-custom"

export default function PersonnalisationTabs() {
  const selectColor = useThemeManagementStore((state) => state.setColorSelected)
  const onValueChange = (value: string[]) => {
    if (!value[0]) {
      selectColor("")
      return
    }
    ListItemColors.forEach((item) => {
      if (value[0].includes(item.name)) selectColor(item.name)
    })
  }

  return (
    <Tabs defaultValue="Couleur" className="lg:w-150">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="data-active:bg-primary data-active:text-primary-foreground hover:data-active:text-primary-foreground"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="Couleur">
        <ScrollArea className="h-101.5 w-full rounded-md border border-foreground/10">
          <div className="p-4">
            <Accordion onValueChange={onValueChange}>
              {ListColor.map((item) => (
                <ColorCustom
                  key={item.trigger}
                  Trigger={item.trigger}
                  Titre={item.title}
                  colors={item.color}
                />
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </TabsContent>
      <TabsContent value="Typographie">
        <ScrollArea className="h-101.5 w-full rounded-md border border-foreground/10">
          <TypographyCustom />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  )
}
