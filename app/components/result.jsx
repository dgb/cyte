import React from 'react';

class Result extends React.Component {
  render() {

    var headers, rows;

    if (this.props.headers.length) {
      headers = this.props.headers.map((h) => <th>{h}</th>);
    } else {
      headers = (
        <th>No results</th>
      )
    }

    rows = this.props.rows.map(function(row) {
      let cols = row.map((r) => <td>{r}</td>);
      return <tr>{cols}</tr>;
    });

    return (
      <table className="table">
        <thead>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Result;
