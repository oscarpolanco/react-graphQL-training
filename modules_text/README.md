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

### Creating our Header and Nav component

We already have a `Page` component and this will wrap all the components that need to be on all pages like the `header`; `footer` or `navigation bar`. In the case of this section we will begin with the components that belong to the `header` of our pages like it show next:

- On your editor go to the `component` directory
- Create a file called `Header.js`
- Inside of the newly created file; export a function call `Header`
  `export default function Header() {}`
- Then return a `header` tag with some content
  ```js
  export default function Header() {
    return (
      <header>
        <h2>Hello Im a header</h2>
      </header>
    );
  }
  ```
- Go to your `Page` component
- Import the `Header` component
  `import Header from './Header';`
- Use the `Header` component on the `Page` component(Since is the first thing of the page we put it on the top of the `return`)
  ```js
  export default function Page({ children }) {
    return (
      <div>
        <Header />
        <h2>I am a page component</h2>
        {children}
      </div>
    );
  }
  ```
- On your terminal; run your local server using: `npm run dev`
- Go to `http://localhost:7777` on your browser
- You should see the `Header` component message on the page
- Now we can go back to the `Header` component to add the initial markup that we need. We will have a `logo`; a `navbar` and a `search` on the `header`. Add the following to the `header` component:
  ```js
  export default function Header() {
    return (
      <header>
        <div className="bar"></div>
        <div className="sub-bar">
          <p>Search</p>
        </div>
      </header>
    );
  }
  ```
  Need to add the exact classes so you don't have any issue with the styles later
- As you may know; the logo almost always is a link to the homepage so we need to add an element that help us with that; in this case; an anchor tag
  ```js
  export default function Header() {
    return (
      <header>
        <div className="bar">
          <a href="/">Sick fits</a>
        </div>
        <div className="sub-bar">
          <p>Search</p>
        </div>
      </header>
    );
  }
  ```
- Go to your browser and refresh the page
- Click on the `Slick fits` link
- You should see how the page redirect to the correct place and refresh it

#### Navigate the app throw links

On our application, we want to be able to move page to page as quickly as possible and the `anchor` doesn't help us with that because it refreshes the page every time but `Next` can help us with this by using a `Link` component. `Next` use a combination of `HTML 5 push state` that changes the `URL` as well as the ability to trigger and rerender pages when that `URL` has changed. In order to use that `Next` feature I do the following:

- On the `Header` component import the `Link` component from `next/link'`
  `import Link from 'next/link';`
- Sustitute the `anchor` tag with the `Link` component
  `<Link href="/">Sick fits</Link>`
- Go to your browser and refresh the page
- Click on the `Slick fits` link
- You should be able to navigate to the correct place and should not se a page reload(The correct page content should be displaying)

At the end for internal app navigation use the `Link` component and for external(so a link to another page) use an `anchor` tag

### Creating a Nav component

- On your editor; go to the `components` directory and create a new file call `Nav.js`
- Import the `Link` component from `next/link'`
  `import Link from 'next/link';`
- Inside of the newly created file; export a function call `Nav`
  `export default function Nav() {}`
- Return the following content
  ```js
  export default function Nav() {
    return (
      <nav>
        <Link href="/products">product</Link>
        <Link href="/sell">sell</Link>
        <Link href="/orders">orders</Link>
        <Link href="/account">account</Link>
      </nav>
    );
  }
  ```
- Go back to the `Header` component
- Import the `Nav` component
  `import Nav from './Nav';`
- Put the `Nav` component at the end of the content of the `header` tag
  ```js
  export default function Header() {
    return (
      <header>
        <div className="bar">
          <Link href="/">Sick fits</Link>
        </div>
        <div className="sub-bar">
          <p>Search</p>
        </div>
        <Nav />
      </header>
    );
  }
  ```
- Go back to your browser and refresh the page
- You should see the `Nav` component links
- Click on the links and you should navigate the page

## Module 3: CSS and styled-components

We need to begin to add some styling to our pages. There are a lot of ways to add `CSS` to our `React` project; on this project, we will use `scope CSS` using the `styled-components` package. The idea of `styled-components` is that you define your `CSS` in components and those things we can scope it really easy and you can use `js` values inside of those components.

### Using styled components

- On your editor go to the `components` directory
- Go to the `Header` component file
- Import `styled` from `styled-components`
  `import styled from 'styled-components';`
- We are going to style the logo first; before the `Header` component function creates a constant call `Logo`(with uppercase because will be a component) and use the `styled` object with the `h1` property(This property will tell that is an `h1` element that we are going to render) and use `back tips` after the `h1`.
  ```js
  const Logo = styled.h1``;
  ```
  This definition will scope the style that we add to the element that we use the component
- Add a `background` to the `Logo`
  ```js
  const Logo = styled.h1`
    background: red;
  `;
  ```
- Now go to the `Header` function and use the `Logo` component to wrap the `Link` component that represent the logo
  ```js
  export default function Header() {
    return (
      <HeaderStyles>
        <div className="bar">
          <Logo>
            <Link href="/">Sick fits</Link>
          </Logo>
        </div>
        ...
    );
  }
  ```
- Go to your terminal
- On the `frontend` directory; run your local server using: `npm run dev`
- In the `browser`; go to `http://localhost:7777`
- You should see a `red` background on the `slick fits` link
- Use the inspector on the `slick fits` link
- You should see that the link are inside of an `h1` element with a `class` generated automatically by the `styled-components` library
- Check the `style` section of the `browser` console and you should see the `background` that you add
- Now lets style the `anchor` tag(Then `Link` component render an `anchor` tag); Add a rule for the `anchors` to make the `color` white
  ```js
  const Logo = styled.h1`
    background: red;
    a {
      color: white;
    }
  `;
  ```
