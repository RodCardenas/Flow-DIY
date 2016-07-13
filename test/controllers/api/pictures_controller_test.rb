# == Schema Information
#
# Table name: api_pictures
#
#  id             :integer          not null, primary key
#  imageable_id   :integer          not null
#  imageable_type :string           not null
#  picture_url    :string           not null
#  caption        :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class Api::PicturesControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end
