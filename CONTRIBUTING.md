# Contribution Guide

Welcome to **Cosmic Bouncer**! This physics-based canvas simulation is all about bouncing balls, user interaction, and cosmic fun. We’re thrilled to have you contribute—every idea counts!

## 😃 How to Contribute

All contributions are welcome! Here’s how to get started:

1. **Fork** the repository on GitHub.

2. **Clone** your fork locally:

   ```bash 
   git clone https://github.com/Lucaas-o/cosmic-bouncer.git

3. Create a **feature branch**:
   
   ```bash
   git checkout -b feature/your-feature

4. Make your changes.

5. Test in multiple browsers (e.g., Chrome, Firefox, Edge).

6. Commit with descriptive messages:

   ```bash
   git commit -m "Add your feature"

7. Push to your fork:

   ```bash
   git push origin feature/your-feature

8. Create a **Pull Request** back to this repository.

**Tips:**

- Keep PRs small and focused for easier review.

- Link to any related issues in your PR description.

## ☝️ Good First Issues

New to the project? Try one of these beginner-friendly tasks:

- **Create Different Ball Types**: Implement sticky balls (slow down on collision) or explosive balls (split into smaller ones on impact).

- **Enhance Ball Count Control**: Replace the current button cycling (10, 30, 50, 100) with a slider or input field (1-100 balls).

- **FPS Counter**: Add a corner-displayed frames-per-second counter with color feedback (e.g., red for < 30 FPS).

- **Your Own Idea!**: Got something unique? Open an issue to discuss it!

## 🚀 Planned Features

Here are some ideas from our [TODO.md](./TODO.md) that you can tackle:

- **Responsive Design**: Adjust button layout for mobile/small screens using CSS media queries.

- **Ball Size Control**: Add a slider or input to dynamically adjust ball sizes.

- **Color Themes**: Implement togglable themes (e.g., dark, neon, pastel) for background and balls.

- **Ball Trails**: Add a cosmic trail effect to balls (store last few positions, fade out).

- **Performance Optimization**: Reduce collision check complexity (currently O(n²)) with spatial filtering.

Check [TODO.md](./TODO.md) for the full list, effort estimates, and priorities!

## ❓ Need Help?

- Open an [issue](https://github.com/Lucaas-o/cosmic-bouncer/issues) for questions, bugs, or feature discussions.

- Join the conversation—your input shapes this project!

## Notes

- Test performance-heavy changes (e.g., explosive balls) with high ball counts.

- Focus on usability and fun—this is a community-driven cosmic playground!

Happy coding! 🚀