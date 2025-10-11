

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
    category: ["lightweight"],
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
    category: ["commuter-ebike"],
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

  // 3. Jobobike Sam
  {
    id: "9",
    name: "JOBOBIKE Sam",
    slug: "jobobike-sam",
    originalPrice: 1299,
    price: 1099,
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
    category: ["step-through"],
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
        gradability: "15Â°"
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
    category: ["folding"],
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
      "/images/mover/mover-3.png",
    ],
    features: [
      "250W Rear Hub Motor",
      "36V 14Ah Battery",
      "Step-Through Frame",
      "Comfortable Riding Position",
      "Integrated Lights"
    ],
    category: ["fat-tire"],
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

  // 6. Jobobike Robin
  {
    id: "12",
    name: "JOBOBIKE Robin",
    slug: "jobobike-robin",
    originalPrice: 1799,
    price: 1499,
    discount: "17%",
    image: "/images/robin/robin-1.png",
    images: [
      "/images/robin/robin-1.png",
      "/images/robin/robin-2.png",
      "/images/robin/robin-3.png",
    ],
    features: [
      "500W Rear Hub Motor",
      "48V 15Ah Battery",
      "26\" Fat Tires",
      "All-Terrain Capability",
      "Front Suspension"
    ],
    badge: "Adventure Ready",
    category: ["cargo"],
    rating: 4.6,
    reviewCount: 156,
    specifications: {
      motor: "500W Rear Hub",
      battery: "48V 15Ah (720Wh)",
      range: "70-90 km",
      speed: "25 km/h",
      weight: "28 kg",
      wheelSize: "26\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Aluminum Fat",
      drivetrain: "7-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Robin",
        frameType: "Fat Bike",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "185 x 70 x 110 cm",
          folded: "N/A"
        },
        weight: "28 kg",
        maxLoad: "130 kg",
        recommendedHeight: "165-200 cm"
      },
      motor: {
        type: "Rear Hub",
        power: "500W",
        peakPower: "750W",
        torque: "60 N.m",
        location: "Rear Wheel",
        torqueSensor: false
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
          pureElectric: "55 km",
          pedalAssist: "70-90 km",
          combined: "60-80 km"
        },
        gradability: "25Â°"
      },
      wheels: {
        size: "26\"",
        tireType: "Fat Tire",
        tireSize: "26 x 4.0\"",
        rimMaterial: "Double Wall Aluminum"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "180mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-Speed",
        shifter: "Shimano"
      },
      electrical: {
        display: "LCD Color Display",
        lights: {
          front: true,
          rear: true,
          type: "High-Power LED"
        },
        horn: true,
        throttle: true,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: false,
          type: "Fat Fork Suspension"
        },
        seat: {
          type: "Wide Comfort Saddle",
          adjustable: true,
          material: "Memory Foam"
        },
        handlebar: {
          type: "Wide Fat Bar",
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
        app: false,
        gps: false,
        bluetooth: false,
        usb: true
      },
      accessories: {
        kickstand: true,
        mudguards: false,
        rack: false,
        basket: false,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Robin is built for adventure with its powerful motor and fat tires. Whether you're exploring trails or conquering city streets, this all-terrain e-bike delivers exceptional performance and comfort.",
    keyFeatures: [
      "Powerful 500W motor for challenging terrain",
      "Fat tires provide superior traction and comfort",
      "Front suspension smooths out rough rides",
      "High-capacity battery for long adventures",
      "Robust construction for reliable performance"
    ],
    availableColors: ["Stealth Black", "Army Green", "Sand Beige"],
    availableSizes: ["One Size"],
    whatsInTheBox: [
      "JOBOBIKE Robin E-bike",
      "48V 15Ah Battery",
      "Battery Charger",
      "User Manual",
      "Assembly Tools",
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
    category: ["cargo"],
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

  // 8. Jobobike Romer Pro
  {
    id: "14",
    name: "JOBOBIKE Romer Pro",
    slug: "jobobike-romer-pro",
    originalPrice: 2299,
    price: 1999,
    discount: "13%",
    image: "/images/romer-pro/romer-1.png",
    images: [
      "/images/romer-pro/romer-1.png",
    ],
    features: [
      "750W Mid-Drive Motor",
      "48V 20Ah Battery",
      "Full Suspension",
      "Mountain Bike Design",
      "Professional Components"
    ],
    badge: "Pro Series",
    category: ["fat-tire"],
    rating: 4.9,
    reviewCount: 87,
    specifications: {
      motor: "750W Mid-Drive",
      battery: "48V 20Ah (960Wh)",
      range: "60-80 km",
      speed: "25 km/h",
      weight: "30 kg",
      wheelSize: "27.5\"",
      foldable: false,
      brakes: "Hydraulic Disc",
      frame: "Carbon Fiber",
      drivetrain: "11-Speed"
    },
    technicalSpecifications: {
      general: {
        model: "Romer Pro",
        frameType: "Full Suspension MTB",
        frameMaterial: "Carbon Fiber",
        foldable: false,
        dimensions: {
          unfolded: "185 x 65 x 115 cm",
          folded: "N/A"
        },
        weight: "30 kg",
        maxLoad: "140 kg",
        recommendedHeight: "170-200 cm"
      },
      motor: {
        type: "Mid-Drive",
        power: "750W",
        peakPower: "1200W",
        torque: "160 N.m",
        location: "Center",
        torqueSensor: true
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "20Ah",
        capacityWh: "960Wh",
        removable: true,
        chargingTime: "6-7 hours",
        batteryLife: "1000+ cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "60-80 km",
          combined: "50-70 km"
        },
        gradability: "35Â°"
      },
      wheels: {
        size: "27.5\"",
        tireType: "Mountain",
        tireSize: "27.5 x 2.8\"",
        rimMaterial: "Carbon Fiber"
      },
      brakes: {
        front: "Hydraulic Disc",
        rear: "Hydraulic Disc",
        type: "203mm Rotors"
      },
      transmission: {
        type: "Derailleur",
        gears: "11-Speed",
        shifter: "Shimano XT"
      },
      electrical: {
        display: "Professional Color Display",
        lights: {
          front: true,
          rear: true,
          type: "High-Intensity LED"
        },
        horn: false,
        throttle: false,
        assistLevels: "7 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: true,
          type: "Air Shock System"
        },
        seat: {
          type: "MTB Racing Saddle",
          adjustable: true,
          material: "Carbon Rails"
        },
        handlebar: {
          type: "MTB Flat Bar",
          adjustable: false,
          material: "Carbon Fiber"
        }
      },
      safety: {
        reflectors: false,
        bell: false,
        waterResistance: "IPX6",
        certification: ["EN15194", "CE"]
      },
      connectivity: {
        app: true,
        gps: true,
        bluetooth: true,
        usb: true
      },
      accessories: {
        kickstand: false,
        mudguards: false,
        rack: false,
        basket: false,
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Romer Pro is a premium full-suspension e-mountain bike designed for serious riders. With its powerful motor, long-range battery, and professional-grade components, it's built to conquer any trail.",
    keyFeatures: [
      "Ultra-powerful 750W mid-drive motor with massive torque",
      "Premium carbon fiber frame and components",
      "Full air suspension system for maximum comfort",
      "Massive 960Wh battery for extended adventures",
      "Professional-grade Shimano XT drivetrain"
    ],
    availableColors: ["Matte Black", "Racing Red", "Electric Yellow"],
    availableSizes: ["M", "L", "XL"],
    whatsInTheBox: [
      "JOBOBIKE Romer Pro E-bike",
      "48V 20Ah Battery",
      "Fast Charger",
      "Professional Manual",
      "GPS Setup Guide",
      "Premium Tool Kit",
      "Keys (2x)"
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
    category: ["folding"],
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
