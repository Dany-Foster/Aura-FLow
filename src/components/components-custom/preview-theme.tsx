import { GalleryVerticalEnd, Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

export default function PreviewTheme() {
  return (
    <div className="flex h-full w-1/2 flex-col items-end gap-2">
      <Button variant="outline" className="w-auto">
        <Plus /> Nouveau thème
      </Button>
      <Card className="h-full w-full">
        <CardContent className="h-full">
          <div className="flex min-h-full flex-col items-center justify-center gap-4">
            <Button className="bg-primary">Button</Button>
            <Tabs>
              <TabsList>
                <TabsTrigger
                  className="data-active:bg-primary data-active:text-primary-foreground hover:data-active:text-primary-foreground"
                  value="Tabs1"
                >
                  Tabs 1
                </TabsTrigger>
                <TabsTrigger
                  className="data-active:bg-primary data-active:text-primary-foreground hover:data-active:text-primary-foreground"
                  value="Tabs2"
                >
                  Tabs 2
                </TabsTrigger>
                <TabsTrigger
                  className="data-active:bg-primary data-active:text-primary-foreground hover:data-active:text-primary-foreground"
                  value="Tabs3"
                >
                  Tabs 3
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
