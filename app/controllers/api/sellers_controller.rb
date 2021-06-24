class Api::SellersController < ApplicationController
  def index
    render json: Seller.seller_and_item_count
  end
end
