import { Head } from "minista"

import type { PageProps, FrontmatterProps } from "../../root"

import AppLayout from "../../components/app-layout"

export const frontmatter: FrontmatterProps = {
  title: "Test",
}

const PageTestIndex = (props: PageProps) => {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="/style.css" /> */}
        {/* <script defer src="/script.js"></script> */}
        {/* <body id="test" className="test" /> */}
      </Head>
      <AppLayout>
        <h1>{props.frontmatter.title}</h1>
      </AppLayout>
    </>
  )
}

export default PageTestIndex
