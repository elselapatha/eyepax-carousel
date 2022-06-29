import Title from './CarouselSlideTitle'
import Subtitle from './CarouselSlideSubtitle'
import './CarouselSlide.scss'

function Slide (props) {
    return <div className='slide'>
        <img src={props.img} alt={props.title} className="slide-image" />
        <div className='slide-bottom'>
            <Title title={props.title} />
            {props.subtitle && <Subtitle subtitle={props.subtitle} />}
        </div>
    </div>
}

export default Slide