- Go to your browser; you should see that the `slick fits` link is with the `color` white and the other links of the page shouldn't have the white color because the `color` style is scope to the `h1`
- Now add the following to the `Logo` styles
  ```js
  const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    background: red;
    transform: skew(-7deg);
    a {
      color: white;
    }
  `;
  ```
  - `font-size: 4rem;`: Update the size of the letters on the `h1` using a `rem` value. The `rem` value will take many times the `font-size` defined in the `root` element of the page. In this case `4` times the `font-size` value of the `root`
  - `margin-left: 2rem;`: Using the `rem` value add some `margin` at the link to move it to the left
  - `position: relative;`: The `position` property of an element sets the position of that element in the document. In this case, we have a `relative` position; that means the element will be positioned according to the normal flow of the document
  - `z-index: 2;`: The `z-index` property sets the order position of the elements. The elements with the smaller values will be overlapping for the elements with values bigger than him
  - `transform: skew(-7deg);`: The `transform` property allows you to rotate, scale, skew, or translate an element. In this case, we `skew` the `h1` content by `-7 degrees`
- Its the `anchor` turn; at the following:
  ```js
  const Logo = styled.h1`
    ... a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
    }
  `;
  ```
  - `text-decoration: none;`: Eliminate the highlight os the `anchor` text on hover
  - `text-transform: uppercase;`: Put the `anchor` text to uppercase
  - `padding: 0.5rem 1rem;`: The add some space at the top/bottom and the left/right side with some `rem` values

For example; if this logo's style is going to be used in other places we will create the `Logo` component on the `style` directory on the `components` folder. It already provided some styles that are going to be used on this application. Now let's continue adding some more styles.

- Bellow the logo's styles create another `styled component` call `HeaderStyles` that should represent a `header` tag
  ```js
  const HeaderStyles = styled.header``;
  ```
- Add the following styles to the `bar` class
  ```js
  const HeaderStyles = styled.header`
    .bar {
      border-bottom: 1px solid var(--black, black);
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      align-items: center;
    }
  `;
  ```
  - `border-bottom: 1px solid var(--black, black);`: This will add a `black` borderline of `1px` bellow the `slick fits` logo. Later we will create a `CSS variable` for the `black` color(a little bit different from the black color); that is why we use `var` on this property and the `black` color as a fallback if the variable doesn't exist
  - `display: grid;`: The `display` property defines whether an element is treated as a block or inline-block and the layout that is going to use; in this case will use `grid` that divide the page into major regions or defining a relationship in terms of size, position and layer between the elements
  - `grid-template-columns: auto 1fr;`: the `grid-template-columns` define the column in the function of the `grid column` that is a vertical track of the `CSS grid layout` with space between to vertical `grid` lines. In this case, will add 2 columns; one with the maximum size that the item can be and the other use `1 frame` that will represent `1 fraction` of the available space
  - `justify-content: space-between;`: Distribute the space between elements
  - `align-items: center;`: Aling the items to the center of the container
- Now is the turn of the `.sub-bar` class:
  ```js
  const HeaderStyles = styled.header`
    .bar {
      border-bottom: 1px solid var(--black, black);
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      align-items: center;
    }
    .sub-bar {
      display: grid;
      grid-template-columns: 1fr auto;
      border-bottom: 1px solid var(--black, black);
    }
  `;
  ```
- Substitute the `header` tag with the `HeaderStyles` component
- Go to your browser and refresh the page
- You should see all the style changes that you just made

### Global styles, typography, and layout styles

On applications we don't only use `scope CSS`; we use global styles to handle some of the styles that will be the same across all the pages so you have a base before you start building the website with things such as like colors; fonts; sizing some basic stuff. In our case, we already have a `Page` component that can help us to add some of these styles and `styled-components` have `createGlobalStyle` component that adds this kind of style on our top component page.

#### Using the GlobalStyles component

- On your editor go to the `Page.js` file in the `components` directory
- Import `createGlobalStyle` from `styled-components`
  `import styled, { createGlobalStyle } from 'styled-components';`
- Create a constant call `GlobalStyles` that will use `createGlobalStyle` to add some style
  ```js
  const GlobalStyles = createGlobalStyle``;
  ```
- First; we are going to define some variables to be available across all the `HTML`(you can use the `:root` pseudo selector the difference is that you could reuse that CSS inside of a stand-alone SVG element)
  ```js
  const GlobalStyles = createGlobalStyle`
      html {}
    `;
  ```
- Add the following variables
  ```js
  const GlobalStyles = createGlobalStyle`
      html {
        --red: #ff0000;
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1e1e1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
      }
    `;
  ```
  - We add 2 variables for the `grey` color because some English speakers use `gray` instead of `grey` and the value of the `gray` variable fallback to the `grey` value (with the `ligthGrey` is the same case)
  - The `bs` variable stands for `box-shadow` and we use it because if we change a little bit the `box-shadow` on some element it will make your app see a little bad and will be difficult to find out why is happening
- Use the `GlobalStyles` style component before the `Header` component
  ```js
  export default function Page({ children }) {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <h2>I am a page component</h2>
      </div>
    );
  }
  ```
- On your terminal; start your local server using: `npm run dev`
- In the `browser`; go to `http://localhost:7777`
- Now on the `Page` component update the `black` variable to another `color`
- Then go back to your browser and refresh the page
- You should see that the lines update it `color`
- Go back to your editor and change back the `black` variable value

#### Add fonts to the global styles

- On the `GlobalStyles` component add the following
  ```js
  const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'radnika_next';
      src: url('/static/radnikanext-medium-webfont.woff2')
      format('woff2');
      font-weight: normal;
      font-style: normal;
    }
    html {...}
  `;
  ```
  - Is already provide on the `public/static` folder is the `font` file that we are going to use and make reference on the `src` property
- Add the `body` tag on `GlobalStyles`
  ```js
  const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'radnika_next';
      src: url('/static/radnikanext-medium-webfont.woff2')
      format('woff2');
      font-weight: normal;
      font-style: normal;
    }
    html {...}
    body {}
  `;
  ```
- On the `body` add the following `font-size`
  ```js
  const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'radnika_next';
      src: url('/static/radnikanext-medium-webfont.woff2')
      format('woff2');
      font-weight: normal;
      font-style: normal;
    }
    html {...}
    body {
      font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans' 'Helvetica Neue', sans-serif;
    }
  `;
  ```
  Need to add the `font` that we recently create first.

#### Finish with the global styles

- On the `html` rule add the following
  ```js
  const GlobalStyles = createGlobalStyle`
    @font-face {...}
    html {
      ...
      box-sizing: border-box;
    }
    body {...}
  `;
  ```
  The `box-sizing` property set how the total width and height of an element is calculated. In our case the elements will use `border-box` where the width and height of the element will include the content, padding, border but not include the margin.
- Add the following rule for all elements

  ```js
  const GlobalStyles = createGlobalStyle`
    @font-face {...}
    html {
      ...
      box-sizing: border-box;
    }
  
    body {...}
  
    *, *:before, *:after {
      box-sizing: inherit;
    }
  `;
  ```

  This will target all elements on the site and make sure that when we add `padding` and `border` to those elements it takes away from the size instead of grown it; this will help us with some horizontal scroll issues.

- On the `body` add the following

  ```js
  const GlobalStyles = createGlobalStyle`
    @font-face {...}
    html {
      ...
      box-sizing: border-box;
    }
  
    body {
      font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
    }
  
    *, *:before, *:after {
      box-sizing: inherit;
    }
  `;
  ```

  This will reset all the default spaces that can be on the `body` and add some general rules for the fonts.

- Next; we will add some general styles for the `anchors`

  ```js
  const GlobalStyles = createGlobalStyle`
    @font-face {...}
    html {...}
  
    body {...}
  
    *, *:before, *:after {...}
    a {
      text-decoration: none;
      color: var(--black);
    }
  
    a:hover {
      text-decoration: underline;
    }
  `;
  ```

- Then; we need to select the `buttons` to apply the `font-family` because setting the `font-family` on the `body` doesn't apply to the `buttons`

  ```js
  const GlobalStyles = createGlobalStyle`
    @font-face {...}
    html {...}
  
    body {...}
  
    *, *:before, *:after {...}
    a {...}
  
    a:hover {...}
  
    button {
      font-family: 'radnika_next', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `;
  ```

- Import `styled` from `styled-components`
  `import styled, { createGlobalStyle } from 'styled-components';`
- Now we want to apply some styling to the `children` of the `Page` component; so bellow of `GlobalStyles` create a `styled component` call `InnerStyles` that will represent a `div`
  ```js
  const InnerStyles = styled.div``;
  ```
- Add the following
  ```js
  const InnerStyles = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2rem;
  `;
  ```
  This will add a `max-with` to all `children` content; centralize it and add some spacing on each side of the `children` content.
- On the `Page` function remove the `h2` message and wrap the `children` with `InnerStyles`
  ```js
  export default function Page({ children }) {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <InnerStyles>{children}</InnerStyles>
      </div>
    );
  }
  ```
