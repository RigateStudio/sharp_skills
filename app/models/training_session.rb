class TrainingSession < ApplicationRecord

    belongs_to :teacher, foreign_key:"user_id", class_name:"User"

    has_many :registrations
    has_many :students, foreign_key: 'user_id', class_name:"User", through: :registrations

    belongs_to :course

    belongs_to :room
end
