# **📸 React MUI Camera**

![npm](https://img.shields.io/npm/v/react-mui-camera?color=blue&label=npm)
![license](https://img.shields.io/npm/l/react-mui-camera)
![types](https://img.shields.io/npm/types/react-mui-camera)
![downloads](https://img.shields.io/npm/dw/react-mui-camera?color=brightgreen)
![build](https://img.shields.io/badge/build-passing-success)
![issues](https://img.shields.io/github/issues/hollyos/react-mui-camera)
![stars](https://img.shields.io/github/stars/hollyos/react-mui-camera?style=social)

A universal, customizable camera component for React applications – built with Material UI, TypeScript, and full mobile support.
Easily integrate high-quality photo capture, real-time adjustments, and optional Instagram-style filters into any web or mobile web app.

---

## **✨ Features**

- **Live Camera Preview** with real-time brightness, contrast, and saturation adjustments
- **Front / Rear camera switching** with automatic device detection
- **Mirror / Flip mode** for selfie correction
- **High-quality JPEG output** (95% quality)
- **Optional filter pipeline** with 30+ preset filters
- **Responsive fullscreen UI** for both desktop and mobile
- **Graceful error handling**
- **Lightweight and dependency-free capture pipeline** (no WASM or native code)

---

## **📦 Installation**

```bash
pnpm add react-mui-camera
# or
npm install react-mui-camera
# or
yarn add react-mui-camera
```

### **Peer dependencies**

You must have these installed in your application:

- `react` (>= 18)
- `react-dom` (>= 18)
- `@mui/material` (>= 7)
- `@mui/icons-material` (>= 7)

---

## **🚀 Quick Start**

### **Basic Usage**

```tsx
import { Camera } from 'react-mui-camera';

export default function ProfilePhoto() {
  return (
    <Camera
      onImageCaptured={(dataUrl) => {
        console.log('Captured:', dataUrl);
      }}
    />
  );
}
```

---

## **📱 Quick Capture Mode**

If you don't want filters and you want the image immediately:

```tsx
<Camera skipFilters={true} onImageCaptured={(image) => uploadPhoto(image)} />
```

---

## **🎨 Full Capture + Filters Example**

```tsx
<Camera
  onImageCaptured={(finalImage) => {
    saveImage(finalImage);
  }}
  onClose={() => navigate('/home')}
/>
```

This enables:

- capture preview
- filter selection panel
- retake / save actions

---

## **🔧 Props**

| Prop              | Type                      | Default | Description                               |
| ----------------- | ------------------------- | ------- | ----------------------------------------- |
| `onImageCaptured` | `(image: string) => void` | —       | Called with the final image (DataURL)     |
| `onClose`         | `() => void`              | —       | Called when the user closes the camera UI |
| `skipFilters`     | `boolean`                 | `false` | If true, bypasses filter UI entirely      |

---

## **📂 Example Project**

This package includes an `example/` directory where you can run a fully working demo:

```bash
cd example
pnpm install
pnpm dev
```

The example uses Vite + React + MUI and live-reloads the library via local linking.

---

## **🧩 Integration Notes**

### Ensure only one version of React is loaded

If you're using Vite or Webpack, add React dedupe:

**Vite**

```ts
export default defineConfig({
  resolve: { dedupe: ['react', 'react-dom'] },
});
```

**Webpack**

```js
resolve: {
  alias: {
    react: path.resolve("./node_modules/react"),
    "react-dom": path.resolve("./node_modules/react-dom")
  }
}
```

This prevents the classic “Invalid Hook Call” error.

---

## **🛠 Development**

Clone the repo:

```bash
git clone https://github.com/hollyos/react-mui-camera
cd react-mui-camera
pnpm install
```

Build:

```bash
pnpm build
```

Run lint:

```bash
pnpm lint
```

---

## **📝 License**

BSD-3-Clause © 2025 Holly Springsteen

---

## **🤝 Contributing**

Pull requests are welcome!
Feel free to file issues or feature requests at:

👉 [https://github.com/hollyos/react-mui-camera/issues](https://github.com/hollyos/react-mui-camera/issues)
