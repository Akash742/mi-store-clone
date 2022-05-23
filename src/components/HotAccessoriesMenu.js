import React from 'react'
import { Link } from 'react-router-dom'
import '../style/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='hotAccessoriesMenu'>
        <Link className='HotAccessoriesLinks' to="/music">Music Store</Link>
        <Link className='HotAccessoriesLinks' to="/smartDevice">Smart Devices</Link>
        <Link className='HotAccessoriesLinks' to="/home">Home</Link>
        <Link className='HotAccessoriesLinks' to="/lifeStyle">Life Style</Link>
        <Link className='HotAccessoriesLinks' to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu;