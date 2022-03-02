import AppHeader from "./app-header"
import "./app-layout.css"

type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="app-layout">
      <AppHeader />
      {children}
    </div>
  )
}

export default AppLayout
