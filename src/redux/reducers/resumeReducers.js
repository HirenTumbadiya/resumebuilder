import { UPDATE_FORM_DATA } from '../types';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    educationList: [{ institute: '', year: '', degree: ''}],
    experienceList: [{ company: '', year: '', designation: ''}],
  },
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default resumeReducer;
