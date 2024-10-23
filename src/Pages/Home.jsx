import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import Intro from '../Components/Intro'
import Objectives from '../Components/Objectives'
import Guestspeaker from '../Components/Guestspeaker'
import UpcomingEvent from '../Components/UpcomingEvent'
import PastEvents from '../Components/PastEvents'
import ThanksGallery from '../Components/ThanksGallery'
import Loader from '../Components/Loader';
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };
    window.addEventListener('load', handlePageLoad);
    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  if (loading) {
    return <Loader />; 
  }
  return (
    <>
    <Hero/>
    <Intro/>
    <Objectives/>
    <Guestspeaker/>
    <UpcomingEvent/>
    <PastEvents/>
    <ThanksGallery/>
    </>
  )
}
