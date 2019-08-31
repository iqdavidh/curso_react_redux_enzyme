import React, {Component} from 'react';

class Note extends Component {
  render() {


    return (
        <div className="nota">
          <p>
            {this.props.text}
          </p>
        </div>
    );
  }
}

export default Note;
