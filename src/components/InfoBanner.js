import "./InfoBanner.css"
import React from "react"
import SearchIcon from "../icons/search.svg"
import IconCard from "./IconCard"

export default function InfoBanner() {
  return (
    <section className="wrapper">
      <IconCard icon={SearchIcon} headerText="Simple Search" descriptionText="Easily search and book flight from anywhere in the world" />
      <IconCard icon={SearchIcon} headerText="Simple Search" descriptionText="Easily search and book flight from anywhere in the world" />
      <IconCard icon={SearchIcon} headerText="Simple Search" descriptionText="Easily search and book flight from anywhere in the world" />
      {/* add alt text */}
    </section>
  )
}