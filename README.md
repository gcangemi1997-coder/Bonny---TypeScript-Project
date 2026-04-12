
# 🚀 Startup Growth Ecosystem - TypeScript Project

Welcome to the **Startup Growth Ecosystem** project! This is a simulation platform developed in **TypeScript** to manage interactions between Startups, Citizens, and Government Incentives.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Visual Studio Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)

---

## 🛠️ Project Features

The system is built on three main entities that interact within a dynamic ecosystem:

* **🏢 Startup Management**: Register new startups and track the financial incentives they receive.
* **💰 Incentive System**: Define public subsidies with specific criteria and manage their assignment logic.
* **👥 Citizen Interaction**: Manage how citizens participate in activities promoted by startups.
* **🛡️ Uniqueness Validation**: Includes a robust validation logic (`checkIncentivo`) to prevent a startup from receiving the same incentive (identified by ID) more than once.

---

## 📂 Project Structure

The file hierarchy follows professional standards to separate source code from execution logic:

```text
PROGETTO TYPESCRIPT/
├── dist/                # Compiled JavaScript files (ignored by Git)
├── src/                 # Source Code (Logic and Contracts)
│   ├── interfaces.ts    # Interface definitions (IStartup, IIncentivo, ICittadino)
│   └── classes.ts       # Class implementations and validation logic
├── test/                # Execution and Simulations
│   ├── main.ts          # Main ecosystem simulation script
│   └── main.test.ts     # Specific test script for ID validation
├── .gitignore           # Excludes node_modules and dist folder
├── package.json         # NPM configuration and dependencies
└── tsconfig.json        # TypeScript compiler settings
🧪 Testing and Terminal Commands
The project includes a manual test suite to verify the robustness of the validation logic.

Installation
Ensure you have the dependencies installed:

Bash
npm install
Compilation
Compile TypeScript files into JavaScript using:

Bash
npx tsc
Running Tests
To start the simulation and verify the duplicate blocking system:

Bash
# Runs the main simulation
node dist/test/main.js

# Runs the specific ID validation test
node dist/test/main.test.js
🌐 Live Demo on CodePen
You can view the project running directly in your browser:

🔗 View Demo on CodePen

(Note: Please open the CodePen Console at the bottom left to see the output logs and the validation table)

💻 Technologies Used
TypeScript: For strong typing and clean Object-Oriented structure.

Node.js: As the server-side runtime environment.

Markdown: For project documentation.

👤 Author
Giorgio - Web Developer & TypeScript Enthusiast
