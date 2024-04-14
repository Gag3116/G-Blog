# G-Blog Project

Welcome to the G-Blog Project, a modern, frontend-only demonstration of a personal blog platform. This project is crafted as part of the CS732 course assignment at the University of Auckland, where the challenge was to delve into web frameworks outside the traditional curriculum. It aims to exhibit the robust capabilities of Vue.js 3 in building scalable, maintainable, and highly interactive web applications without backend dependencies.

The project uses mock JSON data to simulate user interactions and content management, making it an excellent tool for both learning and demonstrating the core features of Vue.js in a real-world application context. By focusing purely on the frontend, this project highlights how advanced client-side technologies can effectively handle tasks typically reserved for server-side logic, such as data handling and dynamic content generation.

## Features

This application consists of several key pages, each serving a distinct purpose:

- **Home:** Displays articles rendered in markdown format, allowing users to read posts right after logging in.
- **About:** Provides information about the project and the developer.
- **Contact:** Displays the developer's contact information as a digital business card.
- **Login and Register:** For user authentication processes allowing login and account creation.

Key functionalities include:
- **Article Management:** Articles are displayed using markdown rendering to simulate real blog posts.
- **Dynamic Sidebar:** Articles are categorized by their publication dates.
- **API Integration:** Uses mock APIs for features like dynamic avatar generation, enhancing the user experience with simulated data.

## Technology Stack

- **Vue.js 3:** A progressive JavaScript framework for building user interfaces.
- **Vuex:** Manages state within the app.
- **Vite:** A modern build tool that provides a faster and more efficient development workflow.
- **Vue Router:** Manages navigation within the application.

## Project Setup

### Prerequisites

- This project requires Node.js, which includes npm (Node Package Manager). If you don't have Node.js installed, follow these steps to install it:
  1. Go to [Node.js official website](https://nodejs.org/).
  2. Download the version suitable for your operating system (Windows, macOS, or Linux).
  3. Follow the installation instructions on the website to install Node.js and npm.
- Basic knowledge of Vue.js and JavaScript.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/UOA-CS732-SE750-Students-2024/cs732-assignment-Gag3116
   ```
2. Navigate to the project directory:
   ```bash
   cd vue-blog
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   This command will download all the dependencies defined in `package.json` and prepare all necessary files in `node_modules`.

### Data Management

- All mock data used in the application, including user information and articles, is stored in JSON files located in the `public` folder. This setup mimics backend data delivery, allowing the frontend to fetch and process data as if it were interacting with a real server.

## **Note**

Please be aware that due to the use of simulated data and Vuex to simulate login status, **refreshing the page while previewing the project may result in partial data loss**, such as registered user information. For the best preview experience, try to avoid refreshing the page.

If you need to develop or test locally and wish to retain data even after a page refresh, consider implementing local storage functionality within the project, such as using LocalStorage or SessionStorage.


### Running the Project

- To run the development server:
  ```bash
  npm run dev
  ```
  This command starts a local development server powered by Vite and opens up a browser window. Most changes are reflected live without needing to restart the server.

- To build the project for production:
  ```bash
  npm run build
  ```
  This serves the built app on a local server, allowing you to preview the production version of your application.

- To preview the production build:
  ```bash
  npm run preview
  ```

## Code Overview

- **src/main.js:** Entry point of the Vue application.
- **src/components:** Contains Vue components used throughout the application.
- **src/views:** Vue components representing different pages such as Home, About, and Contact.
- **src/store:** Vuex store files.
- **src/router:** Vue Router setup.

## Future Plans

While the current version of the application provides a solid foundation for a personal blogging platform, the following features are planned for future releases:

- **Tag-based Filtering:** Introduce the ability to filter articles by tags from the sidebar, enhancing navigation and user experience.
- **Weather API Integration:** Display real-time weather information to visitors, adding a dynamic element to the blog.
- **Comments Section:** Enable readers to comment on articles to increase interaction and engagement within the community.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Reporting Issues and Debugging
For reporting issues, please use the GitHub issues tracker. Include as much detail as possible in your report, such as error messages, line numbers, and conditions that triggered the problem.

## License

This project is open-source and available under the MIT License.
