import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');
const FIGMA_WIDTH = 375;

/**
 * It takes a string that represents a percentage of the screen width and
returns the corresponding pixel value.
 * @param {string} widthPercent - string
 * @returns The number of pixels.
 */
const wp = (widthPercent: string): number => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(String(widthPercent))) / 100,
  );

  return screenPixel;
};

/**
 * "Convert a percentage to a pixel value."
 * @param {string} heightPercent - string
 * @returns The number of pixels.
 */
const hp = (heightPercent: string): number => {
  const screenPixel = PixelRatio.roundToNearestPixel(
    (height * parseFloat(String(heightPercent))) / 100,
  );

  return screenPixel;
};

/**
 * @param {number} valuePx - number
 * @returns The function is returning the value of the pixel.
 */
const px = (valuePx: number): number => {
  const widthPercent = (valuePx / FIGMA_WIDTH) * 100;
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(String(widthPercent))) / 100,
  );

  return screenPixel;
};

export const metrics = { wp, hp, px };
