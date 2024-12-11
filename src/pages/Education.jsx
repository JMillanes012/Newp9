import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import '../App.css';

function Education() {
    return (
        <>
        <div id='Education'>
           <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px'}}>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://yt3.googleusercontent.com/ytc/AL5GRJWYcpB0tuVnDjoN4TIL5xjMRgf4Ch8WNlrK3QY4=s900-c-k-c0x00ffffff-no-rj" />
            <Card.Body>
                <Card.Title>Naga Central School 2</Card.Title>
                <Card.Text>
                I graduated from Naga Central School 2 on 2017, It was a significant milestone in my academic journey, marking the completion of my elementary education. This achievement laid the foundation for my future learning experiences and personal growth..
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.EIEde9lyKe8okDR_fehHPAHaHa?rs=1&pid=ImgDetMain" />
            <Card.Body>
                <Card.Title>Camarines Sur National High School</Card.Title>
                <Card.Text>
                I graduated high school from the Camarines Sur National High School on 2022, This achievement was a key step in my educational journey, paving the way for futugitre opportunities and personal growth.
                </Card.Text>

            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://aims.ncf.edu.ph/assets/images/ncfi-logo.png" />
            <Card.Body>
                <Card.Title>Naga College Foundation, Inc.</Card.Title>
                <Card.Text>
                I am currently pursuing a Bachelor of Science in Information System at Naga College Foundation. This program is equipping me with the skills and knowledge needed to excel in the field of technology and information management.
                </Card.Text>
            </Card.Body>
            </Card>
            </Row>
            </div>
        </>
    )
}

export default Education