- Go to your browser and refresh the page
- You should see an update on the page styles

### Visualizing Router changes

If for some reason you have a slow internet connection that makes your browser load the page slowly; you will need a visual indication for the user to know that the page is still loading. To achieve this visual indication we are going to use the [nprogess library](https://ricostacruz.com/nprogress/).

#### Implementing nprogress

- First; go to the `_document` file on the `page` directory
- Import the `Head` component from `next/documen`
  `import Document, { Html, Head, NextScript, Main } from 'next/document';`
- Use the `Head` component before the `body` tag
  ```js
  export default class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  ```
- Now; go to the `_app.js` file in the `page` directory
- The `nprogress` package will ship all the styles that you need when you install it just need to import it like this:
  `import 'nprogress/nprogress.css';`
- Go to your terminal and the `frontend` directory
- Start your local server using: `npm start`
- Go to your browser and on to the [homepage](http://localhost:7777/)
- You should see at the top of the page the `loading` bar each time you refresh the page

#### Using our custom styles for nprogress and activate it on router change

- Import `NProgress` from `nprogress`
  `import NProgress from 'nprogress';`
- We are going to start the` nprogress` process as soon as the link start and finish it when the page transition and to do this we need to have access to some events that are on the `router` of `next js` so import `Router` from `next/router`
  `import Router from 'next/router';`
- Now we need to subscribe to the `routeChangeStart` event and send the function that we need to `start nprogress`
  `Router.events.on('routeChangeStart', () => NProgress.start());`
- Go to your browser and click on one of the links
- You should see the `nprogress` bar staring
- Go back to the editor and subscribe to the `routeChangeComplete` event so we can finish the `nprogress` process with the `done` function
  `Router.events.on('routeChangeComplete', () => NProgress.done());`
- Go back to your browser and click one of the links
- You should see the `nprogess` complete process when you change the page
- Then we to add the `error` event in to finish the `nprogress` process in case of an error
  `Router.events.on('routeChangeError', () => NProgress.done());`
- Finally, we need to add our custom styles(we already have a `nprogress` custom `CSS` in the `styles` directory); so remove the import of the default styles for `nprogress`
- Import the following `css` file
  `import '../components/styles/nprogress.css';`
- Go to your browser
- Click on one of the links
- You should see the new styles when the page is loading

### Fixing styled-components flicker on server render

Since we are using `styled-components` you see that a `class` with a set of characters set by the `styled component` package but as you may remember `next js` do `server-side rendering` out of the box; this will cause a `warning` that could appear on the console that said: `Prop 'className' did no match. Server: "XXXX" Element: "yyyyy"`. This is because the `server` renders the element one way and the browser renders the same element with a difference in this time the `className` so we need to be consistent when you render an element. Another issue that you may have is when you open or reload a page; you will see that the page renders for a second without styles so it those a flicker effect when finally the styles are available. To fix this we use the following process:

- First; go to the `_document.js` file in the `pages` directory
- Add the following method before the `render` function

  ```js
  export default class MyDocument extends Document {
    static getInitialProps() {}

    render() {...}
  }
  ```

  To work with `server-side rendering` and `styled-components` we will need to use one of `next js` hooks call `getInitialProps`; that will wait until this method is resolved to send the data to the browser.

- Add a `renderPage` argument that is the result of destructuring an object

  ```js
  export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {}

    render() {...}
  }
  ```

- Import `ServerStyleSheet` from `styled-components`
  `import { ServerStyleSheet } from 'styled-components';`

  The basic idea is that when your app renders on the `server`, you can create a `ServerStyleSheet` and add a provider to your `React` tree which accepts styles via a `context API`.

- Create a constant call `sheet` that will be an instance of `ServerStyleSheet`

  ```js
  export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
      const sheet = new ServerStyleSheet();
    }

    render() {...}
  }
  ```

- Now create a constant call `page` that will have the `renderPage` function as its value

  ```js
  export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
      const sheet = new ServerStyleSheet();
      const page = renderPage();
    }

    render() {...}
  }
  ```

- The `renderPage` function receive the following

  ```js
  export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
      const sheet = new ServerStyleSheet();
      const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />);
    }

    render() {...}
  }
  ```

  The `renderPage` function is a `callback` that runs the actual `React` rendering logic and it receives our `App` with all its `props` and finally we send the `sheet` object. The `collectStyles` function will go throw every component that needs to be rendered on the page and will see if there are any `styled-components` on those components then collect every `CSS` that it needs and send it out to the `server`.

- Then; create a constant call `styleTags` with the `getStyleElement` from the `sheet` object as it value

  ```js
  export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
      const sheet = new ServerStyleSheet();
      const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />);
      const styleTags = sheet.getStyleElement();
    }

    render() {...}
  }
  ```

  The `getStyleElement` method will return a string of multiple `styles` tag that you need to take into account when you adding the `CSS` string to your `HTML` output.

- Finally; return an object spreading the `page` object and with the `styleTags` object

  ```js
  export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
      const sheet = new ServerStyleSheet();
      const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />);
      const styleTags = sheet.getStyleElement();
      return { ...page, styleTags };
    }

    render() {...}
  }
  ```

- Go to your terminal
- On your `frontend` directory; start your local server using: `npm run dev`(If you already have the server running you need to restart the server)
- Go to your browser
- Everything should work as expected

#### Note:

If you continue with the issues that we defined at the beginning of this section you will probably need to delete the `.next` folder that is at the root of the `frontend` directory

## Module 4: Server-side graphQL development

At this point we are going to enter to the `backend` side of the project that will use `keystone` that will help us to create all `items`; `schemas` and saving information but we need a `database` first to store all the information that `keystone` will help us to manage. `Keystone` is a layer that sits on top of a number of different `database` like `MongoDB`, `Postgres` or `Prisma` in our case we will use `MongoDB`.

### Setting up mongoDB

You can install and run `MongoDB` on your local machine but we will use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) that will easily set up everything that we need to get `MongoDB` in our project. `Mongo Atlas` will give you a nice `UI` to manage your database and when it comes to deploying our application to the internet we need to host your `database` somewhere publicly and you can use `mongo Atlas` for this. Here is the process to set up `MongoDB` on `MongoDB atlas`:

- Create an account [here](https://www.mongodb.com/cloud/atlas/register)
- To begin is best to create a new `organization` so you can segment all your work of your project so on the left top corner click on the `organization` dropdown
- Then click on view on `view all organization`
- Click on the `Create new organization` button at the right
- Fill the `Name your organization` input
- Make sure that the `MongoDB atlas` is check
- Then click `next`
- Make sure that your valid mail is the `organization` owner
- After that click on `Create Organization`
- Now that the `organization` is created; we need to create a `project`(this is our actual database). Click on the `New Project` button at the right
- Add the name of your project on the `Name your Project` input
- Click on the `next` button
- Make sure that your valid email is the `project` owner
- After that click on `Create Project`
- You should be on a page with a `Create Cluster` button. Click on it
- Then click on the `create a cluster` button in the `shared cluster` side that is `free`
- Now choose `aws` in the `Cloud Provider & Region`
- And `N.Virginia(us-east-1)` on the `recomended region`
- On the `Cluster Name` section; add your `cluster` name
- Now click on the `Create Cluster` button(The process will take a couple of minutes)
- After the creation process of the `cluster` finish; we need to connect to it. Click on the `connect` button below the `cluster` name
- By default `Mongo Atlas` will allow only some specific `IP` addresses to prevent malicious connections to your database. In this case, we will allow every `IP` because it will be our local environment(Do not share with anyone). So click on `Allow access from anywhere`
- Add a description and click on `Add IP Address`
- Then `create` and user; Add the `Username`
- Add a `password` for the user(I recommend using the `autogenerate secure password` button)
- Click on show and store in someplace in your local machine the `password`(So we can easily use it in a little bit)
- Click on `Create Database User`
- Now we need to `choose a connection` method. In our case, we will select `Connect your application`
- Copy the `URL` that is provided(Store it for a second and continue with the next section)

#### Setting the .env file on the backend

We will need some `secret` information on our project including the `connection string` of our database and we do not want that this information is in any part that is publicly available like our version controller; this is why we need to create a `.env` file that will only exist on our local machine(Is add to the `.gitignore` so it will not be tracked by `git`). These are the steps to add the first value of the `.env` file.

- On your editor go to the `backend` directory
- Create a file on the root of the `backend` directory called `.env`
- Add the following in the `.env` file
  ```bash
  DATABASE_URL=
  ```
- Remember the `URL` that you get from `MongoDB atlas`. Paste it on `DATABASE_URL`
- Substitute the `<password>` with the actual `password` that you store in your local machine in the section before
- Delete where you store the `password` that you store in your local machine
- Substitute `<dbname>` with the database name
- Then you are set with the string connection; now we need to test the connection and for this, we are going to use `MongoDB compass`(This tool is mentioned at the beginning of this document). Open `MongoDB compass`
- Add the `connection string` that you just add on the `.env` file in `MongoDB compass `
- Click on `connect`
- You should connect with `MongoDB Atlas` without issues(We don't have any data yet)

### An intro to GraphQL

`GraphQL` is a specification for requesting and pushing data to and from a `server`. `GraphQL` is not a library itself; is like an idea or conjunction of ideas/specifications that the developers of some tools on top of the `database` layer like `Keystone`.

On `graphQL` you will use `query` or `mutation` to ethear pull in `data`(this are the `queries`) and update or create `data`(this are the `mutation`). `GraphQL` have it own syntax; here is a little example:

```js
query {
  allProducts {
    name
    description
    price
  }
}
```

On a `query` you need to specify every `field` that you want to `query`; in this case from `allProducts` we `query`: the `name`; the `description` and the `price` of the products; this will bring the define information of `all products`. Seeing these `queries` you may notice that you no longer need to create a bunch of `rest` endpoints that specify like `all products` and others for `products` with just the `name` and `description`.

Another useful thing is that you can do multiple `queries` on one call like the following

```js
query {
  allProducts {
    name
    description
    price
  }
  allUsers {
    name
    email
  }
}
```

On the same `request` you will have all the `products` and a list of all `users`.

Also, the `queries` are relational; this means that you can get a list of the `item` that you want and all `data` related to it; like the following example:

```js
query {
  allUsers {
    name
    email
    cart {
      id
      product{
        name
        description
      }
    }
  }
}
```

Every `user` has a `cart` that is related to it and the `cart` has a `product` related. So this will give you every `user` with its `cart` and the `products` that are in the `user's cart`. As long as you make the relation in whatever you working with you can write `queries` like this.

The `mutations` are a little bit different:

```js
mutation {
  requestReset(email: "example@test.com")
  message
}
```

This will try to reset your `password` and this type of `request` will be attached to our `React` application to trigger it. With the `mutation` examples later you will have a better understanding of this.

### Setting up Keystone and Typescript

Now we are going to begin setting up `Keystone` for our `backend` side of the application. An important thing to know before we begin is that this part of the application will be on [typescript](https://www.typescriptlang.org/) because this side of the application will not be a lot different than using just regular `.js` files and we will have the `IntelliSense and `code`highlighting benefit that we have used`typescript`.

When we are working on the `backend` side of the application all the files will have the `.ts` extension. Every configuration that we need for `typescript` is already done on the initial files.

#### Setting Keystone config file

- On your editor go to the `backend` directory
- In the root of the `backend` directory create a file called `keystone.ts`
- Import `dotenv/config`
  `import 'dotenv/config';`

  The `dotenv` package will take all the `environment variables` that you create before and make them available inside of the `keystone.ts` file.

- Now create a constant call `databaseUrl` and use the `DATABASE_URL` as it value
  `const databaseUrl = process.env.DATABASE_URL;`

  To access the value of an `environment variable` you need to access the `process.env` object

- Add the following fallback to `databaseUrl`
  `const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';`

  This is in case someone has a local `MongoDB` installation(just need to substitute with the string of your local)

- Now we are going to create some `session` config; because we are going to be `login` to the `keystone` backend and in order to authenticate the users in the `frontend` of our application we are going to use `session`. Create an object call `sessionConfig`
  `const sessionConfig = {}`
- Create a property call `maxAge` with the following value
  ```js
  const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
  };
  ```
  The `maxAge` property will define how much time; the `cookie` will be alive on the browser. The values represent:
  `60` seconds in a minute _ `60` minutes in an hour _ `24` hours in a day \* `360` on a year
- Then we need to add the `secret` property but first, go to the `.env` file and create `COOKIE_SECRET` with a random string as its value
  `COOKIE_SECRET=my_random_string`
- Go back to the `keystone.ts` file
- Add the `secret` property to the `sessionConfig` using the `COOKIE_SECRET` as it value
  ```js
  const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET,
  };
  ```
  This `secret` will use the `string` that you use to create a `cookie` and that `string` should not be available to the public to prevent reverse engineering on your `cookies`
- At the top of the file import `config` and `createSchema` from `@keystone-next/keystone/schema`
  `import { config, createSchema } from '@keystone-next/keystone/schema';`

  In the future, `keystone-next` will be updated to `keystone` or `keystonejs` on the future

- At the bottom of the file export the `config` function that receive an `config` object
  `export default config({});`
- Add a `server` object inside of the `config` configuration object
  ```js
  export default config({
    server: {},
  });
  ```
- Go to the `.env` file and create a `environment variable` call `FRONTEND_URL` with the url of our `React` application
  `FRONTEND_URL="http://localhost:7777"`
- Get back to the `keystone.ts` file and on the `sever` object add a `cors` property with an array as it value and on that array add the `FRONTEND_URL` environment variable
  ```js
  export default config({
    server: {
      origin: [process.env.FRONTEND_URL],
    },
  });
  ```
  Because we are running as a `backend` on a different `port` that the one we run the `frontend`; we need to specify the `url` to allow the data to flow between `backend` and `frontend`
- Then add a `credentials` property as `true`
  ```js
  export default config({
    server: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  });
  ```
  That means that we will pass the `cookie` that we added before
- Bellow the `server` object; add the `db` object
  ```js
  export default config({
    server: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
    db: {},
  });
  ```
- Inside of the `db` object add the `adapter` property with a value of `mongoose`
  ```js
  export default config({
    server: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
    db: {
      adapter: 'mongoose',
    },
  });
  ```
- After the `adapter` we need to add the `URL` property with out `database URL` that is available on the `database URL` constant that we created before
  ```js
  export default config({
    server: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
    db: {
      adapter: 'mongoose',
      url: databaseUrl,
    },
  });
  ```
- Now we need to create our `data types` that `keystone` refer it as a `lists`(list of products; list of items; etc...) so bellow the `db` object create a `lists` property with the `createSchema` function as it value(for now send a empty object as a parameter; later we are going to add the `data types`)
  ```js
  export default config({
    server: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
    db: {
      adapter: 'mongoose',
      url: databaseUrl,
    },
    lists: createSchema({}),
  });
  ```
- Finally add the `ui` object below to the `lists` with the following value
  ```js
  export default config({
    server: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
    db: {
      adapter: 'mongoose',
      url: databaseUrl,
    },
    lists: createSchema({}),
    ui: {
      isAccessAllowed: () => true,
    },
  });
  ```
  This will tell if do you allow access to the `keystone` UI because sometimes you want the users to manage all data from the `frontend` of the application
- Now on your terminal go to the `backend` directory
- Install all dependencies using: `npm install`
- Run your local server using: `npm run dev`
- On your browser go to `http://localhost:3000/`
- You should see a `dashboard` with nothing on it but without errors

### Creating our first User data type

Now that we have `keystone` up and running; we can create our first `data type`. Every time we are creating a `data type`; we are going to be writing something called a `schema` and the `schema` is a description of what our data will look like(our fields; all the relationship; etc... ).

#### Creating the User schema

- On your editor go to the `backend/folder/` directory
- Create a file called `User.ts`
- Import `list` from `@keystone-next/keystone/schema`
  `import { list } from '@keystone-next/keystone/schema';`
- Import `text` and `password` from `@keystone-next/fields`
  `import { text, password } from '@keystone-next/fields';`
- Export a constant call `User` that it value is the `list` function
  `export const User = list({});`
- On the object that recive `list`; add a property call `fields` that have an object as it value
  ```js
  export const User = list({
    fields: {},
  });
  ```
  Here we will define all `fields` that part of a `user`
- Now we need to specify each `field` and let `keystone` know how it will store the data as well witch editor interface it will give us. For this, we need to import from the `keystone` package each type of `field` like we already did at the beginning of the steps. Then on the `fields` object; add a property call `name` with the `text` function as its value and `text` will receive an object with the `isRequired` property set as `true`
  ```js
  export const User = list({
    fields: {
      name: text({ isRequired: true }),
    },
  });
  ```
  This will add an input field on the `UI` and will store the data as a string
- Add the following properties
  ```js
  export const User = list({
    fields: {
      name: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true }),
      password: password(),
    },
  });
  ```
- In order to use the `User schema` we need to added to the `keystone.ts` config file. So on your editor import the `User` schema
  `import { User } from './schemas/User';`
- Go to the `lists` property and add the `User` schema
  ```js
  export default config({
    server: {...},
    db: {...},
    lists: createSchema({
      User,
    }),
    ui: {...},
  });
  ```
- Every time you make an update on `keystone` you need to restart your local server; so on your terminal go to the `backend` directory
- Restart your local server using `npm run dev`
- Go to `http://localhost:3000/`
- You should see the `Users` option in the `dashboard`(DO NOT ADD ANY DATA YET)

### Adding auth to our application

Before to continue creating more `data types` we need to set a `login` for our user so not anyone has access to the `keystone` UI.

#### Steps to set auth on keystone

- On your editor go to the `keystone.ts` file in the `backend` directory
- Import `createAuth` from `@keystone-next/auth`
  `import { createAuth } from '@keystone-next/auth';`
- Create a constant call `withAuth` that is the result of destructuring the value that `createAuth` returns(The `createAuth` function recive a configuration object)
  `const { withAuth } = createAuth({});`
- Now we will add the `listKey` an the configuration object. This will set the `schema` responsible to be the `user`; in our case the `User` schema
  ```js
  const { withAuth } = createAuth({
    listKey: 'User',
  });
  ```
- We also need to set which field of the `schema` will identify the `user`; in our case the `email`
  ```js
  const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
  });
  ```
- Then we need to specify the `secret` field that will ask to each `user` to succefully login; in our case will be associate with the `password` field
  ```js
  const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
  });
  ```
- At this moment we don't have any `users` to log in so at the moment that we add the `auth` configuration we won't be able to access but the `createAuth` have a property call `initFirstItem` that will help us to exacly that
  ```js
  const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {},
  });
  ```
- Now we need to specify the `fields` that we want to `init` with
  ```js
  const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
      fields: ['name', 'email', 'password'],
    },
  });
  ```
- Then; use the `withAuth` method to wrap the `config` that we export at the bottom
  ```js
  export default withAuth(
    config({
      ...
    })
  );
  ```
- Import `withItemData` and `statelessSessions` from `@keystone-next/keystone/session`
  `import { withItemData, statelessSessions } from '@keystone-next/keystone/session';`
- We need to set a `session` because when a `user` successfully log in a `cookie` will be created to mantain the `session` until the `user` logout or the `cookie` expires. At the bottom of the `config` object add a `session` property that recive the `withItemData` method
  ```js
  export default withAuth(
    config({
      ...
      session: withItemData()
    })
  );
  ```
- The `withItemData` method will recive the `statelessSessions`(with the `sessionConfig` as it argument) and a object
  ```js
  export default withAuth(
    config({
      ...
      session: withItemData(statelessSessions(sessionConfig), {})
    })
  );
  ```
- On the second argument of the `withItemData` method; we will need to add a property that is called `User` with an `id` value
  ```js
  export default withAuth(
    config({
      ...
      session: withItemData(statelessSessions(sessionConfig), {
        User: 'id'
      })
    })
  );
  ```
  This will add the `id` or any other data that we `query` in this object with the `session`. This will help us later when we need to set permissions
- Now we need to modify the `UI` property that at this moment will allow anybody to access the `UI`. Delete the `true` that is return on the function and add a function that receive the actual `session` whit the following content
  ```js
  export default withAuth(
    config({
      ...
      ui: {
        isAccessAllowed: ({ session }) => {
          console.log(session);
          return !!session?.data
        },
      }
      session: withItemData(statelessSessions(sessionConfig), {
        User: 'id'
      })
    })
  );
  ```
  This will return `true` if there is a `session` and have `data` that will allow the `user` to see the `UI`
- On your terminal; go to the `backend` directory
- Start your local `server` using: `npm run dev`
- On your browser go to `http://localhost:3000/`
- A `get stared` page will be shown
- Fill in the information to create a `user`
- Click on the `Get stared` button
- Go to your terminal and see that the `session` object. As you can see the user id`is present on the`session`; this `data`that we require is actually a`graphQL` query
- Go back to the `keystone.ts` file
- Update the `isAccessAllowed` value like this
  ```js
  export default withAuth(
    config({
      ...
      ui: {
        isAccessAllowed: ({ session }) => !!session?.data,
      }
      session: withItemData(statelessSessions(sessionConfig), {
        User: 'id'
      })
    })
  );
  ```

##### Note

For now, will be a `linter` warning on the `isAccessAllowed` property; you can ignore it for now and we take care of it later.

### Creating products data type

We continue with the creation of our `data types` in this case the `products`. In the future, we will add `data` for the `products` on the `frontend` not only via the `keystone us.

#### Steps to create the products data type

- On your editor; go to the `backend/schema/` directory
- Create a new file call `Products.ts`
- On this newly create file; import `list` from `@keystone-next/keystone/schema`
  `import { list } from '@keystone-next/keystone/schema';`
- Export a constant call `Products` using the `list` method as it value
  `export const Product = list({});`
- Add a `field` property on the `list` configuration object
  ```js
  export const Product = list({
    fields: {},
  });
  ```
- Import `text` from `@keystone-next/fields`
  `import { integer, select, text } from '@keystone-next/fields';`
- On the `fields` object add a property call `name` that has the following content
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
    },
  });
  ```
  This will add an `input` for the `name` on the `keystone` UI and a `name` field on the `database`
- Add a `description` property with the following content
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
    },
  });
  ```
  By default `text` will add an `input` so we need to specify the `ui` property to choose which element we want to use for the `field`
- Now we need to add an `status` dropdown because when we still working on the `product` creation; we don't want to show it on the `frontend` so for this we need the `select` method. Import `select` from `@keystone-next/fields`
  `import { select, text } from '@keystone-next/fields';`
- Bellow the `description` add a `status` property with the following content
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      status: select({
        options: [
          { label: 'Draft', value: 'DRAFT' },
          { label: 'Available', value: 'AVAILABLE' },
          { label: 'Unavailable', value: 'UNAVAILABLE' },
        ],
        defaultValue: 'DRAFT',
      }),
    },
  });
  ```
  This will add a `dropdown` that by default has the `draft` option choose
- We can still add some more `ui` options; in this case we want to `display` a `select box` element instead of a `dropdown`
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      status: select({
        options: [
          { label: 'Draft', value: 'DRAFT' },
          { label: 'Available', value: 'AVAILABLE' },
          { label: 'Unavailable', value: 'UNAVAILABLE' },
        ],
        defaultValue: 'DRAFT',
        ui: {
          displayMode: 'segmented-control',
        },
      }),
    },
  });
  ```
