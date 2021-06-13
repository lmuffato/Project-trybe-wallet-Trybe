import React from 'react';
import { func, number } from 'prop-types';
import { connect } from 'react-redux';
import { changeUpdate } from '../../actions';

function EditButton(props) {
  const editCell = () => {
    const { dispatchId, id } = props;
    dispatchId({ id, editing: true });
  };

  return (
    <button
      type="button"
      onClick={ editCell }
    >
      Editar
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchId: (id) => dispatch(changeUpdate(id)),
});

EditButton.propTypes = {
  dispatchId: func,
  id: number,
}.isRequired;

export default connect(null, mapDispatchToProps)(EditButton);
