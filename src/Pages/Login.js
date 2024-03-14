import React, { useRef, useref } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Login() {

  const loginNameRef = useRef()
  const loginPasswordRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <Helmet title='Login'>
        <CommonSection title='Login' />
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                <form className='form mb-5' onSubmit={submitHandler}>
                  <div className="form_group">
                    <input
                      type="email"
                      placeholder='Email'
                      required
                      ref={loginNameRef} />
                  </div>
                  <div className="form_group">
                    <input
                      type="password"
                      placeholder='Password'
                      required
                      ref={loginPasswordRef} />
                  </div>
                  <button className="addTOCart_btn">Login</button>
                </form>

                <Link to='/register'>
                  Don't have an account? Create an account
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}
