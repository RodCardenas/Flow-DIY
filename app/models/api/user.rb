# == Schema Information
#
# Table name: api_users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

class Api::User < ActiveRecord::Base
  after_initialize :ensure_session_token

  validates :email, :session_token, uniqueness: true
  validates :email, :password_digest, :session_token, presence: true

  has_many :projects,
    foreign_key: :author_id,
    dependent: :destroy

  has_one :picture, :as => :imageable

  has_many :favorites,
    foreign_key: :author_id,
    dependent: :destroy

  has_many :favorite_projects,
    through: :favorites



  def self.generate_token
    SecureRandom.base64(16)
  end

  def self.find_by_credentials(email, password)
    user = Api::User.find_by_email(email)

    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password).to_s
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = Api::User.generate_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= Api::User.generate_token
  end

  def get_default_avatar_picture
    Api::Picture.create!(
      imageable_id: self.id,
      imageable_type: self.class,
      picture_url: "http://res.cloudinary.com/flow-diy/image/upload/v1462235698/no-user.png"
    )
  end

  def favorites?(project_id)
    Api::Favorite.where(project_id: project_id).where(author_id: self.id).any?
  end

end
