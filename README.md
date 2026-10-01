# 🏎️ Retro Racer — J2ME Edition

> A pure retro 2D vertical-scrolling arcade racing game inspired by early 2000s Java (J2ME) button-mobile classics. Built with React, Vite, TypeScript, and HTML5 Canvas.

[![Live Game](https://img.shields.io/badge/play-Retro%20Racer-ff5a1f?style=for-the-badge)](https://github.com/akilesh2330/retro-racer)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 🕹️ About The Game

**Retro Racer** transports you back to the golden era of handheld gaming:
- **Nostalgic 240×320 resolution** rendered with crisp, pixel-perfect scaling.
- **Pure Canvas rendering** with procedural retro pixel sprites and zero bloated external assets.
- **Rich tactile presentation** featuring an authentic retro phone bezel, game manual booklet aesthetics, CRT scanlines, and high-octane vintage gameplay.
- **Arcade Mechanics**: Dodge traffic, grab nitro pickups, slipstream rivals, collect coins, and push your top speed while avoiding catastrophic pile-ups.

---

## 🎮 Controls

| Action | Primary Key | Keypad / Alternative |
|---|---|---|
| **Steer Left** | `←` Left Arrow | `A` or `Key 4` |
| **Steer Right** | `→` Right Arrow | `D` or `Key 6` |
| **Accelerate** | `↑` Up Arrow | `W` or `Key 2` |
| **Brake / Reverse** | `↓` Down Arrow | `S` or `Key 8` |
| **Nitro Boost** | `Space` | `Key 5` or `Enter` |
| **Pause Game** | `P` | `Escape` |

*Touch and on-screen button controls are also fully supported for mobile and gamepad play.*

---

## ✨ Features

- **Dynamic Traffic AI**: Multiple car types with distinct speeds and lane-switching behaviors.
- **Speed & Boost Physics**: Nitro boost with particle effects, screen shake, and speed lines.
- **Audio Synthesizer**: Built-in Web Audio chiptune sound effects (engine revs, nitro rush, crashes, coin chimes).
- **Responsive Presentation**: Play within the retro keypad wrapper or pop out to full-screen arcade view.
- **High Score Tracking**: Local high-score persistence to beat your personal best.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or later) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akilesh2330/retro-racer.git
   cd retro-racer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Play the game:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Project Structure

```
retro-racer/
├── client/
│   ├── index.html           # Main HTML entry point
│   ├── public/
│   │   └── game.html        # Core Canvas engine & retro game loop
│   └── src/
│       ├── App.tsx          # Application router & theme setup
│       ├── components/      # UI components & retro phone frame
│       └── pages/
│           └── Home.tsx     # Game manual & retro handheld showcase
├── server/                  # Server configuration
├── shared/                  # Shared types and schema definitions
├── package.json             # Scripts & dependencies
└── vite.config.ts           # Vite build configuration
```

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
