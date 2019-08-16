/**
 * @Author: sarahnouh
 * @Date:   2019-08-15T17:02:08+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-16T05:16:39+02:00
 */

/**
 *This interface represents the state for the AddMovie Component
 */
export interface AddMovieState {
  /**
   *Represents the movie name
   *@type string
   */
  movieName: string;

  /**
   *Represents the movie year
   *@type string
   */
  movieYear: string;

  /**
   *Represents the movie budget
   *@type string
   */
  movieBudget: string;

  /**
   *Represents the presence of a validation error related to the movie's name
   *@type booolean
   */
  nameError: boolean;

  /**
   *Represents the presence of a validation error related to the movie's year
   *@type booolean
   */
  yearError: boolean;

  /**
   *Represents the presence of a validation error related to the movie's budget
   *@type booolean
   */
  budgetError: boolean;

  /**
   *Represents the genre options
   *@type number[]
   */
  genreOptions: number[];

  /**
   *Represents the selected genre/s
   *@type string[]
   */
  selectedGenres: string[];
}
