import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { films } from '../data/data.js';

class Jumbotron extends Component {
  // Dynamic Jumbotron Component
  jumbotron = (id, image, title, description) => {
    return (
      <div key={id}>
        {
          <div
            className="jumbotron highlight"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(104, 106, 116, 0), rgba(0, 0, 0, 0.99)), url("/images/${image}")`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="container">
              <div className="jumbotron-desc">
                <h1 className="display-3">{title}</h1>
                <p>{description}</p>
              </div>
              <p>
                <Link className="btn btn-red btn-lg" to={`/detail/${id}`} role="button">
                  &#9658; Watch Now
                </Link>
              </p>
            </div>
          </div>
        }
      </div>
    );
  };

  render() {
    // get jumbotron from params
    switch (this.props.match.params.categoryName) {
      case 'tv-shows':
        // eslint-disable-next-line no-lone-blocks
        return films.map((film, index) => {
          return film.id === '1'
            ? this.jumbotron(film.id, film.jumbotron, film.title, film.description)
            : false;
        });

      case 'movies':
        // eslint-disable-next-line no-lone-blocks
        return films.map((film, index) => {
          return film.id === '10'
            ? this.jumbotron(film.id, film.jumbotron, film.title, film.description)
            : false;
        });

      default:
        // eslint-disable-next-line no-lone-blocks
        return films.map((film, index) => {
          return film.id === '1'
            ? this.jumbotron(film.id, film.jumbotron, film.title, film.description)
            : false;
        });
    }
  }
}

export default withRouter(Jumbotron);
