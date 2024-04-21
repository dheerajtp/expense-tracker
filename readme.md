## Expense Calculator

### Used Packages And Libraries

1. expo router
2. [Expo Vector Icons](https://icons.expo.fyi/Index)
3. [Watermelon DB](https://watermelondb.dev/docs/CRUD)

#### Integrating WatermelonDB with Expo

1. Installation

```
npx expo install @nozbe/watermelondb
```

2. Install Watermelon Expo Plugin

```
npx expo install expo-build-properties
```

3. Install the Babel plugin for decorators

```
npx expo install @babel/plugin-proposal-decorators
```

4. Add the below code inside babel.config.js

```
"plugins": [["@babel/plugin-proposal-decorators", { "legacy": true }]]
```

[Tutorial](https://www.themorrow.digital/blog/how-to-use-watermelondb-with-react-native-expo)
