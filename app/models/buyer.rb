class Buyer < ApplicationRecord
  belongs_to :seller
  serialize :desired_categories, Array

  # SELECT b.name, b.id 
  # FROM buyers AS b
  # INNER JOIN sellers AS s ON s.id = b.seller_id
  # WHERE s.id = 8

  def self.all_buyer_for_seller(id)
    select('b.name, b.id')
    .from('buyers AS b')
    .joins('INNER JOIN sellers AS s ON s.id = b.seller_id')
    .where('s.id = ?', id)
  end

  # SELECT p.id, p.name AS item, price, description
  # FROM buyers as b
  # INNER JOIN sellers AS s ON s.id = b.seller_id
  # INNER JOIN products AS p ON s.id = p.seller_id AND p.price <= b.max_price
  # WHERE b.id = 31
  # ORDER BY price DESC

  def self.show_products(id)
    select('p.id, b.name, p.name AS item, price, description')
    .from('buyers as b')
    .joins('INNER JOIN sellers AS s ON s.id = b.seller_id
            INNER JOIN products AS p ON s.id = p.seller_id AND p.price <= b.max_price')
    .where('b.id = ?', id)
    .order('price DESC')
  end
end
