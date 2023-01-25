import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import colors from "../config/colors";
import CustomText from "./CustomText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function CustomPicker({
  icon,
  placeholder,
  items,
  selectedItem,
  onSelectItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.gray_1}
              style={styles.icon}
            />
          )}
          <CustomText
            style={[styles.text, !selectedItem ? styles.placeholderText : null]}
          >
            {selectedItem ? selectedItem.label : placeholder}
          </CustomText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.gray_1}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

export default CustomPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray_2,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    flex: 1,
  },
  placeholderText: {
    color: colors.gray_1,
  },
});
