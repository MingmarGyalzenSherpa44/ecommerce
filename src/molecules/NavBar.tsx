import Image from '../atoms/Image'
import Link from '../atoms/Link'
import Text from '../atoms/Text'

import Logo from "../../public/images/logo.svg"
import searchLogo from "../../public/icons/MagnifyingGlass.svg"
import cartLogo from "../../public/icons/ShoppingCartSimple.svg"
import userLogo from "../../public/icons/User.svg"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import Cart from './Cart'

export default function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { totalQuantity } = useSelector((state: RootState) => state.cart)

    function handleCartIconClick() {
        setIsCartOpen((prev) => !prev)
    }
    function handleClick(linkName: string) {
        setActiveLink(linkName);
    }

    return (
        <header className='navbar'>
            <nav >
                <ul className='nav'>
                    <li className={`nav__item ${activeLink === "Women" ? "nav__item--active" : ""}`} onClick={() => handleClick("Women")}>
                        <Link url='/women'>
                            <Text type='p'>
                                Women
                            </Text>
                        </Link>
                    </li>
                    <li className={`nav__item ${activeLink === "Men" ? "nav__item--active" : ""}`} onClick={() => handleClick("Men")}>
                        <Link url='/men'>
                            <Text type='p'>
                                Men
                            </Text>
                        </Link>
                    </li>
                    <li className={`nav__item ${activeLink === "About" ? "nav__item--active" : ""}`} onClick={() => handleClick("About")}>
                        <Link url='/about'>
                            <Text type='p'>
                                About
                            </Text>
                        </Link>
                    </li>
                    <li className={`nav__item ${activeLink === "Everworld Stories" ? "nav__item--active" : ""}`} onClick={() => handleClick("Everworld Stories")}>
                        <Link url='/everworld-stories'>
                            <Text type='p'>
                                Everworld Stories
                            </Text>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="logo" onClick={() => handleClick("Home")}>
                <Link url='/'>
                    <Image src={Logo} alt='logo' width='127.72px' height='14px' />

                </Link>
            </div>
            <nav >
                <ul className='icon-nav'>
                    <li>
                        <Link url=''>
                            <Image alt='' src={searchLogo} width='16px' height='16px' />
                        </Link>
                    </li>

                    <li>
                        <Link url=''>
                            <Image alt='' src={userLogo} width='16px' height='16px' />
                        </Link>
                    </li>

                    <li onClick={handleCartIconClick}>
                        <Image alt='' src={cartLogo} width='16px' height='16px' />
                        <div className="cart-quantity">
                            <Text type='p'>
                                {totalQuantity}
                            </Text>
                        </div>

                    </li>
                </ul>
            </nav>
            {isCartOpen && <Cart handleClick={() => setIsCartOpen(false)} />}
        </header >
    )
}
