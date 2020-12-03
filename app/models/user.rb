class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include Devise::JWT::RevocationStrategies::JTIMatcher

  enum role: [:admin, :student, :teacher]

  has_many :courses, foreign_key: "teacher_id"

  has_many :registrations, foreign_key: "student_id"
  has_many :training_sessions, through: :registrations

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  def api
    case self.role
    when "teacher"
      self.build("courses")
    when "student"
      self.build("training_sessions")
    else 
      self.build()
    end
  end
end