import {useState} from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (typeForm, valueForm) => {
      if (typeForm === 'reset') {
        return setValues(initialValue);
      }
      return setValues({...values, [typeForm]: valueForm});
    },
  ];
};
