import { defineField, defineType } from 'sanity'

/**
 * Sanity Schema for JOBOBIKE Products
 * This schema matches the ProductCard interface from productData.ts
 */
export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    // Basic Information
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'price',
      title: 'Current Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'discount',
      title: 'Discount Percentage',
      type: 'string',
      description: 'E.g., "16%"',
    }),
    
    // Images
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    
    // Features and Description
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: 'E.g., "Best Seller", "New Arrival"',
    }),
    defineField({
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Lightweight', value: 'lightweight' },
          { title: 'Commuter E-Bike', value: 'commuter-ebike' },
          { title: 'Folding', value: 'folding' },
          { title: 'Cargo', value: 'cargo' },
          { title: 'Fat Tire', value: 'fat-tire' },
          { title: 'City', value: 'City' },
          { title: 'Women', value: 'Women' },
          { title: 'Men', value: 'Men' },
          { title: 'Compact', value: 'Compact' },
          { title: 'Tricycle', value: 'Tricycle' },
          { title: 'Senior', value: 'Senior' },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(5),
    }),
    defineField({
      name: 'reviewCount',
      title: 'Review Count',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    
    // Basic Specifications
    defineField({
      name: 'specifications',
      title: 'Basic Specifications',
      type: 'object',
      fields: [
        { name: 'motor', title: 'Motor', type: 'string' },
        { name: 'battery', title: 'Battery', type: 'string' },
        { name: 'range', title: 'Range', type: 'string' },
        { name: 'speed', title: 'Max Speed', type: 'string' },
        { name: 'weight', title: 'Weight', type: 'string' },
        { name: 'wheelSize', title: 'Wheel Size', type: 'string' },
        { name: 'foldable', title: 'Foldable', type: 'boolean' },
        { name: 'brakes', title: 'Brakes', type: 'string' },
        { name: 'frame', title: 'Frame', type: 'string' },
        { name: 'drivetrain', title: 'Drivetrain', type: 'string' },
      ],
    }),
    
    // Technical Specifications - General
    defineField({
      name: 'technicalSpecifications',
      title: 'Technical Specifications',
      type: 'object',
      fields: [
        {
          name: 'general',
          title: 'General',
          type: 'object',
          fields: [
            { name: 'model', title: 'Model', type: 'string' },
            { name: 'frameType', title: 'Frame Type', type: 'string' },
            { name: 'frameMaterial', title: 'Frame Material', type: 'string' },
            { name: 'foldable', title: 'Foldable', type: 'boolean' },
            {
              name: 'dimensions',
              title: 'Dimensions',
              type: 'object',
              fields: [
                { name: 'unfolded', title: 'Unfolded', type: 'string' },
                { name: 'folded', title: 'Folded', type: 'string' },
              ],
            },
            { name: 'weight', title: 'Weight', type: 'string' },
            { name: 'maxLoad', title: 'Max Load', type: 'string' },
            { name: 'recommendedHeight', title: 'Recommended Height', type: 'string' },
          ],
        },
        {
          name: 'motor',
          title: 'Motor',
          type: 'object',
          fields: [
            { name: 'type', title: 'Type', type: 'string' },
            { name: 'power', title: 'Power', type: 'string' },
            { name: 'peakPower', title: 'Peak Power', type: 'string' },
            { name: 'torque', title: 'Torque', type: 'string' },
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'torqueSensor', title: 'Torque Sensor', type: 'boolean' },
          ],
        },
        {
          name: 'battery',
          title: 'Battery',
          type: 'object',
          fields: [
            { name: 'type', title: 'Type', type: 'string' },
            { name: 'voltage', title: 'Voltage', type: 'string' },
            { name: 'capacity', title: 'Capacity', type: 'string' },
            { name: 'capacityWh', title: 'Capacity (Wh)', type: 'string' },
            { name: 'removable', title: 'Removable', type: 'boolean' },
            { name: 'chargingTime', title: 'Charging Time', type: 'string' },
            { name: 'batteryLife', title: 'Battery Life', type: 'string' },
          ],
        },
        {
          name: 'performance',
          title: 'Performance',
          type: 'object',
          fields: [
            { name: 'maxSpeed', title: 'Max Speed', type: 'string' },
            {
              name: 'range',
              title: 'Range',
              type: 'object',
              fields: [
                { name: 'pureElectric', title: 'Pure Electric', type: 'string' },
                { name: 'pedalAssist', title: 'Pedal Assist', type: 'string' },
                { name: 'combined', title: 'Combined', type: 'string' },
              ],
            },
            { name: 'gradability', title: 'Gradability', type: 'string' },
            { name: 'turningRadius', title: 'Turning Radius', type: 'string' },
          ],
        },
        {
          name: 'wheels',
          title: 'Wheels',
          type: 'object',
          fields: [
            { name: 'size', title: 'Size', type: 'string' },
            { name: 'tireType', title: 'Tire Type', type: 'string' },
            { name: 'tireSize', title: 'Tire Size', type: 'string' },
            { name: 'rimMaterial', title: 'Rim Material', type: 'string' },
          ],
        },
        {
          name: 'brakes',
          title: 'Brakes',
          type: 'object',
          fields: [
            { name: 'front', title: 'Front', type: 'string' },
            { name: 'rear', title: 'Rear', type: 'string' },
            { name: 'type', title: 'Type', type: 'string' },
          ],
        },
        {
          name: 'transmission',
          title: 'Transmission',
          type: 'object',
          fields: [
            { name: 'type', title: 'Type', type: 'string' },
            { name: 'gears', title: 'Gears', type: 'string' },
            { name: 'shifter', title: 'Shifter', type: 'string' },
          ],
        },
        {
          name: 'electrical',
          title: 'Electrical',
          type: 'object',
          fields: [
            { name: 'display', title: 'Display', type: 'string' },
            {
              name: 'lights',
              title: 'Lights',
              type: 'object',
              fields: [
                { name: 'front', title: 'Front', type: 'boolean' },
                { name: 'rear', title: 'Rear', type: 'boolean' },
                { name: 'type', title: 'Type', type: 'string' },
              ],
            },
            { name: 'horn', title: 'Horn', type: 'boolean' },
            { name: 'throttle', title: 'Throttle', type: 'boolean' },
            { name: 'assistLevels', title: 'Assist Levels', type: 'string' },
          ],
        },
        {
          name: 'comfort',
          title: 'Comfort',
          type: 'object',
          fields: [
            {
              name: 'suspension',
              title: 'Suspension',
              type: 'object',
              fields: [
                { name: 'front', title: 'Front', type: 'boolean' },
                { name: 'rear', title: 'Rear', type: 'boolean' },
                { name: 'type', title: 'Type', type: 'string' },
              ],
            },
            {
              name: 'seat',
              title: 'Seat',
              type: 'object',
              fields: [
                { name: 'type', title: 'Type', type: 'string' },
                { name: 'adjustable', title: 'Adjustable', type: 'boolean' },
                { name: 'material', title: 'Material', type: 'string' },
              ],
            },
            {
              name: 'handlebar',
              title: 'Handlebar',
              type: 'object',
              fields: [
                { name: 'type', title: 'Type', type: 'string' },
                { name: 'adjustable', title: 'Adjustable', type: 'boolean' },
                { name: 'material', title: 'Material', type: 'string' },
              ],
            },
          ],
        },
        {
          name: 'safety',
          title: 'Safety',
          type: 'object',
          fields: [
            { name: 'reflectors', title: 'Reflectors', type: 'boolean' },
            { name: 'bell', title: 'Bell', type: 'boolean' },
            { name: 'waterResistance', title: 'Water Resistance', type: 'string' },
            {
              name: 'certification',
              title: 'Certification',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
        {
          name: 'connectivity',
          title: 'Connectivity',
          type: 'object',
          fields: [
            { name: 'app', title: 'App', type: 'boolean' },
            { name: 'gps', title: 'GPS', type: 'boolean' },
            { name: 'bluetooth', title: 'Bluetooth', type: 'boolean' },
            { name: 'usb', title: 'USB', type: 'boolean' },
          ],
        },
        {
          name: 'accessories',
          title: 'Accessories',
          type: 'object',
          fields: [
            { name: 'kickstand', title: 'Kickstand', type: 'boolean' },
            { name: 'mudguards', title: 'Mudguards', type: 'boolean' },
            { name: 'rack', title: 'Rack', type: 'boolean' },
            { name: 'basket', title: 'Basket', type: 'boolean' },
            { name: 'bottleHolder', title: 'Bottle Holder', type: 'boolean' },
          ],
        },
      ],
    }),
    
    // Additional Information
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Key Features List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'availableColors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'availableSizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'whatsInTheBox',
      title: "What's in the Box",
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  
  // Preview configuration for Sanity Studio
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
    },
    prepare(selection) {
      const { title, subtitle } = selection
      return {
        title,
        subtitle: subtitle ? `$${subtitle}` : 'No price set',
        media: selection.media,
      }
    },
  },
})