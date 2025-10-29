

// src/lib/productData.ts
export interface ProductCard {
  id: string;
  name: string;
  slug: string;
  originalPrice: number;
  price: number;
  discount: string;
  image: string;
  images: string[];
  features: string[];
  badge?: string;
  category: string[];
  rating: number;
  reviewCount: number;
  specifications: {
    motor: string;
    battery: string;
    range: string;
    speed: string;
    weight: string;
    wheelSize: string;
    foldable: boolean;
    brakes?: string;
    frame?: string;
    drivetrain?: string;
  };
  // NEW: Comprehensive technical specifications
  technicalSpecifications: {
    general: {
      model: string;
      frameType: string;
      frameMaterial: string;
      foldable: boolean;
      dimensions: {
        unfolded: string;
        folded: string;
      };
      weight: string;
      maxLoad: string;
      recommendedHeight: string;
    };
    motor: {
      type: string;
      power: string;
      peakPower: string;
      torque?: string;
      location: string;
      torqueSensor?: boolean;
    };
    battery: {
      type: string;
      voltage: string;
      capacity: string;
      capacityWh: string;
      removable: boolean;
      chargingTime: string;
      batteryLife: string;
    };
    performance: {
      maxSpeed: string;
      range: {
        pureElectric: string;
        pedalAssist: string;
        combined: string;
      };
      gradability: string;
      turningRadius?: string;
    };
    wheels: {
      size: string;
      tireType: string;
      tireSize: string;
      rimMaterial?: string;
    };
    brakes: {
      front: string;
      rear: string;
      type: string;
    };
    transmission: {
      type: string;
      gears?: string;
      shifter?: string;
    };
    electrical: {
      display: string;
      lights: {
        front: boolean;
        rear: boolean;
        type?: string;
      };
      horn: boolean;
      throttle: boolean;
      assistLevels: string;
    };
    comfort: {
      suspension: {
        front: boolean;
        rear: boolean;
        type?: string;
      };
      seat: {
        type: string;
        adjustable: boolean;
        material?: string;
      };
      handlebar: {
        type: string;
        adjustable: boolean;
        material?: string;
      };
    };
    safety: {
      reflectors: boolean;
      bell: boolean;
      waterResistance: string;
      certification?: string[];
    };
    connectivity: {
      app: boolean;
      gps?: boolean;
      bluetooth?: boolean;
      usb?: boolean;
    };
    accessories: {
      kickstand: boolean;
      mudguards: boolean;
      rack: boolean;
      basket: boolean;
      bottleHolder: boolean;
    };
  };
  description: string;
  keyFeatures: string[];
  availableColors: string[];
  availableSizes: string[];
  whatsInTheBox: string[];
}

