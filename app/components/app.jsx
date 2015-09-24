import React  from 'react';
import Navbar from './navbar';
import Editor from './editor';
import Result from './result';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headers: [],
      rows: []
    }
  }

  handleUpdate(res) {
    let heads = res.fields.map((f) => f.name);
    let rows = res.rows.map(function(row) {
      return heads.map(function(h) {
        return row[h];
      });
    });

    this.setState({headers: heads, rows: rows});
  }

  render() {
    return (
      <div className="cyte-app">
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Query Editor</h3>
              <Editor handleUpdate={this.handleUpdate.bind(this)}/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h3>Results</h3>
              <Result headers={this.state.headers} rows={this.state.rows}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
