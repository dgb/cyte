import React   from 'react';
import request from 'superagent';

class Editor extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    let form = React.findDOMNode(this.refs.form);
    let handleUpdate = this.props.handleUpdate;

    request
      .post(form.action)
      .type('json')
      .send({
        url: form.url.value,
        query: form.query.value
      })
      .end(function(err, res) {
        handleUpdate(res.body);
      });
  }

  render() {
    return (
      <form ref="form" onSubmit={this.handleSubmit.bind(this)} action="/query" method="POST">
        <div className="form-group">
          <label>Database URL</label>
          <input name="url" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Query</label>
          <textarea name="query" rows="5" className="form-control"></textarea>
        </div>
        <button className="btn btn-default">Preview</button>
      </form>
    );
  }
}

export default Editor;
