import React, { useEffect, useState } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Component from '../../constants/Component';
import useFetch from './../../hook/useFetch';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';
import './movie.scss'

function Movies() {

  const [pageNumber, setPageNumber] = useState(1);
  const [category, setCategory] = useState(null);
  const [type, setType] = useState("popular")

  let pageList = new Array(10).fill().map((e, i) => i + 1);

  const pageNum = e => setPageNumber(e)


  async function getDataCategories() {
    let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${type}?api_key=cb9d54251bfb16d22a9165b924cf3c91&page=${pageNumber}`);
    setCategory(data.results)
  }



  const getData = async (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cb9d54251bfb16d22a9165b924cf3c91&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
      setCategory(data.results)
    } else {
      getDataCategories()
      console.log(category);
    }

  }
const changeType=(e)=>{
  setType(e.target.id); 
}
  useEffect(() => {
    getDataCategories("popular", 1).then(res => {
    })
    getData()
  }, [pageNumber,type])

  return (
    <>

      {

        <Row>
          <Col xl={2} className="sidebar mx-auto sidbar pt-3">
            <input type='text' onChange={getData} className='inputSearch  m-auto' placeholder='Search your movies...' />
            <ListGroup variant="secondary" className='mt-5 rounded-0 m-0 w-100'>
              <ListGroup.Item id='popular' onClick={changeType}>Popular</ListGroup.Item>
              <ListGroup.Item id='upcoming' onClick={changeType}>Up Coming</ListGroup.Item>
              <ListGroup.Item id='now_playing'onClick={changeType}>Now Playing</ListGroup.Item>
              <ListGroup.Item id='top_rated'onClick={changeType}>Top Rated</ListGroup.Item>
              {<ListGroup.Item id='latest'>latest Movie</ListGroup.Item>}
            </ListGroup>
          </Col>
          <Col xl={9} className="m-auto">

            <Container className=' text-center pt-3'>
              <div className='d-flex justify-content-center  m-auto '>
                <nav aria-label="Page navigation">
                  <ul className="pagination    ">
                    {
                      pageList?.map((e, i) => (
                        <li key={i} className={`page-item  `} aria-current="page"><a onClick={() => pageNum(e)} className="page-link" >{e}</a></li>
                      ))
                    }

                  </ul>
                </nav>
              </div>

              <Row>

                {
                  category?.map((movie, index) => {
                    return (
                      <Component.Cards size={2} type="movie" key={index} movie={movie} />
                    )
                  })
                } 
              </Row>
            </Container> 
          </Col>
        </Row>
      }
    </>
  )
}

export default Movies