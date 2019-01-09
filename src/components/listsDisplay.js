import React from 'react';
import {connect} from 'react-redux';
import {getUserLists} from '../actions/lists';

class ListsDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUserLists());
  }
  render() {
    // console.log(this.props.lists);
    const lists = this.props.lists.map(list => (
      <li key={list.id}>{list.title}</li>
    ));
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
