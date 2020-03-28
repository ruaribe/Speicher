class PhotoBooksController < ApplicationController
  before_action :authenticate_user!, except: %i[index]

  def index
    render json: Hoge.all
  end

  def create
    @photo_book = PhotoBook.new(photo_book_params)
    if @photo_book.save
      render status: 200, json: @photo_book
    else
      render status: 500, json: { status: 500,
                                  message: 'Internal Server Error' }
    end
  end

  private

  def photo_book_params
    params.permit(:name)
  end
end
