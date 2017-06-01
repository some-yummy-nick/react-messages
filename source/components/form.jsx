import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const {author, message} = this.state;
    if(author && message) {
      const timestamp = Date.now();
      this.props.addComment({author, message, timestamp});
      this.resetForm();
    }
  };

  resetForm() {
    this.setState({
      author: '',
      message: ''
    });
  };

  handleChange = (key) => (e) => {
    this.setState({
      [key]: e.currentTarget.value
    });
  };
  
  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" value={this.state.author} onChange={this.handleChange('author')}/></div>
          <div className="form-group">
              <textarea type="text" rows="5" value={this.state.message} cols="100"
                        onChange={this.handleChange('message')}/>
          </div>
          <div className="form-group">
            <button className="btn btn-success" type="submit">Отправить</button>
          </div>
        </form>
      </div>
    )
  }
};

Form.propTypes = {};