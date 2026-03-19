import { EaseView } from 'react-native-ease';
import {
  View,
  type DimensionValue,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { StyleSheet } from 'react-native';
const defaultColors = {
  light: ['#E1E9EE', '#9e9e9eff'] as [string, string],
  dark: ['#1D1D1D', '#333333'] as [string, string],
};

export interface SkeletonProps {
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  show: boolean;
  colorMode?: 'light' | 'dark';
  colors?: [string, string];
  style?: StyleProp<ViewStyle>;
  duration?: number;
  children?: React.ReactNode;
}
/**
 * Skeleton component for React Native
 * @param width - Width of the skeleton
 * @param height - Height of the skeleton
 * @param borderRadius - Border radius of the skeleton
 * @param show - Whether the skeleton should be shown
 * @param colorMode - Color mode of the skeleton
 * @param colors - Custom colors for the skeleton
 * @param style - Custom styles for the skeleton
 * @param duration - Duration of the animation
 */
export const Skeleton = ({
  width = 100,
  height = 100,
  borderRadius = 4,
  show,
  colorMode = 'light',
  colors,
  style,
  duration = 1000,
  children,
}: SkeletonProps) => {
  const activeColors = colors || defaultColors[colorMode];
  if (!show) {
    return (
      <View
        style={[
          { width, height, borderRadius },
          style ? style : styles.container,
        ]}
      >
        {children}
      </View>
    );
  }
  return (
    <View
      style={[
        {
          width,
          height,
          borderRadius,
          backgroundColor: activeColors[0],
          overflow: 'hidden',
        },
        style ? style : styles.container,
      ]}
    >
      <EaseView
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: activeColors[1], opacity: 0 },
        ]}
        initialAnimate={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: 'timing',
          duration: duration,
          easing: 'easeInOut',
          loop: 'reverse',
        }}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
