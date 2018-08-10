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

  # create new location
  def create
    render json: Location.create(params["location"])
  end

  # delete location (by id)
  def delete
    render json: Location.delete(params["id"])
  end

  # update location (by id)
  def update
    render json: Location.update(params["id"], params["location"])
  end

end
