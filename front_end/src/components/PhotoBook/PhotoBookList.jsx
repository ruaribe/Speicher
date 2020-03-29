import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotoBooks } from '../../actions/photo_book/index';
import { Link } from 'react-router-dom';

class PhotoBookList extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.fetchPhotoBooks();
  };

  render() {
    const photoBookItems = this.props.photoBook.photoBooks.map((photo_book, index) => {
      return (
        <div key={index}>
            {photo_book.name}
        </div>
      );
    });

    return (
      <div>
        <h1>アルバム一覧</h1>
        <div className='PhotoBookList'>
          <div>{photoBookItems}</div>
        </div>
        <hr />
        <Link to='/'>トップページへ</Link>
      </div>
    )
  }
}


const mapStateToProps =  (store) => {
  return {
    photoBook: store.photoBook,
  }
}

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  { ...mapDispatchToProps, fetchPhotoBooks }
)(PhotoBookList);