import React from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
// import Employee from "./components/EmployeeCard";
import API from './utils/API';
import EmployeeWrapper from "./components/EmployeeWrapper";

class App extends React.Component {
  state = {
    employees: []
  };
  componentDidMount () {
    API.getMany(50)
    .then(res => {
      console.log(res)
      this.setState({ employees:res.data.results})})
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