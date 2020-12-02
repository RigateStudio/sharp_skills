class CourseCategories < ActiveRecord::Migration[6.0]
  def change
    t.belongs_to :courses, index: true
    t.belongs_to :categories, index: true
  end
end
