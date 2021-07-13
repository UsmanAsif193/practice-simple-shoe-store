import React from 'react'
import { useParams } from 'react-router-dom'
import ShoesData from './../ShoesData.json'



function ProductItem() {
    const { id } = useParams()
    const shoe = ShoesData[id]

    if (!shoe)
        return <h2>Product not Found</h2>

    return (
        <div>
            <h1>Welcome to ProductItem.js</h1>
            <div className='link'>
                <h4>{shoe.name}</h4>
                <img src={shoe.img} alt={shoe.name} height={500} />
            </div>
        </div>
    );
}

export default ProductItem;
