import {useState} from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (typeForm, valueForm) => {
      return setValues({...values, [typeForm]: valueForm});
    },
  ];
};
