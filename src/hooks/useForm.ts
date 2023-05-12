import { useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);

  const handleChange = <K extends Object>(value: K, field: keyof T) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return { ...form, form: form, handleChange };
};
