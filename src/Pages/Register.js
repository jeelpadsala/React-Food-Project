import React, { useRef, useref } from 'react'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Register() {

  const signupNameRef = useRef()
  const signupPasswordRef = useRef()
  const signupEmailRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()

  }

  return (
    <div>
      <Helmet title='Sign-Up'>
        <CommonSection title='SignUp' />
        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                <form className='form mb-5' onSubmit={submitHandler}>
                  <div className="form_group">
                    <input
                      type="text"
                      placeholder='Full Name'
                      required
                      ref={signupNameRef} />
                  </div>
                  <div className="form_group">
                    <input
                      type="email"
                      placeholder='Email'
                      required
                      ref={signupEmailRef} />
                  </div>
                  <div className="form_group">
                    <input
                      type="password"
                      placeholder='Password'
                      required
                      ref={signupPasswordRef} />
                  </div>
                  <button className="addTOCart_btn">Sign Up</button>
                </form>

                <Link to='/login'>
                  Already have an account? Login
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  )
}