export const PRODUCTS_DATA: ProductCard[] = [  
  // 1. JOBOBIKE Luxe
{
  id: "luxe-001",
  name: "JOBOBIKE Luxe",
  slug: "jobobike-luxe",
  originalPrice: 2299,
  price: 2099,
  discount: "9%",
  image: "/images/luxe/luxe-1.png",
  images: [
    "/images/luxe/luxe-1.png",
    "/images/luxe/luxe-2.png",
  ],
  features: [
    "Carbon belt drive system",
    "Internal 8-speed transmission",
    "Hydraulic brakes",
    "Smart App connectivity via Bluetooth",
    "Automatic brake light sensing"
  ],
  badge: "Smart Tech",
  category: ["Pendler"],
  rating: 4.8,
  reviewCount: 89,
  specifications: {
    motor: "250W Mid-Drive, 90Nm",
    battery: "36V 15Ah (540Wh)",
    range: "90km",
    speed: "25 km/h",
    weight: "24kg",
    wheelSize: "27.5\"",
    foldable: false,
    brakes: "Hydraulic disc brakes",
    frame: "Aluminum alloy",
    drivetrain: "Internal 8-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Luxe",
      frameType: "Step-over urban frame",
      frameMaterial: "Aluminum alloy",
      foldable: false,
      dimensions: {
        unfolded: "180cm x 110cm x 65cm",
        folded: "N/A"
      },
      weight: "24kg",
      maxLoad: "120kg",
      recommendedHeight: "165-195cm"
    },
    motor: {
      type: "Mid-drive motor",
      power: "250W",
      peakPower: "400W",
      torque: "90Nm",
      location: "Center",
      torqueSensor: true
    },
    battery: {
      type: "Lithium-ion with BMS",
      voltage: "36V",
      capacity: "15Ah",
      capacityWh: "540Wh",
      removable: true,
      chargingTime: "4-6 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "45km",
        pedalAssist: "90km",
        combined: "65km"
      },
      gradability: "15°",
      turningRadius: "2.5m"
    },
    wheels: {
      size: "27.5\"",
      tireType: "Urban tires",
      tireSize: "27.5\" x 2.1\"",
      rimMaterial: "Aluminum alloy"
    },
    brakes: {
      front: "Hydraulic disc brake",
      rear: "Hydraulic disc brake",
      type: "Hydraulic disc"
    },
    transmission: {
      type: "Internal hub gears",
      gears: "8-speed",
      shifter: "Grip shift"
    },
    electrical: {
      display: "Bluetooth LCD display",
      lights: {
        front: true,
        rear: true,
        type: "LED with automatic brake light"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels + auto"
    },
    comfort: {
      suspension: {
        front: false,
        rear: false,
        type: "Rigid"
      },
      seat: {
        type: "Comfort saddle",
        adjustable: true,
        material: "Synthetic leather"
      },
      handlebar: {
        type: "Urban handlebar",
        adjustable: true,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX5",
      certification: ["EN15194", "CE"]
    },
    connectivity: {
      app: true,
      gps: false,
      bluetooth: true,
      usb: true
    },
    accessories: {
      kickstand: true,
      mudguards: true,
      rack: true,
      basket: false,
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Luxe is a premium smart urban e-bike that combines technology and elegance. Featuring a maintenance-free carbon belt drive system and internal 8-speed transmission, it offers a smooth, quiet, and low-maintenance riding experience. The integrated Bluetooth app allows real-time monitoring of riding data and personalized settings, making urban commuting smarter and more relaxed.",
  keyFeatures: [
    "Carbon belt drive - maintenance-free up to 30,000km",
    "Smart App integration for real-time data monitoring",
    "Internal 8-speed transmission for smooth shifting",
    "Hydraulic brakes for all-weather performance",
    "Automatic brake light sensing function",
    "27.5\" large tires with anti-puncture and reflective strips",
    "5 levels of electric assist plus automatic mode",
    "Quick-release design for easy accessory installation"
  ],
  availableColors: ["Silver Gray", "Snow White"],
  availableSizes: ["One Size"],
  whatsInTheBox: [
    "JOBOBIKE Luxe e-bike",
    "36V 15Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front and rear lights",
    "Kickstand",
    "Bell"
  ]
},

// 2. JOBOBIKE Robin
{
  id: "robin-001",
  name: "JOBOBIKE Robin",
  slug: "jobobike-robin",
  originalPrice: 1699,
  price: 1399,
  discount: "18%",
  image: "/images/robin/robin-1.png",
  images: [
    "/images/robin/robin-1.png",
    "/images/robin/robin-2.png",
    "/images/robin/robin-3.png",
  ],
  features: [
    "26\" x 4.0\" fat tires",
    "80mm RST hydraulic suspension",
    "Powerful Bafang 250W motor with 80Nm torque",
    "All-terrain capability",
    "USB charging port"
  ],
  badge: "All-Terrain",
  category: ["Fatbike"],
  rating: 4.7,
  reviewCount: 156,
  specifications: {
    motor: "250W Bafang Hub, 80Nm",
    battery: "48V 13Ah (624Wh)",
    range: "65km",
    speed: "25 km/h",
    weight: "32kg",
    wheelSize: "26\"",
    foldable: false,
    brakes: "Hydraulic disc brakes",
    frame: "6061 Aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Robin",
      frameType: "High frame / Step-through available",
      frameMaterial: "6061 Aluminum alloy",
      foldable: false,
      dimensions: {
        unfolded: "190cm x 120cm x 75cm",
        folded: "N/A"
      },
      weight: "32kg",
      maxLoad: "150kg",
      recommendedHeight: "160-200cm"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "500W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: false
    },
    battery: {
      type: "Lithium-ion with BMS",
      voltage: "48V",
      capacity: "13Ah",
      capacityWh: "624Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "40km",
        pedalAssist: "65km",
        combined: "55km"
      },
      gradability: "20°",
      turningRadius: "3m"
    },
    wheels: {
      size: "26\"",
      tireType: "Fat tires",
      tireSize: "26\" x 4.0\"",
      rimMaterial: "Aluminum alloy wide rim"
    },
    brakes: {
      front: "Hydraulic disc brake",
      rear: "Hydraulic disc brake",
      type: "Hydraulic disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "Color LCD with USB port",
      lights: {
        front: true,
        rear: true,
        type: "LED 60 LUX front, brake light rear"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: true,
        rear: false,
        type: "RST hydraulic suspension 80mm"
      },
      seat: {
        type: "Velo leather comfort saddle",
        adjustable: true,
        material: "Leather"
      },
      handlebar: {
        type: "Mountain bike handlebar 720mm",
        adjustable: false,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX4",
      certification: ["EN15194", "CE", "TUV"]
    },
    connectivity: {
      app: false,
      gps: false,
      bluetooth: false,
      usb: true
    },
    accessories: {
      kickstand: true,
      mudguards: true,
      rack: false,
      basket: false,
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Robin is the most powerful and dynamic fat tire e-bike in the lineup. Born for adventure, it excels on bumpy forest trails, mountains, and even snowy terrain where regular bikes can't go. With 26\" x 4.0\" fat tires and RST hydraulic suspension, Robin delivers exceptional traction and stability across all terrains.",
  keyFeatures: [
    "26\" x 4.0\" CST/Kenda fat tires with run-flat technology",
    "80mm RST hydraulic suspension with rebound adjustment",
    "Bafang 250W brushless motor with 80Nm torque",
    "48V 13Ah (624Wh) battery with BMS protection",
    "Hydraulic disc brakes for all-weather stopping power",
    "Color LCD display with USB charging port",
    "Shimano 7-speed for terrain adaptation",
    "High frame and step-through options available"
  ],
  availableColors: ["Black-Red", "Gray-Green"],
  availableSizes: ["High Frame", "Step-Through"],
  whatsInTheBox: [
    "JOBOBIKE Robin e-bike",
    "48V 13Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front LED light (60 LUX)",
    "Rear brake light",
    "Kickstand",
    "Bell"
  ]
},

// 3. JOBOBIKE Robin Pro
{
  id: "robin-pro-001",
  name: "JOBOBIKE Robin Pro",
  slug: "jobobike-robin-pro",
  originalPrice: 2099,
  price: 1799,
  discount: "14%",
  image: "/images/robin-pro/robin-pro-1.png",
  images: [
    "/images/robin-pro/robin-pro-1.png",
  ],
  features: [
    "Extended range 48V 20Ah battery",
    "26\" x 4.0\" fat tires",
    "80mm RST hydraulic suspension",
    "90km range on single charge",
    "Premium all-terrain performance"
  ],
  badge: "Extended Range",
  category: ["Fatbike" , "Pendler"],
  rating: 4.9,
  reviewCount: 98,
  specifications: {
    motor: "250W Bafang Hub, 80Nm",
    battery: "48V 20Ah (960Wh)",
    range: "90km",
    speed: "25 km/h",
    weight: "34kg",
    wheelSize: "26\"",
    foldable: false,
    brakes: "Hydraulic disc brakes",
    frame: "6061 Aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Robin Pro",
      frameType: "High frame / Step-through available",
      frameMaterial: "6061 Aluminum alloy",
      foldable: false,
      dimensions: {
        unfolded: "190cm x 120cm x 75cm",
        folded: "N/A"
      },
      weight: "34kg",
      maxLoad: "150kg",
      recommendedHeight: "160-200cm"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "500W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: false
    },
    battery: {
      type: "Lithium-ion with BMS",
      voltage: "48V",
      capacity: "20Ah",
      capacityWh: "960Wh",
      removable: true,
      chargingTime: "8-10 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "50km",
        pedalAssist: "90km",
        combined: "70km"
      },
      gradability: "20°",
      turningRadius: "3m"
    },
    wheels: {
      size: "26\"",
      tireType: "Fat tires",
      tireSize: "26\" x 4.0\"",
      rimMaterial: "Aluminum alloy wide rim"
    },
    brakes: {
      front: "Hydraulic disc brake",
      rear: "Hydraulic disc brake",
      type: "Hydraulic disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "Color LCD with USB port",
      lights: {
        front: true,
        rear: true,
        type: "LED 60 LUX front, brake light rear"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: true,
        rear: false,
        type: "RST hydraulic suspension 80mm"
      },
      seat: {
        type: "Velo leather comfort saddle",
        adjustable: true,
        material: "Leather"
      },
      handlebar: {
        type: "Mountain bike handlebar 720mm",
        adjustable: false,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX4",
      certification: ["EN15194", "CE", "TUV"]
    },
    connectivity: {
      app: false,
      gps: false,
      bluetooth: false,
      usb: true
    },
    accessories: {
      kickstand: true,
      mudguards: true,
      rack: false,
      basket: false,
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Robin Pro is the upgraded version of the popular Robin fat tire e-bike, featuring an extended range 48V 20Ah (960Wh) battery that delivers up to 90km on a single charge. Perfect for longer adventures on forest trails, mountains, and challenging terrains where standard bikes can't venture.",
  keyFeatures: [
    "Extended 48V 20Ah (960Wh) battery for 90km range",
    "26\" x 4.0\" CST/Kenda fat tires with run-flat technology",
    "80mm RST hydraulic suspension with rebound adjustment",
    "Bafang 250W brushless motor with 80Nm torque",
    "Hydraulic disc brakes for superior stopping power",
    "Color LCD display with USB charging port",
    "Shimano 7-speed transmission",
    "Available in multiple premium colors"
  ],
  availableColors: ["Black-Red", "Grey-Green", "Black-Gold", "Black-Blue"],
  availableSizes: ["High Frame", "Step-Through"],
  whatsInTheBox: [
    "JOBOBIKE Robin Pro e-bike",
    "48V 20Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front LED light (60 LUX)",
    "Rear brake light",
    "Kickstand",
    "Bell"
  ]
},

// 4. JOBOBIKE Romer
{
  id: "romer-001",
  name: "JOBOBIKE Romer",
  slug: "jobobike-romer",
  originalPrice: 1999,
  price: 1799,
  discount: "10%",
  image: "/images/romer/romer-1.png",
  images: [
    "/images/romer/romer-1.png",
    "/images/romer/romer-2.png",
    "/images/romer/romer-3.png",
    "/images/romer/romer-4.png",
    "/images/romer/romer-5.png",
  ],
  features: [
    "Foldable design for easy transport",
    "20\" fat tires for stability",
    "Step-through frame",
    "Compatible with various accessories",
    "150km range in eco mode"
  ],
  badge: "Utility",
  category: ["Sammenleggbar" , "Fatbike"],
  rating: 4.6,
  reviewCount: 112,
  specifications: {
    motor: "250W Hub, 80Nm",
    battery: "48V 13Ah (624Wh)",
    range: "65-150km",
    speed: "25 km/h",
    weight: "30kg",
    wheelSize: "20\"",
    foldable: true,
    brakes: "Mechanical disc brakes",
    frame: "Double-layer aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Romer",
      frameType: "Step-through foldable",
      frameMaterial: "Double-layer aluminum alloy",
      foldable: true,
      dimensions: {
        unfolded: "165cm x 110cm x 70cm",
        folded: "106cm x 60cm x 86cm"
      },
      weight: "30kg",
      maxLoad: "150kg",
      recommendedHeight: "160cm+"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "450W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: false
    },
    battery: {
      type: "LG Lithium-ion with BMS",
      voltage: "48V",
      capacity: "13Ah",
      capacityWh: "624Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "45km",
        pedalAssist: "150km",
        combined: "65km"
      },
      gradability: "18°",
      turningRadius: "2.2m"
    },
    wheels: {
      size: "20\"",
      tireType: "Fat tires",
      tireSize: "20\" x 4.0\"",
      rimMaterial: "Aluminum alloy"
    },
    brakes: {
      front: "Mechanical disc brake",
      rear: "Mechanical disc brake",
      type: "Tektro mechanical disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "LCD display",
      lights: {
        front: true,
        rear: true,
        type: "LED with waterproof wiring"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: false,
        rear: false,
        type: "Rigid with fat tire cushioning"
      },
      seat: {
        type: "Comfort saddle",
        adjustable: true,
        material: "Synthetic leather"
      },
      handlebar: {
        type: "Foldable handlebar",
        adjustable: true,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX4",
      certification: ["EN15194", "CE"]
    },
    connectivity: {
      app: false,
      gps: false,
      bluetooth: false,
      usb: false
    },
    accessories: {
      kickstand: true,
      mudguards: true,
      rack: true,
      basket: true,
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Romer is a versatile utility e-bike designed for maximum practicality. With its foldable design and step-through frame, it's perfect for commuters who need easy transport and storage. The double-layer frame provides extra strength while protecting the battery, and it's compatible with various accessories like trailers, baby seats, and baskets.",
  keyFeatures: [
    "Foldable design - compact storage at 106cm x 60cm x 86cm",
    "20\" fat tires for stable, comfortable ride on all terrains",
    "Step-through frame for easy mounting/dismounting",
    "Double-layer frame for extra strength and battery protection",
    "Compatible with trailer, baby seat, and cargo accessories",
    "250W motor with 80Nm torque",
    "Up to 150km range in eco mode",
    "Rust-resistant foldable pedals"
  ],
  availableColors: ["Mint Cream", "Dark Olive"],
  availableSizes: ["One Size"],
  whatsInTheBox: [
    "JOBOBIKE Romer e-bike",
    "48V 13Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front and rear lights",
    "Foldable pedals",
    "Kickstand",
    "Mudguards",
    "Bell"
  ]
},

// 5. JOBOBIKE Romer Pro
{
  id: "romer-pro-001",
  name: "JOBOBIKE Romer Pro",
  slug: "jobobike-romer-pro",
  originalPrice: 2199,
  price: 1999,
  discount: "9%",
  image: "/images/romer-pro/romer-1.png",
  images: [
    "/images/romer-pro/romer-1.png",
  ],
  features: [
    "Hydraulic disc brakes",
    "Torque sensor technology",
    "Suspension seatpost",
    "Foldable utility design",
    "Enhanced cargo capacity"
  ],
  badge: "Pro Utility",
  category: ["Lastesykkel" , "Sammenleggbar"],
  rating: 4.8,
  reviewCount: 87,
  specifications: {
    motor: "250W Bafang Hub, 80Nm",
    battery: "48V 15Ah (720Wh)",
    range: "70-160km",
    speed: "25 km/h",
    weight: "31kg",
    wheelSize: "20\"",
    foldable: true,
    brakes: "Hydraulic disc brakes",
    frame: "Double-layer aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Romer Pro",
      frameType: "Step-through foldable",
      frameMaterial: "Double-layer aluminum alloy",
      foldable: true,
      dimensions: {
        unfolded: "165cm x 110cm x 70cm",
        folded: "106cm x 60cm x 86cm"
      },
      weight: "31kg",
      maxLoad: "150kg",
      recommendedHeight: "160cm+"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "500W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: true
    },
    battery: {
      type: "LG Lithium-ion with BMS",
      voltage: "48V",
      capacity: "15Ah",
      capacityWh: "720Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "50km",
        pedalAssist: "160km",
        combined: "70km"
      },
      gradability: "18°",
      turningRadius: "2.2m"
    },
    wheels: {
      size: "20\"",
      tireType: "Fat tires",
      tireSize: "20\" x 4.0\"",
      rimMaterial: "Aluminum alloy"
    },
    brakes: {
      front: "Hydraulic disc brake",
      rear: "Hydraulic disc brake",
      type: "Tektro hydraulic disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "Advanced LCD display",
      lights: {
        front: true,
        rear: true,
        type: "LED with waterproof wiring"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: false,
        rear: true,
        type: "Suspension seatpost"
      },
      seat: {
        type: "Premium comfort saddle",
        adjustable: true,
        material: "Synthetic leather"
      },
      handlebar: {
        type: "Foldable handlebar",
        adjustable: true,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX4",
      certification: ["EN15194", "CE"]
    },
    connectivity: {
      app: false,
      gps: false,
      bluetooth: false,
      usb: true
    },
    accessories: {
      kickstand: true,
      mudguards: true,
      rack: true,
      basket: true,
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Romer Pro is the upgraded version of the popular Romer utility e-bike. It features hydraulic disc brakes for superior stopping power, a torque sensor for more natural pedal assist, and a suspension seatpost for enhanced comfort. Perfect for daily commuting, family outings, and cargo transport.",
  keyFeatures: [
    "Hydraulic disc brakes for stronger, more stable braking",
    "Torque sensor for smooth, natural power assistance",
    "Suspension seatpost for enhanced comfort",
    "48V 15Ah (720Wh) battery for extended range",
    "Foldable design with double-layer reinforced frame",
    "20\" fat tires for stability on all terrains",
    "Compatible with cargo accessories and child seats",
    "Advanced LCD display with USB port"
  ],
  availableColors: ["Jungle Green", "Dark Olive", "Blue Grey"],
  availableSizes: ["One Size"],
  whatsInTheBox: [
    "JOBOBIKE Romer Pro e-bike",
    "48V 15Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front and rear lights",
    "Foldable pedals",
    "Kickstand",
    "Mudguards",
    "Rear rack",
    "Bell"
  ]
},

// 6. JOBOBIKE Ace Pro
{
  id: "ace-pro-001",
  name: "JOBOBIKE Ace Pro",
  slug: "jobobike-ace-pro",
  originalPrice: 2499,
  price: 2199,
  discount: "12%",
  image: "/images/ace-pro/ace-pro-1.jpeg",
  images: [
    "/images/ace-pro/ace-pro-1.jpeg",
  ],
  features: [
    "Full suspension system",
    "27.5\" x 2.8\" all-terrain tires",
    "500W Bafang motor with 95Nm torque",
    "Hydraulic brakes with cutoff sensors",
    "Premium color LCD display"
  ],
  badge: "Performance",
  category: ["Terreng"],
  rating: 4.9,
  reviewCount: 134,
  specifications: {
    motor: "500W Bafang Mid-Drive, 95Nm",
    battery: "48V 17.5Ah (840Wh)",
    range: "80-120km",
    speed: "25 km/h",
    weight: "28kg",
    wheelSize: "27.5\"",
    foldable: false,
    brakes: "Tektro hydraulic disc brakes",
    frame: "Aluminum alloy full suspension",
    drivetrain: "Shimano 9-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Ace Pro",
      frameType: "Full suspension mountain frame",
      frameMaterial: "6061 Aluminum alloy",
      foldable: false,
      dimensions: {
        unfolded: "185cm x 115cm x 72cm",
        folded: "N/A"
      },
      weight: "28kg",
      maxLoad: "130kg",
      recommendedHeight: "170-195cm"
    },
    motor: {
      type: "Mid-drive motor",
      power: "500W",
      peakPower: "750W",
      torque: "95Nm",
      location: "Center",
      torqueSensor: true
    },
    battery: {
      type: "Samsung Lithium-ion with BMS",
      voltage: "48V",
      capacity: "17.5Ah",
      capacityWh: "840Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "1000+ charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h (EU) / 32 km/h (configurable)",
      range: {
        pureElectric: "50km",
        pedalAssist: "120km",
        combined: "80km"
      },
      gradability: "25°",
      turningRadius: "2.8m"
    },
    wheels: {
      size: "27.5\"",
      tireType: "All-terrain plus tires",
      tireSize: "27.5\" x 2.8\"",
      rimMaterial: "Double-wall aluminum alloy"
    },
    brakes: {
      front: "Tektro hydraulic disc 180mm",
      rear: "Tektro hydraulic disc 180mm",
      type: "Hydraulic disc with motor cutoff"
    },
    transmission: {
      type: "External derailleur",
      gears: "9-speed Shimano",
      shifter: "Shimano Alivio"
    },
    electrical: {
      display: "Premium color LCD with Bluetooth",
      lights: {
        front: true,
        rear: true,
        type: "High-power LED with multiple modes"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels + walk mode"
    },
    comfort: {
      suspension: {
        front: true,
        rear: true,
        type: "Full suspension - Front: 120mm travel, Rear: 100mm travel"
      },
      seat: {
        type: "Performance saddle",
        adjustable: true,
        material: "Premium synthetic leather"
      },
      handlebar: {
        type: "MTB riser bar 760mm",
        adjustable: false,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX5",
      certification: ["EN15194", "CE", "TUV"]
    },
    connectivity: {
      app: true,
      gps: false,
      bluetooth: true,
      usb: true
    },
    accessories: {
      kickstand: true,
      mudguards: true,
      rack: false,
      basket: false,
      bottleHolder: true
    }
  },
  description: "JOBOBIKE Ace Pro is the ultimate performance e-mountain bike designed for serious riders who demand the best. Featuring a powerful 500W Bafang mid-drive motor with 95Nm torque, full suspension system, and premium components throughout, the Ace Pro conquers the toughest trails with ease while delivering an exhilarating riding experience.",
  keyFeatures: [
    "500W Bafang mid-drive motor with 95Nm torque for exceptional power",
    "Full suspension system (120mm front / 100mm rear) for maximum comfort",
    "27.5\" x 2.8\" plus-size tires for superior traction and stability",
    "48V 17.5Ah Samsung battery for 80-120km range",
    "Tektro hydraulic disc brakes with 180mm rotors",
    "Shimano 9-speed transmission for precise gear changes",
    "Color LCD display with Bluetooth connectivity",
    "Integrated torque sensor for natural pedal assistance"
  ],
  availableColors: ["Matte Black", "Anthracite Grey", "Forest Green"],
  availableSizes: ["M (170-180cm)", "L (180-195cm)"],
  whatsInTheBox: [
    "JOBOBIKE Ace Pro e-bike",
    "48V 17.5Ah Samsung battery with fast charger",
    "User manual and assembly tools",
    "Warranty card",
    "High-power LED front light",
    "LED rear brake light",
    "Kickstand",
    "Mudguards",
    "Bottle holder",
    "Bell",
    "Pedals"
  ]
},

// 7. JOBOBIKE Romer C
{
  id: "romer-c-001",
  name: "JOBOBIKE Romer C",
  slug: "jobobike-romer-c",
  originalPrice: 1899,
  price: 1699,
  discount: "11%",
  image: "/images/romer-c/romer-c.png",
  images: [
   "/images/romer-c/romer-c.png",
  ],
  features: [
    "Enhanced cargo capacity",
    "Reinforced rear rack",
    "20\" fat tires",
    "Foldable cargo design",
    "Heavy-duty construction"
  ],
  badge: "Cargo",
  category: ["Lastesykkel" ,"Sammenleggbar"],
  rating: 4.7,
  reviewCount: 76,
  specifications: {
    motor: "250W Hub, 80Nm",
    battery: "48V 13Ah (624Wh)",
    range: "60-140km",
    speed: "25 km/h",
    weight: "32kg",
    wheelSize: "20\"",
    foldable: true,
    brakes: "Mechanical disc brakes",
    frame: "Reinforced aluminum alloy",
    drivetrain: "Shimano 7-speed"
  },
  technicalSpecifications: {
    general: {
      model: "Romer C",
      frameType: "Step-through cargo frame",
      frameMaterial: "Reinforced aluminum alloy",
      foldable: true,
      dimensions: {
        unfolded: "165cm x 110cm x 70cm",
        folded: "106cm x 60cm x 86cm"
      },
      weight: "32kg",
      maxLoad: "180kg",
      recommendedHeight: "160cm+"
    },
    motor: {
      type: "Rear hub motor",
      power: "250W",
      peakPower: "450W",
      torque: "80Nm",
      location: "Rear hub",
      torqueSensor: false
    },
    battery: {
      type: "LG Lithium-ion with BMS",
      voltage: "48V",
      capacity: "13Ah",
      capacityWh: "624Wh",
      removable: true,
      chargingTime: "6-8 hours",
      batteryLife: "800-1000 charge cycles"
    },
    performance: {
      maxSpeed: "25 km/h",
      range: {
        pureElectric: "45km",
        pedalAssist: "140km",
        combined: "60km"
      },
      gradability: "15°",
      turningRadius: "2.2m"
    },
    wheels: {
      size: "20\"",
      tireType: "Fat tires",
      tireSize: "20\" x 4.0\"",
      rimMaterial: "Reinforced aluminum alloy"
    },
    brakes: {
      front: "Mechanical disc brake",
      rear: "Mechanical disc brake",
      type: "Tektro mechanical disc"
    },
    transmission: {
      type: "External derailleur",
      gears: "7-speed Shimano",
      shifter: "Shimano twist grip"
    },
    electrical: {
      display: "LCD display",
      lights: {
        front: true,
        rear: true,
        type: "LED with cargo visibility lights"
      },
      horn: true,
      throttle: false,
      assistLevels: "5 levels"
    },
    comfort: {
      suspension: {
        front: false,
        rear: false,
        type: "Fat tire cushioning"
      },
      seat: {
        type: "Wide comfort saddle",
        adjustable: true,
        material: "Synthetic leather with extra padding"
      },
      handlebar: {
        type: "Swept-back comfort handlebar",
        adjustable: true,
        material: "Aluminum alloy"
      }
    },
    safety: {
      reflectors: true,
      bell: true,
      waterResistance: "IPX4",
      certification: ["EN15194", "CE"]
    },
    connectivity: {
      app: false,
      gps: false,
      bluetooth: false,
      usb: false
    },
    accessories: {
      kickstand: true,
      mudguards: true,
      rack: true,
      basket: true,
      bottleHolder: false
    }
  },
  description: "JOBOBIKE Romer C is the cargo-focused variant of the popular Romer series, designed specifically for heavy-duty transport needs. With its reinforced frame, enhanced rear rack, and 180kg maximum load capacity, it's perfect for deliveries, shopping trips, or transporting children and cargo. The foldable design ensures easy storage when not in use.",
  keyFeatures: [
    "Reinforced frame with 180kg maximum load capacity",
    "Heavy-duty rear rack designed for cargo boxes and child seats",
    "20\" fat tires for stable cargo transport on all surfaces",
    "Foldable design for convenient storage",
    "Wide comfort saddle with extra padding for longer trips",
    "Compatible with cargo boxes, child seats, and trailers",
    "Double kickstand for stable parking when loaded",
    "Enhanced visibility lights for cargo safety"
  ],
  availableColors: ["Cargo Black", "Industrial Grey"],
  availableSizes: ["One Size"],
  whatsInTheBox: [
    "JOBOBIKE Romer C e-bike",
    "48V 13Ah battery with charger",
    "User manual and assembly tools",
    "Warranty card",
    "Front and rear lights",
    "Heavy-duty rear rack",
    "Double kickstand",
    "Mudguards",
    "Large basket (optional)",
    "Bell",
    "Foldable pedals"
  ]
},
  
  {
    id: "9",
    name: "JOBOBIKE Sam",
    slug: "jobobike-sam",
    originalPrice: 1299,
    price: 1299,
    discount: "15%",
    image: "/images/sam/sam-1.png",
    images: [
      "/images/sam/sam-1.png",
      "/images/sam/sam-2.png",
      "/images/sam/sam-3.png",
      "/images/sam/sam-4.png",
      "/images/sam/sam-5.png",
      "/images/sam/sam-6.png",
      "/images/sam/sam-7.png",
      "/images/sam/sam-8.png",
     
    ],
    features: [
      "350W Rear Hub Motor",
      "36V 12.8Ah Battery",
      "20\" Fat Tires",
      "Foldable Design",
      "5 Assist Levels"
    ],
    category: ["Pendler"],
    rating: 4.3,
    reviewCount: 67,
    specifications: {
      motor: "350W Rear Hub",
      battery: "36V 12.8Ah (461Wh)",
      range: "60-80 km",
      speed: "25 km/h",
      weight: "22 kg",
      wheelSize: "20\"",
      foldable: true,
      brakes: "Disc Brakes",
      frame: "Aluminum Alloy",
      drivetrain: "7-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Sam",
        frameType: "Foldable",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: true,
        dimensions: {
          unfolded: "160 x 58 x 100 cm",
          folded: "80 x 58 x 70 cm"
        },
        weight: "22 kg",
        maxLoad: "100 kg",
        recommendedHeight: "155-185 cm"
      },
      motor: {
        type: "Rear Hub",
        power: "350W",
        peakPower: "500W",
        torque: "40 N.m",
        location: "Rear Wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "12.8Ah",
        capacityWh: "461Wh",
        removable: true,
        chargingTime: "4-5 hours",
        batteryLife: "600+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "60-80 km",
          combined: "50-70 km"
        },
        gradability: "15°"
      },
      wheels: {
        size: "20\"",
        tireType: "Fat Tire",
        tireSize: "20 x 4.0\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-Speed",
        shifter: "Shimano"
      },
      electrical: {
        display: "LCD Display",
        lights: {
          front: true,
          rear: true,
          type: "LED"
        },
        horn: false,
        throttle: true,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Spring Fork"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "PU Leather"
        },
        handlebar: {
          type: "Foldable",
          adjustable: true,
          material: "Steel"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: false,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Sam is a versatile folding e-bike perfect for urban commuters who need portability without sacrificing performance. Its compact design makes storage and transport effortless.",
    keyFeatures: [
      "Quick-fold mechanism for easy storage",
      "Fat tires for enhanced stability and comfort",
      "Powerful 350W motor for city riding",
      "Removable battery for convenient charging",
      "Compact size perfect for apartments and offices"
    ],
    availableColors: ["Matte Black", "White", "Red"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Sam E-bike",
      "36V 12.8Ah Battery",
      "Battery Charger",
      "User Manual",
      "Folding Guide",
      "Keys (2x)"
    ]
  },

  {
    id: "7",
    name: "JOBOBIKE Lyon Pro",
    slug: "jobobike-lyon-pro",
    originalPrice: 1899,
    price: 1599,
    discount: "16%",
    image: "/images/lyon/lyon-1.png",
    images: [
      "/images/lyon/lyon-1.png",
      "/images/lyon/lyon-2.png",

    ],
    features: [
      "250W Mid-Drive Motor",
      "48V 15Ah Removable Battery",
      "9-Speed Shimano Transmission",
      "90+ km Range",
      "Bluetooth App Connectivity"
    ],
    badge: "Best Seller",
    category: ["Pendler"],
    rating: 4.7,
    reviewCount: 142,
    specifications: {
      motor: "250W Mid-Drive",
      battery: "48V 15Ah (720Wh)",
      range: "90-110 km",
      speed: "25 km/h",
      weight: "24 kg",
      wheelSize: "26\"",
      foldable: false,
      brakes: "Hydraulic Disc Brakes",
      frame: "Aluminum Alloy",
      drivetrain: "9-Speed Shimano"
    },
    technicalSpecifications: {
      general: {
        model: "Lyon Pro",
        frameType: "Step-through",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "185 x 65 x 110 cm",
          folded: "N/A"
        },
        weight: "24 kg",
        maxLoad: "120 kg",
        recommendedHeight: "155-195 cm"
      },
      motor: {
        type: "Mid-Drive",
        power: "250W",
        peakPower: "500W",
        torque: "90 N.m",
        location: "Center",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "15Ah",
        capacityWh: "720Wh",
        removable: true,
        chargingTime: "4-6 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "60 km",
          pedalAssist: "90-110 km",
          combined: "75-95 km"
        },
        gradability: "25Â°",
        turningRadius: "1.8m"
      },
      wheels: {
        size: "26\"",
        tireType: "Urban",
        tireSize: "26 x 2.1\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "180mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "9-Speed",
        shifter: "Shimano"
      },
      electrical: {
        display: "LCD Bluetooth Display",
        lights: {
          front: true,
          rear: true,
          type: "LED"
        },
        horn: true,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Spring Fork"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "Ergonomic",
          adjustable: true,
          material: "Aluminum"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: true,
        gps: false,
        bluetooth: true,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: false,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Lyon Pro is a sophisticated urban e-bike designed for the modern commuter. With its powerful mid-drive motor and long-range battery, it offers the perfect balance of performance and efficiency for city riding.",
    keyFeatures: [
      "Powerful 250W mid-drive motor with 90 N.m torque",
      "Long-range 48V 15Ah removable battery",
      "Smart Bluetooth connectivity with mobile app",
      "Responsive hydraulic disc brakes",
      "Comfortable step-through frame design"
    ],
    availableColors: ["Matte Black", "Pearl White", "Ocean Blue"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Lyon Pro E-bike",
      "48V 15Ah Battery",
      "Battery Charger",
      "User Manual",
      "Assembly Tools",
      "Keys (2x)"
    ]
  },

  // 2. Jobobike Dyno GT
  {
    id: "8",
    name: "JOBOBIKE Dyno GT",
    slug: "jobobike-dyno-gt",
    originalPrice: 1699,
    price: 1449,
    discount: "15%",
    image: "/images/dyno/dyno-1.png",
    images: [
      "/images/dyno/dyno-1.png",
      "/images/dyno/dyno-2.png",

    ],
    features: [
      "250W Rear Hub Motor",
      "48V 15Ah Smart Battery",
      "8-Speed Shimano Derailleur",
      "Torque Sensor",
      "Smart LCD Display"
    ],
    category: ["Pendler" ,"Hybrid"],
    rating: 4.5,
    reviewCount: 89,
    specifications: {
      motor: "250W Rear Hub",
      battery: "48V 15Ah (720Wh)",
      range: "90+ km",
      speed: "25 km/h",
      weight: "26 kg",
      wheelSize: "27.5\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Aluminum Alloy",
      drivetrain: "8-Speed Shimano"
    },
    technicalSpecifications: {
      general: {
        model: "Dyno GT",
        frameType: "Diamond",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "180 x 60 x 105 cm",
          folded: "N/A"
        },
        weight: "26 kg",
        maxLoad: "125 kg",
        recommendedHeight: "165-200 cm"
      },
      motor: {
        type: "Rear Hub",
        power: "250W",
        peakPower: "450W",
        torque: "45 N.m",
        location: "Rear Wheel",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "15Ah",
        capacityWh: "720Wh",
        removable: true,
        chargingTime: "3-4 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "70 km",
          pedalAssist: "90-120 km",
          combined: "80-100 km"
        },
        gradability: "20Â°"
      },
      wheels: {
        size: "27.5\"",
        tireType: "Hybrid",
        tireSize: "27.5 x 1.95\"",
        rimMaterial: "Double Wall Aluminum"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "160mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "8-Speed",
        shifter: "Shimano Altus"
      },
      electrical: {
        display: "Smart LCD Bluetooth",
        lights: {
          front: true,
          rear: true,
          type: "Auto-sensing LED"
        },
        horn: true,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Lockout Fork"
        },
        seat: {
          type: "Sport Saddle",
          adjustable: true,
          material: "Synthetic"
        },
        handlebar: {
          type: "Flat Bar",
          adjustable: false,
          material: "Aluminum"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX5",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: true,
        gps: false,
        bluetooth: true,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: false,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Dyno GT combines smart technology with reliable performance. Featuring a torque sensor and intelligent display system, it's perfect for tech-savvy urban riders.",
    keyFeatures: [
      "Smart torque sensor for natural riding feel",
      "Fast 3-hour charging capability",
      "Auto-sensing rear light for safety",
      "Bluetooth LCD display with app integration",
      "Lightweight yet durable aluminum frame"
    ],
    availableColors: ["Charcoal Gray", "Electric Blue", "Forest Green"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Dyno GT E-bike",
      "48V 15Ah Battery",
      "Fast Charger",
      "User Manual",
      "Assembly Kit",
      "Keys (2x)"
    ]
  },



  // 4. Jobobike Transer
  {
    id: "10",
    name: "JOBOBIKE Transer",
    slug: "jobobike-transer",
    originalPrice: 2199,
    price: 1899,
    discount: "14%",
    image: "/images/transer/transer-1.png",
    images: [
      "/images/transer/transer-1.png",
      "/images/transer/transer-2.png",
      "/images/transer/transer-3.png",
    ],
    features: [
      "250W Mid-Drive Motor",
      "48V 17.5Ah Battery",
      "Cargo Box Included",
      "Family-Friendly Design",
      "Extra Long Frame"
    ],
    badge: "Family Choice",
    category: ["Sammenleggbar" , "Hybrid"],
    rating: 4.8,
    reviewCount: 123,
    specifications: {
      motor: "250W Mid-Drive",
      battery: "48V 17.5Ah (840Wh)",
      range: "80-100 km",
      speed: "25 km/h",
      weight: "32 kg",
      wheelSize: "26\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Aluminum Cargo",
      drivetrain: "8-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Transer",
        frameType: "Cargo/Longtail",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "220 x 65 x 110 cm",
          folded: "N/A"
        },
        weight: "32 kg",
        maxLoad: "180 kg",
        recommendedHeight: "160-195 cm"
      },
      motor: {
        type: "Mid-Drive",
        power: "250W",
        peakPower: "600W",
        torque: "80 N.m",
        location: "Center",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "17.5Ah",
        capacityWh: "840Wh",
        removable: true,
        chargingTime: "5-6 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "60 km",
          pedalAssist: "80-100 km",
          combined: "70-90 km"
        },
        gradability: "20Â°"
      },
      wheels: {
        size: "26\"",
        tireType: "Cargo",
        tireSize: "26 x 2.35\"",
        rimMaterial: "Reinforced Aluminum"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "180mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "8-Speed",
        shifter: "Shimano Acera"
      },
      electrical: {
        display: "LCD Display",
        lights: {
          front: true,
          rear: true,
          type: "Bright LED"
        },
        horn: true,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Cargo Fork"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Gel Padding"
        },
        handlebar: {
          type: "Cargo Bar",
          adjustable: true,
          material: "Aluminum"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: true,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Transer is the ultimate family cargo e-bike, designed to safely transport children and cargo with its extended frame and powerful motor system.",
    keyFeatures: [
      "Extended longtail frame for maximum cargo capacity",
      "Powerful mid-drive motor with high torque",
      "Extra-large battery for long family trips",
      "Integrated cargo box and safety accessories",
      "Stable and comfortable ride even when fully loaded"
    ],
    availableColors: ["Safety Orange", "Deep Blue", "Forest Green"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Transer E-bike",
      "48V 17.5Ah Battery",
      "Battery Charger",
      "Cargo Box",
      "Safety Straps",
      "User Manual",
      "Keys (2x)"
    ]
  },

  // 5. Jobobike Mover
  {
    id: "11",
    name: "JOBOBIKE Mover",
    slug: "jobobike-mover",
    originalPrice: 1399,
    price: 1199,
    discount: "14%",
    image: "/images/mover/mover-1.png",
    images: [
      "/images/mover/mover-1.png",
      "/images/mover/mover-2.png",
    ],
    features: [
      "250W Rear Hub Motor",
      "36V 14Ah Battery",
      "Step-Through Frame",
      "Comfortable Riding Position",
      "Integrated Lights"
    ],
    category: ["Fatbike"],
    rating: 4.4,
    reviewCount: 78,
    specifications: {
      motor: "250W Rear Hub",
      battery: "36V 14Ah (504Wh)",
      range: "70-90 km",
      speed: "25 km/h",
      weight: "23 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "V-Brakes",
      frame: "Steel Step-Through",
      drivetrain: "7-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Mover",
        frameType: "Step-Through",
        frameMaterial: "High-Tensile Steel",
        foldable: false,
        dimensions: {
          unfolded: "175 x 60 x 105 cm",
          folded: "N/A"
        },
        weight: "23 kg",
        maxLoad: "110 kg",
        recommendedHeight: "150-185 cm"
      },
      motor: {
        type: "Rear Hub",
        power: "250W",
        peakPower: "400W",
        torque: "35 N.m",
        location: "Rear Wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "14Ah",
        capacityWh: "504Wh",
        removable: true,
        chargingTime: "4-5 hours",
        batteryLife: "700+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "50 km",
          pedalAssist: "70-90 km",
          combined: "60-80 km"
        },
        gradability: "15Â°"
      },
      wheels: {
        size: "28\"",
        tireType: "City",
        tireSize: "28 x 1.75\"",
        rimMaterial: "Aluminum"
      },
      brakes: {
        front: "V-Brake",
        rear: "V-Brake",
        type: "Traditional"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-Speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "Integrated LED"
        },
        horn: false,
        throttle: true,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "None"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Foam Padding"
        },
        handlebar: {
          type: "Swept-Back",
          adjustable: false,
          material: "Steel"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: true,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Mover offers comfortable, upright riding with its classic step-through design. Perfect for leisurely rides and daily commuting with style and comfort.",
    keyFeatures: [
      "Easy step-through frame for comfortable mounting",
      "Upright riding position reduces strain",
      "Integrated lighting system for safety",
      "Classic city bike styling with modern e-bike technology",
      "Reliable and affordable urban transportation"
    ],
    availableColors: ["Classic Black", "Cream White", "Burgundy Red"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Mover E-bike",
      "36V 14Ah Battery",
      "Battery Charger",
      "User Manual",
      "Basic Tool Kit",
      "Keys (2x)"
    ]
  },



  // 7. Jobobike Eddy X
  {
    id: "13",
    name: "JOBOBIKE Eddy X",
    slug: "jobobike-eddy-x",
    originalPrice: 1599,
    price: 1349,
    discount: "16%",
    image: "/images/eddy-x/eddy-1.png",
    images: [
      "/images/eddy-x/eddy-1.png",
      "/images/eddy-x/eddy-2.png",
    ],
    features: [
      "250W Mid-Drive Motor",
      "36V 16Ah Battery",
      "Smart Display",
      "Integrated Design",
      "Urban Optimized"
    ],
    category: ["Lastesykkel"],
    rating: 4.5,
    reviewCount: 94,
    specifications: {
      motor: "250W Mid-Drive",
      battery: "36V 16Ah (576Wh)",
      range: "80-100 km",
      speed: "25 km/h",
      weight: "25 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Integrated Aluminum",
      drivetrain: "8-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Eddy X",
        frameType: "Integrated",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "180 x 60 x 105 cm",
          folded: "N/A"
        },
        weight: "25 kg",
        maxLoad: "120 kg",
        recommendedHeight: "160-195 cm"
      },
      motor: {
        type: "Mid-Drive",
        power: "250W",
        peakPower: "500W",
        torque: "70 N.m",
        location: "Center",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "16Ah",
        capacityWh: "576Wh",
        removable: false,
        chargingTime: "4-5 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "60 km",
          pedalAssist: "80-100 km",
          combined: "70-90 km"
        },
        gradability: "20Â°"
      },
      wheels: {
        size: "28\"",
        tireType: "Urban",
        tireSize: "28 x 1.6\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "160mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "8-Speed",
        shifter: "Shimano Acera"
      },
      electrical: {
        display: "Smart Color Display",
        lights: {
          front: true,
          rear: true,
          type: "Integrated LED"
        },
        horn: false,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "None"
        },
        seat: {
          type: "Ergonomic Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "Ergonomic Drop",
          adjustable: false,
          material: "Aluminum"
        }
      },
      safety: {
        reflectors: true,
        bell: false,
        waterResistance: "IPX5",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: true,
        gps: false,
        bluetooth: true,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: false,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Eddy X represents the future of urban e-mobility with its sleek integrated design and smart technology. Perfect for modern commuters who value both style and performance.",
    keyFeatures: [
      "Sleek integrated battery design",
      "Smart color display with connectivity",
      "Efficient mid-drive motor system",
      "Aerodynamic frame for urban efficiency",
      "Modern aesthetics meet practical performance"
    ],
    availableColors: ["Graphite Gray", "Pure White", "Midnight Blue"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Eddy X E-bike",
      "Integrated Battery (non-removable)",
      "Smart Charger",
      "User Manual",
      "App Setup Guide",
      "Assembly Tools"
    ]
  },



  // 9. Jobobike Astra
  {
    id: "15",
    name: "JOBOBIKE Astra",
    slug: "jobobike-astra",
    originalPrice: 1199,
    price: 999,
    discount: "17%",
    image: "/images/astra/astra-1.png",
    images: [
      "/images/astra/astra-1.png",
      "/images/astra/astra-2.png",
    ],
    features: [
      "250W Front Hub Motor",
      "36V 10Ah Battery",
      "Lightweight Design",
      "Budget-Friendly",
      "Simple Operation"
    ],
    badge: "Best Value",
    category: ["Sammenleggbar"],
    rating: 4.2,
    reviewCount: 156,
    specifications: {
      motor: "250W Front Hub",
      battery: "36V 10Ah (360Wh)",
      range: "40-60 km",
      speed: "25 km/h",
      weight: "21 kg",
      wheelSize: "26\"",
      foldable: false,
      brakes: "V-Brakes",
      frame: "Steel",
      drivetrain: "6-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Astra",
        frameType: "City Bike",
        frameMaterial: "High-Tensile Steel",
        foldable: false,
        dimensions: {
          unfolded: "175 x 60 x 105 cm",
          folded: "N/A"
        },
        weight: "21 kg",
        maxLoad: "100 kg",
        recommendedHeight: "155-185 cm"
      },
      motor: {
        type: "Front Hub",
        power: "250W",
        peakPower: "350W",
        torque: "30 N.m",
        location: "Front Wheel",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "10Ah",
        capacityWh: "360Wh",
        removable: true,
        chargingTime: "3-4 hours",
        batteryLife: "500+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "30 km",
          pedalAssist: "40-60 km",
          combined: "35-50 km"
        },
        gradability: "12Â°"
      },
      wheels: {
        size: "26\"",
        tireType: "City",
        tireSize: "26 x 1.95\"",
        rimMaterial: "Steel"
      },
      brakes: {
        front: "V-Brake",
        rear: "V-Brake",
        type: "Traditional"
      },
      transmission: {
        type: "Derailleur",
        gears: "6-Speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "Basic LED",
        lights: {
          front: true,
          rear: false,
          type: "Basic LED"
        },
        horn: false,
        throttle: true,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "None"
        },
        seat: {
          type: "Basic Comfort",
          adjustable: true,
          material: "PU"
        },
        handlebar: {
          type: "City Bar",
          adjustable: false,
          material: "Steel"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: false,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Astra is the perfect entry-level e-bike for budget-conscious riders. Despite its affordable price, it delivers reliable performance and all the essential features needed for urban commuting.",
    keyFeatures: [
      "Affordable entry point into e-biking",
      "Lightweight and easy to handle",
      "Simple, user-friendly operation",
      "Reliable front hub motor system",
      "Perfect for short to medium commutes"
    ],
    availableColors: ["Basic Black", "Pearl White", "Sky Blue"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Astra E-bike",
      "36V 10Ah Battery",
      "Basic Charger",
      "User Manual",
      "Basic Tools",
      "Keys (2x)"
    ]
  },
  {
    id: "jobobike-viva",
    name: "JOBOBIKE Viva",
    slug: "jobobike-viva",
    originalPrice: 1699,
    price: 1399,
    discount: "-18%",
    image: "/images/viva/viva-1.png",
    images: [
      "/images/viva/viva-1.png",
      "/images/viva/viva-2.png",
      "/images/viva/viva-3.png",
      "/images/viva/viva-4.png",
      "/images/viva/viva-5.png",

    ],
    features: [
      "Lightweight 22kg aluminum frame",
      "250W XOFO rear hub motor",
      "36V 14Ah LG battery with BMS",
      "28-inch wheels for smooth city riding",
      "Integrated lights and mudguards"
    ],
    badge: "Lightweight",
    category: ["Pendler"],
    rating: 4.7,
    reviewCount: 89,
    specifications: {
      motor: "250W XOFO Rear Hub",
      battery: "36V 14Ah (504Wh)",
      range: "50-70 km",
      speed: "25 km/h",
      weight: "22 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "Mechanical Disc Brakes",
      frame: "Aluminum Alloy 6061",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Viva",
        frameType: "Step-over",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "1850 x 680 x 1050 mm",
          folded: "N/A"
        },
        weight: "22 kg",
        maxLoad: "120 kg",
        recommendedHeight: "165-185 cm"
      },
      motor: {
        type: "XOFO Brushless",
        power: "250W",
        peakPower: "450W",
        torque: "30 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "LG Lithium-ion",
        voltage: "36V",
        capacity: "14Ah",
        capacityWh: "504Wh",
        removable: true,
        chargingTime: "4-6 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "70 km",
          combined: "50-70 km"
        },
        gradability: "15°",
        turningRadius: "2.5m"
      },
      wheels: {
        size: "28\"",
        tireType: "City Tire",
        tireSize: "28 x 1.75\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "LED Integrated"
        },
        horn: true,
        throttle: false,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "N/A"
        },
        seat: {
          type: "Ergonomic Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "City Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: false,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Viva is the lightest model in the JOBOBIKE family at just 22kg. Designed specifically for urban commuting, it combines elegant design with practical functionality. The lightweight aluminum frame makes it easy to carry and maneuver through city streets, while the 28-inch wheels provide a smooth and comfortable ride. Perfect for fashionable urbanites who value style and comfort.",
    keyFeatures: [
      "Ultra-lightweight 22kg construction",
      "Powerful 250W rear hub motor with 30Nm torque",
      "Long-range 504Wh battery for extended rides",
      "Elegant urban design with integrated components",
      "Reliable Shimano 7-speed transmission",
      "Built-in lights and mudguards for all-weather riding"
    ],
    availableColors: ["Blue", "White", "Black"],
    availableSizes: ["One Size (165-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Viva E-bike",
      "36V 14Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },
  {
    id: "jobobike-viva-st",
    name: "JOBOBIKE Viva ST",
    slug: "jobobike-viva-st",
    originalPrice: 1699,
    price: 1399,
    discount: "-18%",
    image: "/images/viva-st/viva-st-1.png",
    images: [
      "/images/viva-st/viva-st-1.png",
      "/images/viva-st/viva-st-2.png",
      "/images/viva-st/viva-st-3.png",
      "/images/viva-st/viva-st-4.png",
      "/images/viva-st/viva-st-5.png",
    ],
    features: [
      "Step-through frame for easy mounting",
      "Lightweight 22kg design",
      "250W rear hub motor",
      "36V 10.4Ah battery",
      "Perfect for city commuting"
    ],
    badge: "Step-Through",
    category: ["Pendler"],
    rating: 4.8,
    reviewCount: 76,
    specifications: {
      motor: "250W XOFO Rear Hub",
      battery: "36V 10.4Ah (374Wh)",
      range: "40-60 km",
      speed: "25 km/h",
      weight: "22 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "Mechanical Disc Brakes",
      frame: "Step-through Aluminum Alloy",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Viva ST",
        frameType: "Step-through",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "1850 x 680 x 1050 mm",
          folded: "N/A"
        },
        weight: "22 kg",
        maxLoad: "120 kg",
        recommendedHeight: "165-185 cm"
      },
      motor: {
        type: "XOFO Brushless",
        power: "250W",
        peakPower: "450W",
        torque: "30 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "LG Lithium-ion",
        voltage: "36V",
        capacity: "10.4Ah",
        capacityWh: "374Wh",
        removable: true,
        chargingTime: "4-5 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "35 km",
          pedalAssist: "60 km",
          combined: "40-60 km"
        },
        gradability: "15°",
        turningRadius: "2.5m"
      },
      wheels: {
        size: "28\"",
        tireType: "City Tire",
        tireSize: "28 x 1.75\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "LED Integrated"
        },
        horn: true,
        throttle: false,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "N/A"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "Swept-back Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: false,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Viva ST features a step-through frame design that makes mounting and dismounting effortless. Ideal for riders who prioritize comfort and convenience, this lightweight city e-bike combines elegant styling with practical urban functionality. The low-entry frame is perfect for daily commutes and casual rides around town.",
    keyFeatures: [
      "Easy step-through frame design",
      "Ultra-lightweight 22kg construction",
      "Reliable 250W motor with 30Nm torque",
      "Comfortable upright riding position",
      "Integrated lights and mudguards",
      "Smooth Shimano 7-speed gear system"
    ],
    availableColors: ["Blue", "White", "Cream"],
    availableSizes: ["One Size (165-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Viva ST E-bike",
      "36V 10.4Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },
  {
    id: "jobobike-henry",
    name: "JOBOBIKE Henry",
    slug: "jobobike-henry",
    originalPrice: 2299,
    price: 1899,
    discount: "-17%",
    image: "/images/henry/henry-1.png",
    images: [
     "/images/henry/henry-1.png",
     "/images/henry/henry-2.png",
    ],
    features: [
      "Bafang M200 mid-drive motor",
      "Hidden integrated battery",
      "Retro classic design",
      "28-inch wheels",
      "Premium components"
    ],
    badge: "Mid-Drive",
    category: ["Terreng"],
    rating: 4.9,
    reviewCount: 64,
    specifications: {
      motor: "Bafang M200 Mid-Drive 250W",
      battery: "36V 14Ah (504Wh)",
      range: "60-90 km",
      speed: "25 km/h",
      weight: "24 kg",
      wheelSize: "28\"",
      foldable: false,
      brakes: "Hydraulic Disc Brakes",
      frame: "Classic Step-over Aluminum",
      drivetrain: "Shimano 8-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Henry",
        frameType: "Step-over Classic",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "1900 x 700 x 1100 mm",
          folded: "N/A"
        },
        weight: "24 kg",
        maxLoad: "125 kg",
        recommendedHeight: "170-195 cm"
      },
      motor: {
        type: "Bafang M200",
        power: "250W",
        peakPower: "500W",
        torque: "55 Nm",
        location: "Mid-Drive",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "14Ah",
        capacityWh: "504Wh",
        removable: true,
        chargingTime: "4-6 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "50 km",
          pedalAssist: "90 km",
          combined: "60-90 km"
        },
        gradability: "20°",
        turningRadius: "2.8m"
      },
      wheels: {
        size: "28\"",
        tireType: "City Tire",
        tireSize: "28 x 1.75\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "180mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "8-speed",
        shifter: "Shimano Altus"
      },
      electrical: {
        display: "Color LCD Display",
        lights: {
          front: true,
          rear: true,
          type: "LED Integrated"
        },
        horn: true,
        throttle: false,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "N/A"
        },
        seat: {
          type: "Ergonomic Saddle",
          adjustable: true,
          material: "Genuine Leather"
        },
        handlebar: {
          type: "Classic Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX5",
        certification: ["CE", "EN15194"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: false,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Henry is a refined urban e-bike designed for men who value minimalist style and cutting-edge technology. Featuring a powerful Bafang M200 mid-drive motor with torque sensor, it delivers a smooth, natural riding experience. The hidden battery integration provides a clean, classic appearance while maintaining modern e-bike performance.",
    keyFeatures: [
      "Premium Bafang M200 mid-drive motor with 55Nm torque",
      "Integrated hidden battery for sleek aesthetics",
      "Torque sensor for natural pedal assistance",
      "High-quality hydraulic disc brakes",
      "Color LCD display with comprehensive data",
      "Classic retro styling with modern technology"
    ],
    availableColors: ["Matte Black", "Forest Green", "Navy Blue"],
    availableSizes: ["One Size (170-195cm)"],
    whatsInTheBox: [
      "JOBOBIKE Henry E-bike",
      "36V 14Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },

  {
    id: "jobobike-ace",
    name: "JOBOBIKE Ace",
    slug: "jobobike-ace",
    originalPrice: 1599,
    price: 1299,
    discount: "-19%",
    image: "/images/ace/ace-1.png",
    images: [
     "/images/ace/ace-1.png",
     "/images/ace/ace-2.png",
     "/images/ace/ace-3.png",
    ],
    features: [
      "Foldable compact design",
      "Mobile app control",
      "250W motor with 45Nm torque",
      "20-inch wheels",
      "Lightweight and portable"
    ],
    badge: "Foldable",
    category: ["Hybrid", "Pendler"],
    rating: 4.6,
    reviewCount: 118,
    specifications: {
      motor: "250W Rear Hub",
      battery: "36V 10Ah (360Wh)",
      range: "40-60 km",
      speed: "25 km/h",
      weight: "21 kg",
      wheelSize: "20\" x 2.125\"",
      foldable: true,
      brakes: "Mechanical Disc Brakes",
      frame: "Foldable Aluminum Alloy",
      drivetrain: "Single Speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Ace",
        frameType: "Foldable",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: true,
        dimensions: {
          unfolded: "1480 x 580 x 1050 mm",
          folded: "800 x 450 x 650 mm"
        },
        weight: "21 kg",
        maxLoad: "120 kg",
        recommendedHeight: "155-190 cm"
      },
      motor: {
        type: "Brushless",
        power: "250W",
        peakPower: "450W",
        torque: "45 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "10Ah",
        capacityWh: "360Wh",
        removable: true,
        chargingTime: "4-5 hours",
        batteryLife: "800+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "35 km",
          pedalAssist: "60 km",
          combined: "40-60 km"
        },
        gradability: "15°",
        turningRadius: "2.0m"
      },
      wheels: {
        size: "20\"",
        tireType: "CST Anti-Puncture",
        tireSize: "20 x 2.125\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Disc Brakes"
      },
      transmission: {
        type: "Single Speed",
        gears: "1-speed",
        shifter: "N/A"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "LED with Reflective Strips"
        },
        horn: true,
        throttle: false,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: false,
          rear: false,
          type: "N/A"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "Foldable Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
      },
      connectivity: {
        app: true,
        gps: false,
        bluetooth: true,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: false,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Ace is the perfect solution for urban commuters who need a compact, portable e-bike. Its innovative folding design allows easy storage in apartments, offices, or car trunks. Despite its compact size, it delivers impressive performance with a 250W motor and smart app connectivity for modern riders.",
    keyFeatures: [
      "Quick-fold design for easy transport",
      "Mobile app control via Bluetooth",
      "Powerful 250W motor with 45Nm torque",
      "CST anti-puncture tires with reflective strips",
      "Compact 20-inch wheels for agile city riding",
      "Lightweight 21kg for easy carrying"
    ],
    availableColors: ["Black", "White", "Grey"],
    availableSizes: ["Universal (155-190cm)"],
    whatsInTheBox: [
      "JOBOBIKE Ace E-bike",
      "36V 10Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },
  {
    id: "jobobike-triker",
    name: "JOBOBIKE Triker",
    slug: "jobobike-triker",
    originalPrice: 2199,
    price: 1799,
    discount: "-18%",
    image: "/images/triker/triker-1.png",
    images: [
      "/images/triker/triker-1.png",
      "/images/triker/triker-2.png",
    ],
    features: [
      "Three-wheel electric tricycle",
      "Large rear cargo basket",
      "Extra stability and safety",
      "250W motor with differential",
      "Perfect for seniors and cargo"
    ],
    badge: "Tricycle",
    category: ["Hybrid", "Terreng"],
    rating: 4.9,
    reviewCount: 54,
    specifications: {
      motor: "250W Differential Motor",
      battery: "36V 13Ah (468Wh)",
      range: "50-70 km",
      speed: "25 km/h",
      weight: "38 kg",
      wheelSize: "24\" Front / 20\" Rear",
      foldable: false,
      brakes: "V-Brakes",
      frame: "Low Step-through Steel",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Triker",
        frameType: "Low Step-through Tricycle",
        frameMaterial: "High-Tensile Steel",
        foldable: false,
        dimensions: {
          unfolded: "1800 x 750 x 1100 mm",
          folded: "N/A"
        },
        weight: "38 kg",
        maxLoad: "160 kg",
        recommendedHeight: "155-185 cm"
      },
      motor: {
        type: "Differential Motor",
        power: "250W",
        peakPower: "450W",
        torque: "35 Nm",
        location: "Rear Axle",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "13Ah",
        capacityWh: "468Wh",
        removable: true,
        chargingTime: "5-6 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "70 km",
          combined: "50-70 km"
        },
        gradability: "12°",
        turningRadius: "3.5m"
      },
      wheels: {
        size: "24\" / 20\"",
        tireType: "Puncture-Resistant",
        tireSize: "24\" x 1.95\" / 20\" x 1.95\"",
        rimMaterial: "Steel"
      },
      brakes: {
        front: "V-Brake",
        rear: "V-Brake",
        type: "V-Brake System"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "LED"
        },
        horn: true,
        throttle: true,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Spring Fork"
        },
        seat: {
          type: "Extra Wide Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather with Springs"
        },
        handlebar: {
          type: "Ergonomic Swept-back",
          adjustable: true,
          material: "Steel"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: false,
        basket: true,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Triker is an innovative three-wheel electric tricycle designed for maximum stability and cargo capacity. Perfect for seniors, delivery services, or anyone who values extra stability. The large rear basket can carry groceries, packages, or cargo with ease, while the low step-through frame ensures easy mounting and dismounting.",
    keyFeatures: [
      "Superior three-wheel stability",
      "Large rear cargo basket (100L capacity)",
      "Low step-through frame for easy access",
      "Differential motor for smooth cornering",
      "Extra-wide comfort saddle with suspension",
      "Perfect for seniors and cargo transport"
    ],
    availableColors: ["Blue", "Black", "Red"],
    availableSizes: ["Universal (155-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Triker E-tricycle",
      "36V 13Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell",
      "Rear Cargo Basket"
    ]
  },

  {
    id: "jobobike-dyno",
    name: "JOBOBIKE Dyno",
    slug: "jobobike-dyno",
    originalPrice: 1799,
    price: 1499,
    discount: "-17%",
    image: "/images/dyno-gt/dyno-gt-1.png",
    images: [
      "/images/dyno-gt/dyno-gt-1.png",
      "/images/dyno-gt/dyno-gt-2.png",
    ],
    features: [
      "Step-through comfort design",
      "250W reliable motor",
      "Front suspension",
      "26-inch wheels",
      "Affordable quality"
    ],
    badge: "Best Value",
    category: ["Hybrid"],
    rating: 4.6,
    reviewCount: 103,
    specifications: {
      motor: "250W Rear Hub",
      battery: "36V 13Ah (468Wh)",
      range: "50-70 km",
      speed: "25 km/h",
      weight: "25 kg",
      wheelSize: "26\" x 1.95\"",
      foldable: false,
      brakes: "Mechanical Disc Brakes",
      frame: "Step-through Aluminum Alloy",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Dyno",
        frameType: "Step-through",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "1850 x 680 x 1100 mm",
          folded: "N/A"
        },
        weight: "25 kg",
        maxLoad: "120 kg",
        recommendedHeight: "160-185 cm"
      },
      motor: {
        type: "Brushless",
        power: "250W",
        peakPower: "450W",
        torque: "40 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "36V",
        capacity: "13Ah",
        capacityWh: "468Wh",
        removable: true,
        chargingTime: "5-6 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "70 km",
          combined: "50-70 km"
        },
        gradability: "15°",
        turningRadius: "2.6m"
      },
      wheels: {
        size: "26\"",
        tireType: "City Tire",
        tireSize: "26 x 1.95\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "160mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LED Display",
        lights: {
          front: true,
          rear: true,
          type: "LED"
        },
        horn: true,
        throttle: false,
        assistLevels: "3 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Spring Fork"
        },
        seat: {
          type: "Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "Ergonomic Handlebar",
          adjustable: true,
          material: "Aluminum Alloy"
        }
      },
      safety: {
        reflectors: true,
        bell: true,
        waterResistance: "IPX4",
        certification: ["CE", "EN15194"]
      },
      connectivity: {
        app: false,
        gps: false,
        bluetooth: false,
        usb: false
      },
      accessories: {
        kickstand: true,
        mudguards: true,
        rack: true,
        basket: false,
        bottleHolder: false
      }
    },
    description: "The JOBOBIKE Dyno offers exceptional value for urban commuters seeking comfort and reliability. Its step-through frame design ensures easy mounting, while the front suspension absorbs bumps for a smooth ride. With a solid range and dependable components, it's an excellent choice for daily commuting without breaking the bank.",
    keyFeatures: [
      "Easy step-through frame design",
      "Front suspension for comfortable rides",
      "Reliable 250W motor with 40Nm torque",
      "Long-range 468Wh battery",
      "26-inch wheels for stability",
      "Excellent value for money"
    ],
    availableColors: ["White", "Black", "Silver"],
    availableSizes: ["Universal (160-185cm)"],
    whatsInTheBox: [
      "JOBOBIKE Dyno E-bike",
      "36V 13Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell"
    ]
  },


];



// âœ… Get product by slug
export const getProductBySlug = (slug: string): ProductCard | undefined => {
  return PRODUCTS_DATA.find((product) => product.slug === slug);
};

// âœ… Get all slugs
export const getAllProductSlugs = (): string[] => {
  return PRODUCTS_DATA.map((product) => product.slug);
};

// âœ… Get related products
export const getRelatedProducts = (
  currentProductId: string,
  limit: number = 3
): ProductCard[] => {
  return PRODUCTS_DATA.filter((p) => p.id !== currentProductId).slice(0, limit);
};

// âœ… Get products by category
export const getProductsByCategory = (category: string): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) =>
    product.category.includes(category)
  );
};

