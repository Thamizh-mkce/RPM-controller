# RPM Controller

This web application allows users to control the rotation speed of a wheel image using a slider. The wheel's RPM (Revolutions Per Minute) can be adjusted, and the wheel rotates accordingly.

## Features
- Displays a wheel image that rotates based on the RPM value set by the user.
- Provides a slider input to adjust the RPM from 0 to 3000.
- Updates the displayed RPM in real-time as the slider is adjusted.

## Files
- `index.html`: The main HTML file that structures the application.
- `styles.css`: The CSS file that styles the wheel and layout.
- `script.js`: The JavaScript file that handles the wheel's rotation based on the RPM value.

## Setup
1. **Prepare the Wheel Image**:
   - Ensure you have a wheel image named `wheel.png`. Place this image in the same directory as your HTML file or update the `src` attribute in `index.html` to point to the correct image path.

2. **Clone or Download**:
   - Clone or download the repository to your local machine.

3. **Open the Application**:
   - Open the `index.html` file in your web browser.

4. **Adjust RPM**:
   - Use the slider to adjust the RPM. The wheel will rotate according to the selected RPM value.

## How It Works
- **HTML**: The `index.html` file includes the wheel image, slider, and display for RPM.
- **CSS**: The `styles.css` file styles the wheel and its container, ensuring proper alignment and appearance.
- **JavaScript**: The `script.js` file handles the wheel's rotation. It calculates the rotation speed based on the RPM value and updates the wheel's rotation using `requestAnimationFrame` for smooth animation.

## Browser Support
This application should work in most modern browsers, including:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## License
This project is licensed under the MIT License.
