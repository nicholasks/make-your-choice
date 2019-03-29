import React, { Component } from 'react';
import ReactTable from "react-table";
import update from 'immutability-helper';
import 'react-table/react-table.css'
import $ from 'jquery';

import styles from './styles';

class Vote extends Component {
  state = {
    selectedList : [

    ],
    columns: [
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
    ],

    data: [
      {
        id: '0',
        character: 'GUlana'
      },
      {
        id: '1',
        character: 'Cicrana'
      },
      {
        id: '2',
        character: 'Beltrana'
      },
      {
        id: '3',
        character: 'Beltrana22'
      },
      {
        id: '4',
        character: 'Suzana'
      }
    ]
  }


  addCheckBox = () => {
    for (var i in this.state.data) {
      var id = this.state.data[i].id
      var botao = <input id={'ch' + id} charid={id} type='checkbox' onChange={(ev) => {this.addOrRm(ev)}} style={styles.inpStyle}></input>;
      this.state.data[i].selected = botao;
    }
  }

  addOrRm = (ev) => {
    console.log(ev.target);
    let id = ev.target.getAttribute('charid');
    console.log(id);
  }

  render() {
    return(
      <React.Fragment>
        {this.addCheckBox()}
        <h1 style={styles.h1Style}>Vote Now</h1>
        <ReactTable className='-striped' sortable={false} style={styles.tableStyle} data={this.state.data} columns={this.state.columns} pageSize={'10'}/>
      </React.Fragment>
    )
  }
}

export default Vote;
