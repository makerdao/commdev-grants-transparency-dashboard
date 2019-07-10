
## MakerDao Community Fund Allocation Dashboard

to display how funds are being allocated to projects.

developped from the [Gatbsy-hello world starter kit](https://github.com/gatsbyjs/gatsby-starter-hello-world)

### Develop
install dependencies:

> npm i 

fire up site:
> $ gatbsy develop

and navigate to http://localhost:8000/ to visit your site

### Deploy

TODO

### Feeding data into the site

Public Data (*name*, *type*, *status*,...) for **accepted projects** is entered
into ```/static/data/acceptedProjectsData.json```. 

The format for that file is specified in a JSON-SCHEMA in
```/static/data/dataformat.js``` and compliance is checked in the integration (**currenlty broken**)
pipeline and can be tested manually by running:

> npm run test

General information about awarded money (average dispersed, total awarded, ...),
completed milestones (total and last30days) and the total number of submitted
projects is entered into ```/static/data/publicData.json```


