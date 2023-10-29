import React from 'react'
import ProductCard from '../ProductCard';

export default function ConsumerElectronics() {

    const deals = [
        {
            name: "Gold Watch",
            rating: 4,
            newPrice: 150,
            oldPrice: 199,
            imageUrl: "assets/images/demos/demo2/products/3-2-1.jpg",
            imageUrl2: "assets/images/demos/demo2/products/3-2-2.jpg",
            newTag: true,
            discount: 80,
            reviewsCount: 4,
          },
          {
            name: "Drone Wireless",
            rating: 4.5,
            newPrice: 56,
            oldPrice: 70,
            imageUrl: "assets/images/demos/demo2/products/3-3-1.jpg",
            imageUrl2: "assets/images/demos/demo2/products/3-3-2.jpg",
            newTag: true,
            discount: 0,
            reviewsCount: 2,
          },
          {
            name: "Multi-colorful Music Player",
            rating: 3,
            newPrice: 39,
            oldPrice: 69,
            imageUrl: "assets/images/demos/demo2/products/3-4-1.jpg",
            newTag: false,
            discount: 15,
            reviewsCount: 25,
          },
          {
            name: "Mini Wireless Earphone",
            rating: 4,
            newPrice: 210,
            oldPrice: 260,
            imageUrl: "assets/images/demos/demo2/products/3-6-1.jpg",
            imageUrl2: "assets/images/demos/demo2/products/3-6-2.jpg",
            newTag: false,
            discount: 0,
            reviewsCount: 3,
          },
          {
            name: "Alarm Machine",
            rating: 5,
            newPrice: 260,
            oldPrice: 310,
            imageUrl: "assets/images/demos/demo2/products/3-5-1.jpg",
            newTag: true,
            discount: 0,
            reviewsCount: 6,
          },
          {
            name: "Hight Quality Screen Tablet",
            rating: 4,
            newPrice: 150,
            oldPrice: 199,
            imageUrl: "assets/images/demos/demo2/products/3-7-1.jpg",
            newTag: true,
            discount: 80,
            reviewsCount: 4,
          }
        ];


  return (
    <>
        <div className="tab tab-with-title tab-nav-boxed appear-animateNOT">
            <h2 className="title">Consumer Electronics</h2>
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                <a className="nav-link active" href="#tab-1">
                    New Arrivals
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#tab-2">
                    Best Seller
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#tab-3">
                    Most Popular
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#tab-4">
                    View All
                </a>
                </li>
            </ul>
        </div>
        <div className="tab-content appear-animateNOT">
            <div className="tab-pane active" id="tab-1">
                <div className="row grid-type products">
                <div className="product-wrap lg-item">
                    <div className="product text-center">
                    <figure className="product-media">
                        <a href="product-default.html">
                        <img
                            src="assets/images/demos/demo2/products/3-1-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                        />
                        <img
                            src="assets/images/demos/demo2/products/3-1-2.jpg"
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
                        <label className="product-label label-discount">-15%</label>
                        </div>
                    </figure>
                    <div className="product-details">
                        <h4 className="product-name">
                        <a href="product-default.html">Magenetic Charge Box</a>
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
                        <ins className="new-price">$79.00</ins>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Other 6 Products */}
                {deals.map((deal)=>{
                    // console.log('deal is :', deal);
                    return <ProductCard {...deal} key={deal.name} extraClass='sm-item' />
                })}
                </div>
            </div>
        </div>

    </>
  )
}