- Also we don't want this element show on the creation process so we need to hide it on the `create view`
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      status: select({
        options: [
          { label: 'Draft', value: 'DRAFT' },
          { label: 'Available', value: 'AVAILABLE' },
          { label: 'Unavailable', value: 'UNAVAILABLE' },
        ],
        defaultValue: 'DRAFT',
        ui: {
          displayMode: 'segmented-control',
          createView: { fieldMode: 'hidden' },
        },
      }),
    },
  });
  ```
- The last thing we need is a `price` for each `product`. We are going to use an `integer` to generate the `input` so import `integer` from `@keystone-next/fields`
  `import { integer, select, text } from '@keystone-next/fields';`
- Bellow the `status` add a `price` property with the following content
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      status: select({
        options: [
          { label: 'Draft', value: 'DRAFT' },
          { label: 'Available', value: 'AVAILABLE' },
          { label: 'Unavailable', value: 'UNAVAILABLE' },
        ],
        defaultValue: 'DRAFT',
        ui: {
          displayMode: 'segmented-control',
          createView: { fieldMode: 'hidden' },
        },
      }),
      price: integer(),
    },
  });
  ```
  One thing of the `price` is that will be the `price` on `cents` because doing this way; we never have to deal with `decimals` or `rounding numbers
- Now go to the `keystone.ts` file
- Import the `Product` schema
  `import { Product } from './schemas/Product';`
- You should see that the `status` element is not on the `creation form`
- Create a product
- You should see the `product` created with the correct information and the `status` element is on the view with the `Draft` option as its default(DO NOT create a lot of `products` in the future we are going to add some test data)

### Uploading product images

We add the `products` data type and each `product` will need an `image` associate with it so we will work with a new data type exclusively in charge of `images` and with the help of [cloudinary](https://cloudinary.com/). `Cloudinary` is a service that will help us to store images and some other features such as; resize images depending on width and height; change the type of file or get down the quality for smaller images; etc.

#### Adding a product image data type

We could just make a `field` on our `product` call `image` but we actually going to create a data type called `productImage` then we will have a relation with the products; this strategy will allow us in the future relate many `products` with one `image` or make a gallery with the `images`. Here are the steps

- First, on your browser create a [cloudinary](https://cloudinary.com/) account
- Click on the `Media Library` tab at the top
- Click on the `new folder` icon
- Create a folder called `sickfits`
- Get back to your editor and go to the `backend` directory
- On the `.env` file add the following
  ```bash
  CLOUDINARY_CLOUD_NAME=
  CLOUDINARY_KEY=
  CLOUDINARY_SECRET=
  ```
- Go to the [cloudinary](https://cloudinary.com/) dashboard and grad the `cloud name`; `APU key` and `API secret`. Add those on the `environment variables` that you added before
- Now on the `schema` directory create a file call `ProductImage.ts`
- Import `dotenv/config`
  `import 'dotenv/config';`
- Create a constant call `cloudinary` that will store the `cloudinary` configuration values
  `export const cloudinary = {};`
- Use `process.env` to get the `environment variables` that you added before
  ```js
  export const cloudinary = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
    folder: 'sickfits',
  };
  ```
- Import `list` from `@keystone-next/keystone/schema`
  `import { list } from '@keystone-next/keystone/schema';`
- Export a constant call `ProductImage` that will have the `list` method as it value
  `export const ProductImage = list({});`
- Add the `fields` property on the configuration object of `list`
  ```js
  export const ProductImage = list({
    fields: {},
  });
  ```
- Import `cloudinaryImage` from `@keystone-next/cloudinary`
  `import { cloudinaryImage } from '@keystone-next/cloudinary';`
- On the `fileds` object add an `image` property that use the `cloudinaryImage` method as it value
  ```js
  export const ProductImage = list({
    fields: {
      image: cloudinaryImage({}),
    },
  });
  ```
- Send `cloudinary` and the `label` property with a string of `source` to the `cloudinaryImage` configuration object
  ```js
  export const ProductImage = list({
    fields: {
      image: cloudinaryImage({
        cloudinary,
        label: 'Source',
      }),
    },
  });
  ```
- Import `text` from `@keystone-next/fields`
  `import { text } from '@keystone-next/fields';`
- Bellow the `image` field add a `alt` field that will use the `text` method
  ```js
  export const ProductImage = list({
    fields: {
      image: cloudinaryImage({
        cloudinary,
        label: 'Source',
      }),
      alText: text(),
    },
  });
  ```
- Now to the `keystone.ts` file
- Import the `ProductImage` schema
  `import { ProductImage } from './schemas/ProductImage';`
- Add to the `list` the `ProductImage` schema in the config
  ```js
  export default withAuth(
    config({
      ...
      lists: createSchema({
        // Schema items go in
        User,
        Product,
        ProductImage,
      }),
      ...
    })
  );
  ```
- Go to your terminal and to the `backend` directory
- Start your local server using `npm run dev`
- Go to `http://localhost:3000/`
- You should see the `Products Images` data type on the `keystone` dashboard
- Click on the `Products Images` option
- Click on `Create Product Image`
- Upload an image and add an `alt` text
- Click on `Create Product Image`
- You should see that your `product image` is created
- Go to your [cloudinary](https://cloudinary.com/) account
- Click on the `Media Library` tab
- Click on the `sickfit` folder
- The image that you recently uploaded via `keystone` should be there

### Creating two-way data relationship in keystone

The `relationship` between `data types` on `keystone` is very easy to do where we can for the example given a `product image`; know which `products` are related to it and if we have a given `product` we can easily know which `product image` is related to that `product` in other words for any given `data` you can get all `data` related to that.

#### Steps to create a two-way relationship

- On your editor; go to the `ProductImage` file on the `backend/schema` directory
- Import `relationship` from `@keystone-next/fields`
  `import { relationship, text } from '@keystone-next/fields';`
- Create a new `field` call `product` that use the `relationship` method
  ```js
  export const ProductImage = list({
    fields: {
      image: cloudinaryImage({
        cloudinary,
        label: 'Source',
      }),
      altText: text(),
      product: relationship({}),
    },
  });
  ```
- Create a `ref` property with the following content
  ```js
  export const ProductImage = list({
    fields: {
      image: cloudinaryImage({
        cloudinary,
        label: 'Source',
      }),
      altText: text(),
      product: relationship({ ref: 'Product.photo' }),
    },
  });
  ```
  Here we said that we are going to make a `relationship` between with the `Product` schema and it `photo` field(We will add the `photo` field in a moment)
- Go to the `Product` file on the `schema` directory
- Import `relationship` from `@keystone-next/fields`
  `import { relationship, text } from '@keystone-next/fields';`
- Add a `field` call `photo` using the `relationship` method as it value
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      photo: relationship({}),
      status: select({...}),
      price: integer(),
    },
  });
  ```
- Add a `ref` property to the `photo` field that reference to the `product` field of the `ProductImage` schema
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      photo: relationship({ ref: 'ProductImage.product', }),
      status: select({...}),
      price: integer(),
    },
  });
  ```
