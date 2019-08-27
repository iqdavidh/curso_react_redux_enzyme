import React, {Component} from 'react';

class Note extends Component {
  render() {


    return (
        <div className="nota">
          {this.props.text}
        </div>
    );
  }
}

export default Note;
