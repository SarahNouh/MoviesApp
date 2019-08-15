/**
 * @Author: sarahnouh
 * @Date:   2019-08-14
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-15
 */
import { MovieListState } from "../../interfaces/movie-list-state-interface";
import MovieService from "../../services/movie-services";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 *This component represents the page containing the movies list
 */
class MoviesList extends React.Component<RouteComponentProps, MovieListState> {
  /**
   * An instance of the movieService to use it for interaction with the api
   *@type MovieService
   */
  movieService: MovieService;
  constructor(props: RouteComponentProps) {
    super(props);
    this.movieService = new MovieService();
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
    //get the list of existing movies from the api
    this.movieService.getAllMovies().then(response => {
      //update the state with the new list
      this.setState({ list: response });
    });
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
                  <h2 className="movie-name">{movie.title}</h2>
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
