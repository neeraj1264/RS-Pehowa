import React from 'react'
import Timing from '../satsang/Timing'
import AddressSection from '../address/AddressSection'
import Satsang_home from './Satsang_home'
import Shabad_home from './Shabad_home'
import Sakhi_home from './Sakhi_home'
import About from '../about/About'

function Banner() {
  return (
    <>
   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" style={{marginTop: '3rem'}}>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/banner.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="/banner.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="/banner.jpeg" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
<Timing/>
<AddressSection/>
<Satsang_home/>
<Shabad_home/>
<Sakhi_home/>
<About/>
    </>
  )
}

export default Banner