# Bookstore Web App

## Overview

Welcome to the Bookstore Web App, a full-stack application to manage and showcase a collection of books. This repository contains both the front-end and back-end code for the application.

## Front-End

### Technology Overview

The front-end of the Bookstore Web App is built using React. The main entry point for the React application. It defines the routes using `react-router-dom` to navigate between different pages. Responsible for rendering the `App` component, providing routing capabilities and utilizing `SnackbarProvider` for displaying notifications.

## Back-End

### Description

The back-end of the Bookstore Web App is built using Express and MongoDB with Mongoose. 

## API Endpoints

- **Create a New Book**
  - **Route:** `/`
  - **Method:** `POST`
  - **Description:** Adds a new book to the database.

- **Show All Books**
  - **Route:** `/`
  - **Method:** `GET`
  - **Description:** Fetches all books from the database.

- **Show Book by ID**
  - **Route:** `/:id`
  - **Method:** `GET`
  - **Description:** Retrieves a specific book by its unique ID.

- **Update a Book**
  - **Route:** `/:id`
  - **Method:** `PUT`
  - **Description:** Modifies an existing book by its unique ID.

- **Delete a Book**
  - **Route:** `/:id`
  - **Method:** `DELETE`
  - **Description:** Removes a specific book by its unique ID.

*Have a wonderful day :)*

<hr>
<p align="right"><sub><i>Created by Muhammad Harviando - 2023</i></sub></p>
