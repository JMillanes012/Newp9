import Carousel from 'react-bootstrap/Carousel';

function Hobbies () {
    return (
        <>        
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/featured/crossfire-9nrqsd2qyhwbo7fq.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Crossfire PH</h5>
          <p style={{ color: 'white' }}>I used to play Crossfire ph when I was 8 years old until now and it was able to cope with fatigue and stress and was able to give peace of mind.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.giphy.com/media/l0j0oNTzu1Mfdy6mT5/giphy.gif"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Call of Duty Mobile</h5>
          <p style={{ color: 'white' }}> And my second hobbies is playing Call of Duty Mobile because my classmates and friends I can play.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/bd/72/3d/bd723ddfda02d53ad142787f55ff601d.gif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{ color: 'white' }}>Mobile Legends Bang Bang</h5>
          <p style={{ color: 'white' }}>
          I've been playing the game since 2019 and I'm so excited to be playing it and I'm so thankful for the game.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>

        
    )
}

export default Hobbies;
