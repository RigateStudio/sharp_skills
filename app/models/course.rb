class Course < ApplicationRecord
    belongs_to :teacher
    
    has_many :registrations
    has_many :training_sessions, through: :registrations
end
