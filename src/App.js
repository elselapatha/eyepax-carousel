import Carousel from './components/Carousel/Carousel'
import './App.scss'

function App () {
  return (
    <div className='App'>
      <div className='section-title' >4 Slides with infinite</div>
      <Carousel slides={4} infinite="true" />
      <div className='section-title' >10 Slides without infinite</div>
      <Carousel slides={10} infinite="false" />
    </div>
  )
}

export default App
