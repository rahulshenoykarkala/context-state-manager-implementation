import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Writer } from './contextwrapper';
import Header from './header';
import Body from './body'
import AppState from './state/state'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...AppState,
    }

    this.actions = {
      header:{
        changeHeaderText:(text, ts)=>{
          this.actions.body.changelog.log(`Text changed from "${this.state.header.text}" to "${text}"`, ts)
          this.setState({header:{...this.state.header, text:text}})
        },
        changeDescription:(description, ts)=>{
          this.actions.body.changelog.log(`Description changed from "${this.state.header.description}" to "${description}"`, ts)
          this.setState({header:{...this.state.header, description:description}})
        }
      },
      body:{
        changelog:{
          log: (text, ts)=>{
            this.setState({body:
              {...this.state.body, 
                changelog: {...this.state.body.changelog, 
                  changes: [...this.state.body.changelog.changes, 
                    {text:text, ts:ts}
                  ], 
                  count: this.state.body.changelog.count + 1
                }
              }
            })
          }
        }
      }
    }
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Writer state={this.state} actions={this.actions} component={
        <div>
            <Header/>
            <Body/>
        </div>
        }/>
      </div>
    );
  }
}

export default App;