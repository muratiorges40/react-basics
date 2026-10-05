import React from 'react'
import Product from './Product'
 
function Object() {
    const products = [
        {
            id: 1,
            name: "iphone 25",
            color: "purple"
        },
        {
            id: 2,
            name: "iphone 25",
            color: "purple"
        },
        {
            id: 3,
            name: "iphone 25",
            color: "purple"
        }
    ]

    return (
        <div>
            {
                products.map((product) => (
                    <div key={product.id}>
                      <Product
                      key={product.id}
                      productName ={product.name}
                      productColor ={product.color} />
                    </div>
                ))
            }
        </div>
    )
}

export default Object