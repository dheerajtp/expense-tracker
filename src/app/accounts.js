import { StatusBar } from "expo-status-bar";
import { Button, Text, TextInput, View } from "react-native";
import styles from "../assets/styles";
import AccountsList from "../components/Accounts/AccountsList";
import AccountUtils from "../utils/Accounts";
import { useState } from "react";

const Accounts = () => {
  const [accounts, setAccounts] = useState({
    name: "",
    tap: "",
    cap: "",
  });

  const handleChange = (field) => (text) => {
    setAccounts((prevState) => {
      return { ...prevState, [field]: text };
    });
  };

  return (
    <View style={styles.accountContainer}>
      <StatusBar style="auto" />
      <View style={styles.accountHeading}>
        <Text>Name</Text>
        <Text>TAP</Text>
        <Text>CAP</Text>
      </View>
      <AccountsList />
      <View style={[styles.accountHeading, styles.accountsInputRow]}>
        <TextInput
          placeholder="Name"
          style={styles.accountsInput}
          value={accounts.name}
          onChangeText={handleChange("name")}
        />
        <TextInput
          placeholder="TAP Percentage"
          style={styles.accountsInput}
          value={accounts.tap}
          onChangeText={handleChange("tap")}
        />
        <TextInput
          placeholder="CAP Percentage"
          style={styles.accountsInput}
          value={accounts.cap}
          onChangeText={handleChange("cap")}
        />
      </View>
      <Button
        title="Add Account"
        onPress={() => {
          AccountUtils.createAccount(accounts);
        }}
      />
    </View>
  );
};

export default Accounts;
