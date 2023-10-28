import React from 'react'

export default function ProductCard() {

const product={
    name:'Purse',
    rating:1,
    newPrice:150,
    oldPrice:199,
    imageUrl:"assets/images/demos/demo2/products/1-2.jpg",
    new:true,
    discount:30,
    reviewsCount:0
}

  return (
    <div className="swiper-slide product-wrap">
        <div className="product text-center">
            <figure className="product-media">
            <a href="product-default.html">
                <img
                src={product.imageUrl}
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
                {product.new && <label className="product-label label-new">New</label>}
                {product.discount>0 && <label className="product-label label-discount">-{product.discount}%</label>}
            </div>
            </figure>
            <div className="product-details">
            <h4 className="product-name">
                <a href="product-default.html">{product.name}</a>
            </h4>
            <div className="ratings-container">
                <div className="ratings-full">
                <span className="ratings" style={{ width: `${product.rating*20}%` }} />
                <span className="tooltiptext tooltip-top" />
                </div>
                {product.reviewsCount>=0 &&
                    <a href="product-default.html" className="rating-reviews">
                    ({product.reviewsCount} Reviews)
                    </a>
                }
            </div>
            <div className="product-price">
                <ins className="new-price">${product.newPrice}</ins>
                <span className="old-price">${product.oldPrice}</span>
            </div>
            </div>
        </div>
    </div>
  )
}
