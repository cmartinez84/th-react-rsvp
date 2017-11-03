import React from 'react';
import PropTypes from 'prop-types'
import GuestName from './GuestName';
const GuestList = props =>

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
            <button>remove</button>
          </li>

GuestList.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
}
export default GuestList;