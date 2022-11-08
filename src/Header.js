import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
    return (
        <div className='header'>
            <img className='header__logo'
             src="https://www.bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png"></img>
             <div 
             className='header__search'>
                 <input 
                 className="header__searchInput" type="text"></input>
                 <SearchIcon className='header__searchIcon'/>
             </div>
             <div className='header__nav'>
                <div className='header__option'>
<span className='header__optionLineOne'>Hello Guest</span>
<span className='header__optionLineTWo'>Sign In</span>
                </div>
                <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
<span className='header__optionLineTWo'>&Orders</span>
                </div>
                <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
<span className='header__optionLineTWo'>Prime</span> 
             </div>
             <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionLineTwo header__basketCount'>0</span>
                 </div>
        </div>

        </div>
    )
}

export default Header
