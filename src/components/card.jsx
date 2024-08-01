import React, {useContext} from 'react'
import { cartContext } from './cartContext'

function card({ product }) {

    // calling handleChhange function from context using handleChange function reference
    let {HandleChange} = useContext(cartContext);

    // quantityChange is defined to get and pass the current input value along with product id and product price
    let quantityChange = (event)=> {
        let newQuantity = event.target.value;
        HandleChange(product.id, newQuantity, product.price)
    }
    return (
        <>
        {/* Card body code */}
            <div className="container mt-5">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={product.image} className="card-img" alt="Product Image" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <div className="card-text">
                                    <h6>Details & Care</h6>
                                    <p>{product.description}</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="quantity">
                                        <label htmlFor="quantity-title">Quantity:</label>
                                        <input type="number" id='quantity-title' className="form-control quantity-value" value={product.quantity} min='1' onChange={quantityChange}/>
                                    </div>
                                    <div className="price">
                                        <h4>Price: ${product.price}</h4>
                                    </div>
                                    <div className="remove">
                                        <a href="!#" className="text-danger">REMOVE</a>
                                    </div>
                                </div>
                                <div className='Rating'>
                                    <h6 className='card-text'>Rating: {product.rating.rate} </h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="summary">
                    <div className="d-flex justify-content-between">
                        <p>SUBTOTAL: ${product.total}</p>
                        
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>SHIPPING:FREE</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>TOTAL:${product.total}</h4>
                        
                    </div>
                </div>
                <p className="text-right text-muted">Get Daily Cash With Nespola Card</p>
            </div>
            <hr />
        </>
    )
}

export default card