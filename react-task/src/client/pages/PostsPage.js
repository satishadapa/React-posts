
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CommnetPopBox from '../components/CommnetPopBox';
import { callApi ,fetchCommnets } from '../actions';

const  PostsPage = props => {
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState({});
  const [visible, setvisible] = useState(2);

  const readCommnet = article => {
    if(article && props.comments){
      props.fetchCommnets(article)
      setComment(props.comments);
      setModal(true);
    }
  };

 const  loadMore=()=>{
    setvisible(visible + 4)
  }

  const closeModal = () => {
    setModal(false);
  };


  const renderPosts = () => {
    return props.posts.slice(0, visible).map(article => (
      <div className="col s12 m6 l6 xl4" key={article.title}>
        <div className="card large">
          <div className="card-content">
            <span className="card-title">{article.body}</span>
          </div>
          <div className="card-action">
            <a href="javascript:void(0)" onClick={() => readCommnet(article.id)}>
              Read commnets
            </a>
          </div>
        </div>
      </div>
      
    ));
  };

  const { match } = props;
  const { callApi: callApiFun } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (match.params.id) {
      callApiFun(match.params.id);
    } else {
      callApiFun();
    }
  }, [callApiFun, match.params.id]);
  return (
    <div>
      {modal ? <CommnetPopBox handler={closeModal} data={comment} /> : null}
      <div className="row">
        <div className="section">
          <h3>Posts</h3>
        </div>
        <div className="divider" />
        <div className="section">
          <div className="row">{renderPosts()}</div>
          {visible <props.posts.length &&
          <div className="card-action">
            <a href="javascript:void(0)" onClick={loadMore}>
              Read More
            </a>
          </div> 
          }
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.data.posts,
    comments:state.data.comments
  };
};

const loadData = (store, param) => {
  return store.dispatch(callApi(param));
};



export default {
  component: connect(
    mapStateToProps,
    { callApi  ,fetchCommnets}
  )(PostsPage),
  loadData
};
