/**
 * @Author: sarahnouh
 * @Date:   2019-08-15T18:28:54+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-16T01:01:49+02:00
 */

import { Movie } from "../interfaces/movie-interface";

const API_URL = "https://frontend-recruitment-challenge.herokuapp.com";

/**
 *This component contains all the functions that interacts with the movies apis
 */
class MovieService {
  /**
   * A function called to retreive the list of existing movies
   */
  async getAllMovies() {
    //set the url
    const url = `${API_URL}/movies`;
    //fetch the data
    return fetch(url).then(response => response.json());
  }

  /**
   * A function called to add a new movie to the existing list
   *@param movie Movie
   */
  async addMovie(movie: Movie) {
    //set the url
    const url = `${API_URL}/movies`;
    //store the new movie
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    }).then(response => response.json());
  }

  /**
   * A function called to delete an existing movie given the movie's id
   *@param movieId number
   */
  async deleteMovie(movieId: number) {
    //set the url
    const url = `${API_URL}/movies/${movieId}`;
    //delete the  movie
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  }
}
export default MovieService;
