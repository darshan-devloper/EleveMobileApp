# EleveMobileApp - Sample Design Specification

This document outlines a sample mobile app design that you can create in Figma to test the MCP server integration.

## Design System Foundation

### Color Palette
```
Primary Colors:
- Primary Blue: #007AFF
- Primary Dark: #0056CC
- Primary Light: #4DA3FF

Secondary Colors:
- Success Green: #34C759
- Warning Orange: #FF9500
- Error Red: #FF3B30
- Info Purple: #AF52DE

Neutral Colors:
- Text Primary: #000000
- Text Secondary: #666666
- Text Tertiary: #999999
- Background: #FFFFFF
- Background Secondary: #F8F9FA
- Border: #E1E1E1
```

### Typography Scale
```
Display Large: 32px, Bold
Display Medium: 28px, Bold
Heading 1: 24px, Bold
Heading 2: 20px, SemiBold
Heading 3: 18px, SemiBold
Body Large: 16px, Regular
Body Medium: 14px, Regular
Body Small: 12px, Regular
Caption: 10px, Regular
```

### Spacing System
```
Base unit: 4px
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- XXL: 48px
```

## Component Library

### 1. Buttons

#### Primary Button
- **Size**: 48px height, full width
- **Colors**: Primary Blue background, white text
- **Border Radius**: 8px
- **States**: Default, Pressed, Disabled
- **Typography**: Body Large, SemiBold

#### Secondary Button
- **Size**: 48px height, full width
- **Colors**: Transparent background, Primary Blue border (2px), Primary Blue text
- **Border Radius**: 8px
- **States**: Default, Pressed, Disabled

#### Text Button
- **Size**: Auto height, auto width
- **Colors**: Transparent background, Primary Blue text
- **Typography**: Body Medium, SemiBold
- **States**: Default, Pressed, Disabled

### 2. Input Fields

#### Text Input
- **Size**: 48px height, full width
- **Colors**: White background, Border color border (1px)
- **Border Radius**: 8px
- **Placeholder**: Text Secondary color
- **Typography**: Body Medium
- **States**: Default, Focused, Error, Disabled

#### Search Input
- **Size**: 40px height, full width
- **Colors**: Background Secondary, no border
- **Border Radius**: 20px
- **Icon**: Search icon (16px) on left
- **Typography**: Body Medium

### 3. Cards

#### Content Card
- **Padding**: MD (16px) all sides
- **Colors**: White background
- **Border Radius**: 12px
- **Shadow**: 0px 2px 8px rgba(0,0,0,0.1)
- **Border**: 1px Border color

#### Feature Card
- **Padding**: LG (24px) all sides
- **Colors**: Background Secondary
- **Border Radius**: 16px
- **No shadow or border**

### 4. Navigation

#### Tab Bar
- **Height**: 80px (including safe area)
- **Background**: White with top border (1px Border color)
- **Icons**: 24px, unselected (Text Tertiary), selected (Primary Blue)
- **Labels**: Caption, unselected (Text Tertiary), selected (Primary Blue)

#### Navigation Header
- **Height**: 44px + safe area
- **Background**: White
- **Title**: Heading 3, Text Primary, centered
- **Back Button**: 24px chevron left icon
- **Action Button**: 24px icon or text button

### 5. Lists

#### List Item
- **Height**: 56px
- **Padding**: MD horizontal, SM vertical
- **Background**: White
- **Separator**: 1px Border color (left inset MD)
- **Content**: Body Large primary text, Body Medium secondary text
- **Icon**: 24px on left (optional)
- **Chevron**: 16px on right (optional)

## Screen Templates

### 1. Onboarding Screen
- **Header**: Logo centered
- **Illustration**: Large graphic (240px height)
- **Title**: Display Medium, centered
- **Description**: Body Large, Text Secondary, centered
- **CTA Button**: Primary Button
- **Skip Link**: Text Button, top right

### 2. Login Screen
- **Header**: Heading 1, "Welcome Back"
- **Form**: Email and Password inputs with labels
- **CTA Button**: Primary Button, "Sign In"
- **Secondary Actions**: Text buttons for "Forgot Password" and "Create Account"

### 3. Home Screen
- **Navigation Header**: Title "Home" with profile avatar
- **Search Bar**: Search Input component
- **Content Sections**: Feature Cards and Content Cards
- **Tab Bar**: Bottom navigation

### 4. Profile Screen
- **Header**: Large avatar (80px) with name and subtitle
- **Stats Section**: Horizontal scroll of stat cards
- **Menu Items**: List of settings/options using List Item component
- **Sign Out**: Text Button in red color

## Figma File Structure

```
📁 EleveMobileApp Design System
├── 🎨 Design Tokens
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Effects
├── 🧩 Components
│   ├── Buttons
│   ├── Inputs
│   ├── Cards
│   ├── Navigation
│   └── Lists
├── 📱 Screen Templates
│   ├── Onboarding
│   ├── Authentication
│   ├── Home
│   └── Profile
└── 🔄 Prototypes
    ├── User Flow 1: Onboarding
    ├── User Flow 2: Authentication
    └── User Flow 3: Main App Navigation
```

## Creating the Design in Figma

### Step 1: Set up the Design System
1. Create a new Figma file named "EleveMobileApp Design System"
2. Create color styles for all colors in the palette
3. Create text styles for the typography scale
4. Set up a grid system with the spacing values

### Step 2: Build Components
1. Create each component as a Figma component
2. Add variants for different states (default, pressed, disabled)
3. Use auto-layout for responsive behavior
4. Apply the color and text styles consistently

### Step 3: Design Screens
1. Create artboards for each screen (375x812 for iPhone)
2. Use the components you created
3. Apply consistent spacing using the spacing system
4. Ensure all text uses the defined text styles

### Step 4: Create Prototypes
1. Link screens together to show user flows
2. Add transitions and micro-interactions
3. Test the prototype on mobile devices

## Using with MCP Server

Once you've created this design in Figma, you can use the MCP server to:

1. **Extract Components**: Get all button variants and their properties
2. **Generate Code**: Create React Native components from the Figma components
3. **Extract Styles**: Get the color palette and typography scale as JavaScript objects
4. **Analyze Design**: Get insights about spacing, consistency, and usage patterns

### Example MCP Commands

```
"Extract all button components from my EleveMobileApp design file"
"Generate a React Native theme file from the color palette"
"Create TypeScript interfaces for all the component props"
"Generate React Native screens based on the Figma artboards"
```

This design specification provides a solid foundation for a modern mobile app while being comprehensive enough to test all the MCP server capabilities.