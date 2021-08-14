import React from 'react'
import Header from '../Header'
import HeroCarousel from '../HeroCarousel'
import HeroContent from '../HeroContent'
/* import Footer from '../Footer' */
/* import {Container} from 'react-bootstrap' */

function Layout(props) {
    return (
        <>
            <Header/>
            <HeroCarousel/>
            <HeroContent/>
            {/* <Container fluid="md">
                {props.children}
            </Container> */}
        </>
    )
}

export default Layout
