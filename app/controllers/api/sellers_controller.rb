class Api::SellersController < ApplicationController
  def index
    render json: Seller.seller_and_item_count
  end

  def avg_price
    render json: Seller.seller_and_prices
  end
end
