import React from 'react';
import store from './lib/store';
import Form from './components/form';
import Comments from './components/comments';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: store
    };
  }

  addComment = (comment) => {
    let stores = [comment, ...this.state.store];
    this.setState({
      store: stores
    });
  };

  render() {
    return (
      <div className="container text-center">
        <Form addComment={this.addComment}/>
        <Comments store={this.state.store}/>
      </div>
    )
  };
}
App.propTypes = {};