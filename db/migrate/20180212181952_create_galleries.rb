class CreateGalleries < ActiveRecord::Migration
  def change
    create_table :galleries do |t|
      t.string :title
      t.string :description
      t.references :post, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
