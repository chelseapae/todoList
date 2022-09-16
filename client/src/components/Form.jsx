import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e){
    console.log('word', e.target.value)
    this.setState({
      word: e.target.value
    })
  }

  submit(){
    event.preventDefault()
    axios.post(
      '/todoList',
      {word: this.state.word}
      )
      .then(this.props.getWords())
      .catch((err)=> console.log('axios submit error', err))
  }

  render() {
    return(
        <div>
          Enter your to-do list item: <br/>
          <form>
            <label>
              <input type="text" name="To-Do" placeholder="Insert your to-do" onChange={this.onChangeWord}/>
            </label><br/><br/>
          <input type="submit" value="Submit" onClick={this.submit}/>
          </form>
        </div>
    )
  }
}

export default Form;


// import React from 'react';
// import $ from 'jquery';

// class Form extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       todo: ''
//     }
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }
//   // When someone starts typing, store that information in state,
//   // when they hit submit, send that to darabase, then render new list


//   onChange(event){
//     console.log(event.target.value)
//     this.setState({
//       todo: event.target.value
//     })
//   }

//   onSubmit(){
//     event.preventDefault()
//     $.ajax({
//       type: "POST",
//       url: "/todoList",
//       data: {item: this.state.todo},
//       dataType: 'json',
//       success: () => console.log('successfully submitted'),
//       error: (err) => {console.log('failed to submit', err)}
//     })
//     console.log('here')
//   }

//   render() {
//     return (
//       <div>
//           <form>
//             <label>
//               <input type="text" name="todo" placeholder="Enter your To-Do here" onChange={this.onChange}/>
//             </label><br/><br/>
//             <input type="submit" value="Submit" onClick={this.onSubmit}/>
//           </form>
//       </div>
//     )
//   }
// }

// export default Form;
