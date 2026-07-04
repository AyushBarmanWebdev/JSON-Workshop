<div align="center">
  <h1>JSON Workshop</h1>
  <p><strong>Fast JSON Formatter & Validator built with Astro.</strong></p>
  
  <p>
    <a href="https://github.com/AyushBarmanWebdev/JSON-Workshop/stargazers"><img src="https://img.shields.io/github/stars/AyushBarmanWebdev/JSON-Workshop?style=flat-square&color=blue" alt="Stars" /></a>
    <a href="https://github.com/AyushBarmanWebdev/JSON-Workshop/issues"><img src="https://img.shields.io/github/issues/AyushBarmanWebdev/JSON-Workshop?style=flat-square&color=blue" alt="Issues" /></a>
    <img src="https://img.shields.io/badge/Astro-4.0-FF5D01?style=flat-square&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="MIT License" />
  </p>
</div>

---

## Introduction

**JSON Workshop** is a modern, high-performance developer tool that formats, validates, and minifies JSON entirely within the browser environment. By eliminating backend processing, it ensures that your sensitive JSON data is never uploaded to an external server, providing a secure and privacy-focused utility for developers.

Built with a focus on speed and developer experience, JSON Workshop aims to replace ad-supported, slow, and privacy-invasive online JSON formatting tools with a clean, professional workspace. 

