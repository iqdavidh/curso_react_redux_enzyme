import React from 'react';
import './App.css';
import {Form,FormControl,Button} from 'react-bootstrap';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      text:''
    };
  }

  render () {
    return (
        <div >
          <h2>Note to self2</h2>
          <Form>
            <FormControl />
            <Button>Submit</Button>
          </Form>
        </div>
    );
  }
}



export default App;
