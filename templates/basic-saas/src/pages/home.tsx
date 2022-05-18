import type { PageProps, FrontmatterProps } from "../root"

export const frontmatter: FrontmatterProps = {
  title: "Home",
}

const PageHome = (props: PageProps) => {
  return (
    <>
      <h1>{props.frontmatter.title}</h1>
    </>
  )
}

export default PageHome
