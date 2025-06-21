import L from 'leaflet';

const colors = ['red', 'blue', 'gr[ae]y', 'black', 'white', 'silver'];

const createColorRegex = (colors: string[]) => {
  // Join the colors into a regex pattern
  const pattern = colors.join('|');
  // Create a case-insensitive regex with capturing groups
  return new RegExp(`(${pattern})`, 'i');
};

const findColorInString = (str: string, regex: any) => {
  const match = str.match(regex);
  if (match) {
    let color = match[0].toLowerCase();
    if (color === 'grey' || color === 'silver') {
      color = 'gray'; // Normalize 'grey' and 'silver' to 'gray'
    }
    return color;
  }
  return null;
};

const colorRegex = createColorRegex(colors);

const vehicleIcon = ({ car_type, exterior_color }: { car_type: string; exterior_color: string } = { car_type: 'modely', exterior_color: 'white' }) => {
  const color = findColorInString(exterior_color, colorRegex);
  // Function to generate the image path
  const getImagePath = (car_type: string, color: string | null) => {
    try {
      return require(`../../assets/${car_type}/${color}.png`);
    } catch (err) {
      console.error('Image not found:', err);
      return require(`../../assets/modely/gray.png`);
    }
  };

  const imagePath = getImagePath(car_type, color);

  return new L.Icon({
    popupAnchor: [0, 0],
    iconSize: [3 * 11, 4 * 11],
    iconUrl: imagePath,
  });
};

export default vehicleIcon;
