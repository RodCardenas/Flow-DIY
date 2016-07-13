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

class Api::Picture < ActiveRecord::Base
  validates :imageable_id, :imageable_type, :picture_url, presence: true

  belongs_to :imageable, polymorphic: true
end
