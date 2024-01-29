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
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="\banner.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="\banner.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="\banner.jpeg"className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
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