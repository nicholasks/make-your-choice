import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'


class OverallTable extends Component {
  render() {
    return(
      <React.Fragment>
        <h1 style={h1Style}>Votes per Character</h1>
        <ReactTable className='-striped' style={tableStyle} data={data} columns={columns} pageSize={'20'}/>
      </React.Fragment>
    )
  }
}

const tableStyle = {
  textAlign: 'center',
  textOverflow: 'ellipsis',
}

const h1Style = {
  textAlign: 'center',
  color: 'grey'
}

const data = [
  {
    name: 'Jon Snow',
    votes: 12,
    percent: '30%'
  },
  {
    name: 'Mother of Dragons',
    votes: 8,
    percent: '20%'
  },
  {
    name: 'Aria de lavar roupa',
    votes: 20,
    percent: '50%'
  }
]

const columns = [
  {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  },
  {
    Header: 'Votes count',
    accessor: 'votes',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  },
  {
    Header: 'Votes %',
    accessor: 'percent'
  }
]

export default OverallTable;
