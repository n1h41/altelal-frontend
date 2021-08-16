import { React, useState } from 'react'
import './index.css'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import laptop from '../../assets/laptop.png'

function HeroContent() {
    const [selectedDate, setSelectedDate] = useState(Date.now());

    const handleDateChange = (date) => {
        console.log(date)
        setSelectedDate(date);
    };
    return (
        <>
            <hr className="h-d" />
            <Container className="hero-container pt-4">
                <Container className="ps-4 pb-2">
                    <p style={{ color: "#403b37" }}>Home {'>'} KanduraClassic-Adult</p>
                </Container>
                <Row>
                    <Col lg="6" xs="12" className="video-section justify-content-center d-flex flex-column">
                        <Container className="video-container">
                            <img src={laptop} alt="laptop"  className="w-100 laptop-conatiner"/>
                            <ReactPlayer /* width="68%" height="77%" */  controls={true} pip={true} url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' className="video-player"/>
                        </Container>
                    </Col>
                    <Col lg="6" xs="12" className="product-description">
                        <Container className="pt-4">
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Last Name" />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justifyContent="space-between" className="pb-3">
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Time picker"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                                <Button variant="outline-primary" type="submit" className="submit-btn">
                                    Book Now
                                </Button>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HeroContent
