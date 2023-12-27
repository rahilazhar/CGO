import React from 'react'
import { Navbar } from 'flowbite-react'
import {Link} from 'react-router-dom'

const NavbarN = () => {
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand as={Link} href="https://flowbite-react.com">
                    {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Canal Garden Owner's</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    {/* <Navbar.Link as={Link} href="/">
                        About
                    </Navbar.Link>

                    <Navbar.Link to="#">Services</Navbar.Link>
                    <Navbar.Link to="#">Pricing</Navbar.Link>
                    <Navbar.Link to="#">Contact</Navbar.Link> */}
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarN
