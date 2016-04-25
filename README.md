#[Flow-DIY](http://flow-diy.herokuapp.com/)

##Minimum Viable Product

Flow-DIY is a web application influenced by Instructables built on Ruby-on-Rails and React. The app will be divided into two major development phases. The first focus will be to comply with a list of features that will generate a viable product, while the second phase will aim to add more features to make the website truly shine.

### Phase 1
 - New account creation, login, and a website demo login
 - Bug-free navigation
 - Projects Interface
  * Project Creation
  * Project Editing
  * Project Navigation/Index
 - Deployment of the website (completed)
 - Attractive visual design
 - Completed production readme
 
### Phase 2
 - Favorite projects
 - User Comments
 - Completed production readme
 - Downloadable project files

##Product Goals and Priorities (pending)

##FresherNote will allow users to do the following:

 Create an account (MVP)
 Log in / Log out, including as a Guest/Demo User (MVP)
 Create, read, edit, and delete notes (MVP)
 Organize notes within Notebooks (MVP)
 Tag notes with multiple tags (expected feature, but not MVP)
 Apply complex styling to notes while editing (expected feature, but not MVP)
 
##Design Docs
- [API](http://flow-diy.herokuapp.com/)
- [Components](http://flow-diy.herokuapp.com/)
- [Flux Cycles](http://flow-diy.herokuapp.com/)
- [Schema](http://flow-diy.herokuapp.com/)
- [Wireframes](http://flow-diy.herokuapp.com/)

##Implementation Timeline

###Phase 1: Backend setup and User Authentication (0.5 days)
**Objective:** Functioning rails project with Authentication

 create new project
 create User model
 authentication
 user signup/signin pages
 blank landing page after signin
 
###Phase 2: Notes Model, API, and basic APIUtil (1.5 days)
**Objective:** Notes can be created, read, edited and destroyed through the API.

 create Note model
 seed the database with a small amount of test data
 CRUD API for notes (NotesController)
 jBuilder views for notes
 setup Webpack & Flux scaffold
 setup APIUtil to interact with the API
 test out API interaction in the console.
 
###Phase 3: Flux Architecture and Router (1.5 days)
**Objective:** Notes can be created, read, edited and destroyed with the user interface.

 setup the flux loop with skeleton files
 setup React Router
implement each note component, building out the flux loop as needed.
 NotesIndex
 NoteIndexItem
 NoteForm
 save Notes to the DB when the form loses focus or is left idle after editing.
 
###Phase 4: Start Styling (0.5 days)
**Objective:** Existing pages (including singup/signin) will look good.

 create a basic style guide
 position elements on the page
 add basic colors & styles
 
###Phase 5: Notebooks (1 day)
**Objective:** Notes belong to Notebooks, and can be viewed by notebook.

 create Notebook model
build out API, Flux loop, and components for:
 Notebook CRUD
 adding notes requires a notebook
 moving notes to a different notebook
 viewing notes by notebook
Use CSS to style new views
Phase 3 adds organization to the Notes. Notes belong to a Notebook, which has its own Index view.

###Phase 6: Tags (1.5 days)
**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

 create Tag model and join table
build out API, Flux loop, and components for:
 fetching tags for notebook
 adding tags to notebook
 creating tags while adding to notebooks
 searching notebooks by tag
 Style new elements
 
###Phase 7: Allow Complex Styling in Notes (0.5 days)
**Objective:** Enable complex styling of notes.

 Integrate react-quill (based on Quill.js).
 Use Rails helpers to sanitize HTML before rendering.
 Style the new Quill elements.

###Phase 8: Styling Cleanup and Seeding (1 day)
**Objective:** Make the site feel more cohesive and awesome.

 Get feedback on my UI from others
 Refactor HTML classes & CSS rules
 Add modals, transitions, and other styling flourishes.

##Bonus Features (TBD)

 Search through notes for blocks of text
 Pagination / infinite scroll for Notes Index
 Set reminders on notes
 Changelogs for Notes
 Multiple sessions
