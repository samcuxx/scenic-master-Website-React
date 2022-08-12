import React from 'react'

const Services = () => {
  return (
    <div>
       <section class="home-section section-hero overlay slanted slanted-gray" id="home-section">

<div class="container">
  <div class="row align-items-center justify-content-center">
    <div class="col-md-8 text-center">
      <h1>Services</h1>
      <div class="mx-auto w-75">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur beatae perspiciatis voluptate cumque culpa.</p>
      </div>
    </div>
  </div>
</div>
  
{/* <!-- VIDEO --> */}
<div class="video-container">
  <video autoplay loop="true">
    <source type="video/mp4" src="./assets/videos/video.mp4"/>
  </video>
</div>

<a href="#next-section" class="smoothscroll scroll-button">
  <span class=" icon-keyboard_arrow_down"></span>
</a>

</section>

{/* <!-- SERVICES --> */}
<section class="site-section services-section bg-light block__62849" id="next-section">
<div class="container">
  <div class="row mb-5">
    <div class="col-12 text-center" data-aos="fade">
      <h3 class="section-title-sub text-primary">Our Services</h3>
      <h2 class="section-title mb-3">Services</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5">

      <a href="service-single.html" class="block__16443 text-center d-block">
        <span class="custom-icon mx-auto"><span class="icon-line-tools d-block"></span></span>
        <h3>Graphic Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facilis, pariatur harum labore aperiam assumenda.</p>
      </a>

    </div>
    <div class="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5">
      
      <a href="service-single.html" class="block__16443 text-center d-block">
        <span class="custom-icon mx-auto"><span class="icon-line-lightbulb d-block"></span></span>
        <h3>Marketing Strategy</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facilis, pariatur harum labore aperiam assumenda.</p>
      </a>            

    </div>
    <div class="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5">
      
      <a href="service-single.html" class="block__16443 text-center d-block">
        <span class="custom-icon mx-auto"><span class="icon-line-laptop d-block"></span></span>
        <h3>Web Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facilis, pariatur harum labore aperiam assumenda.</p>
      </a>            

    </div>
    <div class="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5">
      
      <a href="service-single.html" class="block__16443 text-center d-block">
        <span class="custom-icon mx-auto"><span class="icon-line-search d-block"></span></span>
        <h3>SEO</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facilis, pariatur harum labore aperiam assumenda.</p>
      </a>

    </div>
    <div class="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5">
      
      <a href="service-single.html" class="block__16443 text-center d-block">
        <span class="custom-icon mx-auto"><span class="icon-line-presentation d-block"></span></span>
        <h3>Market Leading </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facilis, pariatur harum labore aperiam assumenda.</p>
      </a>

    </div>
    <div class="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5">
      
      <a href="service-single.html" class="block__16443 text-center d-block">
        <span class="custom-icon mx-auto"><span class="icon-line-ribbon d-block"></span></span>
        <h3>Pixel Perfect Design</h3>
        <p class="d-sm-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facilis, pariatur harum labore aperiam assumenda.</p>
      </a>

    </div>
  </div>

  <div class="row">
    <div class="col-12 text-center">
      <a href="#" class="btn btn-primary btn-md">View All Services</a>
    </div>
  </div>
</div>
</section>

<section class="site-section">
<div class="container">
  <div class="row mb-5">
    <div class="col-12 text-center" data-aos="fade">
      <h3 class="section-title-sub text-primary">Testimonials</h3>
      <h2 class="section-title mb-3">Happy People Says</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-6">
      <div class="block__87154">
        <span class="quote"><img src="./assets/images/quote.png" alt="Image"/></span>
        <blockquote>
          <p>Ipsum harum assumenda in eum vel eveniet numquam cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit</p>
        </blockquote>
        <div class="block__91147 d-flex align-items-center">
          <figure class="mr-4"><img src="./assets/images/person_1.jpg" alt="Image" class="img-fluid"/></figure>
          <div>
            <h3>Elisabeth Smith</h3>
            <span class="position">Creative Director</span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6">
      <div class="block__87154">
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
</div>
</section>
    </div>
  )
}

export default Services
