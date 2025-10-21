import { SanityImageSource } from '@sanity/image-url/lib/types/types'

/**
 * TypeScript interfaces for Sanity Product Data
 * These match your original ProductCard interface
 */

export interface SanityProduct {
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  name: string
  slug: {
    current: string
    _type: 'slug'
  }
  originalPrice: number
  price: number
  discount?: string
  image: SanityImageSource
  images: SanityImageSource[]
  features: string[]
  badge?: string
  category: string[]
  rating: number
  reviewCount: number
  specifications: {
    motor: string
    battery: string
    range: string
    speed: string
    weight: string
    wheelSize: string
    foldable: boolean
    brakes?: string
    frame?: string
    drivetrain?: string
  }
  technicalSpecifications: {
    general: {
      model: string
      frameType: string
      frameMaterial: string
      foldable: boolean
      dimensions: {
        unfolded: string
        folded: string
      }
      weight: string
      maxLoad: string
      recommendedHeight: string
    }
    motor: {
      type: string
      power: string
      peakPower: string
      torque?: string
      location: string
      torqueSensor?: boolean
    }
    battery: {
      type: string
      voltage: string
      capacity: string
      capacityWh: string
      removable: boolean
      chargingTime: string
      batteryLife: string
    }
    performance: {
      maxSpeed: string
      range: {
        pureElectric: string
        pedalAssist: string
        combined: string
      }
      gradability: string
      turningRadius?: string
    }
    wheels: {
      size: string
      tireType: string
      tireSize: string
      rimMaterial?: string
    }
    brakes: {
      front: string
      rear: string
      type: string
    }
    transmission: {
      type: string
      gears?: string
      shifter?: string
    }
    electrical: {
      display: string
      lights: {
        front: boolean
        rear: boolean
        type?: string
      }
      horn: boolean
      throttle: boolean
      assistLevels: string
    }
    comfort: {
      suspension: {
        front: boolean
        rear: boolean
        type?: string
      }
      seat: {
        type: string
        adjustable: boolean
        material?: string
      }
      handlebar: {
        type: string
        adjustable: boolean
        material?: string
      }
    }
    safety: {
      reflectors: boolean
      bell: boolean
      waterResistance: string
      certification?: string[]
    }
    connectivity: {
      app: boolean
      gps?: boolean
      bluetooth?: boolean
      usb?: boolean
    }
    accessories: {
      kickstand: boolean
      mudguards: boolean
      rack: boolean
      basket: boolean
      bottleHolder: boolean
    }
  }
  description: string
  keyFeatures: string[]
  availableColors: string[]
  availableSizes: string[]
  whatsInTheBox: string[]
}

/**
 * Converted Product type for frontend use (matches your original ProductCard)
 */
export interface ProductCard {
  id: string
  name: string
  slug: string
  originalPrice: number
  price: number
  discount: string
  image: string // Converted from Sanity image
  images: string[] // Converted from Sanity images
  features: string[]
  badge?: string
  category: string[]
  rating: number
  reviewCount: number
  specifications: {
    motor: string
    battery: string
    range: string
    speed: string
    weight: string
    wheelSize: string
    foldable: boolean
    brakes?: string
    frame?: string
    drivetrain?: string
  }
  technicalSpecifications: {
    general: {
      model: string
      frameType: string
      frameMaterial: string
      foldable: boolean
      dimensions: {
        unfolded: string
        folded: string
      }
      weight: string
      maxLoad: string
      recommendedHeight: string
    }
    motor: {
      type: string
      power: string
      peakPower: string
      torque?: string
      location: string
      torqueSensor?: boolean
    }
    battery: {
      type: string
      voltage: string
      capacity: string
      capacityWh: string
      removable: boolean
      chargingTime: string
      batteryLife: string
    }
    performance: {
      maxSpeed: string
      range: {
        pureElectric: string
        pedalAssist: string
        combined: string
      }
      gradability: string
      turningRadius?: string
    }
    wheels: {
      size: string
      tireType: string
      tireSize: string
      rimMaterial?: string
    }
    brakes: {
      front: string
      rear: string
      type: string
    }
    transmission: {
      type: string
      gears?: string
      shifter?: string
    }
    electrical: {
      display: string
      lights: {
        front: boolean
        rear: boolean
        type?: string
      }
      horn: boolean
      throttle: boolean
      assistLevels: string
    }
    comfort: {
      suspension: {
        front: boolean
        rear: boolean
        type?: string
      }
      seat: {
        type: string
        adjustable: boolean
        material?: string
      }
      handlebar: {
        type: string
        adjustable: boolean
        material?: string
      }
    }
    safety: {
      reflectors: boolean
      bell: boolean
      waterResistance: string
      certification?: string[]
    }
    connectivity: {
      app: boolean
      gps?: boolean
      bluetooth?: boolean
      usb?: boolean
    }
    accessories: {
      kickstand: boolean
      mudguards: boolean
      rack: boolean
      basket: boolean
      bottleHolder: boolean
    }
  }
  description: string
  keyFeatures: string[]
  availableColors: string[]
  availableSizes: string[]
  whatsInTheBox: string[]
}