import React, { Component, PropTypes } from 'react';
import serialize from 'form-serialize';

export default class SimpleSerialForm extends Component {

  static propTypes = {
    onData: PropTypes.func.isRequired
  }

  submitHandler(event) {
    event.preventDefault();
    let data = serialize(this.form, { hash: true });
    this.props.onData(data);
  }

  render() {
    return (
      <form {...this.props} onSubmit={::this.submitHandler} ref={::this.getFormRef}>
        {this.props.children}
      </form>
    );
  }

  getFormRef(form) {
    this.form = form;
  }

}
