import React, { useState } from 'react'
import ProductCard from '../ProductCard'

export default function DealOfTheDay() {

    const deals = [
        {
            name: "Purse",
            rating: 4,
            newPrice: 150,
            oldPrice: 199,
            imageUrl: "assets/images/demos/demo2/products/1-2.jpg",
            newTag: true,
            discount: 80,
            reviewsCount: 4,
          },
          {
            name: "Shoes",
            rating: 4.5,
            newPrice: 56,
            oldPrice: 70,
            imageUrl: "assets/images/demos/demo2/products/4-3.jpg",
            imageUrl2: "assets/images/demos/demo2/products/1-3-2.jpg",
            newTag: true,
            discount: 0,
            reviewsCount: 2,
          },
          {
            name: "Travel Bag",
            rating: 3,
            newPrice: 39,
            oldPrice: 69,
            imageUrl: "assets/images/demos/demo2/products/4-1-1.jpg",
            newTag: false,
            discount: 15,
            reviewsCount: 25,
          },
          {
            name: "Drone",
            rating: 4,
            newPrice: 210,
            oldPrice: 260,
            imageUrl: "assets/images/demos/demo2/products/3-3-1.jpg",
            imageUrl2: "assets/images/demos/demo2/products/3-3-2.jpg",
            newTag: false,
            discount: 0,
            reviewsCount: 3,
          },
          {
            name: "Sofa",
            rating: 5,
            newPrice: 260,
            oldPrice: 310,
            imageUrl: "assets/images/demos/demo2/products/4-2-1.jpg",
            newTag: true,
            discount: 0,
            reviewsCount: 6,
          }
        ];

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
                {deals.map((deal)=>{
                    // console.log('deal is :', deal);
                    return <ProductCard {...deal} key={deal.name} />
                })}
            </div>
            <div className="swiper-pagination" />
            </div>

    </>
  )
}
