import React from 'react'
import { /* Row, Col, */ Container, Table } from 'react-bootstrap'
import './index.css'

function Footer() {
    return (
        <Container className="footer" fluid>
            <hr className="h-divider" />
            <Table className="text-center">
                <th>
                    Quick Menu
                </th>
                <th>
                    Links
                </th>
                <th>
                    Follow Us
                </th>
                <th>
                    Newsletter
                </th>
                <tr>
                    <td>
                        <a href="#home">Traditional Wear</a>
                    </td>
                    <td>
                        <a href="#home">Search</a>
                    </td>
                    <td>
                        <div className="social-icons">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-youtube"></i>
                        </div>
                    </td>
                </tr>
            </Table>
        </Container>
    )
}

export default Footer
