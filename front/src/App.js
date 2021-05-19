import React from 'react'
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
  //Declaration of arrays to stock server datas
    this.state = {
      items: [],
      averages: [],
      medians: [],
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

  getAvg() {
    fetch('/post/avg')
      .then(res => {
        return res.json()
      })
      .then(result => {
        this.setState({
          averages: result
        });
        console.log(result)
      })
      .catch(error => console.log(error));
  }

  getMed() {
    fetch('/post/med')
      .then(res => {
        return res.json()
      })
      .then(result => {
        this.setState({
          medians: result
        });
        console.log(result)
      })
      .catch(error => console.log(error));
  }

  componentWillMount() {
    this.getUsersData();
    this.getAvg();
    this.getMed();
  }

  render() {
    const { items } = this.state;
    const { averages } = this.state;
    const { medians } = this.state;

    return (
      <div>
        <header className="App-header"><img src={logo} className="App-logo" alt="logo" /></header>

        <ul>
          {
            items.map(item => (
              <li key={item.id}>
                <p>email: {item.email} note: {item.note}</p>
              </li>
            ))
          }
        </ul>

        <p>
          {
            averages.map(average => (
              <p key={average.id}>
                <p>Note moyenne: {average.avg} </p>
              </p>
            ))
          }
        </p>

        <p>
          {
            medians.map(median => (
              <p key={median.id}>
                <p>Utilisateur médian: {median.email} </p>
              </p>
            ))
          }
        </p>
      </div>
    );
  }
}

export default App;