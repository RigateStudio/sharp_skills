class CreateTrainingSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :training_sessions do |t|
      t.datetime :date
      t.references :teacher, index: true
      t.belongs_to :course
      t.belongs_to :room
      t.timestamps
    end
  end
end
