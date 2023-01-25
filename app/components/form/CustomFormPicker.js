import { useFormikContext } from "formik";

import CustomPicker from "../CustomPicker";
import ErrorMessage from "./ErrorMessage";

function CustomFormPicker({ items, name, placeholder }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <>
      <CustomPicker
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default CustomFormPicker;
