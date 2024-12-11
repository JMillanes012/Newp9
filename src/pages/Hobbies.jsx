import Carousel from 'react-bootstrap/Carousel';

function Hobbies() {
    return (
        <>        
          <Carousel data-bs-theme="dark">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="https://i.pinimg.com/originals/09/5c/57/095c57423b03fb7dbc08414eb53a7edd.gif"
                      alt="Crossfire PH"
                  />
                  <Carousel.Caption>
                      <h5 style={{ color: 'white' }}>League of Legends</h5>
                      <p style={{ color: 'white' }}>
                         i love playing League of Legends when i was a kid and until now.
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="https://media.giphy.com/media/l0j0oNTzu1Mfdy6mT5/giphy.gif"
                      alt="Call of Duty Mobile"
                  />
                  <Carousel.Caption>
                      <h5 style={{ color: 'white' }}>Call of Duty Mobile</h5>
                      <p style={{ color: 'white' }}>
                          My second hobby is playing Call of Duty Mobile, where I enjoy gaming with my classmates and friends.
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="https://i.pinimg.com/originals/bd/72/3d/bd723ddfda02d53ad142787f55ff601d.gif"
                      alt="Mobile Legends Bang Bang"
                  />
                  <Carousel.Caption>
                      <h5 style={{ color: 'white' }}>Mobile Legends Bang Bang</h5>
                      <p style={{ color: 'white' }}>
                          I've been playing this game since 2019, and I'm always excited to play it. I'm very thankful for the enjoyment it brings me.
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
        </>
    );
}

export default Hobbies;