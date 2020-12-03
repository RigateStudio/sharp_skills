class CreateRegistrations < ActiveRecord::Migration[6.0]
  def change
    create_table :registrations do |t|
      t.integer :notation
      t.references :student, index: true
      t.belongs_to :training_session, index: true
      t.timestamps
    end
  end
end
