import React from 'react'
import Emoji from './Emoji'

function Note(props) {
    return (
      <div className="tool-tip">
        <h5 className="tool-tip">
          <Emoji symbol={!props.symbol ? "💡" : props.symbol} label="light-bulb"/>
            {"   "}{!props.headerText ? "Note" : props.headerText}
        </h5>
        <p className="tool-tip-body">{props.children}</p>
      </div>
    );
  }

  export default Note