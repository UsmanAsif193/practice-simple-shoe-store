import React from 'react'
import ShoesData from './../ShoesData.json'


function Product() {
    return (
        <div>
            <h1>Welcome to Product</h1>
            <div>
                {Object.keys(ShoesData).map(keyName => {
                    const shoe = ShoesData[keyName]
                    return (<div key={keyName}>
                        <h2>{shoe.name}</h2>
                        <img src={shoe.img} alt={shoe.name} height={150} />
                    </div>)
                })}
            </div>
        </div>
    );
}

export default Product;
