class Kanban < ApplicationRecord
  has_many :kanban_columns
  # acts_as_list
end
