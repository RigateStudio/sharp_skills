class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def build(*associations)
    api = self.attributes

    associations.each do |association| 
      associateds = self.send(association).map { |associated| associated.attributes}
      api[association] = associateds
    end
    return api
  end

end
