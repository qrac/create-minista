import { Helmet } from "react-helmet"
import { render } from "minista"

import { AppLayout } from "../components/app-layout"

const PageHome = () => {
  return (
    <AppLayout>
      <Helmet>
        <title>Home</title>
        <link rel="icon" href="/favicon.png" />
      </Helmet>
      <h1>Home</h1>
    </AppLayout>
  )
}

export default render(<PageHome />)
