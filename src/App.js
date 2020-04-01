import React from 'react';
import './App.css';
import Header from "./components/Header";
import users from "./utils/users.json";
import Search from "./components/Search";
import EmployeeCard from "./components/EmployeeCard";
import API from './utils/API';
import EmployeeWrapper from "./components/EmployeeWrapper"


class App extends React.Component {
  state = {
    employees: []
  };
  componentDidMount () {
    API.getMany(50)
    .then(res => this.setState({ employees:res.data}))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="table">
        <Header />
        <Search />
        <EmployeeWrapper employees={this.state.employees} />
      </div>
    );
  };
};
export default App;