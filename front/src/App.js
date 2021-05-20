import React from 'react'
import logo from './logo.svg';
import './App.css';
// Import modules
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


  // Calls apis, look at the proxy on package.json
  getUsersData() {
    fetch('/post/')
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({
          items: result
        });
        console.log(result);
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
        console.log(result);
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

  // Called before render
  componentWillMount() {
    this.getUsersData();
    this.getAvg();
    this.getMed();
  }

  // Render element on the page
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
              <h3>Remplissez le formulaire </h3>
              <Form />
            </div>

            <div className="App-data">
              <h3>Voici nos données</h3>
              {items.length ? items.map(item => (
                <p key={item.id}>
                  <p>e-mail: <span className="Data">{item.email}</span> note: <span className="Data">{item.note}</span></p>
                </p>
              )) : <p className="Data">Il n'y a pas encore de données.</p>}
            </div>

          </div>

          <div className="App-search">
            <h3>Cherchez un e-mail</h3>
            <Search />
          </div>

          <div className="App-calcul">
            <h3>Nos statistiques</h3>
            {averages.length ? averages.map(average => (
              <p key={average.id}>
                <p>Note moyenne: <span className="Data">{average.avg}</span></p>
              </p>
            )) : <p className="Data">Il n'y a pas encore de note pour calculer la moyenne.</p>}

            {medians.length ? medians.map(median => (
              <p key={median.id}>
                <p>Utilisateur médian: <span className="Data">{median.email}</span> Note médiane: <span className="Data">{median.note}</span> </p>
              </p>
            )) : <p className="Data">La médiane ne correspond pas à un e-mail (nombre paire d'e-mail)</p>}
          </div>

        </div>
      </div>
    );
  }
}

export default App;