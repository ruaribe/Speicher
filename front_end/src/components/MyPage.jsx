import React from 'react';
import { connect } from 'react-redux';
import SiteHeader from './auth/SiteHeader';
import PhotoBook from './PhotoBook/PhotoBookCreate';

const MyPage = (props) => (
  <div>
    <SiteHeader />
    <h1>mypage</h1>
    <PhotoBook />
  </div>
);

export default connect(
  null,
  {}
)(MyPage);