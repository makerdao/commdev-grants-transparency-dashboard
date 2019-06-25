
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

Public Data ('name', 'type', 'status',...) for accepted and submitted projects is entered into ```/static/data/projectData.json```.

Secret Data ('awarded money', 'milestones',....) is entered into ```/static/data/secretProjectData```.

The format for both types of data is specified in a JSON-SCHEMA in ```/static/data/dataformat.js``` . The compliance of the files is checked in the integration pipeline and can be tested manually by running:

> $ npm run test



