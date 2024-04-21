import { Link } from "expo-router";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <Text>Allocations Page</Text>
      <Link href="/allocations/new">Go to New Allocations</Link>
    </View>
  );
};

export default App;
