import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import Operator from './CarouselButton'
import Slide from './CarouselSlide'
import './Carousel.scss'




function Carousel (props) {
  const [carouselItems, setCarouselItems] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  function looper (size) {
    setCurrentItem(current => {
      if (current >= size) {
        return 0
      }
      return current + 1
    })
  }

  useEffect(() => {
    let interval
    async function fetchData (url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCarouselItems(data)
        if (props.infinite === 'true' && data?.length > 1) {
          const size = data?.length - 1
          interval = setInterval(looper, 4000, size)
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchData(`http://localhost:3600/api/carousel?slides=${props.slides}`)

    return (() => { clearInterval(interval) })
  }, [props])


  const prev = () => {
    if (currentItem === 0) {
      setCurrentItem(carouselItems.length - 1)
    } else {
      setCurrentItem(currentItem - 1)
    }
  }

  const next = () => {
    if (currentItem === carouselItems?.length - 1) {
      setCurrentItem(0)
    } else {
      setCurrentItem(currentItem + 1)
    }
  }

  const getItem = () => carouselItems[currentItem]

  return (
    <div className='carousel-wrapper'>
      {<Operator size={carouselItems?.length} prev={prev} next={next} />}
      <CSSTransition
        classNames="carousel"
        timeout={300}
      >
        {
          <Slide
            title={getItem()?.title}
            img={getItem()?.image}
            subtitle={getItem()?.subTitle}
          />
        }

      </CSSTransition>
    </div>
  )
}



export default Carousel
