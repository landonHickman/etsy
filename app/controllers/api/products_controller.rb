class Api::ProductsController < ApplicationController
  def index
    render json: Product.available
  end

  def category
    render json: Product.category
  end
end
