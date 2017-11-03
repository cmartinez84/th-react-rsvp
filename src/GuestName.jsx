import React from 'react';
import PropTypes from 'prop-types'


const GuestNAme = props =>{
  if(props.isEditing){
      return (
        <input
          type="text"
          value={props.children}
          onChange={props.handleNameEdit}
          />
      )
  }
  return (
    <span> {props.children} </span>
  )
}

GuestNAme.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleNameEdit: PropTypes.func.isRequired
}
export default GuestNAme;
