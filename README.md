# Fullstack React and GraphQL training

Fullstack React and GraphQL training.

## Requirements

- [Nodejs](https://nodejs.org/en/)
- [Cloudinary](https://cloudinary.com/) account
- [MongoDB](https://www.mongodb.com/2)(I recommend [mongo atlas](https://www.mongodb.com/cloud/atlas))
- [Ethereal](https://ethereal.email/) email

## Tools and modules on use in the application

- [React](https://reactjs.org/) on the client-side of the application
- [Next.js](https://nextjs.org/) on the client-side of the application
- [Styled Components](https://styled-components.com/) for the styles of the application
- [Keystone.js](https://www.keystonejs.com/) as a `CMS` of the application
- [Cloudinary](https://cloudinary.com/) to store the `images` of the application
- [dotenv](https://www.npmjs.com/package/dotenv) for the `environment variables` of the application
- [GraphQL](https://graphql.org/) for the `queries` and `mutations`
- [Apollo](https://www.apollographql.com/) for handle the `graphQL` API and the `cache` of the `queries`
- [Ethereal](https://ethereal.email/) for an example email service
- [nodemailer](https://nodemailer.com/about/) to define and send an email

## Pages

- [Home](http://localhost:7777/)
- [Products](http://localhost:7777/products)
- [Single Product](http://localhost:7777/product/60346ef344fcaa3ea38dcf26)(This is one of the `testing` data examples; check the `Inject testing data to the application` section; you only need to change the `id` of the end of the `URL` with one of your `products`)
- [Update Product](http://localhost:7777/update?id=60346ef344fcaa3ea38dcf24)(This is one of the `testing` data examples; check the `Inject testing data to the application` section; you only need to change the `id` of the end of the `URL` with one of your `products`)
- [Sell](http://localhost:7777/sell)
- [Orders](http://localhost:7777/order)
- [Account](http://localhost:7777/account)
- [Signin page](http://localhost:7777/signin)
- [Reset page](http://localhost:7777/reset?token=send_your_valid_token)
- [CMS home](http://localhost:3000/)

## Steps to run the frontend side of the application

- On your terminal go to the `frontend` directory
- Install all dependencies using: `npm install`
- Run your local server using: `npm run dev`
- On your browser; go to the [homepage](http://localhost:7777/)

## Steps to run the backend side of the application

- On the root of the `backend` directory create a file called `.env`
- Add the following content to your newly created file
- Add the following content
  ```bash
  CLOUDINARY_CLOUD_NAME=my_cloudenay_cloud_name
  CLOUDINARY_KEY=my_cloudenary_api_number
  CLOUDINARY_SECRET=my_cloudenary_secret
  COOKIE_SECRET="random_string"
  DATABASE_URL=my_mongoDB_connection_string
  FRONTEND_URL="http://localhost:7777"
  MAIL_HOST="smtp.ethereal.email"
  MAIL_PORT=587
  MAIL_USER="your_ethereal_username"
  MAIL_PASS="your_ethereal_password"
  ```
- On your terminal; go to the `backend` directory
- Install all dependencies using: `npm install`
- Run your local server using `npm run dev`
- On your browser; go to `http://localhost:3000/`

## Inject testing data to the application

- On your terminal; go to the `backend` directory
- Install all dependencies using: `npm install`
- Run the following command `npm run seed-data`
