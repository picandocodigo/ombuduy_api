class AddNavigatioToTag < ActiveRecord::Migration
  def change
    change_table :tags do |t|
      t.integer :navigation
    end
  end
end
