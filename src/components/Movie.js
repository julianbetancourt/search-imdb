import React from 'react';

const Movie = ({img, title, year, id}) => {
  const noImage = 'http://placehold.it/300x423';
  return (
    <div className="well">
      <div className="row">
        <div className="col-md-4">
          <img src={img !== 'N/A' ? img : noImage} alt="" className="thumbnail img-responsive"/>
        </div>
        <div className="col-md-8">
          <h4>{title}</h4>
          <ul className="list-group">
            <li className="list-group-item">Year Released: {year}</li>
            <li className="list-group-item">IMDB ID: {id}</li>
          </ul>
          <a href={`http://www.imdb.com/title/${id}`} className="btn btn-primary" target="_blank">View on IMDB</a>
        </div>
      </div>
    </div>
  );
}



export default Movie;
