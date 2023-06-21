class GreetingsController < ApplicationController
  def index
    render json: Greeting.random_phrase
  end
end