- We need some more options to display the relation nicely so add a `ui` property bellow the `ref` property
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      photo: relationship({
        ref: 'ProductImage.product',
        ui: {}
      }),
      status: select({...}),
      price: integer(),
    },
  });
  ```
- Add a `displayMode` property with `cards` as it value on the `ui` object
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      photo: relationship({
        ref: 'ProductImage.product',
        ui: {
          displayMode: 'cards',
        }
      }),
      status: select({...}),
      price: integer(),
    },
  });
  ```
  This is because you want to display the `image` and the `alt text` instead a `dropdown` with all `images`
- Add a `cardFields` with an array of the `fields` that you need in this case `image` and `altText`
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      photo: relationship({
        ref: 'ProductImage.product',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
        }
      }),
      status: select({...}),
      price: integer(),
    },
  });
  ```
  When we edit a `product` we will have a nice `ui` that will help us to `create` or `edit` an `image` not add an actual `field` on the `ProductImage` schema. This will help us to work on the same `view`
- Add a property call `inlineCreate`
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      photo: relationship({
        ref: 'ProductImage.product',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: {}
        }
      }),
      status: select({...}),
      price: integer(),
    },
  });
  ```
- Add the `fields` you want to edit in the `inlineCreate` in this case `image` and `altText`
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      photo: relationship({
        ref: 'ProductImage.product',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: { fields: ['image', 'altText']  }
        }
      }),
      status: select({...}),
      price: integer(),
    },
  });
  ```
- And finally create a propety call `inlineEdit` with the same `fields` that we want to edit
  ```js
  export const Product = list({
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      photo: relationship({
        ref: 'ProductImage.product',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: { fields: ['image', 'altText']  }
          inlineEdit: { fields: ['image', 'altText'] },
        }
      }),
      status: select({...}),
      price: integer(),
    },
  });
  ```
- On your terminal; go to the `backend` directory
- Start your local server using `npm run dev`
- On your browser; go to `http://localhost:3000/`
- Click on the `Product` options
- Click on the test `product` that you created before
- You should see a `create product image` button
- Click on that button
- Upload an `image`
- Add an `alt text`
- Click on the `create product image` button
- You should successfully create a `product image`
- Click on the `Save Changes` button
- Click on the `Product Images` option at the left
- You should see your new `product image`
- At this moment is difficult to see which is the correct image so click on the `with 1 columns` dropdown
- Choose all options that you want
- You should see more detailed information on the list and you should

