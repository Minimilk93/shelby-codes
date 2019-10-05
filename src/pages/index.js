import React from "react"
import SEO from "../components/seo"
import Content from "../components/content"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="container mx-auto">
      <div className="py-24 px-2">
        <h1 className="text-5xl font-semibold">Hey! I'm Shelby.</h1>
        <p className="text-2xl opacity-50">A developer who loves JavaScript.</p>
      </div>
    </div>
    <Content />
  </>
)

export default IndexPage
