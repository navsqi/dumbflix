import React, { Component } from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import { Player, BigPlayButton } from 'video-react';
import { Link, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { getFilmAndEpisodes } from '../redux/actions/film.action';
import slugify from 'slugify';

class PlayerVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  // Set state index Carousel
  setIndex = (index) => {
    this.setState({ index });
  };

  // Handle Carousel Episode (to set current carousel index)
  handleSelect = (selectedIndex, e) => {
    this.setIndex(selectedIndex);
  };

  componentDidMount() {
    this.props.getFilmAndEpisodes(this.props.match.params.idFilm);
  }

  render() {
    // Inital Role
    const { isLogin, user, film, loading, error } = this.props;
    let idEp = this.props.match.params.idEp == 1 ? false : this.props.match.params.idEp;
    let episodes = [];
    if (Object.keys(film).length > 0 && film.episodes != undefined) episodes = film.episodes;

    return (
      <div>
        <div className="jumbotron jumbotron-detail">
          <Container>
            {episodes.length > 0 && user.subscribe
              ? film.episodes.map((episode, index) => {
                  if (Number(idEp) === episode.id) {
                    return (
                      <Player
                        key={episode.id}
                        className="player-video"
                        playsInline
                        poster={`http://localhost:5000/images/${episode.thumbnailEp}`}
                        src={`${episode.linkEp}`}
                      >
                        <BigPlayButton position="center" />
                      </Player>
                    );
                  }

                  if (!idEp && index === 0) {
                    return (
                      <Player
                        key={episode.id}
                        className="player-video"
                        playsInline
                        poster={`http://localhost:5000/images/${episode.thumbnailEp}`}
                        src={`${episode.linkEp}`}
                      >
                        <BigPlayButton position="center" />
                      </Player>
                    );
                  }

                  return false;
                })
              : false}
            {/* <Player
              className="player-video"
              playsInline
              poster="https://placeimg.com/1000/540/any"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
              <BigPlayButton position="center" />
            </Player> */}
          </Container>
        </div>
        <Container>
          <Row className="d-flex justify-content-end mb-5 mr-2">
            {/* Button Add Episode */}
            {!loading && !error && isLogin && user.role == 'admin' ? (
              <a
                className="btn btn-red"
                href={`/admin/${this.props.match.params.idFilm}/add-episode`}
              >
                + Add Episode
              </a>
            ) : (
              false
            )}
          </Row>
          <Row>
            {/* Description / Cover */}
            <Col>
              <Row>
                <Col md="auto" xs="12">
                  {film.thumbnailFilm === undefined ? (
                    false
                  ) : (
                    <Image src={`http://localhost:5000/images/${film.thumbnailFilm}`} fluid />
                  )}
                </Col>
                <Col className="description-detail">
                  <h1>{film.title}</h1>
                  <div className="identity">
                    <span>{film.year}</span>
                    <span className="type">
                      {!loading && film.category != undefined ? film.category.name : false}
                    </span>
                  </div>
                  <p>{film.description}</p>
                </Col>
              </Row>
            </Col>

            {/* Carousel Episode */}
            <Col md="5">
              <Carousel
                interval={null}
                indicators={false}
                activeIndex={this.state.index}
                onSelect={this.handleSelect}
              >
                {!loading && !error && film.episodes != undefined
                  ? film.episodes.map((episode) => {
                      return (
                        <Carousel.Item key={episode.id}>
                          <Link
                            to={`/detail/${film.id}/${slugify(film.title, { lower: true })}/${
                              episode.id
                            }`}
                          >
                            <img
                              className="d-block w-100 episode"
                              src={`http://localhost:5000/images/${episode.thumbnailEp}`}
                              alt="First slide"
                            />
                          </Link>
                          <Carousel.Caption>
                            <h6>{episode.title}</h6>
                          </Carousel.Caption>
                        </Carousel.Item>
                      );
                    })
                  : false}
                {/* <Carousel.Item>
                  <Link to={`/detail/${film.id}/1`}>
                    <img
                      className="d-block w-100 episode"
                      src="https://placeimg.com/1000/540/any"
                      alt="First slide"
                    />
                  </Link>
                  <Carousel.Caption>
                    <h6>The Witcher: Episode 1</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Link to={`/detail/${film.id}/2`}>
                    <img
                      className="d-block w-100 episode"
                      src="https://placeimg.com/1000/540/any"
                      alt="First slide"
                    />
                  </Link>
                  <Carousel.Caption>
                    <h6>The Witcher: Episode 2</h6>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Link to={`/detail/${film.id}/3`}>
                    <img
                      className="d-block w-100 episode"
                      src="https://placeimg.com/1000/540/any"
                      alt="First slide"
                    />
                  </Link>
                  <Carousel.Caption>
                    <h6>The Witcher: Episode 3</h6>
                  </Carousel.Caption>
                </Carousel.Item> */}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.filmReducer.films,
    isLogin: state.authReducer.isLogin,
    user: state.authReducer.user,
    loading: state.filmReducer.loading,
    error: state.filmReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmAndEpisodes: (idFilm) => dispatch(getFilmAndEpisodes(idFilm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PlayerVideo));
