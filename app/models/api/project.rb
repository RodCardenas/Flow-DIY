# == Schema Information
#
# Table name: api_projects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Api::Project < ActiveRecord::Base
  validates :title, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  has_many :steps
  has_many :pictures, :as => :imageable

  def get_default_project_picture
    Api::Picture.create!(
      imageable_id: self.id,
      imageable_type: self.class,
      picture_url: "http://res.cloudinary.com/flow-diy/image/upload/v1462553037/Empty_book_huxeup.jpg"
    )
  end
end