// âœ… Search products
export const searchProducts = (query: string): ProductCard[] => {
  const lowerQuery = query.toLowerCase();
  return PRODUCTS_DATA.filter((product) =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.keyFeatures.some(feature =>
      feature.toLowerCase().includes(lowerQuery)
    ) ||
    product.category.some(cat =>
      cat.toLowerCase().includes(lowerQuery)
    )
  );
};

// âœ… Get products by price range
export const getProductsByPriceRange = (
  minPrice: number,
  maxPrice: number
): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) =>
    product.price >= minPrice && product.price <= maxPrice
  );
};

// âœ… Get products sorted by price
export const getProductsSortedByPrice = (ascending: boolean = true): ProductCard[] => {
  return [...PRODUCTS_DATA].sort((a, b) =>
    ascending ? a.price - b.price : b.price - a.price
  );
};

// âœ… Get products sorted by rating
export const getProductsSortedByRating = (ascending: boolean = false): ProductCard[] => {
  return [...PRODUCTS_DATA].sort((a, b) =>
    ascending ? a.rating - b.rating : b.rating - a.rating
  );
};

// âœ… Get featured products (with badges)
export const getFeaturedProducts = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) => product.badge);
};

// âœ… Get lightweight products
export const getLightweightProducts = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) =>
    product.category.includes('lightweight')
  );
};

// âœ… Get folding bikes
export const getFoldingBikes = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) =>
    product.specifications.foldable === true
  );
};

// âœ… Get commuter bikes
export const getCommuterBikes = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) =>
    product.category.includes('commuter-ebike')
  );
};

// âœ… Get step-through bikes
export const getStepThroughBikes = (): ProductCard[] => {
  return PRODUCTS_DATA.filter((product) =>
    product.category.includes('step-through')
  );
};

export const getProductById = (id: string) => {
  return PRODUCTS_DATA.find(product => product.id === id);
};
