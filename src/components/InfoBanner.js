import "./InfoBanner.css"
import SearchIcon from "../icons/search.svg"
import IconCard from "./IconCard"
import AirplaneIcon from '../icons/choice.svg'
import SpeechIcon from '../icons/service.svg'

export default function InfoBanner() {
  return (
    <section className="wrapper">
      <IconCard icon={SearchIcon} iconAltText="magnifying glass" headerText="Simple Search" descriptionText="Easily search and book flight from anywhere in the world" />
      <IconCard icon={AirplaneIcon} iconAltText="aiplane" headerText="Unlimited Choice" descriptionText="Find the flight you were looking for and pay on your terms" />
      <IconCard icon={SpeechIcon} iconAltText="speech bubble" headerText="Expert customer service" descriptionText="Dedicated customer support team once you have booked" />
    </section>
  )
}