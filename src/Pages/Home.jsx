import React from 'react'
import Hero from '../Components/Hero'
import Intro from '../Components/Intro'
import Objectives from '../Components/Objectives'
import Guestspeaker from '../Components/Guestspeaker'
import UpcomingEvent from '../Components/UpcomingEvent'
import PastEvents from '../Components/PastEvents'
import ThanksGallery from '../Components/ThanksGallery'
export default function Home() {
  return (
    <>
    <Hero/>
    <Intro/>
    <Objectives/>
    <UpcomingEvent/>
    <Guestspeaker/>
    <PastEvents/>
    <ThanksGallery/>
    </>
  )
}
