import React from 'react'
import JobCard from '../../components/JobCard'
import Section1 from '../../components/Section1'
import IndustryweOffer from '../../components/IndustryweOffer'

function Homepage() {
  return (
    <>
      <Section1 />
      <IndustryweOffer />
      <JobCard />
    </>
  )
}

export default Homepage