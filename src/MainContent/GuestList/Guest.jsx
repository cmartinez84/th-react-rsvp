import React from 'react';
import PropTypes from 'prop-types'
import GuestName from './GuestName';
const Guest = props =>

          <li>
            <GuestName isEditing={props.isEditing}
                        handleNameEdit={e => props.setName(e.target.value)}>
                      {props.name}
            </GuestName>
              <input
                type="checkbox"
                checked={props.isConfirmed}
                onChange = {props.handleConfirmation}/> Confirmed
            <button onClick={props.handleToggleEditing}>
              {props.isEditing ? 'save': 'edit'}
            </button>
            <button onClick={props.handleRemove}>remove</button>
          </li>

Guest.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  setName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}
export default Guest;
