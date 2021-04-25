import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import ProfileInfo from '../components/ProfileInfo';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    const { fullName, email, gender, subscribe, phone, address } = this.props.user;
    console.log(this.props.user);
    return (
      <div>
        <Container className="main-wrapper">
          <Row className="justify-content-center">
            <Col className="profile-wrapper w-75" md="8">
              <h2 className="mb-4">Personal Info</h2>
              <Row>
                <Col md="8">
                  <ProfileInfo icon="personal.png" label="Full Name" info={fullName} />
                  <ProfileInfo icon="mail.png" label="Email" info={email} />
                  <ProfileInfo
                    icon="ticket.png"
                    label="Status"
                    info={subscribe ? 'Active' : 'Inactive'}
                  />
                  <ProfileInfo icon="gender.png" label="Gender" info={gender} />
                  <ProfileInfo icon="phone.png" label="Phone Number" info={phone} />
                  <ProfileInfo icon="location.png" label="Location" info={address} />
                </Col>
                <Col md="4">
                  <div className="profile-photo">
                    <img
                      src="https://dumbflixapi.herokuapp.com/images/profile1.jpg"
                      alt=""
                    />
                    <Form>
                      <Form.File id="fileProfile">
                        <Form.File.Input isValid />
                        <Form.File.Label
                          className="btn btn-red btn-full mt-3"
                          data-browse="Button text"
                        >
                          Choose Image
                        </Form.File.Label>
                      </Form.File>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.isLogin,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps)(Profile);
