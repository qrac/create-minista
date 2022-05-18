import type { MinistaLocation } from "minista"

import { Head } from "minista"

import "./root.css"
import pjt from "../project.json"
import AppLayout from "./components/app-layout"

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
  const siteTitle = pjt.name
  const title = frontmatter?.title
    ? `${frontmatter?.title} - ${siteTitle}`
    : siteTitle
  const favicon = "/assets/images/favicon.png"
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
      </Head>
      {frontmatter?.layout !== "none" ? (
        <AppLayout location={location}>{children}</AppLayout>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default Root
