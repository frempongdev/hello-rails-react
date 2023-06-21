class Greeting < ApplicationRecord
    validates :phrase, presence: true
  
    def self.random_phrase
      Greeting.pluck(:phrase).sample
    end
end
  