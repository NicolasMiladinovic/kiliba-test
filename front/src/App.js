import React from 'react'
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Search from './components/SearchFilter'

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

  onchange = e => {
    this.setState({ items: e.target.value });
  }

  // Calls apis
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
      })
      .catch(error => console.log(error));
  }


  /*   getMed() {
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
    } */

  componentWillMount() {
    this.getUsersData();
    this.getAvg();
    /*  this.getMed(); */
  }


  render() {
    const { items } = this.state;
    const { averages } = this.state;
    const { medians } = this.state;


    return (
      <div className="App">

        <img src={logo} className="App-logo" alt="logo" />

        <div className="App-body">

          <div className="App-form-data">

            <div className="App-form">
              <Form />
            </div>

            <div className="App-data">
              <ul>
                {
                  items.map(item => (
                    <p key={item.id}>
                      <p>email: <span className="Data">{item.email}</span> note: <span className="Data">{item.note}</span></p>
                    </p>
                  ))
                }
              </ul>
            </div>

          </div>

          <div className="App-calcul">
            <p>
              {
                averages.map(average => (
                  <p key={average.id}>
                    <p>Note moyenne: <span className="Data">{average.avg}</span> </p>
                  </p>
                ))
              }
            </p>

            <p>
              {
                medians.map(median => (
                  <p key={median.id}>
                    <p>Utilisateur médian: <span className="Data">{median.email}</span> </p>
                  </p>
                ))
              }
            </p>
          </div>

          <div className="App-search">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}

export default App;