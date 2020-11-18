import React, { Component } from 'react';

import { Container, Form, Row, Col, InputGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Overview from '../components/Overview';

import { connect } from 'react-redux';

class ListFilm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 1,
    };
  }

  handleOnChange = (e) => {
    const input = e.target;
    const value = input.value;

    this.setState({ [input.name]: value }, () => console.log(this.state.category));
  };

  render() {
    return (
      <>
        <Container className="main-wrapper">
          <Row className="mb-4">
            <Col md="3">
              <h1 className="mb-4">List Film </h1>
            </Col>
            <Col md="3">
              <Form>
                <InputGroup className="mb-3 categories">
                  <Form.Control onChange={this.handleOnChange} as="select" name="category">
                    {this.props.categories.length > 0
                      ? this.props.categories.map((category) => {
                          return (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          );
                        })
                      : false}
                  </Form.Control>
                </InputGroup>
              </Form>
            </Col>
            <Col md="6 text-right">
              <Link
                to="/admin/add-film"
                className="nav-link btn mr-md-2 mb-2 mb-md-0 btn-red float-right"
              >
                <strong> + </strong>Add Film
              </Link>
            </Col>
          </Row>
          <Row>
            <Overview page={'admin'} category={this.state.category} />
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.isLogin,
    user: state.authReducer.user,
    categories: state.categoryReducer.categories,
    loading: state.categoryReducer.loading,
    error: state.categoryReducer.error,
  };
};

export default connect(mapStateToProps)(ListFilm);
