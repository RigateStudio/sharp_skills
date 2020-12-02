class CreateRegistrations < ActiveRecord::Migration[6.0]
  def change
    create_table :registrations do |t|
      t.integer :notation
      t.belongs_to :student
      t.references :training_session, index: true
      t.timestamps
    end
  end
end
