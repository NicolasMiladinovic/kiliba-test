import React from 'react'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  getUsersData() {
    fetch('/post/')
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({
          items: result
        });
      })
      .catch(error => console.log(error));
  }

  componentWillMount() {
    this.getUsersData();
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <header className="App-header"><img src={logo} className="App-logo" alt="logo" /></header>

        <ul>
          {items.map(item => (
            <li key={item.id}>
              <p>email: {item.email} note: {item.note}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;