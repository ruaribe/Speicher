import React from 'react';
import { connect } from 'react-redux';
import  axios  from '../../axios_helper';
import { API_URL } from '../../constants';
import {
  Col,
  Form,
  Button
} from 'react-bootstrap';
import { photoBookUpdateParams } from '../../actions/photo_book/index';

const PhotoBook = (props) => {

  const onChangeHndler = (event, key) => {
    props.photoBookUpdateParams(key, event.target.value)
  };

  const submitForm = (e) => {
    e.preventDefault()
    const {name} = props.photoBook
    axios
      .post(`${API_URL}/photo_books`, {name})
      .then()
      .catch()
  }

  const { name } = props;
  
  return (
    <Form onSubmit = { submitForm }>
      <Col>
        <Form.Group controlId="name">
          <Form.Label>名前</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={event => onChangeHndler(event, "name")}
          />
        </Form.Group>
      </Col>

      <Button variant="primary" type="submit">
        作成
      </Button>
    </Form>
  )
}

const mapStateToProps =  (store) => {
  return {
    photoBook: store.photoBook,
  }
}

export default connect(
  mapStateToProps,
  { photoBookUpdateParams },
)(PhotoBook)