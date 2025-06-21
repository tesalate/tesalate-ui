function convertRgbToRgba(rgbArray: string[], alpha: any) {
  return rgbArray.map((rgb) => `${rgb.replace('rgb', 'rgba').replace(')', `, ${alpha})`)}`);
}

const colors = [
  'rgb(54, 162, 235)', // Blue
  'rgb(153, 102, 255)', // Purple
  'rgb(201, 203, 207)', // Gray
  'rgb(255, 111, 145)', // Pink
  'rgb(255, 159, 64)', // Orange
  'rgb(0, 206, 201)', // Turquoise
  'rgb(255, 138, 101)', // Salmon
  'rgb(255, 221, 89)', // Sunflower
  'rgb(0, 184, 148)', // Teal
  'rgb(75, 192, 192)', // Green
  'rgb(62, 62, 62)', // Dark Gray
  'rgb(102, 126, 234)', // Periwinkle
  'rgb(255, 205, 86)', // Yellow
  'rgb(120, 92, 227)', // Purple
  'rgb(255, 99, 132)', // Red
];

const rgbaColors = convertRgbToRgba(colors, 0.4);

export { colors, rgbaColors };

// function generateColorArray(length: number, alpha: number) {
//   const baseHue = 270; // Set the base hue to start with purple (270 degrees)
//   const step = 360 / length; // Hue step for generating variations
//   const saturation = 70; // You can adjust saturation and lightness as needed
//   const lightness = 60;

//   const generatedColors = Array.from({ length }, (_, index) => {
//     const hue = (baseHue + index * step) % 360;
//     const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
//     return color;
//   });

//   return generatedColors;
// }

// const length = 8; // You can adjust the length as needed
// const alpha = 0.4; // Set your desired alpha value
// const newColors = generateColorArray(length, 1);
// const rgbaColors = generateColorArray(length, alpha);

// export { newColors as colors, rgbaColors };
