class PhotoBooksController < ApplicationController
  before_action :authenticate_user!, except: %i[index]

  def index
    @photo_books = PhotoBook.all
    render json: @photo_books
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

  def show
    @photo_book = PhotoBook.find(params[:id])
    render json: @photo_book
  end

  def update
    @photo_book = PhotoBook.find(params[:id])
    if @photo_book.update(photo_book_params)
      render json: @photo_book
    else
      render json: @photo_book.errors, status: :unprocessable_entity
    end
  end

  def delete
    @photo_book = PhotoBook.find(params[:id])
    @photo_book.destroy
  end

  private

  def photo_book_params
    params.permit(:name)
  end
end
