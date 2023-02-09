import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import CustomButton from "../components/CustomButton";
import FormField from "../components/form/FormField";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen style={styles.screen}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormField
              name="name"
              icon="account"
              placeholder="Name"
              autoComplete="off"
              autoCorrect={false}
            />
            <FormField
              name="email"
              icon="email"
              placeholder="Email"
              autoComplete="off"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <FormField
              name="password"
              icon="lock"
              placeholder="Password"
              autoComplete="off"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
            />
            <CustomButton title="Register" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

export default RegisterScreen;

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
