

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
  {
    id: "jobobike-viva",
    name: "JOBOBIKE Viva",
    slug: "jobobike-viva",
    originalPrice: 1699,
    price: 1399,
    discount: "-18%",
    image: "/images/products/jobobike-viva-main.jpg",
    images: [
      "/images/products/jobobike-viva-1.jpg",
      "/images/products/jobobike-viva-2.jpg",
      "/images/products/jobobike-viva-3.jpg",
      "/images/products/jobobike-viva-4.jpg"
    ],
    features: [
      "Lightweight 22kg aluminum frame",
      "250W XOFO rear hub motor",
      "36V 14Ah LG battery with BMS",
      "28-inch wheels for smooth city riding",
      "Integrated lights and mudguards"
    ],
    badge: "Lightweight",
    category: ["City", "Commuter"],
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
    image: "/images/products/jobobike-viva-st-main.jpg",
    images: [
      "/images/products/jobobike-viva-st-1.jpg",
      "/images/products/jobobike-viva-st-2.jpg",
      "/images/products/jobobike-viva-st-3.jpg",
      "/images/products/jobobike-viva-st-4.jpg"
    ],
    features: [
      "Step-through frame for easy mounting",
      "Lightweight 22kg design",
      "250W rear hub motor",
      "36V 10.4Ah battery",
      "Perfect for city commuting"
    ],
    badge: "Step-Through",
    category: ["City", "Commuter", "Women"],
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
    image: "/images/products/jobobike-henry-main.jpg",
    images: [
      "/images/products/jobobike-henry-1.jpg",
      "/images/products/jobobike-henry-2.jpg",
      "/images/products/jobobike-henry-3.jpg",
      "/images/products/jobobike-henry-4.jpg"
    ],
    features: [
      "Bafang M200 mid-drive motor",
      "Hidden integrated battery",
      "Retro classic design",
      "28-inch wheels",
      "Premium components"
    ],
    badge: "Mid-Drive",
    category: ["City", "Commuter", "Men"],
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
    id: "jobobike-romer",
    name: "JOBOBIKE Romer",
    slug: "jobobike-romer",
    originalPrice: 2199,
    price: 1799,
    discount: "-18%",
    image: "/images/products/jobobike-romer-main.jpg",
    images: [
      "/images/products/jobobike-romer-1.jpg",
      "/images/products/jobobike-romer-2.jpg",
      "/images/products/jobobike-romer-3.jpg",
      "/images/products/jobobike-romer-4.jpg"
    ],
    features: [
      "Fat tire design for all terrain",
      "Powerful 500W motor",
      "Long-range 48V battery",
      "Full suspension system",
      "Heavy-duty cargo capacity"
    ],
    badge: "Popular",
    category: ["Fat Tire", "All-Terrain", "Cargo"],
    rating: 4.8,
    reviewCount: 126,
    specifications: {
      motor: "500W Rear Hub",
      battery: "48V 13Ah (624Wh)",
      range: "55-90 km",
      speed: "25 km/h",
      weight: "30 kg",
      wheelSize: "26\" x 4.0\"",
      foldable: false,
      brakes: "Mechanical Disc Brakes",
      frame: "High-Tensile Steel",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Romer",
        frameType: "Step-over",
        frameMaterial: "High-Tensile Steel",
        foldable: false,
        dimensions: {
          unfolded: "1950 x 750 x 1150 mm",
          folded: "N/A"
        },
        weight: "30 kg",
        maxLoad: "150 kg",
        recommendedHeight: "165-195 cm"
      },
      motor: {
        type: "Brushless Gear",
        power: "500W",
        peakPower: "750W",
        torque: "60 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "13Ah",
        capacityWh: "624Wh",
        removable: true,
        chargingTime: "5-7 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "50 km",
          pedalAssist: "90 km",
          combined: "55-90 km"
        },
        gradability: "25°",
        turningRadius: "3.2m"
      },
      wheels: {
        size: "26\"",
        tireType: "Fat Tire",
        tireSize: "26 x 4.0\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "180mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LCD Display",
        lights: {
          front: true,
          rear: true,
          type: "LED High-Power"
        },
        horn: true,
        throttle: true,
        assistLevels: "5 levels"
      },
      comfort: {
        suspension: {
          front: true,
          rear: true,
          type: "Coil Spring"
        },
        seat: {
          type: "Wide Comfort Saddle",
          adjustable: true,
          material: "Synthetic Leather"
        },
        handlebar: {
          type: "MTB Handlebar",
          adjustable: false,
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
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Romer is a versatile fat tire e-bike designed to handle any terrain with confidence. Whether you're riding on sand, snow, gravel, or city streets, the massive 4-inch tires provide exceptional grip and stability. With a powerful 500W motor and full suspension system, it's built for adventure while maintaining cargo-hauling capability with its heavy-duty rear rack.",
    keyFeatures: [
      "26\" x 4.0\" fat tires for all-terrain capability",
      "Powerful 500W motor with 60Nm torque",
      "Long-range 624Wh battery for extended rides",
      "Full front and rear suspension for comfort",
      "150kg maximum load capacity",
      "Throttle mode for effortless riding"
    ],
    availableColors: ["Army Green", "Matte Black", "Sand Beige"],
    availableSizes: ["One Size (165-195cm)"],
    whatsInTheBox: [
      "JOBOBIKE Romer E-bike",
      "48V 13Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell",
      "Rear Rack"
    ]
  },
  {
    id: "jobobike-ace",
    name: "JOBOBIKE Ace",
    slug: "jobobike-ace",
    originalPrice: 1599,
    price: 1299,
    discount: "-19%",
    image: "/images/products/jobobike-ace-main.jpg",
    images: [
      "/images/products/jobobike-ace-1.jpg",
      "/images/products/jobobike-ace-2.jpg",
      "/images/products/jobobike-ace-3.jpg",
      "/images/products/jobobike-ace-4.jpg"
    ],
    features: [
      "Foldable compact design",
      "Mobile app control",
      "250W motor with 45Nm torque",
      "20-inch wheels",
      "Lightweight and portable"
    ],
    badge: "Foldable",
    category: ["Folding", "City", "Compact"],
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
    image: "/images/products/jobobike-triker-main.jpg",
    images: [
      "/images/products/jobobike-triker-1.jpg",
      "/images/products/jobobike-triker-2.jpg",
      "/images/products/jobobike-triker-3.jpg",
      "/images/products/jobobike-triker-4.jpg"
    ],
    features: [
      "Three-wheel electric tricycle",
      "Large rear cargo basket",
      "Extra stability and safety",
      "250W motor with differential",
      "Perfect for seniors and cargo"
    ],
    badge: "Tricycle",
    category: ["Tricycle", "Cargo", "Senior"],
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
    id: "jobobike-luxe",
    name: "JOBOBIKE Luxe",
    slug: "jobobike-luxe",
    originalPrice: 1999,
    price: 1699,
    discount: "-15%",
    image: "/images/products/jobobike-luxe-main.jpg",
    images: [
      "/images/products/jobobike-luxe-1.jpg",
      "/images/products/jobobike-luxe-2.jpg",
      "/images/products/jobobike-luxe-3.jpg",
      "/images/products/jobobike-luxe-4.jpg"
    ],
    features: [
      "Premium cruiser design",
      "Fat tire comfort",
      "500W powerful motor",
      "Retro aesthetic",
      "Front suspension"
    ],
    badge: "Cruiser",
    category: ["Cruiser", "Beach", "Fat Tire"],
    rating: 4.7,
    reviewCount: 71,
    specifications: {
      motor: "500W Rear Hub",
      battery: "48V 13Ah (624Wh)",
      range: "50-80 km",
      speed: "25 km/h",
      weight: "28 kg",
      wheelSize: "26\" x 3.0\"",
      foldable: false,
      brakes: "Mechanical Disc Brakes",
      frame: "Cruiser Aluminum Alloy",
      drivetrain: "Shimano 7-speed"
    },
    technicalSpecifications: {
      general: {
        model: "JOBOBIKE Luxe",
        frameType: "Cruiser Step-through",
        frameMaterial: "6061 Aluminum Alloy",
        foldable: false,
        dimensions: {
          unfolded: "1900 x 700 x 1150 mm",
          folded: "N/A"
        },
        weight: "28 kg",
        maxLoad: "130 kg",
        recommendedHeight: "165-190 cm"
      },
      motor: {
        type: "Brushless Gear",
        power: "500W",
        peakPower: "750W",
        torque: "60 Nm",
        location: "Rear Hub",
        torqueSensor: false
      },
      battery: {
        type: "Lithium-ion",
        voltage: "48V",
        capacity: "13Ah",
        capacityWh: "624Wh",
        removable: true,
        chargingTime: "5-7 hours",
        batteryLife: "800-1000 cycles"
      },
      performance: {
        maxSpeed: "25 km/h",
        range: {
          pureElectric: "45 km",
          pedalAssist: "80 km",
          combined: "50-80 km"
        },
        gradability: "20°",
        turningRadius: "3.0m"
      },
      wheels: {
        size: "26\"",
        tireType: "Fat Tire CST",
        tireSize: "26 x 3.0\"",
        rimMaterial: "Aluminum Alloy"
      },
      brakes: {
        front: "Mechanical Disc",
        rear: "Mechanical Disc",
        type: "180mm Disc Brakes"
      },
      transmission: {
        type: "Derailleur",
        gears: "7-speed",
        shifter: "Shimano Tourney"
      },
      electrical: {
        display: "LCD Display",
        lights: {
          front: true,
          rear: true,
          type: "LED Vintage Style"
        },
        horn: true,
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
          type: "Wide Cruiser Saddle",
          adjustable: true,
          material: "Synthetic Leather with Springs"
        },
        handlebar: {
          type: "Beach Cruiser Handlebar",
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
        bottleHolder: true
      }
    },
    description: "The JOBOBIKE Luxe brings vintage cruiser aesthetics into the electric age. With its comfortable upright riding position, fat tires, and powerful 500W motor, it's perfect for leisurely beach rides, park cruising, or comfortable commuting. The retro design combined with modern electric technology creates a unique riding experience.",
    keyFeatures: [
      "Classic beach cruiser design with modern power",
      "500W motor with 60Nm torque",
      "26\" x 3.0\" fat tires for ultimate comfort",
      "Front suspension for smooth rides",
      "Vintage-style LED lights",
      "Wide cruiser saddle with spring suspension"
    ],
    availableColors: ["Ivory White", "Mint Green", "Navy Blue"],
    availableSizes: ["Universal (165-190cm)"],
    whatsInTheBox: [
      "JOBOBIKE Luxe E-bike",
      "48V 13Ah Battery",
      "Battery Charger",
      "User Manual",
      "Tool Kit",
      "Pedals",
      "Bell",
      "Rear Rack"
    ]
  },
  {
    id: "jobobike-dyno",
    name: "JOBOBIKE Dyno",
    slug: "jobobike-dyno",
    originalPrice: 1799,
    price: 1499,
    discount: "-17%",
    image: "/images/products/jobobike-dyno-main.jpg",
    images: [
      "/images/products/jobobike-dyno-1.jpg",
      "/images/products/jobobike-dyno-2.jpg",
      "/images/products/jobobike-dyno-3.jpg",
      "/images/products/jobobike-dyno-4.jpg"
    ],
    features: [
      "Step-through comfort design",
      "250W reliable motor",
      "Front suspension",
      "26-inch wheels",
      "Affordable quality"
    ],
    badge: "Best Value",
    category: ["City", "Commuter", "Women"],
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
