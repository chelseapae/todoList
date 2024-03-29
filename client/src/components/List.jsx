import React from 'react';
import Entry from './Entry.jsx'

const List = (props) => {
  console.log('PROPS IN LIST', props)
    return (
    <div>
      <hr/>
        {props.list.map((word) =>
           <Entry key={props.word} entry={word} delete={props.delete} />
        )}
    </div>
    )
  }
export default List;
