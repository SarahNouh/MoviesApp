/**
 * @Author: sarahnouh
 * @Date:   2019-08-14
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-15
 */
import { Genre } from "../../interfaces/genre-interface";
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
    this.state = { list: [], genreList: [] };
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
    //get all the movies to be listed
    this.getAllMovies();
    //retreive a list of all genres
    this.movieService.getAllGenres().then(genres => {
      this.setState({
        genreList: genres
      });
    });
  }

  /**
   * A function called to retreive the existing movies list
   */
  getAllMovies = () => {
    //get the list of existing movies from the api
    this.movieService.getAllMovies().then(response => {
      //update the state with the new list
      this.setState({ list: response });
    });
  };

  /**
   * A function called to delete an existing movie given the movie id
   *@param movieId number;
   */
  deleteMovie = (movieId: number) => {
    this.movieService.deleteMovie(movieId).then(data => {
      this.getAllMovies();
    });
  };

  /**
   * A function called on clicking edit icon to handle editing a movie
   *@param movieId number;
   */
  handleEditClick = (movieId: number) => {
    this.props.history.push("/edit/" + movieId);
  };

  /**
   * A function called to parse genre ids to genre names
   *@param genreIdsArray number[];
   */
  getGenreNames = (genreIdsArray: number[]) => {
    //get the genre list
    let genres = this.state.genreList;
    let genreNames = genres.map((genre: Genre) => {
      //if this genre id exists -> add genre name to array
      if (genreIdsArray.indexOf(genre.id) > -1) {
        //return the genre name
        return genre.title + " ";
      } else {
        return "";
      }
    });
    return genreNames;
  };

  render() {
    return (
      <main className="container movies-list ">
        <h1 className="header">Movies List</h1>
        <div className="row">
          {this.state.list.map((movie, index) => {
            return (
              <div className="col-12 col-sm-6 col-md-4" key={index}>
                <div className="movie-item">
                  <svg
                    className="delete"
                    id="delete"
                    version="1.1"
                    viewBox="0 0 64 64"
                    onClick={() => {
                      if (movie.id !== undefined) this.deleteMovie(movie.id);
                    }}
                  >
                    <g>
                      <g
                        id="Icon-Trash"
                        transform="translate(232.000000, 228.000000)"
                      >
                        <polygon points="-207.5,-205.1 -204.5,-205.1 -204.5,-181.1 -207.5,-181.1    " />
                        <polygon points="-201.5,-205.1 -198.5,-205.1 -198.5,-181.1 -201.5,-181.1    " />
                        <polygon points="-195.5,-205.1 -192.5,-205.1 -192.5,-181.1 -195.5,-181.1    " />
                        <polygon points="-219.5,-214.1 -180.5,-214.1 -180.5,-211.1 -219.5,-211.1    " />
                        <path
                          d="M-192.6-212.6h-2.8v-3c0-0.9-0.7-1.6-1.6-1.6h-6c-0.9,0-1.6,0.7-1.6,1.6v3h-2.8v-3     c0-2.4,2-4.4,4.4-4.4h6c2.4,0,4.4,2,4.4,4.4V-212.6"
                          id="Fill-10"
                        />
                        <path d="M-191-172.1h-18c-2.4,0-4.5-2-4.7-4.4l-2.8-36l3-0.2l2.8,36c0.1,0.9,0.9,1.6,1.7,1.6h18     c0.9,0,1.7-0.8,1.7-1.6l2.8-36l3,0.2l-2.8,36C-186.5-174-188.6-172.1-191-172.1" />
                      </g>
                    </g>
                  </svg>
                  <svg
                    className="edit"
                    enableBackground="new 0 0 24 24"
                    height="24px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 24 24"
                    width="24px"
                    onClick={() => {
                      if (movie.id !== undefined)
                        this.handleEditClick(movie.id);
                    }}
                  >
                    <path d="M21.635,6.366c-0.467-0.772-1.043-1.528-1.748-2.229c-0.713-0.708-1.482-1.288-2.269-1.754L19,1C19,1,21,1,22,2S23,5,23,5  L21.635,6.366z M10,18H6v-4l0.48-0.48c0.813,0.385,1.621,0.926,2.348,1.652c0.728,0.729,1.268,1.535,1.652,2.348L10,18z M20.48,7.52  l-8.846,8.845c-0.467-0.771-1.043-1.529-1.748-2.229c-0.712-0.709-1.482-1.288-2.269-1.754L16.48,3.52  c0.813,0.383,1.621,0.924,2.348,1.651C19.557,5.899,20.097,6.707,20.48,7.52z M4,4v16h16v-7l3-3.038V21c0,1.105-0.896,2-2,2H3  c-1.104,0-2-0.895-2-2V3c0-1.104,0.896-2,2-2h11.01l-3.001,3H4z" />
                  </svg>
                  <h2 className="movie-name">{movie.title}</h2>
                  <p className="movie-year">Year: {movie.year}</p>
                  <p className="movie-budget">Budget: {movie.budget}</p>
                  <p className="movie-genre">
                    Genre/s: {this.getGenreNames(movie.category_ids)}
                  </p>
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
