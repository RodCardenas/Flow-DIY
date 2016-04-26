# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

## Projects Cycles

### Projects API Request Actions

* `fetchAllProjects`
  0. invoked from `ProjectsIndex` `didMount`
  0. `GET /api/projects` is called.
  0. `receiveAllProjects` is set as the callback.

* `createProject`
  0. invoked from new project button `onClick`
  0. `POST /api/projects` is called.
  0. `receiveSingleProject` is set as the callback.

* `fetchSingleProject`
  0. invoked from `ProjectDetail` `didMount`
  0. `GET /api/projects/:id` is called.
  0. `receiveSingleProject` is set as the callback.

* `updateProject`
  0. invoked from `ProjectForm` `onSubmit`
  0. `POST /api/projects` is called.
  0. `receiveSingleProject` is set as the callback.

* `destroyProject`
  0. delete project button `onClick` invokes confirmation prompt
    - invoked from confirmation prompt's confirm button `onClick`
  0. `DELETE /api/projects/:id` is called.
  0. `removeProject` is set as the callback.
  
### Projects API Response Actions

* `receiveAllProjects`
  0. invoked from an API callback.
  0. `Project` store updates `_projects` and emits change.

* `receiveSingleProject`
  0. invoked from an API callback.
  0. `Project` store updates `_projects` and emits change.

* `removeProject`
  0. invoked from an API callback.
  0. `Project` store updates `_projects` and emits change.

### Store Listeners

* `ProjectsIndex` component listens to `Project` store.
* `ProjectDetail` component listens to `Project` store.
