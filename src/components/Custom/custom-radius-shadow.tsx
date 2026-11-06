import { Ban, Info } from "lucide-react"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

export default function CustomRadiusShadow() {
  return (
    <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(260px,0.8fr)_minmax(0,2fr)]">
      <section>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Coin de fenêtre</CardTitle>
            <HoverCard>
              <HoverCardTrigger
                delay={50}
                closeDelay={50}
                render={
                  <Button size="icon" variant="ghost" aria-label="Aide">
                    <Info />
                  </Button>
                }
              />
              <HoverCardContent side="right">
                <CardTitle className="text-base">
                  Manuelle d'utlisation
                </CardTitle>
                <CardDescription>
                  Vous pouvez personnaliser le rayon des coins de la fenêtre et
                  l'ombre portée de l'application. Ajustez les curseurs pour
                  obtenir l'apparence souhaitée.
                </CardDescription>
              </HoverCardContent>
            </HoverCard>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <label htmlFor="">
                <span className="text-sm font-medium">Rayon des coins</span>
              </label>
              <div className="flex items-center justify-between gap-2">
                <Button variant="outline" size="sm">
                  <Ban />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
