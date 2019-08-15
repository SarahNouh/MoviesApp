/**
 * @Author: sarahnouh
 * @Date:   2019-08-14
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-15
 */
import { MovieListState } from "../../interfaces/movie-list-state-interface";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 *This component represents the page containing the movies list
 */
class MoviesList extends React.Component<RouteComponentProps, MovieListState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = { list: [] };
  }

  /**
   * A function called on clicking add movie button
   *@param event React.MouseEvent
   */
  handleRedirectToForm = (event: React.MouseEvent) => {
    this.props.history.push("/");
  };

  /**
   * A function called on component mounting
   */
  componentDidMount() {
    //get the existing movies stored in the local storage
    //get all the movies keys
    let keys = Object.keys(localStorage);
    let moviesList = [];
    //iterate on all the keys, extract the movies data into a new array
    for (let i = 0; i < keys.length; i++) {
      let movieItem = JSON.parse(localStorage.getItem(keys[i]) || "");
      moviesList.push(movieItem);
    }
    //update the state with the new list
    this.setState({ list: moviesList });
  }
  render() {
    return (
      <main className="container movies-list ">
        <h1 className="header">Movies List</h1>
        <div className="row">
          {this.state.list.map((movie, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="movie-item">
                  <h2 className="movie-name">{movie.name}</h2>
                  <p className="movie-year">Year: {movie.year}</p>
                  <p className="movie-budget">Budget: {movie.budget}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(event: React.MouseEvent) => {
            this.handleRedirectToForm(event);
          }}
        >
          Add Movie
        </button>
      </main>
    );
  }
}

export default MoviesList;
