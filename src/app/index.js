import { Link } from "expo-router";
import { Text, View } from "react-native";

const App = () => {
    return (
        <View>
            <Text>Allocations Page</Text>
            <Link href="accounts">Go to Accounts</Link>
        </View>
    );
}

export default App;