Whether you are debugging complex API responses, configuring application settings, or managing large data payloads, JSON Workshop provides the reliable infrastructure you need to work efficiently.

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [Technology Stack](#technology-stack)
- [Installation & Quick Start](#installation--quick-start)
- [Architecture & Structure](#architecture--structure)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Privacy & Security](#privacy--security)
- [Accessibility (a11y)](#accessibility-a11y)
- [SEO & Discoverability](#seo--discoverability)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Key Features

JSON Workshop is engineered to provide a comprehensive suite of JSON manipulation tools, packed into a lightweight interface:

- **JSON Formatting**: Instantly beautify raw, unformatted, or minified JSON strings with proper indentation, structural formatting, and syntax highlighting.
- **JSON Validation**: Catch syntax errors in real-time. The editor provides descriptive, line-level error reporting to help you pinpoint missing commas, unquoted keys, and syntax faults immediately.
- **JSON Minification**: Compress large JSON objects by stripping out all unnecessary whitespace, line breaks, and comments, optimizing the payload for network transfer.
- **Monaco Editor Integration**: Powered by the same robust editor underlying VS Code, offering familiar features like code folding, find & replace, syntax highlighting, and interactive inline validation.
- **Drag & Drop Functionality**: Drag JSON files directly from your desktop into the editor window for instant loading and processing.
- **Upload & Download Operations**: Seamlessly upload files via the system dialog, and download the processed output back to your machine with a single click.
- **Copy Output**: A quick one-click solution to copy the entire formatted or minified output directly to your system clipboard.
- **Keyboard Shortcuts**: Designed for power users, offering dedicated keybindings for all major actions to keep your hands on the keyboard.
- **Dark Mode**: A carefully crafted, eye-friendly dark theme that automatically syncs with your system preferences or can be toggled manually.
- **Mobile Responsive**: While primarily a desktop tool, the interface adapts fluidly to smaller screens, ensuring readability and basic functionality on the go.
- **Accessibility (WCAG-minded)**: Built with an inclusive design philosophy to support diverse accessibility needs.
- **Local Processing**: Completely offline ready. Once the application loads, it requires no internet connection to function.
- **SEO Optimized**: Pre-rendered structures allow search engines to fully crawl and index the application's landing content.
- **Fast Performance**: Leveraging Astro's island architecture, JavaScript is only loaded where absolutely necessary.

## Screenshots

<details>
<summary><strong>Click to view application screenshots</strong></summary>

### Light Theme
![Home Light Mode](/screenshots/home-light.png)

### Dark Theme
![Home Dark Mode](/screenshots/home-dark.png)

### Mobile View
![Mobile Responsive](/screenshots/mobile.png)

</details>

## Technology Stack

JSON Workshop is built on a modern, robust, and scalable foundation, selecting tools that prioritize developer experience and end-user performance:

- **[Astro](https://astro.build/)**: The core framework driving the application. Selected for its zero-JS by default approach, exceptional performance, and straightforward content management.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first styling framework allowing for a highly customizable, scalable, and maintainable design system without the overhead of massive CSS bundles.
- **[Monaco Editor](https://microsoft.github.io/monaco-editor/)**: The powerful code editor component, bringing VS Code-grade editing capabilities directly to the browser.
- **TypeScript**: Adding strong typing to JavaScript logic to reduce runtime errors and improve developer tooling.
- **JavaScript**: Core browser execution for DOM manipulation and file handling.
- **HTML5 & CSS3**: Semantic page structure and modern visual standards.

## Installation & Quick Start

To run JSON Workshop locally on your machine, ensure you have [Node.js](https://nodejs.org/) installed, then follow these instructions:

<details open>
<summary><strong>Development Setup</strong></summary>

```bash
# 1. Clone the repository to your local machine
git clone https://github.com/AyushBarmanWebdev/JSON-Workshop.git

# 2. Navigate into the project directory
cd JSON-Workshop

# 3. Install project dependencies
npm install

# 4. Start the development server
npm run dev
```

The application will now be running at `http://localhost:4321`. Open this URL in your preferred web browser to begin development.
</details>

<details>
<summary><strong>Production Build</strong></summary>

To create a production-ready build of the application:

```bash
# Build the application for production deployment
npm run build

# Preview the built application locally
npm run preview
```
</details>

<details>
<summary><strong>Troubleshooting</strong></summary>

If you encounter issues during installation:
- Ensure you are running a supported version of Node.js (v18+ recommended).
- Clear your npm cache using `npm cache clean --force` and try installing again.
- Delete the `node_modules` folder and `package-lock.json` file, then run `npm install`.
</details>

## Architecture & Structure

### Folder Structure

The repository is organized to promote modularity, clear separation of concerns, and maintainability. Here is a high-level overview of the structure:

```text
JSON-Workshop/
├── public/          # Static assets bypassing the build pipeline (images, robots.txt)
├── scripts/         # Build, deployment, and miscellaneous utility scripts
├── src/             
│   ├── components/  # Reusable UI elements and Astro components
│   ├── layouts/     # Core page layout wrappers controlling global DOM structure
│   ├── pages/       # Astro file-based routing components
│   └── styles/      # Global CSS files and Tailwind configuration
```

### Component Breakdown

The application structure is modularized into several core pieces, ensuring a scalable and maintainable codebase:

- **Navbar**: Handles the main navigation, product branding, and theme toggling functionality. Designed to be lightweight and responsive.
- **Workspace**: The central interactive area encompassing the Monaco editor instance, action panels, and output visualization. This is where the core logic resides.
- **SeoContent**: Manages dynamic head tags, meta information, and rich text optimized for search engine indexing. Crucial for discoverability.
- **Footer**: Contains legal links, repository information, social links, and author credits.
- **Layout**: The overarching structural component that wraps the application, injecting global styles, fonts, and base HTML configuration.

## Keyboard Shortcuts

Maximize your productivity and keep your workflow uninterrupted with these built-in keyboard shortcuts. They are designed to mirror familiar interactions found in modern IDEs.

| Action | Shortcut | Description |
| :--- | :--- | :--- |
| **Format JSON** | `Ctrl + Enter` | Instantly beautifies the JSON payload in the editor. |
| **Minify JSON** | `Ctrl + Shift + M` | Compresses the JSON payload by stripping whitespace. |
| **Copy Output** | `Ctrl + Shift + C` | Copies the current editor content to the clipboard. |

*(Note: On macOS environments, use the `Cmd` key in place of the `Ctrl` key)*

## Privacy & Security

Security and data privacy are core tenets of JSON Workshop. We believe developer tools shouldn't compromise your proprietary data.

- **100% Local Processing**: All formatting, minification, and validation are executed entirely within your browser's JavaScript engine.
- **Zero Data Collection**: No JSON payloads, usage metrics, or input data are transmitted to any backend processing servers.
- **Stateless Architecture**: The application does not store your code or data in any external database. 
- **No Backend Processing**: There is no server-side processing layer; what happens in your browser, stays in your browser.

## Accessibility (a11y)

The tool is designed with Web Content Accessibility Guidelines (WCAG) in mind to ensure usability for all developers, regardless of physical or cognitive ability:

- **Keyboard Navigation**: Full support for traversing the application UI using only a keyboard, ensuring mouse-free operation.
- **Skip Links**: Implemented skip-to-content links to allow screen reader users to bypass repetitive navigation.
- **Focus Rings**: High-contrast, visible focus indicators for all interactive elements to aid spatial orientation.
- **aria-live Regions**: Utilizes ARIA live regions for dynamic state announcements, such as validation error alerts or success notifications.
- **Screen Reader Support**: Semantic HTML structure optimized for interpretation by assistive technologies.

## SEO & Discoverability

Extensive SEO best practices have been implemented to ensure discoverability and high search engine ranking for the platform:

- **Semantic HTML**: Strict adherence to HTML5 semantic tags for logical document structuring.
- **Open Graph**: Fully populated Open Graph metadata for rich link previews on platforms like Facebook and LinkedIn.
- **Twitter Cards**: Configured summary cards for optimized sharing on Twitter/X.
- **Canonical URLs**: Explicit canonical tags to prevent duplicate content indexing issues.
- **JSON-LD**: Structured data implementation to provide search engines with explicit context about the tool.
- **robots.txt**: Correctly configured directives for web crawlers.
- **sitemap.xml**: Automated sitemap generation to ensure all relevant pages are indexed effectively.

## Roadmap

We are actively expanding the toolset to create a comprehensive, all-in-one developer workspace. Our future vision includes incorporating the following tools:

- [ ] **JSON Viewer**: An interactive, collapsible tree view for visualizing deeply nested JSON structures.
- [ ] **JSON Diff**: A split-pane comparison tool to highlight differences between two JSON payloads.
- [ ] **JSON Schema Validator**: Validate JSON instances against defined JSON Schemas (Draft-07, Draft-2020-12).
- [ ] **YAML ↔ JSON**: Two-way conversion between YAML and JSON formats.
- [ ] **CSV ↔ JSON**: Two-way conversion utility for tabular data representation.
- [ ] **XML ↔ JSON**: Two-way conversion utility for XML-based APIs.
- [ ] **JWT Decoder**: A secure, local decoder for inspecting JSON Web Tokens without pasting them into third-party servers.
- [ ] **Base64 Tools**: Utilities for encoding strings to Base64 and decoding Base64 back to raw strings.

## Contributing

We welcome contributions from the global developer community! Whether it's a bug report, a feature suggestion, a typo fix, or a comprehensive pull request, your input is highly valued. We aim to foster a welcoming and collaborative environment.

<details>
<summary><strong>Read our Contribution Guidelines</strong></summary>

### How to Contribute

1. **Fork the repository** to your own GitHub account.
2. **Clone the project** to your local development machine.
3. **Create a branch** for your specific feature or bug fix (`git checkout -b feature/amazing-feature`).
4. **Make your changes** and ensure the code follows existing styles and patterns.
5. **Test your changes** to verify they do not break existing functionality.
6. **Commit your changes** with clear, descriptive commit messages (`git commit -m 'Add amazing feature'`).
7. **Push to the branch** on your forked repository (`git push origin feature/amazing-feature`).
8. **Open a Pull Request** describing your changes in detail, referencing any related issues.

### Code of Conduct
Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms. Ensure interactions remain professional, respectful, and collaborative.

</details>

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, distribute, and commercially exploit this software as long as the original copyright and license notice are included.

## Author

**Ayush Barman**

- Website: [jsonworkshop.com](https://jsonworkshop.com)
- GitHub: [@AyushBarmanWebdev](https://github.com/AyushBarmanWebdev)
- LinkedIn: [Ayush Barman](https://www.linkedin.com/in/ayush-barman-b24b01239)

---

<div align="center">
  <p>Engineered with precision for developers who demand speed, reliability, and absolute privacy.</p>
  <p>Thank you for using JSON Workshop!</p>
</div>
