# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Test.destroy_all
Buyer.destroy_all
Product.destroy_all
Seller.destroy_all

cat = [
  'Outdoors & Gardening',
  'Crafts',
  'Clothing',
  'Toys',
  'Art',
  'Gifts'
]

5.times do
 seller = Seller.create(name: Faker::Name.name, email: Faker::Internet.email)
 5.times do
  num_cat = rand(0..cat.length-1)
  seller.buyers.create(name: Faker::Name.name, max_price: rand(50...400), desired_categories: cat.sample(num_cat))
 end
 5.times do
  seller.products.create(name: Faker::Food.fruits, price: rand(15...400), description: Faker::Food.description, category: cat.sample)
 end
end

puts "seeded Seller #{Seller.all.length}"
puts "seeded Buyer #{Buyer.all.length}"
puts "seeded Product #{Product.all.length}"