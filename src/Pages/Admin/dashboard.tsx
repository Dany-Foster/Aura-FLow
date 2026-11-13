import ButtonCalendar from "@/components/Custom/button-calendar"
import CardTabComponent from "@/components/Custom/card-tableau-bord"
import ChartMarge from "@/components/Custom/chart-marge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Dashboard() {
  return (
    <section className="mt-2">
      <div className="flex w-full items-center justify-between gap-2">
        <h1 className="text-2xl font-bold tracking-tight text-primary">
          Tableau de bord
        </h1>
        <div className="flex items-center gap-2">
          <ButtonCalendar />
          <Button variant="default">
            <Download />
            Exporter
          </Button>
        </div>
      </div>
      <div className="grid-cols mt-4 grid w-full gap-4 lg:grid-cols-6">
        <ChartMarge />
        <div className="col-span-3 row-span-2 w-full">
          <div className="grid-cols grid gap-4 lg:grid-cols-2">
            <CardTabComponent
              title="Chiffre d'affaire"
              value="$ 1.000"
              comparaison="+ 20.5%"
            />
            <CardTabComponent
              title="Clients actifs"
              value="5.000"
              comparaison="+ 2.5%"
            />
            <CardTabComponent
              title="Commande en cours"
              value="4.892"
              comparaison="+ 5%"
            />
            <CardTabComponent
              title="Alerte stock"
              value="50"
              comparaison="+ 5%"
            />
          </div>
        </div>
      </div>
      <div className="lg:grid-cols mt-4 grid gap-2"></div>
    </section>
  )
}
