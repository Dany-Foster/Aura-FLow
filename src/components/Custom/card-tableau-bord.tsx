import { ArrowUp, ArrowUpRight } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

type CardProps = {
  title?: string
  value: string
  color?: string
  comparaison?: string
}

export default function CardTabComponent({
  title,
  value,
  comparaison,
}: CardProps) {
  return (
    <Card className="w-full gap-1">
      <CardHeader className="">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <CardAction>
          <ArrowUpRight size={20} />
        </CardAction>
      </CardHeader>
      <CardContent className="rounded-b-2xl pb-3 text-5xl leading-10 font-medium tracking-tight">
        {value}
      </CardContent>
      <CardFooter className="justify-arround flex gap-2 rounded-t-xl">
        <div className="flex items-center gap-1">
          <ArrowUp size={15} className="text-green-500" />
          <p className="text-xs font-semibold text-green-500">{comparaison}</p>
        </div>
        <span className="text-xs font-normal text-muted-foreground">
          comparé au mois dernier
        </span>
      </CardFooter>
    </Card>
  )
}
