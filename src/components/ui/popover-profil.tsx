import { LogOut, Moon, Settings, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Button } from "./button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "./popover"
import { Separator } from "./separator"
import { Switch } from "./switch"

export default function PopoverProfil() {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="flex cursor-pointer items-center"
          >
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="grayscale"
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </Button>
        }
      />
      <PopoverContent align="end" className="mt-2 min-w-40 py-2.5">
        <PopoverHeader className="px-2.5">
          <div className="flex w-full items-center gap-4">
            <IconAvatar />
            <div className="flex flex-col">
              <h4>John Doe</h4>
              <p className="text-sm text-muted-foreground">3t9K7@example.com</p>
            </div>
          </div>
        </PopoverHeader>
        <Separator orientation="horizontal" className="" />
        <div className="flex flex-col gap-2 px-2.5">
          <Button
            className="flex w-full items-center justify-start"
            variant="ghost"
          >
            <div className="flex items-center gap-4">
              <User className="size-4" />
              <span>Profile</span>
            </div>
          </Button>
          <Button
            className="flex w-full items-center justify-start"
            variant="ghost"
          >
            <div className="flex items-center gap-4">
              <Settings className="size-4" />
              <span>Paramètre</span>
            </div>
          </Button>
          <Button
            className="flex w-full items-center justify-between"
            variant="ghost"
          >
            <div className="flex items-center gap-4">
              <Moon className="size-4" />
              <span>Mode sombre</span>
            </div>
            <Switch />
          </Button>
        </div>
        <Separator orientation="horizontal" className="" />
        <div className="px-2.5">
          <Button
            className="flex w-full items-center justify-start"
            variant="destructive"
          >
            <div className="flex items-center gap-4">
              <LogOut className="size-4" />
              <span>Se déconnecter</span>
            </div>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function IconAvatar() {
  return (
    <Avatar>
      <AvatarImage
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>AV</AvatarFallback>
    </Avatar>
  )
}
