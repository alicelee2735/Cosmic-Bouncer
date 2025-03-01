# 🌌 Cosmic Bouncer
🟠 Open Source Visual Art Project

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/alicelee2735/cosmic-bouncer/)

A cool physics and art simulation I created for fun. Perfect for learning HTML canvas animations and basic game physics :)

![gif-demo](https://github.com/user-attachments/assets/986e1f4d-76bc-4760-bc78-c5cd12456786)

## Highlights

- 30+ colorful balls with random sizes and velocities
- Realistic wall collisions with momentum preservation
- Dynamic color changes on collisions
- Responsive design that adapts to your browser/device window size
- Pause/Resume functionality with interactive button
- Speed control with variable multipliers (0.5x, 1x, 2x)
- Gravity toggle to apply downward force
- Mouse attraction to pull balls toward the cursor
- Contribute button linking to community guidelines
=======
- **Realistic wall collisions** with momentum preservation
- **Dynamic color changes** on collisions
- **Responsive design** that adapts to the window size of your browser/device
- **Pause/Resume functionality** with interactive button
- **Speed control** with variable multipliers (0.5x, 1x, 2x)
- **Attraction to cursor** when mouse moves around the screen


## Quick Start
1. Clone the repo:   
    ```bash
    git clone https://github.com/alicelee2735/Cosmic-Bouncer.git

2. Open index.html in your browser:

## Customization

Edit main.js to tweak the simulation:

    ```js
    // Change number of balls
    while (balls.length < 30) { // ← Modify this number

    // Adjust speed ranges
    random(-7, 7) // ← Modify velocity values

    // Modify size range
    random(10, 20) // ← Modify ball sizes

    // Change background fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)' // ← Trail effect opacity

    // Adjust speed multiplier
    let speedMultiplier = 1; // ← Modify default speed (0.5, 1, 2)

    // Toggle gravity
    const GRAVITY = { enabled: false, amount: 0.1 }; // ← Adjust gravity strength

    // Configure attraction
    const attraction = { enabled: false, distance: 100, factor: 0.02 }; // ← Tweak range and force
    ```

## Controls
- Pause/Resume Button: Toggle animation state
- Speed Button: Cycle through 0.5x, 1x, and 2x speeds
- Gravity Button: Enable/disable downward gravity
- Attraction Button: Toggle mouse attraction with visual indicator
- Contribute Button: Visit contribution guidelines
=======
Edit main.js to modify in main.js:
```js
// Change number of balls
while (balls.length < 30) { // ← Modify this number

// Adjust speed ranges
random(-7, 7) // ← Modify velocity values

// Modify size range
random(10, 20) // ← Modify ball sizes

// Change background fade effect
ctx.fillStyle = 'rgba(0, 0, 0, 0.25)' // ← Trail effect opacity

// Adjust speed multiplier
let speedMultiplier = 1; // ← Modify default speed (0.5, 1, 2)
```


## Controls
- Pause/Resume Button: Toggle animation state
- Speed Button: Cycle through 0.5x, 1x, and 2x speeds

## Live Demo
Hosted on GitHub Pages: [Demo Website](https://alicelee2735.github.io/Cosmic-Bouncer/)


## 🤝 Contributing
All contributions are welcome! See [CONTRIBUTING.md](https://github.com/alicelee2735/Cosmic-Bouncer/blob/main/CONTRIBUTING.md) for guidelines. First-time contributors can try:
=======
## Contributing
All contributions are welcome! See [CONTRIBUTING.md](https://github.com/alicelee2735/Cosmic-Bouncer/blob/main/CONTRIBUTING.md) for guidelines.
First-time contributors are encouraged to:

- Add new collision effects


- Adding new collision effects
- Enhancing user interaction (e.g., sliders, keyboard controls)
- Implementing your own cool ideas!

Check [TODO.md](./todo.md) for more inspiration.

## License
MIT © Alice Lee - See [LICENSE](https://github.com/alicelee2735/Cosmic-Bouncer/blob/main/LICENSE) for details

Leave a Star if you liked it! ⭐
