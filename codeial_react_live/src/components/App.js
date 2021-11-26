import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts.js';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    console.log('Props', this.props);

    return <div>App</div>;
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
