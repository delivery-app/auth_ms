# Auth API - Delivery APP
API to support the authentication and token generation for the delivery app, aditionally, it's the entry point for the other APIS.

## Table of contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)

## Introduction
This is a delivery app that will allow users to buy products from restaurants and will assign a deliverer for its order. The architecture of this project is based on microservices; this microservice has two main functionalities, generating and authenticating JWT tokens, and recieve and redirect request to the other microservices of the architecture.

## Features
This API allows the caller to:

- [x] Get a token by giving its email and password.
- [x] Make the allowed requests to the register API.
- [x] Make the allowed requests to the shopping_cart API.

## Technologies
This project is created with:

* NPM 3.5.2
* NodeJs 8.10
* Express 4.17.1
* Passport

For more details of the packages and dependencies used in this service, please go to the 'package.json' on this repo.

## Setup
* To run this project you will need NPM to install the node dependencies and run the dev environment.
* To install the dependencies you need to run 'npm install' inside the main folder.
* To run the shopping cart API just run 'npm start' inside the main folder.