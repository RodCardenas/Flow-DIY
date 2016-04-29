json.array!(@api_projects) do |api_project|
  json.extract! api_project, :id, :title, :author, :pictures, :steps
  json.url api_project_url(api_project, format: :json)
end
