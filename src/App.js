import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import users from "./utils/users.json";
// import Search from "./components/Search";
import EmployeeDisplay from "./components/EmployeeDisplay";
import API from './utils/API';

class App extends React.Component {

  state = {
    employees: []
  };

  componentDidMount() {
    API.getMany(25)
    .then(res => this.setState({ employees: res.data}))
    .catch(err => console.log(err);
    )
  }
  const [theUsers, setTheUsers]=useState(users)
  const [masterList, setMasterList]=useState(users)
  const [searchTerm, setSearchTerm]=useState("")
  const handleSearchChange(term)=>{
    setSearchTerm(term)
  }
  return (
    <div className="App">
      <Header searchTerm={searchTerm} handler={handleSearchChange}/>
      <EmployeeWrapper users={theUsers} />
    </div>
  );
}

export default App;