import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import $ from 'jquery';

import styles from './styles';

class Vote extends Component {
  state = {
    maxVotesPerUser: 5,
    selectedList : [],
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
        character: 'Belinha'
      },
      {
        id: '1',
        character: 'Bazquxfoo'
      },
      {
        id: '2',
        character: 'Beltrana'
      },
      {
        id: '3',
        character: 'Foobar'
      },
      {
        id: '4',
        character: 'Quxbaz'
      },
      {
        id: '5',
        character: 'Jordana'
      }
    ]
  }

  addCheckBox = () => {
    for (var i in this.state.data) {
      var id = this.state.data[i].id
      var botao = <input id={'ckBtn' + id} charid={id} type='checkbox' onChange={(ev) => {this.addOrRm(ev)}} style={styles.inpStyle}></input>;
      this.state.data[i].selected = botao;
    }
  }

  addOrRm = (ev) => {
    let id = ev.target.getAttribute('charid');
    if ($('#'+ ev.target.id).prop('checked')){
      if (this.state.selectedList.length < this.state.maxVotesPerUser) {
        this.setState({
          selectedList: [...this.state.selectedList, id]
        })

      } else {
        alert('Max votes per User is ' + this.state.maxVotesPerUser);
        $('#'+ ev.target.id).prop('checked', false)
      }
    } else {
      const newList = this.state.selectedList.filter(item => {
        return item !== id;
      });

      this.setState({
        selectedList: [...newList]
      })
    }
  }

  render() {
    return(
      <React.Fragment>
        {this.addCheckBox()}
        <h1 style={styles.h1Style}>Vote Now</h1>
        <ReactTable className='-striped' sortable={false} style={styles.tableStyle} data={this.state.data} columns={this.state.columns} pageSize={'10'}/>
        <div id="louca"></div>
      </React.Fragment>
    )
  }
}

export default Vote;
