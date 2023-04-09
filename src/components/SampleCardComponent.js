import React from 'react';

function SampleCardComponent(props) {
  
  return (
    // styling is located in styles.css
    <div className='sample-card-component'>
        {props.text}
    </div>
  );
}

export default SampleCardComponent;
