import { useThemeManagementStore } from "@/hooks/ThemeManagement"
import { ListColor, ListItemColors, tabs } from "@/lib/data.type"
import { Accordion } from "../ui/accordion"
import { Card, CardContent } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import ColorCustom from "./color-custom"

export default function PersonnalisationTabs() {
  const setItemColorSelected = useThemeManagementStore(
    (state) => state.setColorSelected
  )
  const OnValueChange = (value: string[]) => {
    ListItemColors.map((data) => {
      if (value[0]?.includes(data.name)) {
        setItemColorSelected(data.name, data.index)
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
        <Card className="">
          <CardContent>
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
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
