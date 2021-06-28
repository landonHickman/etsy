class Api::ProductsController < ApplicationController
  def index
    render json: Product.available
  end

  def category
    render json: Product.category
  end

  def by_category
    category = params[:category]
    render json: Product.by_category(category)
  end

  def category_sum
    render json: Product.cat_sum
  end
end
