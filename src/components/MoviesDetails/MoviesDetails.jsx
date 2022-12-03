import React from 'react'
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Component from '../../constants/Component';
import useFetch from './../../hook/useFetch';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ReactTooltip from 'react-tooltip';
import icon from "../../constants/Icons";
function MoviesDetails() {
  let { id, type } = useParams();
  let { details, isLoading2 } = useFetch(type, id);
  let { production_companies,vote_average, overview, first_air_date, runtime, birthday, profile_path, backdrop_path, belongs_to_collection, name, biography, genres, poster_path, title } = details;
  console.log(details);
  return (
<>

        {
          isLoading2 ? <Component.Loading /> :
<div className='bg__image' style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_MASTER_PATH + backdrop_path})` }}>
      <div className='custom__bg' >

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

                <Col xl={9} className='position-relative'>
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
                  <div className='mt-4 d-flex justify-content-lg-start align-items-center gap-4'>
                    {
                      (vote_average / 10 * 100).toFixed(0) > 50 && (vote_average / 10 * 100).toFixed(0) < 80 &&
                      <CircularProgressbar styles={buildStyles({ trailColor: '#423d0f', pathColor: '#d2d531' })} value={(vote_average / 10 * 100).toFixed(0)} text={`${(vote_average / 10 * 100).toFixed(0)}%`} />
                    }
                    {
                      (vote_average / 10 * 100).toFixed(0) > 80 &&
                      <CircularProgressbar styles={buildStyles({ trailColor: '#204529', pathColor: '#21d07a' })} value={(vote_average / 10 * 100).toFixed(0)} text={`${(vote_average / 10 * 100).toFixed(0)}%`} />
                    }

                    {
                      (vote_average / 10 * 100).toFixed(0) < 50 &&
                      <CircularProgressbar styles={buildStyles({ trailColor: '#571435', pathColor: '#db2360' })} value={(vote_average / 10 * 100).toFixed(0)} text={`${(vote_average / 10 * 100).toFixed(0)}%`} />
                    }

                    <div className="bg__item1">
                      <a data-tip="Add List" >
                        <icon.list className='bg__item' fontSize={28} />
                      </a>
                      <ReactTooltip backgroundColor='#032541' place="bottom" type="dark" effect="float" />
                    </div>

                    <div className="bg__item1">
                      <a data-tip="Mark as favorite" >
                        <icon.favorite className='bg__item' fontSize={17} />
                      </a>
                      <ReactTooltip backgroundColor='#032541' place="bottom" type="dark" effect="float" />
                    </div>

                    <div className="bg__item1">
                      <a data-tip="Add to your watchlist" >
                        <icon.bookmark className='bg__item' fontSize={17} />
                      </a>
                      <ReactTooltip backgroundColor='#032541' place="bottom" type="dark" effect="float" />
                    </div>


                    <div className="bg__item1">
                      <a data-tip="Rate it!" >
                        <icon.star className='bg__item' fontSize={17} />
                      </a>
                      <ReactTooltip backgroundColor='#032541' place="bottom" type="dark" effect="float" />
                    </div>
                  </div>
                  <div className="overview">
                    <h2>Overview</h2>
                    <p>{overview}</p>
                  </div>

                  <div className="production_companies position-absolute ">
                    {
                      production_companies?.map((item,index)=>(
                        <img  key={index} src={process.env.REACT_APP_IMAGE_MASTER_PATH+item?.logo_path}  />
                      ))
                    }
                  </div>

                </Col>

              </Row>
            </Container>

      </div>
    </div>
        }

</>
  )
}

export default MoviesDetails 