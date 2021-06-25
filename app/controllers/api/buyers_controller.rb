class Api::BuyersController < ApplicationController
  def sellers_buyers
    id = Seller.find(params[:id])
    render json: Buyer.all_buyer_for_seller(id)
  end

  def show
    buyer = Buyer.find(params[:id])
    render json: Buyer.show_products(buyer.id, buyer.desired_categories)
  end
end
