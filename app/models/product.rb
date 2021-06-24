class Product < ApplicationRecord
  belongs_to :seller

# SELECT s.id as seller_id, s.email as seller_email, s.name as seller_name, p.id as product_id, p.name as product_name, price, description, category
# from sellers as s
# inner join products as p
# on s.id = p.seller_id
# ORDER BY s.id asc;

  def self.available
    select('s.id AS s_id, p.seller_id, s.email AS seller_email, s.name AS seller_name, p.id AS product_id, p.name AS product_name, price, description, category')
    .from('sellers AS s')
    .joins('INNER JOIN products as p ON s.id = p.seller_id')
    .order('s.id asc')
  end

#   SELECT id, name, price, description, category
# from products as p
# where LOWER(p.category) = 'art'

  def self.by_category(category)
    select('id, name, price, description, category')
    .from('products as p')
    .where('LOWER(p.category) = ?', category)
    .order('category asc')
  end

#   SELECT DISTINCT category
# from products as p
# ORDER BY category asc;
  def self.category
   select('DISTINCT category')
   .from('products as p')
   .order('category asc')
   .to_json(except: :id)
  end
end
