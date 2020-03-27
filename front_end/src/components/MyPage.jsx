import React from 'react';
import { connect } from 'react-redux';
import SiteHeader from './SiteHeader';

const MyPage = (props) => (
  <div>
    <SiteHeader />
    <h1>mypage</h1> 
  </div>
);

export default connect(
  null,
  {}
)(MyPage);