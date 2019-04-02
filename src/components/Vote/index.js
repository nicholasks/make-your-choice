import React, { Component } from 'react';
import ReactTable from "react-table";
import { Input, Grid, Image } from 'semantic-ui-react'
import $ from 'jquery';

import 'react-table/react-table.css'
import 'semantic-ui-css/semantic.min.css'

import styles from './styles';


class Vote extends Component {
  state = {
    maxVotesPerUser: 5,
    voted: false,
    selectedList : [],
    columns: [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Character name',
        accessor: 'character'
      },
      {
        Header: 'Select',
        accessor: 'selected',
      }
    ],

    data: [
      {
        id: '0',
        character: 'Sansa Stark'
      },
      {
        id: '1',
        character: 'Jon Snow'
      },
      {
        id: '2',
        character: 'Ned Stark'
      },
      {
        id: '3',
        character: 'Daenerys Targaryen'
      },
      {
        id: '4',
        character: 'Arya Stark'
      },
      {
        id: '5',
        character: 'Joffrey Baratheon'
      },
      {
        id: '6',
        character: 'Tyrion Lannister'
      },
      {
        id: '7',
        character: 'Daenerys Targaryen'
      },
      {
        id: '8',
        character: 'Arya Stark'
      },
      {
        id: '9',
        character: 'Joffrey Baratheon'
      },
      {
        id: '10',
        character: 'Tyrion Lannister'
      },
      {
        id: '11',
        character: 'Daenerys Targaryen'
      },
      {
        id: '12',
        character: 'Arya Stark'
      },
      {
        id: '13',
        character: 'Joffrey Baratheon'
      },
      {
        id: '14',
        character: 'Tyrion Lannister'
      },
      {
        id: '15',
        character: 'Melisandre'
      },
      {
        id: '16',
        character: 'Varys'
      },
    ],

    selectedData: [
      {
        charname: 'Varys'
      },
      {
        charname: 'Melisandre'
      },
      {
        charname: 'Joffrey Baratheon'
      },
      {
        charname: 'Arya Stark'
      },
      {
        charname: 'Daenerys Targaryen'
      },
    ]
  }

  addCheckBox = () => {
    for (var i in this.state.data) {
      var id = this.state.data[i].id
      const botao = <input
        id={'ckBtn' + id}
        charid={id}
        type='checkbox'
        onChange={(ev) => {this.addOrRm(ev)}}
        style={styles.chkBoxStyle}
      ></input>;
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

  voteInterface = () => {
    const pageDiv = (
      <div id="voteDiv">
        <h1 style={styles.h1Style}>Vote Now</h1>
        <ReactTable
          className='-striped'
          sortable={false}
          style={styles.tableStyle}
          data={this.state.data}
          columns={this.state.columns}
          showPageSizeOptions={false}
          pageSize={'12'}
          />
          <Grid>
            <Grid.Column floated='left' mobile={16} tablet={8} computer={3}></Grid.Column>
            <Grid.Column floated='right' mobile={16} tablet={8} computer={3}>
              <div>
                <Input size='large' labelPosition='left' type='text' placeholder='Amount' />
                <button size='small' className="ui negative basic button">Clear Selection</button>
                <button size='small' className="ui secondary basic button">Make you bet</button>
              </div>
            </Grid.Column>
          </Grid>
      </div>
    )
    return pageDiv
  }

  alreadyVotedInterface = () => {
    const pageDiv = (
      <div id="userVoteList">
        <h1 style={styles.h1Style}>Already voted!</h1>
        <ReactTable
          className='-striped'
          sortable={false}
          showPagination={false}
          style={styles.tableStyle}
          data={this.state.selectedData}
          columns={[{Header: 'Characters selected', accessor: 'charname'}]}
          pageSize={'6'}
          />
      </div>
    )
    return pageDiv
  }

  changeInterface = () => {
    if (this.state.voted) {
      this.setState({
        voted: false
      });
    } else {
      this.setState({
        voted: true
      });
    }
  }

  render() {
    return(
      <React.Fragment>
        <button onClick={(ev) => {this.changeInterface()}}>Click</button>
        {this.addCheckBox()}
        {this.state.voted ? this.alreadyVotedInterface() : this.voteInterface() }
      </React.Fragment>
    )
  }
}

export default Vote;
