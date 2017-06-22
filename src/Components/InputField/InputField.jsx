import React from 'react';
import PropTypes from 'prop-types';

const InputField = ( {defaultValue, onChangeInputField} ) => {

  return (
    <div className="field">
      <div className="field_main">
        <input type="textfield" value={defaultValue} onChange={onChangeInputField} />
      </div>
    </div>
  );
};

InputField.propTypes = {
  defaultValue: PropTypes.string,
  onChangeInputField: PropTypes.func,
};

InputField.defaultProps = {
  defaultValue: '',
};

export default InputField;