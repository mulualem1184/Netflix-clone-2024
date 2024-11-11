import React from 'react'
import './Rowlist.css'
import Row from '../Row/Row'
import requests from '../../../utilities/requests'

export default function Rowlist() {
  return (
    <div>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      {/* <Row title='TV Shows' fetchUrl={requests.fetchTvshow} /> */}
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      
      
      
    
    </div>
  )
}
