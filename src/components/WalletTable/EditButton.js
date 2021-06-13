import React from 'react';
import { func, number, bool } from 'prop-types';
import { connect } from 'react-redux';
import { changeUpdate } from '../../actions';

function EditButton(props) {
  const editCell = () => {
    const { dispatchId, id } = props;
    dispatchId({ id, editing: true });
  };

  const { isEditing } = props;

  return (
    <button
      type="button"
      data-testid="edit-btn"
      onClick={ editCell }
      disabled={ isEditing }
    >
      Editar
    </button>
  );
}

const mapStateToProps = (state) => ({
  isEditing: state.edit.editing,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchId: (payload) => dispatch(changeUpdate(payload)),
});

EditButton.propTypes = {
  dispatchId: func,
  id: number,
  isEditing: bool,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(EditButton);
