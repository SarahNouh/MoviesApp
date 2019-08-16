This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is created to include the following: ReactJS, Typescript, SCSS, Boostrap, React Router


### Some Code Conventions:
  1. All imports should be sorted alphabetically
  2. Src is split into several folders:
     - **Pages**:
       - This folder should contain all Pages for this web application, both static and dynamic.
       - we can define *Pages* as the entire view a user will see.
       - A page would essentially consist of a set of components.
       - Each page should have it's own folder; having the same page-component name. That folder should contain the page's tsx file, css file and test file if any.
     - **Services**:
       - This folder should contains all Services that will allow us to fetch, transform, and store data.
     - **Interfaces**:
       - This folder should contain all the interfaces used within our application
     - **Images**:
       - This folder should contain all the assets needed in our application
       
  3. **Naming Conventions**: 
     - *pages* names should be written in **PascalCase**
     - *Files* and *Folders* names should be written in **kebab-case**
  4. All files should have *headers* that contain author and file information
  5. All components/pages should be well commented
     
## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the missing packages if any.<br>

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
