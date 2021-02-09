# React training

This is a React training repo

# Module 1: Introduction and Setup

In this module, we will begin to tell everything you need to know to set up your local environment and some tools that we are going to use in a near future and give some information about what we are going to see in this practice.

### Tooling and starer files

- First; you need to download and install [nodeJs](https://nodejs.org/en/) on your local machine (I recommend to you; download the `LTS` version for this project)
- Then; go to this [commit](https://github.com/oscarpolanco/react-training/commit/989aac098cc93b5081e6c3f7492c67c3a3a0bc89) in this repository and copy the `frontend` and `backend` directory to your local folder of the practice
- Download the following extensions for your `browser`(I use `chrome` so use this as a reference to search for an equivalent on the browser that you are going to use):
  - [React devtool extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  - [Apollo Client Developer Tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)
- Now download and install [mongodb compass](https://www.mongodb.com/try/download/compass)
- Need a terminal; I use [ITerm 2](https://iterm2.com/) but you can use the one of your preference
- Download and install an editor; I use [vs code](https://code.visualstudio.com/). You can choose a different one

These are the tools that we are going to need in order to advance in this practice.

### Tech stack explained

In this practice we are going to be building an app called `sick fits` that will have the following:

- Show items with all their information
- A cart that you can add the items that you can buy
- Checkout process for the cart
- Create and see orders
- Create an account
- Authenticate with that account
- Modify your profile account
- Create items
- Sell your own items
- Search for an item
- Have a backend to add all page information as an admin

Here is the stack of technologies that we are going to be using to achieve those features of our app:

- Front-End:

  - [React](https://reactjs.org/) - library to build user interfaces. `React` is really good to taken data; put it into templates and render it out on the DOM and when the data updates; `React` is really good at how efficiently update on the page.
  - [Next.js](https://nextjs.org/) - Is a framework for `React` that add `routing`; `pages`; `static rendering` or `on demand server rendering`; `images` and some more things.
  - [Apollo Client](https://www.apollographql.com/docs/react/) - Is a library that does a lot of things with `graphQL`; so in order to `query` data and create `charges` with needing a way to interact with the `graphQL` API to load the data; provide loading states; provide error states and to cache the data we are going to use this.
  - [Styled Components](https://styled-components.com/) - Is a library that will help us to do scope `CSS` on `React`.

- Backend:
  - [Keystone.js](https://www.keystonejs.com/) - Is a framework that gives users a `headless CMS` that will allow you to log in to your `CMS`; create different `data types` and instead of giving you a `keystone` theme to output all the data to the `client`, it will give to you a `graphQL` API that will allow us to write `queries` to get all the data that we need. So we are going to use `Apollo` to make these `queries` and output our data on the `frontend` so `keystone` provide all the data and `Apollo` will fetch the data to injected into the application. `Keystone.js` is written on `nodeJs` and we will use `MongoDB` as our database.
    - [Nodejs](https://nodejs.org/en/)
    - [MongoDB](https://www.mongodb.com/2)

## Module 2: Learning Next.js

On this module we will see the basics on `Next js` and build the first components that we are going to use on this app.

### An intro to Next

So `Next js` is a framework to build web applications using `React`. When we use `React` it will take your data and put it into templates then render that out to the page; when your data change it; the page will update. `Next js` is an entire framework that does routing; linking page to page; lazy loading; start to handle images; server-side rendering and static for pre-rendering out of the box.

You can see that you already have some directories to start with some basic files and on these files is the `package.json` that has all the dependencies that we are going to use on the project. So the first thing that we are going to do is on the `frontend` directory to begin to work with `Next js`. On your terminal go to the `frontend` directory and install all dependencies with the following command:
`npm install`

There is one directory that we need to be specific on `Next js` that is the `pages` directory that will be store all the components that represent the different pages of our application and `Next js` will handle the routing by default using this directory for example:

```bash
- pages/
-- order.js
```

`Next js` will use the `order` component when you are on the `http://localhost:7777/order`. This is called` file system base routing`

Now let's begin creating our pages:

- On your editor create go to the `pages` directory and create a file call `index.js`(Remember that the `pages` components should be in lowercase)
- Inside on the newly created file; export a function call `IndexPage`
  `export default function IndexPage() {}`
- Then return the following content on the function
  ```js
  export default function IndexPage() {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
  ```
- On to your terminal and go to the `frontend` directory
- Run your local server using the `dev` command: `npm run dev`
- On your browser go to http://localhost:7777/
- You should see the `Hello` message on the page

Now create the following `pages` that we will use on the application. Use the same message that we use on the `index.js` file.

|     Pages     | functions names |
| :-----------: | :-------------: |
| `account.js`  |  `AccountPage`  |
|  `order.js`   |   `OrderPage`   |
| `products.js` |  `ProductPage`  |
|   `sell.js`   |   `SellPage`    |

Another thing that we need to know about `Next js` is that out of the box do `server-side rendering` this means that when you do a `view source` of your page; it will show all the `HTML` then `React` will come and `rehydrate` it to have all the `React` functionality. `Next js` can also be `statically render` which means; that on build time you can pre-render pages so they load really quickly because the `HTML` of those pages will be already available.

## Creating a Page Layout component

Almost all the time; we need to add a `layout` for all pages on our application but as you see on `Next js` the highest that you can get is the `pages` that we create on the `page` directory. So we will need some kind of component that we can use on every `page` that will allow us to add some `layouts` like a `navbar` that will be used across all `pages` on the application.

### Creating a page layout component

- On your editor go to the `components` directory
- Create a file called `Page.js`
- On this newly created file export a function call `Page`
  `export default function Page() {}`
- On the `Page` function return the following
  ```js
  export default function Page() {
    return (
      <div>
        <h2>I am a page component</h2>
      </div>
    );
  }
  ```
- Now go to the `index` file on the `page` directory
- Import the `Page` component
  `import Page from '../components/Page';`
- Use the `Page` component on the return statement on the `IndexPage` component
  ```js
  export default function IndexPage() {
    return (
      <Page>
        <p>Hello</p>
      </Page>
    );
  }
  ```
- On your terminal go to the `frontend` directory
- Run your local server in your terminal using: `npm run dev`
- Go to `http://localhost:7777`
- You should see the `Page` component message

Now; why you can see the `Page` component message without the `index` page message? This is because we are just the message without sending the actual `children` that we send on the `IndexPage` component. In order to render the `children` of a component you need to do the following:

- On the `Page` component add an argument call `props`
  `export default function Page(props) {...}`
- Bellow the `h2` message use the `props` object with it `children` property
  ```js
  export default function Page(props) {
    return (
      <div>
        <h2>I am a page component</h2>
        {props.children}
      </div>
    );
  }
  ```
- Go to your browser and you should see both messages of the `Page` and `IndexPage` components
- We can use `es6` to use the `children` object directly with the `spread operator`
  ```js
  export default function Page({ children }) {
    return (
      <div>
        <h2>I am a page component</h2>
        {children}
      </div>
    );
  }
  ```

But with this approach we will need to manually put the `Page` component and wrap the content of the pages on it; luckily there is a way around this using some special files of `Next js` that will allow us to have access to the highest level of the page.

### Accessing the highest page levels

- On your editor; go to the `pages` directory and create a new file call `_app.js`
- Inside of this newly created file export a function import the `Page` component
  `import Page from '../components/Page';`
- Then export a function call `MyApp`
  `export default function MyApp() {}`
- As arguments of the `MyApp` function add `Component` and `pageProps`(This is `Next js` specific)
  `export default function MyApp({ Component, pageProps }) {}`
- Then return the `Page` component with the `Component` as a child and `pageProps` as a `prop` of `Component`
  ```js
  export default function MyApp({ Component, pageProps }) {
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
  ```
- Go to your terminal and restart the local server(This is one of the few times that we need to restart the local server because we change something)
- On your browser go to `http://localhost:7777`
- You should see a double `Page` component message on the page
- Go back to your editor and remove the `Page` component from the `index` file
- On your browser and you should see that you have the `Page` component message and the `IndexPage` component message
- Go to other of the pages and you should see the same effect as the `index` page
- Now on your editor create a file called `_document.js` on your `pages` directory
- Import `Document` from `next/document`
  `import Document from 'next/document';`
- Export a `class` call `MyDocument` that extends from `Document`(This is one of the few places that we will use `class` base components because there is not any `API` for `function` base components)
  `export default class MyDocument extends Document {}`
- Create a function call `render`(The `classes` on `React` have a `render` method)
  ```js
  export default class MyDocument extends Document {
    render() {}
  }
  ```
- Import the following components
  `import Document, { Html, NextScript, Main } from 'next/document';`
- On the `render` method return the following:
  ```js
  export default class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  ```
- On your terminal restart your local server
- Go to your browser and refresh the page
- Inspect the page and check the `HTML` tag and should have the `lang` you added

We will not use the `_document` file yet but we need it because we need to have access to some elements at the top of the page.
