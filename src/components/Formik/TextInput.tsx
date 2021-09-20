import { FC } from "react";
import { useField } from "formik";

import FormikInputs from "./types";

import FormikStyles from "./formik.style.module.scss";

const TextInput: FC<FormikInputs> = (props) => {
  const { label } = props;

  const [field, meta] = useField(props);

  return (
    <div>
      <label className={FormikStyles.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className={FormikStyles.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={FormikStyles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
