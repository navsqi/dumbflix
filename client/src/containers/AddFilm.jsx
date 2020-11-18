import React, { Component } from 'react';

import { Container } from 'react-bootstrap';
import { Button, Col, InputGroup, FormControl, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createFilm } from '../redux/actions/film.action';
import { createEpisode } from '../redux/actions/episode.action';
import Loader from 'react-loader-spinner';

class AddFilm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {},
      episode: {},
      addEpisodes: ['episode-0'],
    };
  }

  // Handle Add Button (Form Add Episode)
  handleAddEpisode = () => {
    let newInput = `episode-${this.state.addEpisodes.length}`;
    this.setState((prevState) => ({
      addEpisodes: prevState.addEpisodes.concat([newInput]),
    }));
  };

  // Add Form Episode Component
  addEpisode = () => {
    return this.state.addEpisodes.map((input, index) => {
      return (
        <span key={index}>
          <hr />
          <Row>
            <Col md="8">
              <InputGroup className="mb-3">
                <FormControl
                  name="titleEp"
                  onChange={this.handleOnChange}
                  type="text"
                  placeholder="Title Episode"
                />
              </InputGroup>
            </Col>
            <Col md="4">
              <InputGroup className="mb-3">
                <Form.File id="fileThumbnailEp" className="formcheck-api-custom">
                  <Form.File.Input name="thumbnailEp" onChange={this.handleOnChange} isValid />
                  <Form.File.Label
                    className="btn btn-red btn-full attach-thumbnail"
                    data-browse="fileThumbnailEp"
                  >
                    Attach Thumbnail
                  </Form.File.Label>
                </Form.File>
                <p className="ml-3">
                  {this.state.episode.thumbnailEp != undefined
                    ? this.state.episode.thumbnailEp.name
                    : false}
                </p>
              </InputGroup>
            </Col>
          </Row>
          <InputGroup className="mb-3">
            <FormControl
              onChange={this.handleOnChange}
              name="linkEp"
              type="text"
              placeholder="Link Film"
            />
          </InputGroup>
        </span>
      );
    });
  };

  handleOnChange = (e) => {
    const input = e.target;
    const value = input.value;
    // const fileName = input.type === 'file' ? input.files[0].name : null;

    // if (fileName) this.setState({ fileThumbnail: fileName });

    if (input.name.includes('Film')) {
      this.setState({ film: { ...this.state.film, [input.name]: value } }, () =>
        console.log(this.state)
      );
    }

    if (input.type === 'file' && input.name.includes('Film')) {
      this.setState({ film: { ...this.state.film, [input.name]: input.files[0] } }, () =>
        console.log(this.state)
      );
    }

    if (input.name.includes('Ep')) {
      this.setState({ episode: { ...this.state.episode, [input.name]: value } }, () =>
        console.log(this.state)
      );
    }

    if (input.type === 'file' && input.name.includes('Ep')) {
      this.setState({ episode: { ...this.state.episode, [input.name]: input.files[0] } }, () =>
        console.log(this.state)
      );
    }
    // const nameFile = input.files[0].name;
    // this.setState({ fileName }, () => console.log(this.state.fileName));
    // console.log(fileName, value);
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const dataFilm = new FormData();
    dataFilm.append('title', this.state.film.titleFilm);
    dataFilm.append('year', this.state.film.yearFilm);
    dataFilm.append('thumbnailFilm', this.state.film.thumbnailFilm);
    dataFilm.append('categoryId', this.state.film.categoryFilm);
    dataFilm.append('description', this.state.film.descriptionFilm);
    this.props.createFilm(dataFilm);

    const dataEpisode = new FormData();

    setTimeout(() => {
      dataEpisode.append('title', this.state.episode.titleEp);
      dataEpisode.append('thumbnailEp', this.state.episode.thumbnailEp);
      dataEpisode.append('linkEp', this.state.episode.linkEp);
      dataEpisode.append('filmId', this.props.films.id);
      this.props.createEpisode(dataEpisode);

      document.getElementById('formAddFilm').reset();
    }, 500);
  };

  render() {
    const { films, episodes, loadingEpisode, errorEpisode } = this.props;
    return (
      <>
        <Container className="main-wrapper">
          <h1 className="mb-4">Add Film</h1>
          <Row>
            <Form id="formAddFilm" onSubmit={this.handleOnSubmit} className="w-100">
              <Row>
                <Col md="8">
                  <InputGroup className="mb-3">
                    <FormControl
                      name="titleFilm"
                      onChange={this.handleOnChange}
                      type="text"
                      placeholder="Name"
                    />
                  </InputGroup>
                </Col>
                <Col md="4">
                  <InputGroup className="mb-3">
                    <Form.File id="fileThumbnailFilm" className="formcheck-api-custom">
                      <Form.File.Input
                        name="thumbnailFilm"
                        onChange={this.handleOnChange}
                        isValid
                      />
                      <Form.File.Label
                        onChange={this.handleOnChange}
                        className="btn btn-red btn-full attach-thumbnail"
                        data-browse="Button text"
                        htmlFor="fileThumbnailFilm"
                      >
                        Attach Thumbnail
                      </Form.File.Label>
                    </Form.File>
                    <p className="ml-3">
                      {this.state.film.thumbnailFilm != undefined
                        ? this.state.film.thumbnailFilm.name
                        : false}
                    </p>
                  </InputGroup>
                </Col>
              </Row>
              <InputGroup className="mb-3">
                <FormControl
                  name="yearFilm"
                  onChange={this.handleOnChange}
                  type="text"
                  placeholder="Year"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control onChange={this.handleOnChange} name="categoryFilm" as="select">
                  <option>- Select Category -</option>
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
              <InputGroup className="mb-3">
                <FormControl
                  name="descriptionFilm"
                  onChange={this.handleOnChange}
                  as="textarea"
                  placeholder="Description"
                />
              </InputGroup>
              {/* Episode */}
              {this.addEpisode()}
              <Button
                onClick={() => this.handleAddEpisode()}
                className="btn btn-full btn-add-episode"
              >
                +
              </Button>
              <Button type="submit" className="btn btn-red btn-full mt-3">
                {this.props.loadingFilm ? (
                  <Loader type="Oval" color="white" height="20" width="20" stye="" />
                ) : (
                  'Save'
                )}
              </Button>
              <p className="text-center text-success mt-3">
                {!errorEpisode && !loadingEpisode && films && episodes
                  ? 'Film has been saved successfully'
                  : false}
              </p>
            </Form>
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
    films: state.filmReducer.films,
    loadingFilm: state.filmReducer.loading,
    errorFilm: state.filmReducer.error,
    episodes: state.episodeReducer.episodes,
    loadingEpisode: state.episodeReducer.loading,
    errorEpisode: state.episodeReducer.error,
    categories: state.categoryReducer.categories,
    loadingCategory: state.categoryReducer.loading,
    errorCategory: state.categoryReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createFilm: (value) => dispatch(createFilm(value)),
    createEpisode: (value) => dispatch(createEpisode(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFilm);
