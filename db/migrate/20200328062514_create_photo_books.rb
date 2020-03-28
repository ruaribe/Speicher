class CreatePhotoBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :photo_books do |t|
      t.string :name

      t.timestamps
    end
  end
end
