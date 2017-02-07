## WeatherApp

A simple and beautiful weather application

## Install Dependencies

From within the root directory:

```sh
npm install
```

## Usage 

From within the root directory to run webpack:

```sh
webpack
```
Open the index.html file in your browser and you're all set to go!

## Amount of Time

Dev Environment - ~ 1 hour
Coding - ~ 10 hours

## Approach to Testing

To test the application, I would use a combination of unit and integration tests to ensure the application is working as expected. I would build unit tests to test each individual React component; for example, I would write unit tests to check if the WeatherApp component's this.state.weather property has a length of 10 and if the component is rendering 10 Day components. I would also build integration tests to check if the different pieces of the system work together. The integration tests would cover the whole application, and would check, for example, if toggling the fahrenheit and celsius links change the Day Components, or if the application is in stack or horizontal layout depending on the orientation. 
