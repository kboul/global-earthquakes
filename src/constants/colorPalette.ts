const defaultMagnitudePalette = {
  xs: "#00b800",
  sm: "#b6fe00",
  md: "#f6ff00",
  lg: "#ffcf00",
  xl: "#ff9000",
  xxl: "#ff0000"
};

const colorPalette = {
  default: defaultMagnitudePalette,
  pastel: {
    xs: "#D4E157", // Light Lime
    sm: "#AED581", // Light Green
    md: "#81C784", // Soft Mint
    lg: "#64B5F6", // Light Blue
    xl: "#9575CD", // Lavender
    xxl: "#FF8A65" // Peach
  },
  dark: {
    xs: "#424242",
    sm: "#616161",
    md: "#757575",
    lg: "#9E9E9E",
    xl: "#BDBDBD",
    xxl: "#E0E0E0"
  },
  earthy: {
    xs: "#6B8E23", // Olive
    sm: "#C2B280", // Sand
    md: "#CD853F", // Peruvian Brown
    lg: "#D2691E", // Chocolate
    xl: "#A0522D", // Sienna
    xxl: "#8B4513" // Saddle Brown
  },
  cool: {
    xs: "#00FA9A", // Medium Spring Green
    sm: "#48D1CC", // Medium Turquoise
    md: "#20B2AA", // Light Sea Green
    lg: "#1E90FF", // Dodger Blue
    xl: "#4169E1", // Royal Blue
    xxl: "#000080" // Navy
  },
  warm: {
    xs: "#FFD700", // Gold
    sm: "#FFB14E", // Orange-Yellow
    md: "#FF5733", // Bright Orange
    lg: "#FF6347", // Tomato
    xl: "#FF4500", // Orange-Red
    xxl: "#B22222" // Firebrick
  },
  monochrome: {
    xs: "#E0E0E0", // Light Gray
    sm: "#BDBDBD", // Gray
    md: "#9E9E9E", // Medium Gray
    lg: "#757575", // Dark Gray
    xl: "#616161", // Darker Gray
    xxl: "#424242" // Almost Black
  },
  sunset: {
    xs: "#FF7E79", // Coral Pink
    sm: "#FFAE57", // Orange-Yellow
    md: "#FFD447", // Yellow
    lg: "#FFA34D", // Peach Orange
    xl: "#FF8C69", // Salmon
    xxl: "#FF6666" // Bright Red
  },
  ocean: {
    xs: "#5DADE2", // Aqua Blue
    sm: "#2E86C1", // Cobalt Blue
    md: "#2874A6", // Ocean Blue
    lg: "#1B4F72", // Deep Sea Blue
    xl: "#117A65", // Teal Green
    xxl: "#0B5345" // Deep Teal
  },
  neon: {
    xs: "#39FF14", // Neon Green
    sm: "#0FF0FC", // Neon Cyan
    md: "#8A2BE2", // Electric Indigo
    lg: "#FF073A", // Neon Red
    xl: "#FF8C00", // Neon Orange
    xxl: "#FFFF33" // Neon Yellow
  }
};

export { colorPalette, defaultMagnitudePalette };
