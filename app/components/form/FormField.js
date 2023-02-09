import { useFormikContext } from "formik";

import CustomTextInput from "../CustomTextInput";
import ErrorMessage from "./ErrorMessage";

function FormField({ name, width, ...rest }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <CustomTextInput
        {...rest}
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
