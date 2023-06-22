class GreetingsController < ApplicationController
  def index
    render json: { phrase: Greeting.random_phrase }
  end
end
