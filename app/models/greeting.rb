class Greeting < ApplicationRecord
    validates :phrase, presence: true
end
