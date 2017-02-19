# AncestryCodeTest

This repository is broken into two parts, the backend and the frontend. The backend provides a RESTful API which is consumed by the frontend. The frontend is an Angular 1 application written with ES6 and built using webpack.

## Backend
The backend is an ASP.Net MVC application written with WebAPI and Entity Framework 6. It is backed by a instance of SQL Sever Express LocalDB and includes the MDF file for local development. All packages and dlls should be available as part of this git repository.

The project was constructed using Entity Frameworks Code First convention in which a Plain Old C# Object (POCO) is created, annotated and used by Entity Framework to create a corisponding database table. In addition to this, using the code first model allows scafolding of RESTful endpoints.

To use the project simply open is in Visual Studio and run the build. On successful completeion a browser window will open at `http:/localhost:5555/help` which will list the available API endpoints and documentaion on how to use them.

## Frontend
The frontend is an Angular 1 application writen using ES6 and built with webpack to allow for modules to be used. 

To use the frontend - from the frontend folder 

`npm install`

`npm start`

This will start the webpack build process and serve the page using `webpack-dev-server` and is hosted at `http://localhost:8080`
