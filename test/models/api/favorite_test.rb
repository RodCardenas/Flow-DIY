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

class Api::PictureTest < ActiveSupport::TestCase
  test "should not save a favorite without a project" do
    favorite = Api::Favorite.new(author_id: 1)
    assert_not favorite.save, "Saved the favorite without a project"
  end

  test "should not save a favorite without a favoriter" do
    favorite = Api::Favorite.new(project_id: 1)
    assert_not favorite.save, "Saved the favorite without a favoriter"
  end
end
