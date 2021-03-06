import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {handleAddToCart, product} =props
    const { name, img, seller, price, ratings } = product
    // console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: $ {price} </p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} starts</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <h4>Add To Cart</h4>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product; 