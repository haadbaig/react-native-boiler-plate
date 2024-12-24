###React Native Expo Application with Tailwind CSS (NativeWind)

**Overview**

This project is a React Native Expo application that integrates NativeWind for Tailwind CSS support, along with other essential libraries to enhance development. Below is a detailed explanation of the libraries used and their purpose in the project.

**Libraries Used**

1. Expo

Description: A framework and a platform for universal React applications.
Purpose: Used to build and run the React Native application with a streamlined workflow.

Installation:
```
npm install -g expo-cli
npx expo init my-app
```

2. NativeWind

Description: NativeWind brings Tailwind CSS to React Native, allowing you to use utility-first CSS classes in your components.

Purpose: Simplifies styling with Tailwind's utility classes, providing a consistent design system.

Installation:
``npm install nativewind tailwindcss``

3. Tailwind CSS

Description: A utility-first CSS framework.

Purpose: Provides a set of pre-defined utility classes to create a consistent UI design.

Installation:
``npm install tailwindcss``
``npx tailwindcss init``

4. React Native Reanimated

Description: A library that enables animations in React Native.

Purpose: Used as a dependency for NativeWind to handle animations and transitions.

Installation:
``npm install react-native-reanimated``
``npx expo install react-native-reanimated``

5. React Native Safe Area Context

Description: A library for handling safe area insets on iOS and Android devices.

Purpose: Ensures that components are not obscured by device notches or navigation bars.

Installation:
``npm install react-native-safe-area-context``
``npx expo install react-native-safe-area-context``

6. Metro Configuration

Description: Metro is the bundler used by React Native.

Purpose: Custom configuration is used to enable Tailwind CSS support via NativeWind.

Configuration:
```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

module.exports = withNativeWind(config, {
  input: './global.css',
});
```

7. Babel Configuration

Description: Babel is used for transforming JavaScript and enabling React Native features.

Purpose: A Babel plugin for NativeWind is added to process Tailwind classes.

Configuration:
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```