
import React, { useState,  useEffect( } from "react";
import axios from "axios";


const initialItem = {
    title: "",
    director: "",
    metascore: "",
    stars: [""]
};
  
const MovieEdit = props => {
    const [item, setItem] = useState(initialItem);
    useEffect(() => {
      const itemToEdit = props.items.find(
        item => `${item.id}` === props.match.params.id
      );
  


    
  handleTextInput = e => {
    this.setState({ [e.target.title]: e.target.value });
  };

  addMovie = () => {
    const movie = {
      title: this.state.title,
      director: this.state.director,
      metascore: this.state.metascore,
      stars: this.state.stars.split(", ")
    };

    axios
      .post(`http://localhost:3333/api/movies`, movie)
      .then(movie => {
        this.props.updateMovies();
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ title: "", director: "", metascore: "", stars: [""] });
  };

  render() {
    return (
      <div className="movie-card">
        <div>
          <input
            title={"title"}
            placeholder={"Title"}
            value={this.state.title}
            onChange={this.handleTextInput}
          />
        </div>
        <div>
          <input
            title={"director"}
            placeholder={"Director"}
            value={this.state.director}
            onChange={this.handleTextInput}
          />
        </div>
        <div>
          <input
            title={"metascore"}
            placeholder={"Metascore"}
            value={this.state.metascore}
            onChange={this.handleTextInput}
          />
        </div>
        <div>
          <input
            title={"stars"}
            placeholder={"Actors separated by comma"}
            value={this.state.stars}
            onChange={this.handleTextInput}
          />
        </div>
        <button onClick={this.addMovie}>Submit</button>
      </div>
    );
  }
}

export default MovieEdit;