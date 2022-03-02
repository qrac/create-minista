import { Head } from "minista"

import dayjs from "dayjs"
import utc from "dayjs/plugin/utc.js"
import timezone from "dayjs/plugin/timezone.js"

import { Wrapper, Style, Header, Main, Nav, List } from "minista-sitemap"

import pjt from "../../project.json"

dayjs.extend(timezone)
dayjs.extend(utc)
dayjs.tz.setDefault("Asia/Tokyo")

const PageDevelop = () => {
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
      <Style
        innerMaxWidth="800px"
        defaultDark={true}
        defaultDarkStyle={inlineDefaultDarkStyle}
      />
      <Header projectName={pjt.name} date={now} buttonLink={"/dist.zip"} />
      <Main>
        <Nav title={pjt.sitemap.main.title}>
          <List items={pjt.sitemap.main.items} />
        </Nav>
      </Main>
    </Wrapper>
  )
}

const css = (props: TemplateStringsArray) => {
  return props
}

const inlineDefaultDarkStyle = css`
  .minista-sitemap {
    --theme-tx-1: #f7f6f4;
    --theme-tx-2: #c6c6c6;
    --theme-tx-3: #515151;
    --theme-bg-1: #282a37;
    --theme-bg-2: #34363f;
    --theme-bg-3: #262626;
    --theme-bg-4: #34363f;
    --theme-bd-1: #43475c;
    --theme-bd-2: #43475c;
    --theme-lk-1: #00ec78;
    --theme-lk-tx: #282a37;
  }
`.toString()

export default PageDevelop
