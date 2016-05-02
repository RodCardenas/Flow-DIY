#[Flow-DIY](http://flow-diy.herokuapp.com/)

##Minimum Viable Product

Flow-DIY is a web application influenced by Instructables built on Ruby-on-Rails and React that will focus on hosting electronics projects. The basic functionality of the application includes:

 - New account creation, login, and a website demo login
 - Projects Interface
  * Project Creation
  * Project Editing
  * Project Navigation/Index
 - Attractive visual design

### Bonus Features
 - Favorite projects
 - User Comments
 - Completed production readme
 - Downloadable project files

##Product Goals

Flow-DIY will provide site visitors an interface to manage projects online and give them the opportunity to share their ideas with others! To achieve this, the website will:

 - Provide users the opporunity to **create an account** (MVP)
 - Through **authentication**, users will be able to store their projects and visit the projects of others (MVP)
 - Registered visitors will be able to create, read, edit, and delete projects. The projects will be detailed in steps that may include pictures (MVP)
 - Projects' videos can be stored on the project page
 - Visitors can comment on others' projects
 - Visitors will be able to track their favorite projects

##Design Docs
- [API](https://github.com/RodCardenas/Flow-DIY/blob/master/docs/API.md)
- [Components](https://github.com/RodCardenas/Flow-DIY/blob/master/docs/components.md)
- [Flux Cycles](https://github.com/RodCardenas/Flow-DIY/blob/master/docs/flux_cycles.md)
- [Schema](https://github.com/RodCardenas/Flow-DIY/blob/master/docs/schema.md)
- [Wireframes](https://github.com/RodCardenas/Flow-DIY/blob/master/docs/Wireframes/layouts.md)

##Implementation Timeline

####1: Backend setup and User Authentication (1.0 days)
**Objective:** Rails backend with Authentication is implemented.

 - [x] Setup new project and its backend
 - [x] Implement User model/controller
 - [x] Implement Authentication
 - [x] User signup form
 - [x] User signing form
 - [ ] Implement modal form (bonus)


####2: Projects Models, API, and APIUtil (2.0 days)
**Objective:** Projects can be created, read, edited, and destroyed through the API.

 - [x] Create Project Index Component
 - [x] Create Project Index Item Component
 - [x] Setup Project Store
 - [x] Setup Dispatcher
 - [x] Setup Action Creators
 - [ ] Project Actions
 - [ ] Implement API Util (pending destroy and update)
 - [x] Implement Project model
 - [x] Create Project controller and implement the Project's CRUD
 - [x] Generate jSON responses with jBuilder (pending pictures for steps in show)
 - [x] Seed data samples
 - [ ] Test Projects CRUD through API

####3: Steps Models, API, and APIUtil (2.0 days)
**Objective:** Steps can be created, read, edited, and destroyed through the API.

 - [x] Create Step Component
 - [x] Modify Action Creators to include Step functionality
 - [x] Expand API Util to include step functionality
 - [x] Implement Step model
 - [x] Create Step controller and implement the Step's CRUD
 - [x] Generate jSON responses with jBuilder
 - [x] Modify Project's implementation to include steps
 - [x] Seed data samples
 - [ ] Test Step and Projects CRUD through API

####4: Flux Architecture and Router (2.0 days)
**Objective:** Projects and Steps can be created, read, edited, and destroyed through the user interface. URL will respond to actions on the user interface.

 - [x] Setup the React Router
 - [ ] Modify implementation to have pages and URLs corresponding to page interactions


####5: Page Layouts (1.0 days)
**Objective:** Color scheme, locations, and shapes will be finalized.

 - [ ] Website's style guide will be defined and implemented
 - [ ] Color scheme
 - [ ] Elements' shapes and dimensions
 - [x] Website's logo
 - [ ] Element's positioning will be finalized

####6: Polish Basic functionality (1.0 day)
**Objective:** Finalize styling and define standard seed data.

 - [ ] Complete transitions and animations
 - [ ] Populate database with immersive data
 - [ ] Do test to verify site's fluidity

### Bonus

####1: Video Player Integration (2.0 days)
**Objective:** Allow projects to include videos in conjuction with pictures.

 - [ ] Modify component implementation to permit videos in the website
 - [x] Alter backend to handle the storing of videos/video links

####2: Comment Interface Implementation (1.5 days)
**Objective:** Users can create, edit, delete, and update comments on projects.

 - [ ] Create Comment Index Component
 - [ ] Create Comment Index Item Component
 - [ ] Modify Action Creators to include Comment functionality
 - [ ] Client Actions
 - [ ] Server Actions
 - [ ] Expand API Util to include Comment functionality
 - [ ] Implement Comment model
 - [ ] Create Comment controller and implement the Comment's CRUD
 - [ ] Generate jSON responses with jBuilder
 - [ ] Modify layouts to include Comments
 - [ ] Seed data samples
 - [ ] Test Comment's CRUD through API
 - [ ] Test Comment's CRUD through user interface

####3: Favorite Projects Implementation (1.5 days)
**Objective:** Users can mark projects as favorite projects.

 - [ ] Modify Action Creators to include Favorite functionality
 - [ ] Client Actions
 - [ ] Server Actions
 - [ ] Expand API Util to include Favorite functionality
 - [ ] Implement Favorite model
 - [ ] Create Favorite controller and implement the Favorite's CRUD
 - [ ] Generate jSON responses with jBuilder
 - [ ] Modify layouts to include Favorite
 - [ ] Seed data samples
 - [ ] Test Favorite's CRUD through API
 - [ ] Test Favorite's CRUD through user interface
