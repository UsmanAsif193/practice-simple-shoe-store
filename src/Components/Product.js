import React from 'react'
import { Link } from 'react-router-dom'
import ShoesData from './../ShoesData.json'


function Product() {
    return (
        <div>
            <h1>Welcome to Product</h1>
            <div className='product-container'>
                {Object.keys(ShoesData).map(keyName => {
                    const shoe = ShoesData[keyName]
                    return (
                        <Link
                            className='link'
                            key={keyName}
                            to={`/product/${keyName}`}>
                            <h4>{shoe.name}</h4>
                            <img src={shoe.img} alt={shoe.name} height={150} />
                        </Link>)
                })}
            </div>
        </div>
    );
}

export default Product;
