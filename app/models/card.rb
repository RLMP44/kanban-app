class Card < ApplicationRecord
  belongs_to :kanban_column
  # acts_as_list
end
