import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

const Film = (props) => {
  return (
    <div className="col-6 col-md-2 film mb-4">
      <Link to={`/detail/${props.idFilm}/${slugify(props.title, { lower: true })}/1`}>
        <img
          className="img-fluid rounded"
          src={`https://dumbflixapi.herokuapp.com/images/${props.img}`}
          alt=""
        />
        <div className="description mt-1">
          <div className="title">{props.title}</div>
          <div className="year">{props.year}</div>
        </div>
      </Link>
    </div>
  );
};

export default Film;
