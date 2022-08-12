import type { MinistaLocation } from "minista"

import "./app-layout.css"

type AppLayoutProps = {
  location?: MinistaLocation
  children: React.ReactNode
}

const AppLayout = ({ location, children }: AppLayoutProps) => {
  return <>{children}</>
}

export default AppLayout
