import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="for-register">
    <div><Link to="/new_register">登録はこちら</Link></div>
    <div><Link to="/signin">ログイン</Link></div> 
  </div>
)


export default HomePage;