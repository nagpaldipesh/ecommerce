import React from 'react';

export default function App() {
  return (
      <div className="intro-section">
        <div
          className="swiper-container swiper-theme nav-inner pg-inner animation-slider pg-xxl-hide pg-show nav-xxl-show nav-hide"
          data-swiper-options="{
                    'slidesPerView': 1,
                    'autoplay': {
                        'delay': 4000,
                        'disableOnInteraction': false
                    }
                }"
        >
          <div className="swiper-wrapper row gutter-no cols-1">
            <div
              className="swiper-slide banner banner-fixed intro-slide intro-slide1"
              style={{
                backgroundImage: "url(assets/images/demos/demo2/slides/slide-1.jpg)",
                backgroundColor: "#f1f0f0"
              }}
            >
              <div className="container">
                <figure
                  className="slide-image floating-item slide-animateNOT"
                  data-animation-options="{
                                    'name': 'fadeInDownShorter', 'duration': '1s'
                                }"
                  data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
                  data-child-depth="0.2"
                >
                  <img
                    src="assets/images/demos/demo2/slides/ski.png"
                    alt="Ski"
                    width={729}
                    height={570}
                  />
                </figure>
                <div className="banner-content text-right y-50 ml-auto">
                  <h5
                    className="banner-subtitle text-uppercase font-weight-bold mb-2 slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s'
                                    }"
                  >
                    Deals And Promotions
                  </h5>
                  <h3
                    className="banner-title ls-25 mb-6 slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s'
                                    }"
                  >
                    Fashion <span className="text-primary">Skiwears</span> for the
                    ardent Sports devotees
                  </h3>
                  <a
                    href="shop-banner-sidebar.html"
                    className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s'
                                    }"
                  >
                    Shop Now
                    <i className="w-icon-long-arrow-right" />
                  </a>
                </div>
                {/* End of .banner-content */}
              </div>
              {/* End of .container */}
            </div>
            {/* End of .intro-slide1 */}
            <div
              className="swiper-slide banner banner-fixed intro-slide intro-slide2"
              style={{
                backgroundImage: "url(assets/images/demos/demo2/slides/slide-2.jpg)",
                backgroundColor: "#d9ddd9"
              }}
            >
              <div className="container">
                <figure
                  className="slide-image floating-item slide-animateNOT"
                  data-animation-options="{
                                    'name': 'fadeInUpShorter', 'duration': '1s'
                                }"
                  data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
                  data-child-depth="0.2"
                >
                  <img
                    src="assets/images/demos/demo2/slides/woman.png"
                    alt="Ski"
                    width={865}
                    height={732}
                  />
                </figure>
                <div className="banner-content y-50">
                  <h5
                    className="banner-subtitle text-uppercase font-weight-bold mb-2 slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.5s'
                                    }"
                  >
                    News And Inspiration
                  </h5>
                  <h3
                    className="banner-title ls-25 mb-2 text-uppercase lh-1 slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.7s'
                                    }"
                  >
                    Natural Sound
                  </h3>
                  <div
                    className="banner-price-info font-weight-bold text-dark ls-25 slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '.9s'
                                    }"
                  >
                    Sale up to
                    <span className="text-primary font-weight-bolder text-uppercase ls-normal">
                      30% Off
                    </span>
                  </div>
                  <p
                    className="font-weight-normal text-default ls-25 slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '1.1s'
                                    }"
                  >
                    Free returns extended to 30 days after delivery
                  </p>
                  <a
                    href="shop-banner-sidebar.html"
                    className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s', 'delay': '1.3s'
                                    }"
                  >
                    Shop Now
                    <i className="w-icon-long-arrow-right" />
                  </a>
                </div>
                {/* End of .banner-content */}
              </div>
              {/* End of .container */}
            </div>
            {/* End of .intro-slide2 */}
            <div
              className="swiper-slide banner banner-fixed intro-slide intro-slide3"
              style={{
                backgroundImage: "url(assets/images/demos/demo2/slides/slide-3.jpg)",
                backgroundColor: "#d0cfcb"
              }}
            >
              <div className="container">
                <figure
                  className="slide-image floating-item slide-animateNOT"
                  data-animation-options="{
                                    'name': 'fadeInRightShorter', 'duration': '1s'
                                }"
                  data-options="{'relativeInput':true,'clipRelativeInput':true,'invertX':true,'invertY':true}"
                  data-child-depth="0.2"
                >
                  <img
                    src="assets/images/demos/demo2/slides/man.png"
                    alt="Ski"
                    width={527}
                    height={481}
                  />
                </figure>
                <div className="banner-content y-50">
                  <h5
                    className="banner-subtitle text-uppercase font-weight-bold slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s'
                                    }"
                  >
                    Top Monthly Seller
                  </h5>
                  <h4
                    className="banner-title ls-25 slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s'
                                    }"
                  >
                    Sumsung 52 Inches Full HD{" "}
                    <span className="text-primary">Smart LED</span> TV
                  </h4>
                  <p
                    className="font-weight-normal text-dark slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s'
                                    }"
                  >
                    Only until the end of this week.
                  </p>
                  <a
                    href="shop-banner-sidebar.html"
                    className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animateNOT"
                    data-animation-options="{
                                        'name': 'fadeInRightShorter', 'duration': '1s'
                                    }"
                  >
                    Shop Now
                    <i className="w-icon-long-arrow-right" />
                  </a>
                </div>
                {/* End of .banner-content */}
              </div>
              {/* End of .container */}
            </div>
            {/* End of .intro-slide3 */}
          </div>
          <div className="swiper-pagination" />
          <button className="swiper-button-next" />
          <button className="swiper-button-prev" />
        </div>
      </div>
  );
}
