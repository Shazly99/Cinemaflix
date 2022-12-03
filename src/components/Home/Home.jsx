import React, { useEffect, useState } from 'react'
import './Movies.scss'
import Component from "../../constants/Component.js";
import useFetch from './../../hook/useFetch';
import { Container, Row, Col } from 'react-bootstrap';
function Home() {


  const [dataMovies, setDataMovies] = useState(null);
  const [dataTvShow, setDataTvShow] = useState(null);
  const [dataActor, setDataActor] = useState(null);

  let dataTv = useFetch('tv');
  let dataMovie = useFetch('movie');
  let dataPerson = useFetch('person');
  let { isLoading } = useFetch();
  
  useEffect(() => {
    setDataMovies(dataMovie.data);
    setDataTvShow(dataTv.data);
    setDataActor(dataPerson.data)
    
  }, [dataMovie, dataTvShow, dataActor])

  return (

    <>
      {
        isLoading? <Component.Loading /> :
        <div  className='container__home'>
          <Component.Header/>
            <Component.Slider dataMovies={dataMovies} dataTvShow={dataTvShow} dataActor={dataActor} />
            <Row className='mt-5' >
              <Col xl={4} className=" d-flex justify-content-center align-items-center">
                <Component.HeaderCard type={'Movies'} />
              </Col>
              {
                dataMovies?.slice(0, 10).map((movie, index) => {
                  return (
                    <Component.Cards size={2} key={index} movie={movie} />
                  )
                })
              }
            </Row>

            <Row >
              <Col xl={4} className=" d-flex justify-content-center align-items-center">
                <Component.HeaderCard type={'Tv Show'} />
              </Col>
              {
                dataTvShow?.slice(0, 10).map((tvShow, index) => {
                  return (
                    <Component.CardTv key={index} tvShow={tvShow} />
                  )
                })
              }
            </Row>

            <Row >
              <Col xl={4} className=" d-flex justify-content-center align-items-center">
                <Component.HeaderCard type={'Actor'} />
              </Col>
              {
                dataActor?.slice(0, 10).map((actor, index) => {
                  return (
                    <Component.CardActors key={index} actor={actor} />
                  )
                })
              }
            </Row>


          </div>
      }

    </>

  )
}

export default Home