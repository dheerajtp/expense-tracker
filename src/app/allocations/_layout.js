import { Stack } from "expo-router";

const AllocationsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Allocations",
        }}
      />
      <Stack.Screen name="new" options={{ title: "New Allocation" }} />
    </Stack>
  );
};

export default AllocationsLayout;
