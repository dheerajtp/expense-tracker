import { Text, View } from "react-native";
import styles from "../../assets/styles";
import { FlatList } from "react-native";

const AccountListItem = () => {
  return (
    <View style={styles.accountListItemContainer}>
      <Text style={styles.accountListItemName}>Profit</Text>
      <Text style={styles.accountListPercentage}>10%</Text>
      <Text>20%</Text>
    </View>
  );
};

export default AccountListItem;
