import React from 'react'
import CartPage from './components/cartPage'
import { CartProvider } from './components/cartContext'

function App() {
  return (
    <>
    {/* CartProvideris called inorder to pass the value for children from cartContext as decleared */}
      <CartProvider>
        <div className='sticky'>
          <h2 className='sticky-top'>Shopping Cart</h2>
        </div>
        <div className="container">
          <CartPage/>
        </div>
      </CartProvider>
    </>
  )
}

export default App