#### Adding default values to the list of items

We added the values to the `ProductImage` list via the `keystone` UI but we actually can add default values on the `schema`. Follow the next steps:

- Go to the `ProductImage` file
- Bellow of the `fields` property add a `ui` property
  ```js
  export const ProductImage = list({
    fields: {...},
    ui: {},
    },
  });
  ```
- Add a property call `listView`
  ```js
  export const ProductImage = list({
    fields: {...},
    ui: {
      listView: {}
    },
    },
  });
  ```
- Inside of the `listView` property add a `initialColumns` property with an array with all fields that you want to show on the list
  ```js
  export const ProductImage = list({
    fields: {...},
    ui: {
      listView: {
        initialColumns: ['image', 'altText', 'product'],
      }
    },
    },
  });
  ```
- Restart your local server
- Go to `http://localhost:3000/`
- Click on the `Product Images` option at the left
- You should see the list of `product images` with all de default columns

### Inserting seed data

Before continuing with the project; we will need `data` to test the features that we work but we don't want the creation process manually because it will take too long so in this section we will help a little with this. We will have some `seed` data that we will add via a `script`.

If you take a look at the `backend` directory you will find a `seed-data` folder that has a `data.js` file(that have the fixed values of the items) and the `index.ts` file that is in charge of adding the `data` to `mongo`. THe `insertSeedData` function will receive a `keystone` object and we will use it adapter to directly send the `data` to `mongo`(no `GraphQL`) then we loop over every single `product` and inside the loop, we will create the `image` and the `product` with it relationship.

