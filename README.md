## ⚠️ Warning: Project Under Development

** This project is currently under development and not yet fully functional. **
** Some features may be incomplete or subject to change. **

# French

French Task est une application web de gestion de tâches, comprenant :

- Un backend en Java avec Spring Boot.
- Un frontend en Next.js.

## Prérequis

- Docker et Docker Compose
- Node.js et pnpm
- JDK 21

## Installation

1. Clonez ce dépôt :

```bash
git clone git@github.com:Achapeau/TMProject.git
cd TMProject
```

2. Lancer les services :

```bash
docker-compose up
```

## Tests

Si vous voulez tester votre application, veuillez d'abord initialiser Jest:

1. **Placez-vous dans le dossier `frontend`** :

```bash
cd frontend
npm install
```

2. **Initialisez Jest** : Exécutez la commande suivante pour créer un fichier de configuration Jest:

```bash
npm init jest@latest
```

Pendant l'initialisation, plusieurs questions vous seront posées. Voici les **réponses recommandées**:

- **Choose the test environment that will be used for testing** : jsdom (environnement simulant un navigateur)
- **Automatically clear mock calls, instances, contexts and results before every test?** **Yes**(pour garantir l'indépendance des tests)
- **Which provider should be used to instrument code for coverage?** **v8**(pour une solution rapide et native)
- Pour les autres questions, selectionnez **Yes**

3.  **Mettre à jour la configuration** : Une fois l'initialisation teminée, Jest crée un fichier _jest.config.ts_. Modifiez le pour intégrer _next/jest_ avec Next.js.
    Exemple:

```ts
import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvide: "v8",
  testEnvironment: "jsdom",
};

export default nextJest(config);
```

4. **Optionnel** :

- Créer une copie de fichier comme référence sur les options avancées,
- Supprimer les commentaires sur le fichier de config initial.
- Ajouter le nom de cette copie au _.gitignore_ pour éviter d'encombrer le dépôt.

# English

French Task is a task management web application, including:

- A backend built with Java and Spring Boot.
- A frontend built with Next.js.

## Prerequisites

- Docker and Docker Compose
- Node.js and pnpm
- JDK 21

## Installation

1. Clone this repository:

```bash
git clone git@github.com:Achapeau/TMProject.git
cd TMProject
```

2. Launch the services:

```bash
docker-compose up
```

## Tests

If you want to test your application, please initialize Jest first:

1. **Go to the `frontend` folder** :

```bash
cd frontend
npm install
```

2. **Initialize Jest** : Run the following command to create a Jest configuration file:

```bash
npm init jest@latest
```

During the setup, you will be prompted with several questions. Here are the **recommended answers**:

- **Choose the test environment that will be used for testing** : jsdom (browser-like environment)
- **Automatically clear mock calls, instances, contexts and results before every test?** **Yes**(to ensure tests are independent)
- **Which provider should be used to instrument code for coverage?** **v8**(for a faster and native coverage provider)
- For all other questions, select **Yes**

3. **Update the configuration**: After the initialization, Jest creates a jest.config.ts file. Modify it to integrate with Next.js by using next/jest.
   Example:

```ts
import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvide: "v8",
  testEnvironment: "jsdom",
};

export default nextJest(config);
```

4. **Optional** :

- Create a copy of the file as a reference for the advanced options,
- Delete the comments on the initial config file.
- Add the name of this copy to _.gitignore_ to avoid cluttering up the repository.
