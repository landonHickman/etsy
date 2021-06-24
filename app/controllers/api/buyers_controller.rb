class Api::BuyersController < ApplicationController
  def index
    render json: Buyer.all_buyers
  end
end
