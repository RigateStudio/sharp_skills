class TrainingSession < ApplicationRecord

    belongs_to :teacher, class_name:"User"

    has_many :registrations 
    has_many :students, foreign_key: 'user_id', class_name:"User"
end