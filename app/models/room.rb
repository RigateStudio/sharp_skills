class Room < ApplicationRecord

  has_many :training_sessions

  def api
    self.build("training_sessions")
  end
end
