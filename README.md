# PixroAi

A React Native photography template browsing app built with Expo.

## What's Implemented

- Photography templates screen with grid layout
- Template selection (single selection at a time)
- Category navigation bar (Home, Videos, Photography, In Action, Commercial)
- Search input field
- Scene description input field
- Two template sections: "Suggested Templates" and "Monochrome"
- Dark theme UI

## Tech Stack

- React Native 0.81.5
- Expo ~54.0.23
- TypeScript ~5.9.2
- Expo Router for navigation

## Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Setup Instructions

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd pixroass
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages. Wait for it to complete.

### Step 3: Start the Development Server

```bash
npm start
```

You'll see a QR code and menu options in your terminal.

### Step 4: Run the App

**Option A: Using Expo Go (Easiest)**

1. Install "Expo Go" app on your phone:
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
2. Scan the QR code from your terminal using the Expo Go app
3. App will open on your phone

**Option B: Using Android Emulator**

1. Install Android Studio
2. Set up an Android Virtual Device (AVD)
3. Start the emulator
4. Run:

```bash
npm run android
```

**Option C: Using iOS Simulator (Mac only)**

1. Install Xcode from Mac App Store
2. Install Command Line Tools
3. Run:

```bash
npm run ios
```

## Troubleshooting

**If `npm install` fails:**

```bash
rm -rf node_modules package-lock.json
npm install
```

**If app doesn't load:**

```bash
npm start -- --clear
```

**Port already in use:**

```bash
npx expo start --port 8082
```

## Project Structure

```
app/
├── (tabs)/
│   ├── index.tsx    # Photography templates screen
│   └── explore.tsx  # Empty explore screen
├── _layout.tsx      # Root layout
└── modal.tsx        # Modal screen

assets/              # Images
components/          # Reusable components
└── TemplateCard.tsx # Template card component
constants/          # Theme configuration
hooks/              # Color scheme hooks
```

## Available Commands

- `npm start` - Start development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm run lint` - Run linter

## Notes

- The scroll indicator on Android may briefly appear during scrolling. This is default Android behavior.
- Template images are loaded from picsum.photos
- Only one template can be selected at a time
