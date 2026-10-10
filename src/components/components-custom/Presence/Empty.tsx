import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
} from "@/components/ui/empty"
import type { LucideIcon } from "lucide-react"
export default function EmptyCustom({
  text,
  icon: Icon,
  ...props
}: {
  text?: string
  icon?: LucideIcon
  className?: string
}) {
  return (
    <div className={props.className}>
      <Empty className="">
        <EmptyHeader>
          <EmptyMedia variant="icon">{Icon && <Icon />}</EmptyMedia>
          <EmptyDescription>
            {text || "Aucune action déléguée pour le moment"}
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
