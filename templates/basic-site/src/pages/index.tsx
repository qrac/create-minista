import type { FrontmatterProps, PageProps } from "../root"

import pjt from "../../project.json"
import SectionHero from "../components/section-hero"
import SectionBasic from "../components/section-basic"
import BlockFeatureGrid from "../components/block-feature-grid"
import BlockFeatureCard from "../components/block-feature-card"

export const frontmatter: FrontmatterProps = {
  title: "Home",
}

const PageHome = (props: PageProps) => {
  return (
    <>
      <SectionHero id="hero" />
      <SectionBasic id="feature" heading="Feature">
        <BlockFeatureGrid>
          {pjt.site.features.map((item, index) => (
            <BlockFeatureCard title={item.title} text={item.text} key={index} />
          ))}
        </BlockFeatureGrid>
      </SectionBasic>
    </>
  )
}

export default PageHome
