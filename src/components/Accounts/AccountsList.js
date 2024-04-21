import { FlatList } from "react-native";
import AccountListItem from "./AccountListItem";

const AccountsList = () => {
  return (
    <FlatList
      data={[1, 2]}
      contentContainerStyle={{ gap: 5 }}
      renderItem={() => <AccountListItem />}
    />
  );
};

export default AccountsList;
