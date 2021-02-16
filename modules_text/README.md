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
