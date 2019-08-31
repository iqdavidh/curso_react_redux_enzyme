import React from 'react';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';
import Note from "../components/note/Note";


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      notes: []
    };
  }

  submit() {
    const {notes , text} = this.state;

    if(text===''){
      return ;
    }

    let id=notes.length + 1;
    const newNote = {text,id};


    console.log(id);
    notes.push(newNote);

    this.setState({notes, text:''});

  }

  onClear(){
    this.setState( {notes:[]})
  }

  render() {

    let listaNotes = this.state.notes.map(n => {
      return <Note key={n.id} text={n.id + n.text} />
    });

    return (
        <div className="container">
          <h2>Note to self2</h2>
          <Form inline>
            <FormControl
                value={this.state.text}
                onChange={event => this.setState({text: event.target.value})}
            />
            <Button className="btnSubmit"
                onClick={() => this.submit()}
            >Submit</Button>
          </Form>

          {

            listaNotes
          }

          <Button className="btnClear" onClick={event=>this.onClear(event)}>Clear</Button>
        </div>
    );
  }
}


export default App;