#### Using the keystone configuration to inject data

- On your editor; go to the `keystone.ts` file on the `backend/schema/` directory
- In the `db` property of the `config` object add a `async` function call `onConnect`
  ```js
  export default withAuth(
    config({
      server: {...},
      db: {
        adapter: 'mongoose',
        url: databaseUrl,
        async onConnect() {}
      },
      ...
    })
  );
  ```
- Add a `console.log` as a part of the `onConnect` function
  ```js
  export default withAuth(
    config({
      server: {...},
      db: {
        adapter: 'mongoose',
        url: databaseUrl,
        async onConnect() {
          console.log('connected to the database');
        }
      },
      ...
    })
  );
  ```
- On to your terminal; go to the `backend` directory
- Start your local server using `npm run dev`
- You should see the log that you put on the `onConnect` function as soon as `keystone` connects with the database
- We will inject all the `data` that we need directly to the `database` using this `onConnect` function but first the `onConnect` function recive the complete `keystone` object so added as a parameter like this:
  ```js
  export default withAuth(
   config({
     server: {...},
     db: {
       adapter: 'mongoose',
       url: databaseUrl,
       async onConnect(keystone) {
         console.log('connected to the database');
       }
      },
     ...
   })
  );
  ```
- Import `insertSeedData` from `./seed-data`
  `import { insertSeedData } from './seed-data';`
- Add the `insertSeedData` using the `keystone` object as a parameter and it will be a `async` function
  ```js
  export default withAuth(
   config({
     server: {...},
     db: {
       adapter: 'mongoose',
       url: databaseUrl,
       async onConnect(keystone) {
         console.log('connected to the database');
         await insertSeedData(keystone);
       }
      },
     ...
   })
  );
  ```
- We don't want to do this every time so we will add a condition that will check if the `user` send a parameter call `--seed-data`
  ```js
  export default withAuth(
   config({
     server: {...},
     db: {
       adapter: 'mongoose',
       url: databaseUrl,
       async onConnect(keystone) {
          console.log('connected to the database');
          if (process.argv.includes('--seed-data')) {
            await insertSeedData(keystone);
          }
       }
      },
     ...
   })
  );
  ```
  If you see the `package.json` on the `backend` directory; you will see that the `seed-data` use the same `keystone` command as `dev` just with the `--seed-data` parameter
