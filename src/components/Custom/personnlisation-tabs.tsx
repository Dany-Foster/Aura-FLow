import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import { ListColor, ListItemColors, tabs } from "@/lib/data.type"
import { Accordion } from "../ui/accordion"
import { ScrollArea } from "../ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import ColorCustom from "./color-custom-accordion"

export default function PersonnalisationTabs() {
  const setItemColorSelected = useThemeManagementStore(
    (state) => state.setColorSelected
  )
  const OnValueChange = (value: string[]) => {
    if (value[0] === undefined) {
      setItemColorSelected("", [])
      return
    }

    ListItemColors.map((data) => {
      if (value[0]?.includes(data.name)) {
        setItemColorSelected(data.name, data.index)
        return
      }
    })
  }

  return (
    <Tabs defaultValue="" className="lg:w-150">
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
      <TabsContent value="Couleur" className="">
        <ScrollArea className="h-101.5 w-full rounded-md border border-foreground/10">
          <div className="p-4">
            <Accordion onValueChange={OnValueChange}>
              {ListColor.map((data, index) => (
                <ColorCustom
                  key={index}
                  Trigger={data.trigger}
                  Titre={data.title}
                  colors={data.color}
                />
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </TabsContent>
    </Tabs>
  )
}
