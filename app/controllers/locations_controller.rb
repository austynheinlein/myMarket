class LocationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # get index (all)
  def index
    render json: Location.all
  end

  # get one (by id)
  def show
    render json: Location.find(params["id"])
  end



end
