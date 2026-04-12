
# Bonny 🚀

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![OOP](https://img.shields.io/badge/OOP-Design%20Pattern-00599C?style=for-the-badge)
![ES%20Modules](https://img.shields.io/badge/ES%20Modules-Modern%20JS-F7DF1E?style=for-the-badge)

**TypeScript simulation of public incentives management for startups with citizen engagement tracking.**  
Clean OOP architecture using interfaces, classes, and ES modules for scalable, type-safe code.

---

## 🖥️ Live Demo

**[Try Bonny Live on CodePen](https://codepen.io/gcangemi1997-coder/pen/ZYpmLwO)**

---

## 🎯 How It Works

1. **Startups** receive public incentives through the `riceviIncentivo()` method
2. **Validation logic** prevents duplicate incentive IDs using `.some()` array check
3. **Citizens** participate in startup activities via `partecipaAttivita()`
4. **Console logging** provides clear feedback on all ecosystem interactions

---

## ✨ Features

The system is built on three main entities that interact within a dynamic ecosystem:

* **🏢 Startup Management**: Register new startups and track the financial incentives they receive.
* **💰 Incentive System**: Define public subsidies with specific criteria and manage their assignment logic.
* **👥 Citizen Interaction**: Manage how citizens participate in activities promoted by startups.
* **🛡️ Uniqueness Validation**: Includes a robust validation logic (`checkIncentivo`) to prevent a startup from receiving the same incentive (identified by ID) more than once.
- ✅ Modular ES modules architecture

---

## 🛠️ Tech Stack
**TypeScript** - **Node.js** - **OOP** - **ES Modules**

---

## 📁 Project Structure

```
PROGETTO TYPESCRIPT/
├── dist/                # Compiled JavaScript files (Git ignored)
├── src/                 # Source TypeScript files
│   ├── interfaces.ts    # Contract definitions (IStartup, IIncentivo, ICittadino)
│   └── classes.ts       # Logic implementation & validation rules
├── test/                # Simulation & Testing suite
│   ├── main.ts          # Main ecosystem simulation
│   └── main.test.ts     # Validation logic unit test
├── .gitignore           # Files to be excluded from version control
├── package.json         # Project metadata and scripts
└── tsconfig.json        # TypeScript compiler configuration
```

---


## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Compile TypeScript
npx tsc

# Run main simulation
node dist/test/main.js

# Run validation test
node dist/test/main.test.js
```
---

## 🧠 Core Entities

### 🏢 **Startup**
```typescript
export class Startup implements IStartup {
  listaIncentivi: IIncentivo[] = [];
  riceviIncentivo(incentivo: IIncentivo): void { ... }
}
```

### 💰 **Incentivo** 
Assigns public funding to eligible startups

### 🧑‍🤝‍🧑 **Cittadino**
Tracks citizen participation in ecosystem activities

## 🔧 Key Implementation

**Duplicate Prevention Logic:**
```typescript
const checkIncentivo = this.listaIncentivi.some(
  (item) => item.id === incentivo.id
);
if (checkIncentivo) {
  console.warn(`Duplicate incentive blocked!`);
} else {
  this.listaIncentivi.push(incentivo);
}
```
---

## 📚 What I Learned

- **Interface-driven development** for type-safe contracts
- **OOP principles** (encapsulation, single responsibility)
- **ES modules** for modern TypeScript organization
- **Practical validation** for data integrity

---

## 👨‍💻 Author

**Giorgio Cangemi**  
Full Stack Developer | Start2Impact  
[GitHub](https://github.com/gcangemi1997-coder) | [Portfolio](https://gcangemi1997-coder.github.io/)

---

*Built with TypeScript best practices for clean, scalable code.*
