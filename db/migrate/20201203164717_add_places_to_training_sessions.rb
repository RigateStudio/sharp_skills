class AddPlacesToTrainingSessions < ActiveRecord::Migration[6.0]
  def change
    add_column :training_sessions, :places, :int, default: 20
  end
end
