# Password Generator

A React application for generating secure passwords. Customize the password length and include numbers or special characters. Easily copy the generated password to your clipboard with a single click.

## Features

- **Password Generation**: Create passwords of customizable length.
- **Include Numbers**: Option to include numbers in the password.
- **Include Special Characters**: Option to include special characters in the password.
- **Copy to Clipboard**: Easily copy the generated password to the clipboard.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for faster development and hot reloading.

## Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/atharshafi/password-generator.git
    cd password-generator
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the Application**

    ```bash
    npm run dev
    ```

    The application will run on `http://localhost:3000` by default.

## Usage

1. **Set Password Length**: Use the slider to choose the desired length of the password.
2. **Include Numbers**: Check the box to allow numbers in the password.
3. **Include Special Characters**: Check the box to include special characters.
4. **Generate Password**: Click the "Generate Password" button to create a new password.
5. **Copy Password**: Click the "COPY" button to copy the password to your clipboard.

## Code Overview

- **`App.jsx`**: Main React component that contains the password generation logic and user interface.
- **`App.css`**: Tailwind CSS configuration file for styling the application.

### Key Functions

- **`generatePwd`**: Generates a password based on the current settings (length, numbers, special characters).
- **`copyPasswordToClipBoard`**: Copies the generated password to the clipboard and selects the text in the input field.

## Contributing

Feel free to open issues or submit pull requests to improve the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
