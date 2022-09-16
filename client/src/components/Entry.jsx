import React from 'react';

const Entry = (props) => {
  console.log('PROPS', props)
  return (
    <li>
    {props.entry.todo} <br/>
     <button type="edit"> Edit </button>
     <button type="delete" onClick={() => props.delete(props.entry.word)}> Delete </button>
    <br/><br/>
  </li>
  )
}

export default Entry;