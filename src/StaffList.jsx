import React, { Component } from 'react';
import StaffItem from './StaffItem.jsx';

export default class StaffList extends Component {
  render() {
    let staffs = this.props.staffList;
    const trItem = staffs.map((item,index) => (
      <StaffItem
        key={index}
        staff={item}
        index={index}
        editStaffSubmit={this.props.editStaffSubmit}      
        deleteStaff={this.props.deleteStaff}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}