import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';

const SelPicker = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default SelPicker;