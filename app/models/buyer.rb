class Buyer < ApplicationRecord
  belongs_to :seller
  serialize :desired_categories, Array

#   SELECT name, id 
# FROM buyers

  def self.all_buyers
    select('name, id ')
    .from('buyers')
  end
end
