class Seller < ApplicationRecord
  has_many :buyers
  has_many :products


# SELECT  s.id, s.name, count(*) AS item_count
# FROM sellers AS s
# INNER JOIN products AS p ON s.id = p.seller_id
# GROUP BY s.id, s.name
# ORDER BY s.name asc
  def self.seller_and_item_count
    select('s.id, s.name, count(*) AS item_count')
    .from('sellers AS s')
    .joins('INNER JOIN products AS p ON s.id = p.seller_id')
    .group('s.id, s.name')
    .order('s.name asc')
  end

  # SELECT DISTINCT s.name, ROUND(AVG(price), 2) AS average_price
  # FROM sellers AS s
  # INNER JOIN products AS p ON p.seller_id = s.id
  # GROUP BY s.name
  def self.seller_and_prices
    select("s.name, ROUND(AVG(price), 2) AS average_price")
    .from('sellers AS s')
    .joins('INNER JOIN products AS p ON p.seller_id = s.id')
    .group('s.name')
    .to_json(except: :id)
  end
end
