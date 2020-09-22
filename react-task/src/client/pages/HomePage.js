import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { callApi } from '../actions';
const HomePage = props => {
  const renderUsers = () => {
    return props.users.map(user => (
      <div className="col s12 m6 l6 xl4" key={user.name}>
        <div className="card large" onClick={() => props.history.push(`/posts/${user.id}`)}>
          <div className="card-image">
          </div>
          <div className="card-content">
            <span className="card-title">{user.email}</span>
          </div>
        </div>
      </div>
    ));
  };
  const { callApi: callApifunction } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    callApifunction();
  }, [callApifunction]);
  return (
    <div>
      <div className="row">
        <div className="section">
          <h3>Users</h3>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{renderUsers()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.data.users
  };
};

const loadData = store => {
  return store.dispatch(callApi()); 
};


export default {
  component: connect(
    mapStateToProps,
    { callApi }
  )(HomePage),
  loadData
};
