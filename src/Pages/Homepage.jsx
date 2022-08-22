import React from 'react'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'

import "../Styles/Home.css"
const Homepage = () => {
  return (
    <div>
      <Navigation />

      <div className="container">


        <div className="paragraph">
          <h2>Our Motto</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil obcaecati
            similique aperiam, provident quis commodi repudiandae! Earum minus voluptate, ex voluptas
            veniam possimus autem aspernatur molestiae repellendus ad id! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Provident quas dignissimos nihil laboriosam repellendus minima
            maiores nostrum similique nemo aperiam mollitia voluptatum debitis, vel qui, accusamus,
            fugiat minus tempora id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            et tempore nemo adipisci. Nobis minima molestias illo? Officiis deserunt alias aliquam quibusdam!
            Fuga, eius dicta? Doloribus inventore alias nihil reprehenderit? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sit modi, soluta natus iure a optio ipsum libero sequi earum omnis
            eos nostrum fugiat impedit nobis, at veritatis in exercitationem velit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ipsam sequi doloremque atque non fugiat soluta. Optio fuga rem
            aliquam, voluptatibus nulla iure praesentium esse reiciendis minima recusandae iste labore aperiam? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Voluptatibus inventore aperiam perferendis mollitia dolores
            neque rerum odio libero ipsum, excepturi delectus voluptatem quidem nam itaque culpa reprehenderit.
            Asperiores, expedita animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum dolor ut
            vitae officia, laborum nesciunt vero cumque minus voluptatem quasi, placeat facilis, soluta quibusdam
            deleniti illo necessitatibus ea dolorem?</p>
        </div>


        <img className="image" src="https://preview.free3d.com/img/2017/02/2397187612012971585/sb8idgq3-900.jpg" alt="truck" />

      </div>

      <h2>POWERED BY THE BEST</h2>
      <div className="container">

        <img className="image" src="https://www.cummins.com/sites/default/files/styles/product_display/public/images/engines/sku/X15-Stg-V-Stg-V00000-351/X15_StageV.png?itok=_tWq41Z4" alt="engine" />

        <p>Our vehicles are powered by the beasts of the industry with engines ranging from 500 hp to a monsterous 750hp.</p>
      </div>

      <h2>ALL MAJOR TYPES</h2>
      <div className="truck-type-container">
        <div className="col">
          <div className="row">
            <h3>AMERICAN</h3>
            <img className="truck-type-image" src="https://img.favcars.com/freightliner/century-class/freightliner_century-class_1995_wallpapers_5.jpg" alt="American" />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <h3>EUROPEAN</h3>
            <img className="truck-type-image" src="https://wallpapercave.com/wp/wp8814591.jpg" alt="Euro" />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <h3>JAPANESE</h3>
            <img className="truck-type-image" src="https://pbs.twimg.com/media/CauTOguUEAE1yWg.jpg:large" alt="Japan" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Homepage