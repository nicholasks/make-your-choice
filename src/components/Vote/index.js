import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class Vote extends Component {
  render() {
    return(
      <React.Fragment>
        <h1 style={h1Style}>Vote Now</h1>
        <ReactTable className='-striped' sortable={false} style={tableStyle} data={data} columns={columns} pageSize={'18'}/>
      </React.Fragment>
    )
  }
}

var selected = []

const tableStyle = {
  textAlign: 'center',
  textOverflow: 'ellipsis',
}

const h1Style = {
  textAlign: 'center',
  color: 'grey'
}

var d = new Date();
var dattt = d.toISOString();

const data = [
  {
    id: '0',
    character: 'GUlana',
    selected: <input type='checkbox' style={inpStyle}></input>
  },
  {
    id: '1',
    character: 'Cicrana',
    selected: <input type='checkbox' style={inpStyle}></input>
  },
  {
    id: '2',
    character: 'Beltrana',
    selected: <input type='checkbox' style={inpStyle}></input>
  },
  {
    id: '3',
    character: 'Beltrana22',
    selected: <input type='checkbox' style={inpStyle}></input>
  },
  {
    id: '4',
    character: 'Suzana',
    selected: <input type='checkbox' onChange={(ev) => {console.log(ev);}}style={inpStyle}></input>
  }
]

const columns = [
  {
    Header: 'ID',
    accessor: 'id' // String-based value accessors!
  },
  {
    Header: 'Character name',
    accessor: 'character' // String-based value accessors!
  },
  {
    Header: 'Select',
    accessor: 'selected',
  }
]

const inpStyle = {
  margin: '25px',
  border: '10px',
  type: 'checkbox'
}

export default Vote;
