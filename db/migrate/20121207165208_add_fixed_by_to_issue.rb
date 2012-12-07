class AddFixedByToIssue < ActiveRecord::Migration
  def change
    change_table :issues do |t|
      t.string :fixed_by
    end
  end
end
