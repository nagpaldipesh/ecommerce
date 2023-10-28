import React from 'react'
import ProductCard from './ProductCard'

export default function DealOfTheDay() {
  return (
    <>
        <div className="title-link-wrapper mb-3 appear-animateNOT">
            <h2 className="title title-deals mb-1">Deals Of The Day</h2>
            <div className="product-countdown-container font-size-sm text-dark align-items-center">
                <label>Offer Ends in: </label>
                <div
                className="product-countdown countdown-compact ml-1 font-weight-bold"
                data-until="+10d"
                data-relative="true"
                data-compact="true"
                >
                10days,00:00:00
                </div>
            </div>
            <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">
                More Products
                <i className="w-icon-long-arrow-right" />
            </a>
        </div>
        <div
            className="swiper-container swiper-theme product-deals-wrapper appear-animateNOT mb-7"
            data-swiper-options="{
                        'spaceBetween': 20,
                        'slidesPerView': 2,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 3
                            },
                            '768': {
                                'slidesPerView': 4
                            },
                            '992': {
                                'slidesPerView': 5
                            }
                        }
                    }"
            >
            <div className="swiper-wrapper row cols-lg-5 cols-md-4 cols-2">
                {/* <div className="swiper-slide product-wrap">
                    <div className="product text-center">
                        <figure className="product-media">
                        <a href="product-default.html">
                            <img
                            src="assets/images/demos/demo2/products/1-1-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                            />
                            <img
                            src="assets/images/demos/demo2/products/1-1-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                            />
                        </a>
                        <div className="product-action-vertical">
                            <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                            />
                        </div>
                        <div className="product-label-group">
                            <label className="product-label label-new">New</label>
                        </div>
                        </figure>
                        <div className="product-details">
                        <h4 className="product-name">
                            <a href="product-default.html">Women's Comforter</a>
                        </h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                            <span className="ratings" style={{ width: "100%" }} />
                            <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                            (3 Reviews)
                            </a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$45.62 - $58.28</ins>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide product-wrap">
                    <div className="product text-center">
                        <figure className="product-media">
                        <a href="product-default.html">
                            <img
                            src="assets/images/demos/demo2/products/1-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                            />
                        </a>
                        <div className="product-action-vertical">
                            <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                            />
                        </div>
                        <div className="product-label-group">
                            <label className="product-label label-new">New</label>
                            <label className="product-label label-discount">-35%</label>
                        </div>
                        </figure>
                        <div className="product-details">
                        <h4 className="product-name">
                            <a href="product-default.html">White Valise</a>
                        </h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                            <span className="ratings" style={{ width: "100%" }} />
                            <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                            (3 Reviews)
                            </a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$40.00</ins>
                            <span className="old-price">$49.89</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide product-wrap">
                    <div className="product text-center">
                        <figure className="product-media">
                        <a href="product-default.html">
                            <img
                            src="assets/images/demos/demo2/products/1-3-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                            />
                            <img
                            src="assets/images/demos/demo2/products/1-3-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                            />
                        </a>
                        <div className="product-action-vertical">
                            <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                            />
                        </div>
                        </figure>
                        <div className="product-details">
                        <h4 className="product-name">
                            <a href="product-default.html">Brown Leather Shoes</a>
                        </h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                            <span className="ratings" style={{ width: "80%" }} />
                            <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                            (6 Reviews)
                            </a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$36.26 - $59.75</ins>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide product-wrap">
                    <div className="product text-center">
                        <figure className="product-media">
                        <a href="product-default.html">
                            <img
                            src="assets/images/demos/demo2/products/1-4.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                            />
                        </a>
                        <div className="product-action-vertical">
                            <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                            />
                        </div>
                        <div className="product-label-group">
                            <label className="product-label label-new">New</label>
                        </div>
                        </figure>
                        <div className="product-details">
                        <h4 className="product-name">
                            <a href="product-default.html">Portable Flashlight</a>
                        </h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                            <span className="ratings" style={{ width: "100%" }} />
                            <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                            (8 Reviews)
                            </a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$10.00</ins>
                            <del className="old-price">$11.00</del>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-slide product-wrap">
                    <div className="product text-center">
                        <figure className="product-media">
                        <a href="product-default.html">
                            <img
                            src="assets/images/demos/demo2/products/1-5.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                            />
                        </a>
                        <div className="product-action-vertical">
                            <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                            />
                            <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                            />
                        </div>
                        </figure>
                        <div className="product-details">
                        <h4 className="product-name">
                            <a href="product-default.html">USB Charger</a>
                        </h4>
                        <div className="ratings-container">
                            <div className="ratings-full">
                            <span className="ratings" style={{ width: "100%" }} />
                            <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">
                            (3 Reviews)
                            </a>
                        </div>
                        <div className="product-price">
                            <ins className="new-price">$17.00</ins>
                            <del className="old-price">$20.00</del>
                        </div>
                        </div>
                    </div>
                </div> */}
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <div className="swiper-pagination" />
            </div>

    </>
  )
}
