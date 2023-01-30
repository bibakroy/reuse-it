import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import CustomButton from "../components/CustomButton";
import FormField from "../components/form/FormField";
import FormPicker from "../components/form/FormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "tomato",
    icon: "floor-lamp",
  },
  { label: "Cars", value: 2, backgroundColor: "orange", icon: "car" },
  { label: "Cameras", value: 3, backgroundColor: "green", icon: "camera" },
  {
    label: "Games",
    value: 4,
    backgroundColor: "blue",
    icon: "gamepad-variant",
  },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "skyblue",
    icon: "tshirt-crew",
  },
  { label: "Sports", value: 6, backgroundColor: "navy", icon: "football" },
  {
    label: "Movie & Music",
    value: 7,
    backgroundColor: "purple",
    icon: "music-circle",
  },
  {
    label: "Books",
    value: 8,
    backgroundColor: "pink",
    icon: "bookshelf",
  },
  {
    label: "Others",
    value: 9,
    backgroundColor: "gray",
    icon: "checkbox-blank-outline",
  },
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
              width={120}
            />
            <FormPicker
              name="category"
              placeholder="Category"
              items={categories}
              width="50%"
              numberOfColumns={3}
              PickerItemComponent={CategoryPickerItem}
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
