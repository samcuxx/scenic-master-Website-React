import React from 'react'

const PortfolioSingle = () => {
  return (
    <div> <section class="home-section section-hero image-bg overlay-2 slanted" style={{backgroundImage: 'url("./assets/images/sq_img_2.jpg")'}} id="home-section">

    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-8 text-center">
          <h1>Creative Website Design</h1>
          <div class="mx-auto w-75">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse pariatur voluptatum rerum voluptatem.</p>
          </div>
        </div>
      </div>
    </div>
      
    
    <a href="#next-section" class="smoothscroll scroll-button">
      <span class=" icon-keyboard_arrow_down"></span>
    </a>

  </section>

  <section class="site-section portfolio-single" id="next-section">

    <div class="container">
      <div class="row mb-5">
        <div class="col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptatem? Consequatur soluta earum maxime voluptas labore nemo architecto doloribus dolor tenetur explicabo, quam unde eligendi, dignissimos placeat veniam, reiciendis debitis?</p>
        </div>
      </div>
      <div class="row mb-5">
          <div class="col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <strong class="d-block text-black">Client</strong>
            Google, Inc.
          </div>
          <div class="col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <strong class="d-block text-black">Role</strong>
            Design, Front-End and Back-End (WordPress)
          </div>
          <div class="col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <strong class="d-block text-black">Year Started</strong>
            2019
          </div>
          <div class="col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <strong class="d-block text-black">Website URL</strong>
            <a href="#" class="spepcial_link">Visit Website</a>
          </div>
        </div>
      <div class="row mb-5 mt-5">

        <div class="col-lg-6">
          <figure>
            <a href="./assets/images/sq_img_6.jpg" data-fancybox="gallery"><img src="./assets/images/sq_img_6.jpg" alt="Image" class="img-fluid"/></a>
          </figure>
          <figure>
            <a href="./assets/images/sq_img_2.jpg" data-fancybox="gallery"><img src="./assets/images/sq_img_2.jpg" alt="Image" class="img-fluid"/></a>
          </figure>
          <figure class="mb-0">
            <a href="./assets/images/sq_img_5.jpg" data-fancybox="gallery"><img src="./assets/images/sq_img_5.jpg" alt="Image" class="img-fluid"/></a>
          </figure>
        </div>
        <div class="col-lg-5 ml-auto h-100 jm-sticky-top">
          <div class="mb-5">
            <h3 class="mb-4 h4">Creative Website Design</h3>
            
            <p class="mb-0">Nostrum iure atque enim quisquam minima distinctio omnis consequatur aliquam suscipit quidem esse aspernatur Libero excepturi animi repellendus porro impedit</p>
          </div>

          <div class="block__87154 mb-0">
              <span class="quote"><img src="./assets/images/quote.png" alt="Image"/></span>
              <blockquote>
                <p>Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit</p>
              </blockquote>
              <div class="block__91147 d-flex align-items-center">
                <figure class="mr-4"><img src="./assets/images/person_2.jpg" alt="Image" class="img-fluid"/></figure>
                <div>
                  <h3>Chris Peter</h3>
                  <span class="position">Web Designer</span>
                </div>
              </div>
            </div>

        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 order-1 order-lg-2">
          <figure class="mb-0">
            <a href="./assets/images/sq_img_1.jpg" data-fancybox="gallery"><img src="./assets/images/sq_img_1.jpg" alt="Image" class="img-fluid"/></a>
          </figure>
        </div>
        <div class="col-lg-5 mr-auto h-100 jm-sticky-top  order-2 order-lg-1">
          
          <h3 class="mb-4 h4">Creative Website Design</h3>
          <p class="mb-0">Nostrum iure atque enim quisquam minima distinctio omnis consequatur aliquam suscipit quidem esse aspernatur! Libero excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum perspiciatis quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>

          <ul class="ul-check success mt-5 list-unstyled mb-0">
            <li>Nostrum iure atque enim quisquam</li>
            <li>Consequatur aliquam suscipit</li>
            <li>dignissimos maxime utcum</li>
          </ul>
          
        </div>
      </div>

      
    </div>
  </section>
  <section class=" py-3 site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-center">
          <a href="#" class="py-3 rounded border d-block">Previous Project</a>
        </div>
        <div class="col-md-4 text-center">
          <a href="#" class="py-3 rounded border d-block">All Projects</a>
        </div>
        <div class="col-md-4 text-center">
          <a href="#" class="py-3 rounded border d-block">Next Project</a>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default PortfolioSingle