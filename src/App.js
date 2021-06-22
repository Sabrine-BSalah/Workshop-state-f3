import React from 'react'
import './App.css';
import { Button } from 'react-bootstrap'
import Counter from './Components/Counter/Counter';

class App extends React.Component {

  state = {
    show: false
  }

  render() {
    return (
      <div className="App" >
        <Button variant="secondary"
          onClick={() => this.setState({ show: !this.state.show })}>
          Show</Button>
        {this.state.show &&
          <Counter show={this.state.show} />
        }
      </div>
    );
  }
}

export default App;
