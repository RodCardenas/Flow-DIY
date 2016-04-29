json.extract! @api_project, :id, :title, :author, :pictures
json.steps @api_project.steps do |step|
  json.step do |json|
    json.(step, :id, :order, :title, :body, :project_id)
    json.pictures step.pictures
  end
end
