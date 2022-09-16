import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import List from './components/List.jsx';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.getWords = this.getWords.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount(){
    this.getWords();
  }


  getWords(){
    axios.get('/todoList')
    .then((results) => this.setState({list: results.data}))
    .catch((err)=> console.log('axios error', err))
  }

  delete(word){
    axios.delete(
      '/todoList',
      {data: {word: word}}
      )
      .then(this.getWords())
      .catch((err)=> console.log('axios error', err))
  }

  render () {
    return (
    <div>
      <h1>To Do List</h1>
      <Form list={this.state.list} getWords={this.getWords}/> <br/>
      <List
        list={this.state.list}
        getWords={this.getWords}
        delete={this.delete}
      />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
