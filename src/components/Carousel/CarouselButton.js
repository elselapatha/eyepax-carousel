import './CarouselButton.scss'

function Controller (props) {
    if (props.size > 1) {
        return (
            <div className='control-panel'>
                <button onClick={props.prev} className='prev'>
                    <span className='material-icons'>chevron_left</span>
                </button>
                <button onClick={props.next} className='next'>
                    <span className='material-icons'>chevron_right</span>
                </button>
            </div>
        )
    }
}

export default Controller
