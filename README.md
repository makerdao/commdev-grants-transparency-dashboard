
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

Public Data (*name*, *type*, *status*,...) for accepted and submitted projects is entered into ```/static/data/projectData.json```.

The format for that file is specified in a JSON-SCHEMA in ```/static/data/dataformat.js```  and compliance is checked in the integration pipeline and can be tested manually by running:

> npm run test

Data that is based on secret informa*ion (*awarded money*, *dispersed money, *milestones*,....) is entered into ```/static/data/publicFinanceData.json```. 
(An approach to automate the generation of that file from a list of project-based information can be found on branch *backupFinanceDataValidation*).




