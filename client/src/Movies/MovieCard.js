import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const MovieCard = props => {
  const { id, title, director, metascore, stars } = props.movie;

  const [name, setName] = useState(title);
  const [editing, setEditing] = useState(false)

  const startEdit = e => {
    e.preventDefault();
    setEditing(true)
  }

  const updateName = e => {
    setName(e.target.value)
  }

  const saveData = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, {title: name, id, director, metascore, stars})
      .then(res => console.log(res))
      .catch(err => console.log(err.response));

    setEditing(false);

  }

  const titleElements = () => {
    if (editing) {
      return <form>
              <input className="input" onChange={updateName} value={name}></input>
              <button className="submit-button" onClick={saveData}>Submit</button>
            </form>
    } else {
      return <><Link to={`/movies/${id}`}>
          <h2>{name}</h2>
          </Link>
            <button className="edit-button" onClick={startEdit}>EDIT</button>
          </>
          
    }
  }
  return (
    <div className="movie-card">
      {titleElements()}

      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
