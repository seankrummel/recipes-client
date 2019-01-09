import React from 'react';
import {connect} from 'react-redux';
import {getUserLists, getListById} from '../actions/lists';

class ListsDisplay extends React.Component {
  listClicked(id) {
    this.props.dispatch(getListById(id));
  }

  componentDidMount() {
    this.props.dispatch(getUserLists());
  }
  render() {
    // console.log(this.props.lists);
    let lists = this.props.lists.map(list => (
      <li key={list.id} onClick={() => {this.listClicked(list.id)}}>{list.title}</li>
    ));
    if (lists.length === 0) lists = <li>You don't have any lists. <button>Create a list</button></li>
    return (
      <div className="recipes-display">
        <h2>Your Lists</h2>
        <ul>{lists}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({lists: state.lists.lists});
export default connect(mapStateToProps)(ListsDisplay);
