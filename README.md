# FlightInspirationSearchApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Using mock data

Mentioned api was throw 500 error so i just used mock data and also inform  on email for using mock data. [ApiLink](https://developers.amadeus.com/self-service/category/air/api-doc/flight-inspiration-search).

- Also i used hard code for origin  and we have just two element for now (Islamabad and Madrid).
- i just put mock data in assets folder and fetch through `httpClient`.
- here is link of failing api screen short [link](https://drive.google.com/file/d/1ZtjgacLImGOySxePqlVKmR_AGoqW-jw4/view?usp=sharing).


## Front End Architecture

1. core
   * models (application level models)
   * api-models (backend api models)
   * services (interact with api )

2. shared
   * share module like exporting Angular Material modules.
   * constant

3. modules (lazy loaded feature modules)
    * Features-A (Flight-inspiration)
        - components (presentational component)
        - containers (state full component)
        - models (models releated to this feature)
        - stores (here we use push base architecture using facade)
