import { React, useState } from 'react'
import './index.css'
import { Row, Col, Container, Form } from 'react-bootstrap'

function HeroContent() {
    const kanduraImgData = [
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telalthobe_1_2d8c0ea4-cb47-4bd8-b171-e45dffb86d97_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telalthobe_4_12a90a3b-e5b0-4210-b588-080ddd1d94d8_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telalthobe_3_04c4f6d8-4b41-4793-a988-35649e18059a_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telalthobe_2_b190c09e-ce81-4a43-af88-cda7cf3c7ffc_grande.jpg?v=1593930137',
    ]
    const [selectedSrc, setselectedSrc] = useState(kanduraImgData[0])
    return (
        <>
            <hr className="h-d" />
            <Container className="hero-container pt-5">
                <Container className="ps-4">
                    <p>Home {'>'} KanduraClassic-Adult</p>
                </Container>
                <Row>
                    <Col lg="6" md="12" className="image-section">
                        <Container>
                            <img src={selectedSrc} alt="" srcset="" className="w-100 main-image-container" />
                        </Container>
                        <Container className="pt-2 w-100x">
                            <Row>
                                {kanduraImgData.map((src) => <>
                                    <Col className="">
                                        <img className="w-100" src={src} alt="" srcset="" onClick={() => { setselectedSrc(src) }} />
                                    </Col>
                                </>)}
                            </Row>
                        </Container>
                    </Col>
                    <Col lg="6" md="12" className="product-description">
                        <Container className="pt-4">
                            <span className="">Telal</span>
                            <h3 className="product-title">Kandura Classic - Adult</h3>
                            <Container className="ps-0">
                                <span className="product-price">Dhs 189.00</span>
                                <div className="product-policy">Tax included</div>
                            </Container>
                            <Form>
                                <Form.Group>
                                </Form.Group>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeroContent
