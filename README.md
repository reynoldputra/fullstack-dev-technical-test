# Simple Form

This project was created as a technical assignment for the Fullstack Engineer internship at KinetixPro.

## Backend

### Technology

- I used [my project template](https://github.com/reynoldputra/nestjs-starter-kit) to build this backend service.
- This project utilizes [Nest.js](https://nestjs.com/) 10 as the core framework with TypeScript.
- PostgreSQL is used for the database, with Prisma ORM.

### Development

This project can be started in two different ways:

#### With Docker

- Install Docker and the Docker Compose plugin.
- Copy `.env.example` to `.env`.
- Run the command to start the container.

```sh
cd backend
docker compose up
```
- The application will run inside the Docker container.

#### Without Docker

- Download PostgreSQL and run the server.
- Copy `.env.example` to `.env`.
- Update `DATABASE_URL` in `.env` with your database URL.
- Then start the project.
```sh
yarn start:dev
```

### Deployment

This project uses a monorepo and is deployed on Vercel.

Steps:

1. Open the Vercel dashboard.
2. Create a PostgreSQL database in [Vercel Storage](https://vercel.com/docs/storage). This is free (one per team on the hobby plan).
3. Take note of the database URL. Currently, I have not set up migration steps during deployment, so you'll need to run the migration manually on your local machine.
4. Create a new project.
5. Select the GitHub repository.
6. Specify the root directory as `backend` so Vercel will only build the project within the backend directory.
7. Fill in the environment variables.
8. Start the deployment.

## Frontend

### Technology

- This project uses [Next.js](https://nextjs.org/) 14 as the core framework with TypeScript.
- Styled with [Tailwind CSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/).
- [React Hook Form](https://react-hook-form.com/) is used to build flexible forms.

### Development

- Copy `.env.example` to `.env`.
- Execute the commands to run the project locally.
```sh
cd frontend
yarn install
yarn dev
```

### Deployment

This project uses a monorepo and is deployed on Vercel.

Steps:

1. Open the Vercel dashboard.
2. Create another project.
3. Select the GitHub repository.
4. Specify the root directory as `frontend` so Vercel will only build the project within the frontend directory.
5. Fill in the environment variables.
6. Start the deployment.
