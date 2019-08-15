/**
 * @Author: sarahnouh
 * @Date:   2019-08-14
 * @Last modified by:   sarahnouh
 * @Last modified time: 2019-08-15
 */
import { AddMovieState } from "../../interfaces/add-movie-state-interface";
import { Movie } from "../../interfaces/movie-interface";
import MovieService from "../../services/movie-services";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

/**
 *This component represents the page containing the form to add a new movie
 */
class AddMovie extends React.Component<RouteComponentProps, AddMovieState> {
  /**
   * An instance of the movieService to use it for interaction with the api
   *@type MovieService
   */
  movieService: MovieService;
  constructor(props: RouteComponentProps) {
    super(props);
    this.movieService = new MovieService();
    //initializing state values
    this.state = {
      movieName: "",
      movieYear: "",
      movieBudget: "",
      nameError: false,
      yearError: false,
      budgetError: false
    };
  }

  /**
   * A function called on clicking submit button
   *@param event React.MouseEvent
   */
  handleSubmitForm = (event: React.MouseEvent) => {
    //prevent default submit behavior
    event.preventDefault();
    //create an object with the current movies data
    let movieObject: Movie = {
      title: this.state.movieName,
      year: this.state.movieYear,
      budget: this.state.movieBudget
    };
    //if we have values for the name,year and budget -> store them and redirect
    if (
      movieObject.title !== "" &&
      this.validMovieYear(movieObject.year) &&
      this.validMovieBudget(movieObject.budget)
    ) {
      //storing the new movie object using the apis
      this.movieService.addMovie(movieObject).then(data => {
        //redirect to the movies listing page
        this.props.history.push("/all");
      });
      //clear state to clear all input values after submitting
      this.setState({
        movieName: "",
        movieYear: "",
        movieBudget: ""
      });
    } else {
      //validate the inputs
      let nameError: boolean = false;
      let yearError: boolean = false;
      let budgetError: boolean = false;

      if (movieObject.title === "") nameError = true;
      if (!this.validMovieYear(movieObject.year)) yearError = true;
      if (!this.validMovieBudget(movieObject.budget)) {
        budgetError = true;
      }

      //update the state with the new values for the validation
      this.setState({
        nameError: nameError,
        yearError: yearError,
        budgetError: budgetError
      });
    }
  };

  /**
   * A function called to validate the value entered for the movie's budget
   *@param budget string
   */
  validMovieBudget = (budget: string): boolean => {
    if (budget !== "" && parseInt(budget) > 0) {
      return true;
    }
    return false;
  };

  /**
   * A function called to validate the value entered for the movie's year
   *@param year string
   */
  validMovieYear = (year: string): boolean => {
    let currentYear = new Date().getFullYear();
    if (year !== "" && parseInt(year) > 0 && parseInt(year) <= currentYear) {
      return true;
    }
    return false;
  };

  /**
   * A function called on changing the movie name input
   *@param event React.ChangeEvent
   */
  handleMovieNameChange = (event: React.ChangeEvent) => {
    //update the state to store the movie's name
    this.setState({
      movieName: (event.target as HTMLInputElement).value
    });
  };

  /**
   * A function called on changing the movie year input
   *@param event React.ChangeEvent
   */
  handleMovieYearChange = (event: React.ChangeEvent) => {
    //update the state to store the movie's year
    this.setState({
      movieYear: (event.target as HTMLInputElement).value
    });
  };

  /**
   * A function called on changing the movie budget input
   *@param event React.ChangeEvent
   */
  handleMovieBudgetChange = (event: React.ChangeEvent) => {
    //update the state to store the movie's budget
    this.setState({
      movieBudget: (event.target as HTMLInputElement).value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container add-movie">
          <header>
            <h4 className="title">Add A New Movie</h4>
            <p className="subtitle">
              Enter the movie's name, year and budget in the form below
            </p>
          </header>
          <form>
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                aria-describedby="MoviesName"
                placeholder="Enter a movie's name"
                value={this.state.movieName}
                onChange={(event: React.ChangeEvent) => {
                  this.handleMovieNameChange(event);
                }}
              />
              {this.state.nameError ? (
                <p className="validation-error">please enter a movie's name</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="inputYear">Year</label>
              <input
                type="number"
                className="form-control"
                id="inputYear"
                placeholder="Enter the movie's year of production"
                value={this.state.movieYear}
                onChange={(event: React.ChangeEvent) => {
                  this.handleMovieYearChange(event);
                }}
              />
              {this.state.yearError ? (
                <p className="validation-error">
                  please enter a valid year of production, ex: 2015
                </p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="inputBudget">Budget</label>
              <input
                type="number"
                className="form-control"
                id="inputBudget"
                placeholder="Enter the movie's budget estimate"
                value={this.state.movieBudget}
                onChange={(event: React.ChangeEvent) => {
                  this.handleMovieBudgetChange(event);
                }}
              />
              {this.state.budgetError ? (
                <p className="validation-error">
                  please enter a valid movie's budget, ex: 50000
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(event: React.MouseEvent) => {
                this.handleSubmitForm(event);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddMovie;
