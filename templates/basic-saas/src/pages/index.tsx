import type { FrontmatterProps } from "../root"

import { Head } from "minista"
import { Wrapper, Style, Header, Main, Nav, List } from "minista-sitemap"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc.js"
import timezone from "dayjs/plugin/timezone.js"

import pkg from "../../package.json"
import previews from "../assets/data/previews.json"

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
        <title>{pkg.name}</title>
      </Head>
      <Style />
      <Header projectName={pkg.name} date={now} buttonLink={"/dist.zip"} />
      <Main>
        <Nav title={previews.main.title}>
          <List items={previews.main.items} />
        </Nav>
      </Main>
    </Wrapper>
  )
}

export default PageIndex
