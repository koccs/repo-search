# RepoSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Assignment instructions

Create an Angular 5+ SPA that will allow a user to search a github.com repository by name and display a repository’s relevant information such as URL, description, forks count, stargazers
count, open issues count etc. Also, display the available issues of a repository in a separate
section in the UI:
* Implement the best design possible for the user interface - search and search results,
and issues section.
* Use best practices in writing JavaScript / Typescript, CSS / SCSS / LESS, and HTML.
Write clearly and use proper MVC structure and proper code documentation to write the
application.
* Write unit tests.
* Provide a clear README with instructions on how to setup, build, run, and test the
application.
* Create a github repository for the application so we can pull it down and test it.

## Download node packages

Run `npm i` to download node packages which are necessary to run the applications.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng test --watch=false --code-coverage` to generate code coverage report.

## Application description

### Start page

The application start page provides repository search functionality with a form where the search text is required.

Search results are displayed under the form.

* Repository names are local links for details page. 
* Repository stats are displayed on the right side.
* Under the description of the repository there is direct link which opens the github page of the repository in a new tab.

### Details page

Details page displays the most recent open issues for the selected repository.

* Title of the issue is an external link which opens the github page of the issue.
* Last update date and comment are displayed under the title.
* Body of the is scrollable if it is too long.

### Possible improvements

* Paging for search and issues if the result is not complete (github provide a property about this).
* Keep previous search after details page was open (state management).
* Query and display closed issues in a separate part of the details page.
