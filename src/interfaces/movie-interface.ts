/**
 * @Author: sarahnouh
 * @Date:   2019-08-15T17:08:32+02:00
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-15T19:55:14+02:00
 */

/**
 *This interface represents the Movie Item
 */
export interface Movie {
  /**
   *Represents the movie's id
   *@type number
   */
  id?: number;
  /**
   *Represents the movie name
   *@type string
   */
  title: string;

  /**
   *Represents the movie year
   *@type string
   */
  year: string;

  /**
   *Represents the movie budget
   *@type string
   */
  budget: string;
}
