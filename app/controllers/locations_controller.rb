class LocationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # get index (all)
  def index
    render json: Location.all
  end


end
