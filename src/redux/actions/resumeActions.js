
import { UPDATE_FORM_DATA } from '../types';

export const updateFormData = (data) => {
  console.log('updateFormData Action:', data);
  return {
    type: UPDATE_FORM_DATA,
    payload: data,
  };
};