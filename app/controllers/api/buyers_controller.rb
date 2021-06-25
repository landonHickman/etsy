class Api::BuyersController < ApplicationController
  def sellers_buyers
    id = Seller.find(params[:id])
    render json: Buyer.all_buyer_for_seller(id)
  end

  def show
    id = Buyer.find(params[:id])
    render json: Buyer.show_products(id)
  end
end
