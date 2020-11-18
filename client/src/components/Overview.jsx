import React, { Component } from 'react';
import Film from './Film';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFilms } from '../redux/actions/film.action';

class Overview extends Component {
  componentDidMount() {
    this.props.getFilms();
  }

  render() {
    const { films, loading, error } = this.props;
    // TV Series
    if (this.props.match.params.categoryName && this.props.match.params.id) {
      return (
        <React.Fragment>
          <div className="container mb-2">
            <h2 className="main-title">
              {this.props.match.params.categoryName === 'tv-shows' ? 'TV Shows' : 'Movies'}
            </h2>
            <div className="row list-film">
              {films.length > 0 && !loading && !error ? (
                films
                  .filter((film) => film.category.id === Number(this.props.match.params.id))
                  .map((film) => {
                    return (
                      <Film
                        key={film.id}
                        img={film.thumbnailFilm}
                        title={film.title}
                        year={film.year}
                        idFilm={film.id}
                      />
                    );
                  })
              ) : (
                <p className="text-center">LOADING....</p>
              )}
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.props.page === 'admin' && this.props.category) {
      return (
        <React.Fragment>
          <div className="container mb-2">
            <div className="row list-film">
              {films.length > 0 && !loading && !error ? (
                films
                  .filter((film) => film.category.id == this.props.category)
                  .map((film) => {
                    return (
                      <Film
                        key={film.id}
                        img={film.thumbnailFilm}
                        title={film.title}
                        year={film.year}
                        idFilm={film.id}
                      />
                    );
                  })
              ) : (
                <p className="text-center">LOADING....</p>
              )}
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="container mb-4">
            <h2 className="main-title">TV Shows</h2>
            <div className="row list-film">
              {films.length > 0 && !loading && !error ? (
                films
                  .filter((film) => film.category.name === 'TV Shows')
                  .map((film) => {
                    return (
                      <Film
                        key={film.id}
                        img={film.thumbnailFilm}
                        title={film.title}
                        year={film.year}
                        idFilm={film.id}
                      />
                    );
                  })
              ) : (
                <p className="text-center">LOADING....</p>
              )}
            </div>
          </div>

          <div className="container mb-2">
            <h2 className="main-title">Movies</h2>
            <div className="row list-film">
              {films.length > 0 && !loading && !error ? (
                films
                  .filter((film) => film.category.name === 'Movies')
                  .map((film) => {
                    return (
                      <Film
                        key={film.id}
                        img={film.thumbnailFilm}
                        title={film.title}
                        year={film.year}
                        idFilm={film.id}
                      />
                    );
                  })
              ) : (
                <p className="text-center">LOADING....</p>
              )}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.filmReducer.films,
    loading: state.filmReducer.loading,
    error: state.filmReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilms: () => dispatch(getFilms('?order=id:asc')),
  };
};

// Dynamic Page with withRouter
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Overview));
