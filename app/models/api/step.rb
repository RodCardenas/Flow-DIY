# == Schema Information
#
# Table name: api_steps
#
#  id         :integer          not null, primary key
#  order      :integer          not null
#  title      :string           not null
#  body       :string           not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Api::Step < ActiveRecord::Base
  validates :order, :title, :body, :project_id, presence: true

  belongs_to :project

  has_one :author,
    through: :project,
    source: :author

  has_many :pictures, :as => :imageable
end
