class TrainingSession < ApplicationRecord
    
    has_many :registrations
    has_many :students, class_name:"User", through: :registrations

    belongs_to :course

    belongs_to :room
end
