import React from 'react'
import '../Movies.scss'
import Slider from "react-slick";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function SliderHeader({ dataActor, dataTvShow, dataMovies }) {

  console.log(dataMovies);
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
    ]
  };

  const settings2 = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    rtl: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
    ]
  };
  return (
    <>
      <h1 className='mt-3 fw-bolder'>Trending Movies</h1>
      <Slider {...settings}>
        {
          dataMovies?.map((item, index) => (
            <div key={index} className='text-center position-relative ' >
              <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='overflow-hidden px-3 mt-2 rounded-5 w-100' />
              {
                (item.vote_average / 10 * 100).toFixed(0) > 50 && (item.vote_average / 10 * 100).toFixed(0) < 80 &&
                <div className='circularProgressbar'>
                  <CircularProgressbar
                    styles={buildStyles({
                      trailColor: '#423d0f',
                      pathColor: '#d2d531',

                    })}
                    className='position-absolute vote_average'
                    value={(item?.vote_average / 10 * 100).toFixed(0)} text={`${(item?.vote_average / 10 * 100).toFixed(0)}%`} />
                </div>
              }

              {
                (item.vote_average / 10 * 100).toFixed(0) > 80 &&
                <div className='circularProgressbar'>

                  <CircularProgressbar
                    styles={buildStyles({
                      trailColor: '#204529',
                      pathColor: '#21d07a'
                    })}
                    value={(item.vote_average / 10 * 100).toFixed(0)} text={`${(item.vote_average / 10 * 100).toFixed(0)}%`} />
                </div>
              }

              {
                (item.vote_average / 10 * 100).toFixed(0) < 50 &&
                <div className='circularProgressbar'>

                  <CircularProgressbar
                    styles={buildStyles({
                      trailColor: '#571435',
                      pathColor: '#db2360'
                    })}
                    value={(item.vote_average / 10 * 100).toFixed(0)} text={`${(item.vote_average / 10 * 100).toFixed(0)}%`} />
                </div>
              }



            </div>
          ))
        }
      </Slider>


      <h1 className='mt-3 fw-bolder'>Trending Tv Show</h1>
      <Slider {...settings2}>
        {
          dataTvShow?.map((item, index) => (
            <div key={index} className='text-center position-relative' >
              <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='overflow-hidden px-3  mt-2 rounded-5 w-100' />
              
              {
                (item.vote_average / 10 * 100).toFixed(0) > 50 && (item.vote_average / 10 * 100).toFixed(0) < 80 &&
                <div className='circularProgressbar'>
                  <CircularProgressbar
                    styles={buildStyles({
                      trailColor: '#423d0f',
                      pathColor: '#d2d531',

                    })}
                    className='position-absolute vote_average'
                    value={(item?.vote_average / 10 * 100).toFixed(0)} text={`${(item?.vote_average / 10 * 100).toFixed(0)}%`} />
                </div>
              }

              {
                (item.vote_average / 10 * 100).toFixed(0) > 80 &&
                <div className='circularProgressbar'>

                  <CircularProgressbar
                    styles={buildStyles({
                      trailColor: '#204529',
                      pathColor: '#21d07a'
                    })}
                    value={(item.vote_average / 10 * 100).toFixed(0)} text={`${(item.vote_average / 10 * 100).toFixed(0)}%`} />
                </div>
              }

              {
                (item.vote_average / 10 * 100).toFixed(0) < 50 &&
                <div className='circularProgressbar'>

                  <CircularProgressbar
                    styles={buildStyles({
                      trailColor: '#571435',
                      pathColor: '#db2360'
                    })}
                    value={(item.vote_average / 10 * 100).toFixed(0)} text={`${(item.vote_average / 10 * 100).toFixed(0)}%`} />
                </div>
              }
            </div>
          ))
        }
      </Slider>
    </>
  )
}

export default SliderHeader
