# == Schema Information
#
# Table name: api_favorites
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class Api::FavoritesControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
