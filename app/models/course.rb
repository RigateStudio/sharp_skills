class Course < ApplicationRecord

    belongs_to :teacher, foreign_key:"user_id", class_name:"User"

    has_many :training_sessions

    has_many :course_categories
    has_many :categories, through: :course_categories

end
