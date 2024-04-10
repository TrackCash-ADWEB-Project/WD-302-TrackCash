TrackCash Application Setup Guide

Developed by:
     CASTRO, EZRALYN S.
     NUNAG, JAIRA MICAH P.
     PARAS, SHANE NICOLE B.
     QUIATCHON, PATRICIA MAE Q.


---------- INSTALL DEPENDENCIES ----------

Node Package Manager essentials
npm install

Angular Material
ng add @angular/material


---------- STEP 1: FRONTEND ----------
o Create a new Angular project named TrackCash.
o Generate the following components inside the components folder: about, dashboard, edit-expense, edit-income, edit-transaction, expenses, and income.
o Generate the service inside the service folder, named 'crud'.
o Inside the service folder, create a new file called Transaction.ts.


---------- STEP 2: BACKEND ----------
o Create a node-rest-api folder: Inside the node-rest-api folder, create another folder called 'node-backend'
  - install an instance of mongoose, initialize npm
  - npm install --save body-parser cors express mongoose

o Inside the node-backend folder, create a file called index.js 
  - This is where expressjs, mongoose are integrated. 
  - Routes are also set here.

o Create 3 folders - database, model, routes
  - Inside database folder, create db.js
  - Inside model folder, create Transaction.js
  - Inside routes folder, transaction.routes.js


---------- STEP 3: LAUNCH THE WEB APPLICATION ----------
o Run the backend
  > Check PATH -> C:\>TrackCash\node-rest-api-node-backend\node index.js

Run the database (mongo)
  > open mongodb compass
  > connect it to mongodb://localhost:27017

Run the Angular 
  > ng serve
