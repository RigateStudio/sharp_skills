class Registration < ApplicationRecord

  belongs_to :student, class_name:"User"
  belongs_to :training_session, foreign_key: "student_id"

end
