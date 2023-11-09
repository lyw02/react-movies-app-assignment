# Assignment 1 - ReactJS app.

Name: Yiwei Liu

## Overview.

[A brief statement on the content of this repository.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ Add actor details pages, listing actor's biography, information, images, and acted movies. 
+ + The biography can be expanded or folded by clicking an button.
+ + Users can jump to movie details page by clicking a movie's poster or name in the acted movied list.
+ In movie details pages, display a list of top billed cast actors, with actors' avatar, name, and character name.
+ + Users can jump to actor details page by clicking an actor's avatar or name in the top billed cast list.
+ Feature 2
+ Feature 3
+ etc
+ etc

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Person (actor) details - person/:id
+ Movies that a person (actor) acted - person/:id/movie_credits
+ Person (actor) images - person/:id/images
<!-- + Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list -->

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /actors/:id - displays an actor's details
<!-- + /blogs - displays all published blogs.
+ /blogs/:id - displays a particular blog.
+ /blogs/:id/comments - detail view of a particular blog and its comments.
+ etc. -->

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).