# Clock Project

This is a simple digital clock web project that dynamically displays the current time, with smooth background animation and a shadow effect for the clock display.

## Features

- Displays the current time (hours, minutes, and seconds) in real-time.
- Stylish gradient background animation.
- Smooth shadow effect for the clock text.
- Responsive design centered on the screen.

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: Styling, including animations and layout.
- **JavaScript**: Functionality to update the clock every second.

## Demo

The project shows a large digital clock on the screen with a colorful background that changes smoothly over time.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/clock-project.git
    ```

2. Navigate into the project directory:
    ```bash
    cd clock-project
    ```

3. Open the `index.html` file in your web browser to see the clock in action.

## Files

- `index.html`: The main HTML file for the project.
- `style.css`: The CSS file that contains styles for the clock and background.
- `script.js`: The JavaScript file that handles the clock functionality.

## How It Works

1. The `clockTimer()` function fetches the current time using JavaScript's `Date()` object.
2. The time is displayed in an HTML element and updated every second using `setInterval()`.
3. A background animation smoothly transitions between various colors using CSS keyframes.
4. The clock has a deep shadow effect, adding a dynamic feel to the display.

## Customization

- You can change the font by modifying the Google Fonts link in the HTML file.
- The background animation speed and colors can be customized in the CSS under the `@keyframes colorChange` section.
- To change the clock size or style, edit the `.clock` class in the `style.css`.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, feel free to reach out!

