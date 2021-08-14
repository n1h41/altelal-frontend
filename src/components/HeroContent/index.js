import { React, useState } from 'react'
import './index.css'
import { Row, Col, Container, Form } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import Magnifier from "react-magnifier";

function HeroContent() {
    const kanduraImgData = [
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telalthobe_1_2d8c0ea4-cb47-4bd8-b171-e45dffb86d97_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telalthobe_4_12a90a3b-e5b0-4210-b588-080ddd1d94d8_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telalthobe_3_04c4f6d8-4b41-4793-a988-35649e18059a_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telalthobe_2_b190c09e-ce81-4a43-af88-cda7cf3c7ffc_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telaldishdash_1_80c11f9f-cbdb-4546-ae22-efb508138dc2_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telaldishdash_4_249a9920-4244-4b3d-9f02-e42914e7c5ea_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telaldishdash_2_a1ce1bc7-6562-4642-b0c9-498f0506b919_grande.jpg?v=1593930137',
        'https://cdn.shopify.com/s/files/1/0274/4841/0212/products/telaldishdash_3_690e5c02-1dd5-454b-99ba-3cf74f7bc2fc_grande.jpg?v=1593930137',
    ]
    const [selectedSrc, setselectedSrc] = useState(kanduraImgData[0])
    return (
        <>
            <hr className="h-d" />
            <Container className="hero-container pt-5">
                <Container>
                    <ReactPlayer width='100%' controls={true} pip={true} /* playing={true} */ url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' />
                </Container>
                <Container className="ps-4 pt-5 pb-2">
                    <p style={{ color: "#403b37" }}>Home {'>'} KanduraClassic-Adult</p>
                </Container>
                <Row>
                    <Col lg="6" xs="12" className="image-section">
                        <Container>
                        <Magnifier className="w-100" src={selectedSrc} width={500} />
                            {/* <img src={selectedSrc} alt="main-pic" className="w-100 main-image-container" /> */}
                        </Container>
                        <Container className="pt-2 w-100x">
                            <Row className="pt-2">
                                {kanduraImgData.map((src) =>
                                    <Col xs="4" lg="3" className="mb-3" key={src}>
                                        <img key={src} className="w-100" src={src} alt="mini-pics" onClick={() => { setselectedSrc(src) }} />
                                    </Col>
                                )}
                            </Row>
                        </Container>
                    </Col>
                    <Col lg="6" xs="12" className="product-description">
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
