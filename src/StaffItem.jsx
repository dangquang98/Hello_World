import React, { Component } from 'react';

export default class StaffItem extends Component {
  constructor(props){
    super(props);
    this.state ={isEdit:false}
    this.editStaff = this.editStaff.bind(this);
    this.editStaffSubmit = this.editStaffSubmit.bind(this);
    this.deleteStaff = this.deleteStaff.bind(this);
  }
  deleteStaff(){
    const {id} = this.props.Staff;
    this.props.deleteStaff(id);
  }
  editStaff(){
    this.setState((prevState, props) => ({
      isEdit : !prevState.isEdit
    }))
  }
  editStaffSubmit(){
    const {id} = this.props.Staff;
    this.setState((prevState,props) => ({
      isEdit : !prevState.isEdit
    }));
     
    this.props.editStaffSubmit(
      id,
      this.nameInput.value,
      this.ageInput.value,
      this.genderInput.value
    );
  }
  render() {
    const {name, age, gender} = this.props.staff;
    return (
        this.state.isEdit === true ? (
            <tr className="bg-warning" key={this.props.index}>
                <td>
                    <input ref={nameInput => this.nameInput = nameInput} defaultValue ={name}/>
                </td>
                <td><input defaultValue={age} ref={ageInput => this.ageInput = ageInput}/>
                </td>
                <td>
                    <input ref={genderInput => this.genderInput = genderInput} defaultValue={gender}/>
                </td>
                <td><i className="far fa-save" onClick={this.editStaffSubmit}></i>
                </td>
                <td><i className="fas fa-trash"></i></td>
            </tr>
        ):(
            <tr key={this.props.index}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td><i className="far fa-edit" onClick={this.editStaff}></i></td>
                <td><i className="fas fa-trash" onClick={this.deleteStaff}></i></td>
            </tr>
        )
    );
  }
}