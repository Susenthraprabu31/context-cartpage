import React, {useContext} from 'react'
import Card from './card'
import { cartContext } from './cartContext'


function cartPage() {
// using useContext accessing data from cartContext for products
let {products} = useContext(cartContext);
  return (
    <>
    {
      products.map((item, index) => (
        // Card component is called to created the card for each product value in the array
        <Card product={item} key={index} />
      ))
    }
    </>
  )
}

export default cartPage