import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import { ListColor, ListItemColors, tabs } from "@/lib/data.type"
import { Accordion } from "../ui/accordion"
import { ScrollArea } from "../ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import ChartColorCustom from "./chart-color-custom"
import ColorCustom from "./color-custom-accordion"
import PreviewTheme from "./preview-theme"

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
    <Tabs defaultValue="Couleur" className="w-full lg:w-full">
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
      <TabsContent value="Couleur" className="w-full">
        <div className="flex w-full items-center justify-center gap-2">
          <div className="w-full lg:w-1/2">
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
          </div>
          <PreviewTheme />
        </div>
      </TabsContent>
      <TabsContent value="Chart" className="w-full">
        <ChartColorCustom />
      </TabsContent>
    </Tabs>
  )
}
