import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "../assets/styles";
import AccountsList from "../components/Accounts/AccountsList";

const Accounts = () => {
  return (
    <View style={styles.accountContainer}>
      <StatusBar style="auto" />
      <View style={styles.accountHeading}>
        <Text>Name</Text>
        <Text>TAP</Text>
        <Text>CAP</Text>
      </View>
      <AccountsList />
    </View>
  );
};

export default Accounts;
