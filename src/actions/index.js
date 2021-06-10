// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';
export const ADD_RECORD = 'ADD_RECORD';
export const DEL_RECORD = 'DEL_RECORD';
export const EDIT_RECORD = 'EDIT_RECORD';

export const addUser = (payload) => ({ type: 'ADD_USER', payload });

export const addRecord = (payload) => ({ type: 'ADD_RECORD', payload });

export const delRecord = (payload) => ({ type: 'DEL_RECORD', payload });

export const editRecord = (payload) => ({ type: 'EDIT_RECORD', payload });
