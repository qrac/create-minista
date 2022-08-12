import type { MinistaLocation } from "minista"

import { Head } from "minista"

import pkg from "../package.json"

export type FrontmatterProps = {
  title?: string
  layout?: string
  draft?: boolean
}

type RootProps = {
  location: MinistaLocation
  frontmatter?: FrontmatterProps
  children: React.ReactNode
}

export type PageProps = {
  location: MinistaLocation
  frontmatter?: FrontmatterProps
}

const Root = ({ location, frontmatter, children }: RootProps) => {
  const siteTitle = pkg.name
  const title = frontmatter?.title
    ? `${frontmatter?.title} - ${siteTitle}`
    : siteTitle
  const favicon = "/favicon.png"
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
      </Head>
      {children}
    </>
  )
}

export default Root
