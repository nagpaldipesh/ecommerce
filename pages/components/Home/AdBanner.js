import React from 'react'

export default function AdBanner() {
  return (
    <div className="row category-wrapper electronics-cosmetics appear-animateNOT mb-7">
        <div className="col-md-6 mb-4">
            <div className="banner banner-fixed br-sm">
            <figure>
                <img
                src="assets/images/demos/demo2/categories/1-1.jpg"
                alt="Category Banner"
                width={640}
                height={200}
                style={{ backgroundColor: "#25282D" }}
                />
            </figure>
            <div className="banner-content y-50">
                <h3 className="banner-title text-white ls-25 mb-0">Electronics</h3>
                <div className="banner-price-info text-white font-weight-bold text-uppercase mb-1">
                Starting At
                <strong className="text-secondary">$125.00</strong>
                </div>
                <hr className="banner-divider bg-white" />
                <a
                href="shop-banner-sidebar.html"
                className="btn btn-white btn-link btn-underline btn-icon-right"
                >
                Shop Now
                <i className="w-icon-long-arrow-right" />
                </a>
            </div>
            </div>
        </div>
        <div className="col-md-6 mb-4">
            <div className="banner banner-fixed br-sm">
            <figure>
                <img
                src="assets/images/demos/demo2/categories/1-2.jpg"
                alt="Category Banner"
                width={640}
                height={200}
                style={{ backgroundColor: "#eeedec" }}
                />
            </figure>
            <div className="banner-content y-50">
                <h3 className="banner-title ls-25 text-capitalize mb-0">
                Cosmetics Sets
                </h3>
                <div className="banner-price-info font-weight-bold text-uppercase mb-1">
                Sale Up To
                <strong className="text-secondary">30% Off</strong>
                </div>
                <hr className="banner-divider bg-dark" />
                <a
                href="shop-banner-sidebar.html"
                className="btn btn-dark btn-link btn-underline btn-icon-right"
                >
                Shop Now
                <i className="w-icon-long-arrow-right" />
                </a>
            </div>
            </div>
        </div>
        </div>

  )
}
