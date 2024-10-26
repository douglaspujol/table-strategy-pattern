# 🌍 Global Components with the Strategy Pattern

This project demonstrates how to create dynamic, adaptable components for different countries using the **Strategy Pattern**. The main application is a React table component that adjusts automatically to the data and specific behaviors of each country, ensuring scalability and maintainability in a global project.

👉 **[Check out the full project here!](https://table-strategy-pattern.vercel.app/)**

## 🎯 Purpose

The goal of this project is to show a practical approach to managing global components, allowing data and formatting to vary by country without duplicating code or adding complex conditionals.

## 🚀 Technologies Used

- **React** with **TypeScript** to build reusable components.
- **Next.js** as the framework for developing the application.
- **Strategy Pattern** to organize country-specific rules and behaviors.

## 🛠️ Project Structure

- **/components/Table**: Contains the main table component, set up to receive specific rendering strategies.
- **/mocks**: Example data simulating information for different countries.
- **/strategies**: Implements strategies for each country, defining columns and custom data rendering.

## 🌍 Multi-Country Support

Currently, the project supports the following countries:
- **Brazil** (BR)
- **United States** (US)
- **Spain** (ES)
- **South Korea** (KR)

Each country has personalized columns and formats, showcasing different configurations for each.

## 📈 Benefits of Using the Strategy Pattern

- **Scalability**: Allows new countries to be added without added complexity in the main component.
- **Simplified Maintenance**: Each strategy is isolated, making updates and testing easier.
- **Reduction of Duplicate Code**: Eliminates the need to create or conditionally manage individual components for each country.

## 🔗 Full Article

Check out the full article on [dev.to](https://dev.to/douglaspujol/como-criar-componentes-globais-e-dinamicos-com-strategy-pattern-em-react-5960).
---

Thank you for exploring this project! If you have questions or suggestions, feel free to open an issue or get in touch. 🚀
