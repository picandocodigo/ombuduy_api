class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :twitter_user_id
      t.string :email
      t.string :nickname
      t.timestamps
    end
  end
end
