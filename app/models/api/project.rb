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
  validates :title, uniqueness: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  has_many :steps
  has_many :pictures, :as => :imageable

  has_many :favorites,
    dependent: :destroy

  has_many :favoriters,
    through: :favorites,
    source: :author


  def get_default_project_picture
    Api::Picture.create!(
      imageable_id: self.id,
      imageable_type: self.class,
      picture_url: "http://res.cloudinary.com/flow-diy/image/upload/v1462559985/empty-book.jpg"
    )
  end

  def delete_default_project_picture
    puts "Deleting default picture!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"

    pic = Api::Picture.where("imageable_id = ? AND imageable_type = ? AND picture_url = ?", self.id, self.class, "http://res.cloudinary.com/flow-diy/image/upload/v1462559985/empty-book.jpg")

    Api::Picture.destroy(pic.pluck(:id))
  end
end
