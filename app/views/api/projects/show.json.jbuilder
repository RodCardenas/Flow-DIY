json.extract! @api_project, :id, :title, :pictures
json.author @api_project.author, :id, :email
json.steps @api_project.steps do |step|
  json.(step, :id, :order, :title, :body, :project_id)
  json.pictures step.pictures
end
