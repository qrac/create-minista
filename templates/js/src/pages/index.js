import { Helmet } from "react-helmet"
import { render } from "minista"

const PageHome = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home</h1>
    </>
  )
}

export default render(<PageHome />)
