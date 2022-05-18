import type { FrontmatterProps } from "../root"

import { Head } from "minista"
import { Wrapper, Style, Header, Main, Nav, List } from "minista-sitemap"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc.js"
import timezone from "dayjs/plugin/timezone.js"

import pjt from "../../project.json"

export const frontmatter: FrontmatterProps = {
  layout: "none",
}

dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.tz.setDefault("Asia/Tokyo")

const PageIndex = () => {
  const now = dayjs().tz().format("YYYY.MM.DD - HH:mm")
  return (
    <Wrapper>
      <Head
        htmlAttributes={{ lang: "ja" }}
        bodyAttributes={{
          class: "minista-sitemap",
        }}
      >
        <title>{pjt.name}</title>
      </Head>
      <Style />
      <Header projectName={pjt.name} date={now} buttonLink={"/dist.zip"} />
      <Main>
        <Nav title={pjt.sitemap.main.title}>
          <List items={pjt.sitemap.main.items} />
        </Nav>
      </Main>
    </Wrapper>
  )
}

export default PageIndex
