import { Container, Col, Row } from "react-bootstrap";

export default function HomePage()
{
    return (
        <Container className="Page-homePage">
            <Row>
                <Col>
                    <h1>Edward Nguyen</h1>
                    <h3>Software Engineer and Developer</h3>
                </Col>
                <Col>
                    Welcome to the home page of my portfolio! Here you can find links to my projects, hobbies and grab some contacts.
                </Col>
            </Row>
        </Container>
    )
}