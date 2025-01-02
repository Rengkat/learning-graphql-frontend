# Project Management App Frontend

This repository contains the frontend implementation for the Project Management App. The project serves as a learning exercise to work with **GraphQL** on the client side using **Apollo Client** and to build a modern, fast, and responsive user interface with **React** and **Vite**.

## Features

The frontend includes the following functionality:
- **Add Project**: Interface to create new projects and link them with clients.
- **Add Client**: Form to register new clients in the system.
- **Update Project/Client**: Edit details of existing projects or clients.
- **Delete Project/Client**: Remove projects or clients via the user interface.
- **Routing**: Seamless navigation between pages using React Router.

## Technology Stack

The frontend was built using the following technologies:
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and modern build tool for web projects.
- **Apollo Client**: State management and GraphQL client for querying and mutating data.
- **React Router DOM**: A library for managing routes in the application.

## Prerequisites for Standardization

To make this frontend project more robust and aligned with best practices, consider implementing the following:

1. **State Management**:
   - Implement global state management for non-GraphQL states using a tool like Redux or React Context.

3. **Error Handling**:
   - Display user-friendly error messages for failed queries or mutations.
   - Handle GraphQL errors using Apollo Client's `onError` link.

4. **UI Enhancements**:
   - Add consistent styling using a library like Tailwind CSS, Material-UI, or Bootstrap.
   - Make the UI responsive and accessible.

5. **Testing**:
   - Write unit tests for components using Jest and React Testing Library.
   - Test GraphQL queries and mutations with Apollo's MockedProvider.

6. **Loading and Caching**:
   - Use Apollo Client's caching features to minimize redundant API calls.
   - Add loading indicators for better user experience during asynchronous operations.

7. **Code Splitting and Optimization**:
   - Implement lazy loading for routes using `React.lazy` and `Suspense`.
   - Optimize performance with tools like Lighthouse or React Developer Tools.

8. **Documentation**:
   - Include documentation for components, state structure, and GraphQL queries/mutations.
   - Provide a guide for setting up and running the project locally.

9. **Deployment**:
   - Deploy the frontend using platforms Vercel.
   - Set up a CI/CD pipeline for automated builds and deployments.


## Example Workflow

1. **Add a Client**:
   - Navigate to the "Add Client" page, fill out the form, and submit.
   - The client is added to the database and displayed in the clients list.

2. **Add a Project**:
   - Navigate to the "Add Project" page, fill out the form, link the project to a client, and submit.
   - The project is added and displayed in the projects list.

3. **Update or Delete**:
   - Use the options provided in the client or project lists to update or delete existing data.

