/**
 * @Author: sarahnouh
 * @Date:   2019-08-15T17:02:08+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-15T17:35:24+02:00
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
}
