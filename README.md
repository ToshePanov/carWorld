# Car Catalogue Project

## Overview

The Car Catalogue project is a web application built using Next.js and React, allowing users to explore a diverse collection of cars. The application provides a user-friendly interface with features such as filtering based on make, model, fuel type, and year of production. Users can view detailed information about each car, including rental details and specifications. The project uses RapidAPI for searching cars and Imagin.studio for display car images.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Constants](#constants)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with the Car Catalogue project, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

The project is organized as follows:

- **pages**: Contains Next.js pages for routing.
- **components**: Reusable React components used throughout the application.
- **utils**: Utility functions and constants used for fetching data, calculations, and image handling.
- **types**: TypeScript type definitions for various components and data structures.
- **constants**: Stores constant values used throughout the project.

## Components

### Home

The `Home` component is the main entry point for the application. It includes a hero section, filters, and a list of cars.

### CarCard

The `CarCard` component represents an individual car card with details such as make, model, rent per day, and additional information.

### CarDetails

The `CarDetails` component displays detailed information about a specific car when clicked from the car card.

### CustomButton

The `CustomButton` component is a reusable button with customizable styles and optional right icon.

### CustomFilter

The `CustomFilter` component provides a dropdown filter with options for fuel type and year of production.

### ShowMore

The `ShowMore` component handles pagination, allowing users to load more cars.


## Usage

To use the Car Catalogue application, open your browser and navigate to [http://localhost:3000](http://localhost:3000). Explore the car catalogue, apply filters, and view detailed information about each car.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.