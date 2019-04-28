class Api::HomesController < ApplicationController
  def index
    @homes = Home.all
    render 'api/homes/index'
  end
end
