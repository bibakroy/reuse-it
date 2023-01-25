import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import CustomButton from "../components/CustomButton";
import FormField from "../components/form/FormField";
import CustomFormPicker from "../components/form/CustomFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.screen}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormField name="title" placeholder="Title" maxLength={255} />
            <FormField
              name="price"
              placeholder="Price"
              keyboardType="numeric"
              maxLength={8}
            />
            <CustomFormPicker
              name="category"
              placeholder="Category"
              items={categories}
            />
            <FormField
              name="description"
              placeholder="Description"
              maxLength={255}
              multiline
              numberOfLines={3}
            />
            <CustomButton title="Post" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
