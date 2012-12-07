class AddAuthorToReplies < ActiveRecord::Migration
  def change
    add_column :replies, :author, :string
  end
end
