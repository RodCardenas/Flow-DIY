json.array!(@api_favorites) do |api_favorite|
  json.extract! api_favorite, :id, :author_id, :project_id
end
