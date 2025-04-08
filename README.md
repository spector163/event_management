# Event Management API

A simple Event Management API built with TypeScript, Express.js, MySQL, and Prisma.

## Features

- User management (create, get)
- Event management (create, list)
- Attendee management (join event, list attendees)

## Technologies

- TypeScript
- Express.js
- MySQL
- Prisma ORM
- Zod for validation
- Docker for containerization

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MySQL
- Docker (optional)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Migrate with db:migrate
4. Generate prismal client with db:generate
5. To run locally use local script(dev also works)
