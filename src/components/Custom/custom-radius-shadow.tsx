import { Card, CardHeader, CardTitle } from "../ui/card"

export default function CustomRadiusShadow() {
  return (
    <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(260px,0.8fr)_minmax(0,2fr)]">
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Coin de fenêtre</CardTitle>
          </CardHeader>
        </Card>
      </section>
    </div>
  )
}
