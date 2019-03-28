import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'


class OverallTable extends Component {
  render() {
    return(
      <React.Fragment>
        <h1 style={h1Style}>Users votes</h1>
        <ReactTable data={data} columns={columns} pageSize={'18'}/>
      </React.Fragment>
    )
  }
}

const h1Style = {
  textAlign: 'center',
  color: 'grey'
}
var d = new Date();
var dattt = d.toISOString();
const data = [
  {
    username: 'João',
    votes: 'GUlana, Cicrana, Beltrana, Fulano, Crizasadok', //This will return a String with the names...
    amount: 13.5,
    date: '2019-03-28T20:30:11.846Z'
  },
  {
    username: 'Maria',
    votes: 'GUlana, Cicrana, Beltrana, GUlana, Cicrana, Beltrana', //This will return a String with the names...
    amount: 12.25,
    date:dattt
  },
  {
    username: 'José',
    votes: 'GUlana, Cicrana, Beltrana', //This will return a String with the names...
    amount: 5.00,
    date:'2019-03-27T22:30:38.715Z'
  }
]

const columns = [
  {
    Header: 'Name',
    accessor: 'username' // String-based value accessors!
  },
  {
    Header: 'Characters',
    accessor: 'votes',
  },
  {
    Header: 'Money given',
    accessor: 'amount'
  },
  {
    Header: 'Date Created',
    accessor: 'date'
  }
]

export default OverallTable;
