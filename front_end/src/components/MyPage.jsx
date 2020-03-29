import React from 'react';
import { connect } from 'react-redux';
import SiteHeader from './auth/SiteHeader';
import PhotoBook from './PhotoBook/PhotoBookCreate';
import PhotoBookList from './PhotoBook/PhotoBookList';

const MyPage = (props) => (
  <div>
    <SiteHeader />
    <h1>mypage</h1>
    <PhotoBook />
    <PhotoBookList />
  </div>
);

export default connect(
  null,
  {}
)(MyPage);