# Cosmic Bouncer - TODO List

This file tracks planned features and improvements for the Cosmic Bouncer project. Priorities are based on impact, ease of implementation, and value to users and contributors. Contributions welcome!

## Priority 1: Quick Wins
- [ ] **Enhance Ball Count Control**
  - Replace button cycling with a slider or input field (1-100 balls).
  - Example: `<input type="range" id="ballCountSlider" min="1" max="100" value="30">`.
  - Effort: ~1 hr | Impact: High
- [ ] **Responsive Design**
  - Adjust button layout for mobile/small screens using CSS media queries.
  - Effort: ~1 hr | Impact: High
- [ ] **Visual Feedback (Pause Overlay)**
  - Display "Paused" text on canvas when paused.
  - Effort: ~30 min | Impact: Medium

## Priority 2: Mid-Term Enhancements
- [ ] **Ball Size Control**
  - Add a slider/input to adjust ball sizes dynamically.
  - Effort: ~2 hrs | Impact: Medium
- [ ] **Performance Optimization (Collision Checks)**
  - Reduce `O(n²)` collision checks with spatial filtering (e.g., check only nearby balls).
  - Effort: ~3-4 hrs | Impact: High
- [ ] **Color Themes**
  - Implement togglable themes (dark, neon, pastel) for background and balls.
  - Effort: ~2 hrs | Impact: Medium
- [ ] **Keyboard Controls**
  - Add shortcuts (e.g., `P` for pause, `G` for gravity).
  - Effort: ~1 hr | Impact: Medium
- [ ] **Customizable Settings**
  - Add sliders for `speedMultiplier`, `gravity.amount`, and `attraction.distance`.
  - Effort: ~3 hrs | Impact: Medium

## Priority 3: Polishing Features
- [ ] **Ball Trails**
  - Add trails to balls for a cosmic effect (store last 4 positions, fade out).
  - Effort: ~2 hrs | Impact: Medium
- [ ] **Explosive Balls**
  - Create a togglable mode where balls split into smaller ones on collision.
  - Effort: ~4-5 hrs | Impact: High
- [ ] **Sound Effects**
  - Add audio for collisions/buttons using Web Audio API.
  - Effort: ~2 hrs | Impact: Low
- [ ] **Save/Load Settings**
  - Persist user settings (ball count, speed, etc.) via `localStorage`.
  - Effort: ~2 hrs | Impact: Low

## Completed
- [x] **Gravity Toggle**
  - Implemented as a button toggling `GRAVITY.enabled`.
- [x] **FPS Counter**
  - FPS Counter on the top left corner with color feedback.
- [x] **Github Link**
  - Added a button to the repository in the info page. 

## Notes
- Focus on quick wins first to boost usability and community interest.
- Test performance-heavy features (e.g., Explosive Balls) with high ball counts.
- Keep pull requests small and focused for easier review.

Happy coding! 🚀