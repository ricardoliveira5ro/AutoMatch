# Backend

The application's backend powers the car dealership platform by offering a robust and scalable API for managing car listings. It handles business logic, data storage, and front-end integration.

## 🛠️ Tech Stack

* Java
* Spring Boot
* Postgresql

## 📐 Architecture Overview

* Controller
* Repository (implementing JPA repository)
* Service
* Model (Hibernate Entities)
* DTO (Request and Response)
* Security Configuration (JWT Filter)
* Exception Handler
* Rate Limiting Filter
* Data Loader (seeding DB)

## 📍 Endpoints

This section outlines the available API endpoints.

** Authentication token required

#### 👤 User Controller `('/api/users')`

* `/signup` *POST*:
Create a new user account with registration details such as email, password, first name, last name and phone number
* `/login` *POST*: 
Authenticate a user by providing their credentials email and password. If valid, then a JWT token is returned to be included in the header for subsequent requests to protected endpoints
* `/profile` *GET*: **
Retrieve the current user's profile information.
* `/info` *PUT*: **
Update the current user's profile information, first name, last name, phone number and location

#### 🚗 Car Controller  `('/api/cars')`

* `/` *GET*:
Retrieve a paginated list of all cars. The request accepts `page` and `size` query parameters to control pagination
* `/recommended` *GET*:
Retrieve a paginated list of recommended cars. The request accepts `page` and `size` query parameters to control pagination
* `/search` *GET*:
Search for cars based on various filter parameters passed in the query string
* `/{id}` *GET*:
Retrieve detailed information about a specific car by its `id`
* `/{id}` *DELETE*: **
Delete a car listing by its `id`. This action can only be performed by the listing's owner
* `/listings` *GET*: **
Retrieve a list of user's active listings
* `/newListing` *POST*: **
Create a new car listing containing the details of the car and photos
* `/updateListing/{id}` *PUT*: **
Update an existing car listing by its `id`. This action can only be performed by the listing's owner

#### ❤️ Favorites Controller `('/api/favorites')`

* `/` *GET*: **
Retrieve the list of all cars that the user has marked as favorites
* `/{carId}` *GET*: **
Check if a specific car is in the user's favorites
* `/{carId}` *POST*: **
Add a car to the user's list of favorites
* `/{carId}` *DELETE*: **
Remove a car from the user's favorites list.

## 🚀 Deployment

* Web service hosted in Koyeb by a docker image
* Database hosted in Neon