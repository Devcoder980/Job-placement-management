import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import JobSearch from './JobSearch'
import JobList from './JobList'
import axios from 'axios';
const Jobs = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/user/jobs');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(data);
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;

  }
  return (
    <main >

      <JobSearch />

      {data.map(item => (
        <JobList
          title={item.title}
          company={item.title}
          location={item.location}
          sector={item.sector}
          minSalary={item.minSalary}
          maxSalary={item.maxSalary}
          description={item.description}
          requirements={item.description}
          lastDate={item.lastDate}
          createdDate={item.createdDate}
          jobType={item.jobType}
        />
      ))}



      <Footer />
    </main>
  )
}

export default Jobs