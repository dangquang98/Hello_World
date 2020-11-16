import React, { Component } from 'react';
// import './App.css';
import StaffList from './StaffList.jsx';

const staffList = [
  {id:1, name:'Henry', age: 25, gender: 'male'},
  {id:2, name:'Jack', age: 27, gender: 'male'},  
  {id:3, name:'Adam', age: 28, gender: 'male'},
  {id:4, name:'Eva', age: 24, gender: 'famale'}
];

if (localStorage.getItem("staffs") === null) {
  localStorage.setItem('staffs', JSON.stringify(staffList));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: []
    }
    this.editStaffSubmit = this.editStaffSubmit.bind(this);
    this.deleteStaff = this.deleteStaff.bind(this);
    this.addNewStaff = this.addNewStaff.bind(this);
  }

  componentWillMount() {
    let staffList = JSON.parse(localStorage.getItem("staffs"));
    this.setState((prevState, props) => ({
      staffList: staffList
    }));
  }

  addNewStaff() {
    this.setState((prevState, props) => ({
      staffList: [...prevState.staffList, {  
        id: Math.max(...prevState.staffList.map(function(o) {
          return o.id
        })) + 1,name: '', age: 18, gender: '' 
      }]
    }));
  }

  deleteStaff(id) {
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      let filteredStaffList = this.state.staffList.filter(
        x => x.id !== id
      );
       this.setState((prevState, props) => ({
          staffList: filteredStaffList
       }));
       localStorage.setItem('staffs',JSON.stringify(filteredStaffList)
       );
    }
  }

  editStaffSubmit(id, name, age, gender) {
    let staffListCopy = this.state.staffList.map((staff) => {
      if (staff.id === id) {
        staff.name = name;
        staff.age = age;
        staff.gender = gender;
      }
      return staff;
    });
    this.setState((prevState, props) => ({
      staffList: staffListCopy
    }));
    localStorage.setItem('staffs',JSON.stringify(staffListCopy)
    );
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3"><div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              Staff Registry
            </div>
            <div className="card-body">
              <table className="table table-hover">
                <thead className="thead-dark"><tr><th>Name</th><th>age</th><th>gender</th><th>Edit/Save</th><th>Delete</th></tr></thead>
                <StaffList
                  deleteStaff={this.deleteStaff}
                  staffList={this.state.staffList}
                  editstaffSubmit={this.editStaffSubmit}
                />
              </table>
            <button className="btn btn-dark pull-left" onClick={this.addNewStaff}> Add New </button>
          </div>
        </div>
      </div>
     </div>
    </div>
   );
  }
}

export default App;
