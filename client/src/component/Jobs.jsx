import React from 'react'
import Footer from './Footer'
import JobSearch from './JobSearch'
import JobList from './JobList'

const Jobs = () => {
  return (
    <main >
      <JobSearch/>
      <JobList/>
      <JobList/>
      <JobList/>
      <JobList/>
      <Footer/>
    </main>
  )
}

export default Jobs