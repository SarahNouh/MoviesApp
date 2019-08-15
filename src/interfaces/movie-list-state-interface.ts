/**
 * @Author: sarahnouh
 * @Date:   2019-08-15T17:08:13+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-15T17:34:15+02:00
 */
import { Movie } from "./movie-interface";

/**
 *This interface represents the state for the MovieList Component
 */
export interface MovieListState {
  /**
   *Represents the list of the movies where each movie has name,year and buget
   *@type Movie[]
   */
  list: Movie[];
}
