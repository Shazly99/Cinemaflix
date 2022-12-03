import React from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Component from '../../constants/Component';
import useFetch from './../../hook/useFetch';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function MoviesDetails() {
  let { id, type } = useParams();
  let { details, isLoading2 } = useFetch(type, id);
  let { vote_average, overview, first_air_date, runtime, birthday, profile_path, backdrop_path, belongs_to_collection, name, biography, genres, poster_path, title } = details;
  console.log(details);
  return (
    <div className='bg__image' style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_MASTER_PATH + backdrop_path})` }}>
      <div className='custom__bg' >

        {
          isLoading2 ? <Component.Loading /> :

            <Container className='pt-4' >
              <Row>
                <Col xl={3}>
                  {profile_path &&
                    <div className='shadow'>
                      <img src={process.env.REACT_APP_IMAGE_MASTER_PATH + profile_path} className='w-100 rounded-3 shadow-lg' />
                      v
                    </div>
                  }
                  {poster_path &&
                    <div className='shadow'>
                      <img src={process.env.REACT_APP_IMAGE_MASTER_PATH + poster_path} className='w-100 rounded-top shadow-lg' />
                      {title && <span className='details__bg__name'>{title}</span>}
                      {name && <span className='details__bg__name'>{name}</span>}
                    </div>
                  }
                </Col>

                <Col xl={9}>
                  {title && <h1 className='details__name'>{title}</h1>}
                  {name && <h1 className='details__name'>{name}</h1>}
                  <div className="facts d-flex justify-align-content-start align-items-center gap-3 mt-3">
                    <span className="certification">
                      R
                    </span>
                    <span className="release">
                      {first_air_date} (US)
                    </span>
                    <span className="genres">
                      {genres.map((genres, index) => (
                        <span key={index}>{genres.name} , </span>
                      ))}
                    </span>
                    {runtime &&
                      <span className="runtime">
                        {String(runtime)[0]}h {String(runtime).split('').splice(1, String(runtime).split('').length).join('')}m
                      </span>}
                  </div>
                  <div className="overview">
                    <h2>Overview</h2>
                    <p>{overview}</p>
                  </div>
                  {
                    (vote_average / 10 * 100).toFixed(0) > 50 && (vote_average / 10 * 100).toFixed(0) < 80 &&
                    <CircularProgressbar
                      styles={buildStyles({
                        trailColor: '#423d0f',
                        pathColor: '#d2d531'
                      })}
                      value={(vote_average / 10 * 100).toFixed(0)} text={`${(vote_average / 10 * 100).toFixed(0)}%`} />
                  }
                  {
                    (vote_average / 10 * 100).toFixed(0) > 80 &&
                    <CircularProgressbar
                      styles={buildStyles({
                        trailColor: '#204529',
                        pathColor: '#21d07a'
                      })}
                      value={(vote_average / 10 * 100).toFixed(0)} text={`${(vote_average / 10 * 100).toFixed(0)}%`} />
                  }

                  {
                    (vote_average / 10 * 100).toFixed(0) < 50 &&
                    <CircularProgressbar
                      styles={buildStyles({
                        trailColor: '#571435',
                        pathColor: '#db2360'
                      })}
                      value={(vote_average / 10 * 100).toFixed(0)} text={`${(vote_average / 10 * 100).toFixed(0)}%`} />
                  }
                </Col>
              </Row>
            </Container>

        }
      </div>
    </div>
  )
}

export default MoviesDetails 