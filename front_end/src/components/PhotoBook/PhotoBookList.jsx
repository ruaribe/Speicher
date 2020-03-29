import React from 'react';
import { connect } from 'react-redux';
import { API_URL } from '../../constants';

const PhotoBookList = () => {

  const photo_books = props.photo_book

  const deleateProduct = (id) => {
    axios.delete(`${API_URL}/photo_book/${id}`)
    .then((response) => {
      const productIndex = this.state.products.findIndex(x => x.id === id)
      const deletedProducts = update(this.state.products, {$splice: [[productIndex, 1]]})
      this.setState({products: deletedProducts})
      console.log('set')
    })
    .catch((data) =>{
      console.log(data)
    })
  }
  
  

  return (
    
    <div>

    </div>
  )
}

export default connect(
  null,
  {}
)(PhotoBookList);