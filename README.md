# 🦴 react-native-ease-skeleton

[![NPM Version](https://img.shields.io/npm/v/react-native-ease-skeleton.svg?style=flat-square)](https://www.npmjs.com/package/react-native-ease-skeleton)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Ultra-performant, hardware-accelerated skeleton loaders for React Native.**

Crafted specifically for complex lists (`FlashList`, `LegendList`), leveraging `react-native-ease` for buttery-smooth animations using GPU-accelerated opacity transitions instead of heavy background-color repaints.

---

## 🚀 Key Features

- **⚡ Hardware Accelerated**: Uses `opacity` animations to ensure 120 FPS even in massive lists.
- **📦 Lightweight**: Zero-config needed, fits gracefully into any design system.
- **🎨 Dark Mode Support**: Built-in refined color palettes for both Light and Dark themes.
- **🛠 Fully Customizable**: Adjustable dimensions, border radius, colors, and animation duration.
- **💪 TypeScript First**: Written in TS for a type-safe development experience.

---

## 📦 Installation

```bash
# Using npm
npm install react-native-ease-skeleton react-native-ease

# Using yarn
yarn add react-native-ease-skeleton react-native-ease

# Using bun
bun add react-native-ease-skeleton react-native-ease
```

> [!TIP]
> This library is **Zero JS Overhead**. It uses `react-native-ease` to drive animations directly via native OS APIs (Core Animation / Animator), ensuring perfectly smooth 120 FPS without complex setup like Reanimated.

---

## 🛠 Usage

```tsx
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Skeleton } from 'react-native-ease-skeleton';

const ProfileCard = ({ user, isLoading }) => {
  return (
    <View style={{ padding: 20, backgroundColor: '#111' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Avatar Skeleton */}
        <Skeleton
          width={52}
          height={52}
          borderRadius={26}
          show={isLoading}
          colorMode="dark"
        >
          <Image
            source={{ uri: user?.avatar }}
            style={{ width: 52, height: 52, borderRadius: 26 }}
          />
        </Skeleton>

        <View style={{ marginLeft: 12 }}>
          {/* Title Skeleton */}
          <Skeleton
            width={120}
            height={18}
            borderRadius={6}
            show={isLoading}
            colorMode="dark"
          >
            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
              {user?.name}
            </Text>
          </Skeleton>
        </View>
      </View>
    </View>
  );
};
```

---

## ⚙️ Configuration (Props)

| Prop               | Type                | Default      | Description                                                 |
| :----------------- | :------------------ | :----------- | :---------------------------------------------------------- |
| **`show`**         | `boolean`           | **Required** | Controls whether to show the skeleton or the child content. |
| **`width`**        | `DimensionValue`    | `100`        | Width of the skeleton element.                              |
| **`height`**       | `DimensionValue`    | `100`        | Height of the skeleton element.                             |
| **`borderRadius`** | `number`            | `4`          | Corner radius of the skeleton.                              |
| **`colorMode`**    | `'light' \| 'dark'` | `'light'`    | Preset color schemes for theme matching.                    |
| **`colors`**       | `[string, string]`  | Presets      | Custom low/high colors for the animation loop.              |
| **`duration`**     | `number`            | `1000`       | Speed of the pulse animation in milliseconds.               |
| **`style`**        | `ViewStyle`         | —            | Custom container styles.                                    |

---

## 🛠 Development & Example

This repository includes an **Example App** built with **Expo** to showcase the performance of the skeleton loaders in large lists.

### Run the Example

1. Clone the repository:
   ```bash
   git clone https://github.com/kyrylokap/react-native-ease-skeleton.git
   cd react-native-ease-skeleton
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the example app:

   **Using Yarn:**

   ```bash
   yarn example start
   ```

   **Using NPM:**

   ```bash
   cd example && npm start
   ```

   **Using Bun:**

   ```bash
   cd example && bun start
   ```

   \_Alternatively, you can run directly on iOS/Android (e.g., `yarn example ios`).\_\_

---

## 🔥 Performance Tips

### Use in Lists (`FlashList` / `LegendList`)

To achieve the best performance in infinite lists:

1. **Memoize your cards**: Use `React.memo` to prevent unnecessary re-renders.
2. **Stable dimensions**: Always provide explicit `width` and `height` to avoid layout shifts.
3. **Hardware Acceleration**: This library uses an overlay view with `opacity` animation. This is significantly cheaper for the GPU than animating `backgroundColor`, as it avoids constant layout invalidation and view-tree repainting.

---

## 📄 License

MIT © [kyrylokap](https://github.com/kyrylokap)

---

<p align="center">
  Made with ❤️ for the React Native Community
</p>