- Go back to your terminal and kill the local server process
- Run the `npm run seed-data` command
- Then run again your local server using `npm run dev`
- On your browser; go to `http://localhost:3000/`
- Click on the `Product Images`option at the left
- You should see more images add to your list
- Probably you will see that you can't see the `images` but do not worry about this at this moment because the `image` URL that we use the account change its name from `wesbostutorial` to `wesbos` but this will not be an issue because is not change on the `API explore`. To check this; click on the 3 `dots` at the side of your `user` name at the left
- Click on `API Explore`
- Write the following query:
  ```js
  query {
    allProductImages {
      id
      image {
        publicUrl
        publicUrlTransformed
      }
    }
  }
  ```
  From all `ProductImages` give me the `id` and the `image` and from the `image` give me the `publicURL` and the `publicUrlTransformed`
- Click on the `play` button
- You should see the result of the `query` at the right
- Copy one of the `url` that you get on another `tab`
- You should see that an image is showing up

## Module 5: Client side React + GraphQL development

At this point, we have our `backend` side setup and have test data on it so we can get back to the `frontend` side of the application to begin to use the `data` available.

### Setting up Apollo client

As we start to pull in data from the `API` into the `frontend` side of our application we need some source of tool that help us to make the `queries`; `cache` data; evict those `items` from the `data`; handle `mutation`; give us the `data` that comes back from the `server`; handle `errors` or file `uploads`; all this kind of stuff, in other words, we need a tool that talks with `graphQL` and manage all the `data` for us and in our case, we are going to use `Apollo Client`.

To setup `Apollo` we need something call `link` that is a standard interface to modify the flow of `graphQL` request and fetching of `graphQL` results; in other words; `Apollo client` is made by a lot of different `links` and each `link` is responsible for handling the outgoing request and get/update `data` as well as responses coming back and other functionalities like `cache`. A lot of the features that we need will be on a package called `apollo-boost` because almost all the time we need just a few of these features so they wrap up on a package so we can easily work with them but one thing that is not done on this package is that they don't handle `image` upload and in other to do this we need to use a 3rd party and as soon that we use this custom feature; we need to create our links that is why the example brings a file called `withData.js` on the `frontend/lib/` directory.

#### Insides about the withData file

When we use `Apollo Client` we need to `create` a `client` and inject to it the `links` that we need. This is the responsibility of the first function that we see which is called `createClient` that returns an instance of the `ApolloClient` object with the configuration that we need.

The first `link` that we see on the `ApolloClient` instance is an `error` handling `link` and all it does is that take 2 different types of `errors` that can possibly happen in your `graphQL` request. You could have a `graphQL` error where you will have an error produced by some information of the `query` that you do that does not match with the `data` on your `API` such as the wrong password or try to `query` a field that doesn't exist. The other type of `error` is the `network` error that happens when your `backend` is down, or `cors` something like that in other words that the `status` is not `200`.

The other `link` is the `Apollo http link`; which is responsible for `fetching` data or making `POST` request and inside of `React`; `Apollo` will give us both `query` and `mutation` hooks that will allow to the `request` but if you check on [Apollo documentation](https://www.apollographql.com/docs/link/links/http/); the function is called different on the code; this is because we use another package called `apollo-upload-client` that use the `apollo-link-http` and add additional code to upload files the thing that we need. Now getting back to the `links` as you see we use the `createUploadLink` function to create the `Apollo http link` that receive a configuration object with the `URI` property that receives the `URL` of our `graphQL API` as you see it will take the `endpoint` variable that is exported from the `config.js` file in the root of the `frontend` directory and this `URL` is the one that we use before when we were testing the `graphQL API` on `keystone`(The other one is for production). Then we have the `fetchOptions` that will tell the `API` that sends the `credential` alongside the `request` in our case the `cookie` because we will control what a user is allowed to do or allow to see and we need to check is he is logged in. Finally, we need to add the `header` because we are using `server-side rendering` we need all the `headers` and `cookies` on the first request so we can `render` the `logged in` state of the components since the beginning.

The last `link` is the `cache` that will define where you are going to store the cache in our case we are going to be storing this `in memory` in other words in the `browser` also at the end we need to `restore` the initial values that mean that all the `data` that is collected on the `server` then give it to the `hydration` on the `client`.

The last thing that we need to know on this file is the last line; on which we are using the `withApollo` method that allows us to `crawl` all pages and components and look for any `queries` that we have then it will make sure that we have `fetch` all the `data` that we need and it will wait for all `data` to be `fetched` before the `server` send all the `HTML` to the `client`.

#### Using the withData method

Know we need to take the `withData` function and create an instance of `Apollo` then inject it into our application and the file that will help us with this is the `_app.js` file. We will wrap all the application in what is called a `provider` that in `React` is a component that usually lives in a very high place on your application and allows components that are several levels down to have access to the `provider` data. Here are the steps

- On your editor; go to the `_app.js` file on the root of the `frontend` directory
- Import `ApolloProvider` from `@apollo/client`
  `import { ApolloProvider } from '@apollo/client';`
- Wrap the content of the `MyApp` component using the `ApolloProvider`
  ```js
  export default function MyApp({ Component, pageProps }) {
    return (
      <ApolloProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
  ```
- The `ApolloProvider` need a `client` property and the value will be the `apollo` object that we will have as an argument of `MyApp`(You may ask yourself; where that `apollo` object came from; in a bit will be explained)
  ```js
  export default function MyApp({ Component, pageProps, apollo }) {
    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
  ```
- Import the `withData` method from the `lib` directory
  `import withData from '../lib/withData';`
- Since `MyApp` is the highest component in the application we need to change the `export` statement so we can wrap `MyApp` with the `withData` method that will give us all the `data` that we need. So remove `export default` from the `MyApp` function definition line
  ```js
  function MyApp({ Component, pageProps, apollo }) {
    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
  ```
- Below the `MyApp` function add the export statement using `withData` as a wrapper of the `MyApp` function
  `export default withData(MyApp);`
  This will inject the `apollo` object to the `MyApp` function
- On your terminal; go to the `frontend` directory
- Start your local server using `npm run dev`
- On your browser; go to `http://localhost:7777/`
- Open the browser console
- You should see that the `Apollo` extension is active(We ask to install this extension at the beginning). This means that the extension detects that `Apollo Client` is present on our application but we still don't have anything to show yet
- Now get back to the `_app.js` file on your editor
- At this moment we need to tell `next.js` that we need to go and `fetch` all `queries` that are on all `children` components. Before the `export` use the `getInitialProps` with `MyAPP` and add an `async` function
  `MyApp.getInitialProps = async function () {}`
  The `getInitialProps` is a `next.js` specific
- The props of the function will be the `Component` and `contex`(ctx)
  `MyApp.getInitialProps = async function ({ Component, ctx }) {}`
- Create a `let` variable call `pageProps`
  ```js
  MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = {};
  };
  ```
- Add the following condition

  ```js
  MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
  };
  ```

  If any other page has the `getInitialProps` method on them(Thing that will be `true` because the `withData` method add that to the pages) then it will wait, and fetch the `data`

- Then add the following

```js
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
};
```

This will allow us to get any query variables available on a page level

- Finally; we return the `pageProps`

```js
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return { pageProps };
};
```
