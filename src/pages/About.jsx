import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function About() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center">About Me</Card.Title>
                            <Image 
                                src="https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/459339581_1023837212818397_4127709713446480774_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGM_sE6YtcWwXc3dlaXj94K4LBuvFv_mcbgsG68W_-ZxkIuKyQ4EuYeTZ9gMNY4JJ2aUv_YlfkdBS9Z6vTpcGiW&_nc_ohc=rJWhhCbU42gQ7kNvgF-t5Ko&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=A59RpfPx5xDfmwOf3TAWpXr&oh=00_AYDEg9asTiM1qHn_xc5yA6razg3VHWWrAbVrly4dd3XS2Q&oe=675F1CD8"
                                roundedCircle 
                                className="mb-3" 
                                fluid 
                            />
                            <ListGroup>
                                <ListGroup.Item><strong>NAME:</strong> Jerome Botalon Millanes</ListGroup.Item>
                                <ListGroup.Item><strong>LOCATION:</strong> # Z-7 Calauag Vilmar Homes Mahigos St, Naga City.</ListGroup.Item>
                                <ListGroup.Item><strong>AGE:</strong> 20</ListGroup.Item>
                                <ListGroup.Item><strong>BIRTHDAY:</strong> 06-01-2004</ListGroup.Item>
                                <ListGroup.Item><strong>STATUS:</strong> Single</ListGroup.Item>
                            </ListGroup>
                            <div className="text-center mt-3">
                                <Button variant="primary" href="https://www.facebook.com/jerome.millanes.142/" target="_blank" rel="noopener noreferrer">
                                    Visit My Facebook
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={6} className="offset-md-3">
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center">Skills</Card.Title>
                            <Row>
                                <Col xs={6} className="text-center">
                                    <Image 
                                        src="https://www.techicy.com/wp-content/uploads/2019/05/react-bootstrap-768x644.png"
                                        rounded 
                                        className="mb-2" 
                                        fluid 
                                    />
                                    <p>Skill 1</p>
                                </Col>
                                <Col xs={6} className="text-center">
                                    < Image 
                                        src="https://th.bing.com/th/id/OIP.c9BbPNmGFrhbXYTdOTG6FAHaFj?rs=1&pid=ImgDetMain"
                                        rounded 
                                        className="mb-2" 
                                        fluid 
                                    />
                                    <p>Skill 2</p>
                                </Col>
                                <Col xs={6} className="text-center">
                                    <Image 
                                        src="https://mobilemancerblog.blob.core.windows.net/blog/2020/08/vs-code-logo-transp.png"
                                        rounded 
                                        className="mb-2" 
                                        fluid 
                                    />
                                    <p>Skill 3</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;