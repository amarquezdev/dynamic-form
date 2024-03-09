import { Button, Col, Container, Row } from 'react-bootstrap'
import './introduction.css'

export default function introduction() {
  return (
    <div className='introduction p-3 p-lg-5 mt-5'>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1 className="pl-2 text-center">
              Welcome to bla bla bla <span className="pt-2 pb-4">more text blah blah</span> 
            </h1>
            <h4 className='text-center pt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </h4>
            <div className='d-flex container-actions mt-5'>
              <div className='container-buttons'>
                <Button className='p-3' onClick={() => console.log("Click button")}>Get in touch</Button>
                <Button className='p-3'>Get in touch</Button>
              </div>
              <div className='btn-start-create'>
                <a href='#dynamic-form'>Start to create ➡️</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
