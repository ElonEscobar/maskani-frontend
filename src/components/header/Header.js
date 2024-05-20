
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const CustomNavLink = ({ to, children }) => (
    <li className='m-1 font-normal  border-b p-1 hover:border-b-2 hover:border-blue-800 transition ease-in-out duration-300'>
        <NavLink to={to}>{children}</NavLink>
    </li>
)

const DesktopNavBar = ({ navItems }) => (
    <ul className='hidden sm:flex sm:flex-row sm:order-1'>
        {navItems.map((navItem, index) =>(
            <CustomNavLink to={navItem.to} key={index} >
                {navItem.label}
            </CustomNavLink>
        )
        )}
    </ul>
)

    
const Header = ({ isLoggedIn }) => {
    const [showMenu, setShowMenu] = useState(false);
    
    const openMenu = () =>{
        setShowMenu(!showMenu)
    }

    const handleMouseLeave = () => {
        setShowMenu(false)
    }

    // add routes 
    const navigation = [
        { to: '/properties', label: 'Properties' },
        { to: '/classified', label: 'Classifieds' },
        { to: '/auction', label: 'Auction' },
        { to: '/about', label: 'About Us' },
        { to: '/contact', label: 'Contact' },

    ]
    return (
        <>
            <div onMouseLeave={handleMouseLeave} className='p-2 flex flex-row justify-between sm:justify-around items-center bg-gradient-to-b from-blue-400 to-white w-full fixed z-50'>
                {/* company logo */}
                <div className='order-2 sm:order-1'>
                    <NavLink to='/' className='flex items-center order-2'>
                        <img src="/maskan logo.svg" alt="company-logo" loading='lazy' className='w-7' />
                        <h3 className='m-1 text-[#FF1744] text-xl font-semibold'>Maskan</h3>
                    </NavLink>
                </div>

                {/* mobile menu icon */}
                <div className='sm:hidden cursor-pointer order-3' onClick={openMenu}>
                    <img src="/mobile nav.svg" alt="nav" className='w-5 '/>
                </div>
                
                
                {/* conditionally display mobile navigation menu*/}
                {showMenu && (
                    <div className="mt-14 p-4 text-center order-4 absolute top-0 right-0 bg-gradient-to-l from-blue-400 to-white">
                        {
                            navigation.map((navItem, index) => (
                                <li key={index} className='list-none'>
                                    <a href={navItem.to} className="block text-[#092A9F] py-2 text-sm hover:text-[#FD00E4] hover:border-b-2 hover:border-blue-800 transition ease-in-out duration-400  " >
                                        {navItem.label}
                                    </a>
                                </li>  
                            ))
                        } 
                    </div>
                )}

                {/* Desktop Nav */}
                {<DesktopNavBar navItems={navigation}/>}

                
                <div className='sm:order-3' >
                    {
                        isLoggedIn ? (
                            <NavLink to='/profile' className='flex flex-row'>
                                <img src="/profile-icon.svg" alt="profile" loading='lazy' className='w-5'/>
                                <h4 className='ml-1'>Profile</h4>
                            </NavLink>
                        ):(
                            <NavLink to='/auth' className='flex flex-row'>
                                <img src="/profile-icon.svg" alt="sign-in" loading='lazy' className='w-5'/>
                                <h4 className='ml-1'>Sign In</h4>
                            </NavLink>
                        )
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Header
