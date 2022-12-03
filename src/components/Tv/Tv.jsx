import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import Component from '../../constants/Component';
import { tvNewContext } from '../../Context/TvContext';


function Tv() {
  const { categorys, getDataCategories ,getData} = useContext(tvNewContext);
  const [num, setNum] = useState(1)
  const [type, setType] = useState(null)

  let pageNamber = new Array(10).fill().map((e, i) => i + 1)
  const getPageNumber = e => setNum(e.target.innerText);
  const changeType=e=>setType(e.target.id);


  useEffect(() => {
    getDataCategories(type, num) 
  }, [type,num])
  return (
    <>
      <Row className='tv_all '>
        <Col xl={2} className="left_Tv p-4">
        <input type='text' onChange={getData} className='inputSearch  m-auto' placeholder='Search your movies...' />
            <ListGroup variant="secondary" className='mt-5 rounded-0 m-0 w-100'>
              <ListGroup.Item id='popular' onClick={changeType}>Popular</ListGroup.Item>
              <ListGroup.Item id='airing_today' onClick={changeType}>airing_today</ListGroup.Item>
              <ListGroup.Item id='on_the_air'onClick={changeType}>on_the_air</ListGroup.Item>
              <ListGroup.Item id='top_rated'onClick={changeType}>Top Rated</ListGroup.Item>
              <ListGroup.Item id='popular'onClick={changeType}>Last</ListGroup.Item>
              </ListGroup>
        </Col>
        <Col xl={9} className="pt-3">
          <Row>
            <nav aria-label="Page navigation">
              <ul class="pagination    ">
                {
                  pageNamber?.map((page, index) => (
                    <li key={index} class="page-item"><a class="page-link" href="#" onClick={getPageNumber}>{page}</a></li>
                  ))
                }
              </ul>
            </nav>
            {
              categorys?.map((tvShow, index) => (
                <Component.CardTv tvShow={tvShow} />
              ))
            }
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Tv