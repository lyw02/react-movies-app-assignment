# Assignment 1 - ReactJS app.

Name: Yiwei Liu

## Overview.

[A brief statement on the content of this repository.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ Add actor details pages:
+ + The page lists an actor's biography, information, images, and acted movies. 
+ + The biography can be expanded or folded by clicking a button.
+ + Users can jump to movie details page by clicking a movie's poster or name in the acted movied list.
+ Modify movie details pages:
+ + The page displays a list of top billed cast actors, with actors' avatar, name, and character name
+ + The page displays other movies that similar to that movie.
+ + Users can switch between top billed cast and similar movies by clicking subtitles.
+ + Users can jump to actor details page by clicking an actor's avatar or name in the top billed cast list.
+ Modify movies display view:
+ + Users can switch view between movie cards and movie entries list by using toggle buttons.
+ Add trending movies pages:
+ + The page lists daily or weekly trending movies.
+ + Users can choose different time window (day or week) at the site header by a popup menu.
+ Add pagation feature:
+ + Users can switch among different pages by Material UI Pagination component.
+ + When users change page number by clicking the pagination component, an API request will be sent with the query param \`?page=${page}\`, and the response will be added to react-query cache.
+ Add Firebase authentication feature:
+ + Users can sign up and log in with emails and passwords.
+ + Users can view there personal profile.
+ + Users can reset password by email.
+ + Users can log out.
+ Add new filtering option: rating and release date:
+ + Users can set rating range to filter movies.
+ + Users can set release date range, by a date picker, to to filter movies.
+ Add sort feature:
+ + Users can sort movie lists by title, release date, or rating.
+ Add searching feature:
+ + Users can search movies by entering a keyword, the results will be displayed in a new page with movies that contains keyword in their titles.
+ + This feature is different with the search field in filtering movie card, which only filters movies in current page. In stead, this feature searches movies from the whole database. 

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

Install Firebase:
`$ npm install firebase`

Install Day.js:
`$ npm install dayjs`

Install MUI X Date Picker:
`$ npm install @mui/x-date-pickers`

Install Lodash:
`$ npm install lodash`

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Person (actor) details - person/:id
+ Movies that a person (actor) acted - person/:id/movie_credits
+ Person (actor) images - person/:id/images
+ Similar movies - movie/:id/similar
+ Trending movies (day or week) - trending/movie/:time_window
+ Search for movies by title keywords - search/movie?query=keyword

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /actors/:id - displays an actor's details
+ /movies/trending/:timeWindow - displays daily or weekly trending movies
+ /signup - sign up page, users can sign up with email and password
+ /login - log in page, users can log in with email and password
+ /user - user profile page, displays user info.
+ /password/reset - password reset page, users can enter email and get a password reset email.
+ /search/:keyword - displays search results with given keyword. 

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

+ __Firebase__ is used to implement user authentication, including sign up, log in, log out, and user profile.
+ + Source code filenames:
+ + + src/firebase.js
+ + + src/contexts/authContext.js
+ + + src/components/firebaseAuth/login.js
+ + + src/components/firebaseAuth/passwordReset.js
+ + + src/components/firebaseAuth/signUpWithEmail.js
+ + + src/components/firebaseAuth/userProfile.js
+ + References:
+ + + Tutorial: https://www.youtube.com/watch?v=PKwu15ldZ7k

+ __Day.js__ is a minimalist JavaScript library that deals with date. In this app, I use Day.js to help implementing new filtering option that based on movies' release date. 
+ + Source code filenames:
+ + + src/components/filterMoviesCard/index.js
+ + + src/components/templateMovieListPage/index.js
+ + References:
+ + + Doc: https://day.js.org/docs/en/installation/installation

+ __MUI X__ is an extension library of Material UI. In this app, I use __MUI X Date Picker__, a component for picking date, to implement new filtering option that based on movies' release date, together with Day.js.
+ + Source code filenames:
+ + + src/components/filterMoviesCard/index.js
+ + References:
+ + + Doc: https://mui.com/x/react-date-pickers/date-picker/

+ __Lodash__ is a JavaScript utility library that provides various functions. In this app, I use Lodash to implement sorting feature.
+ + Source code filenames:
+ + + src/components/toolBar/index.js
+ + + src/components/templateMovieListPage/index.js
+ + References:
+ + + Doc: https://lodash.com/docs/4.17.15