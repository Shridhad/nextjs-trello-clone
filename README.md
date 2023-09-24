# Trello & Linear Clone

This is demo trello & linear inspired application build with [NextJS](https://nextjs.org/), [Prisma](https://www.prisma.io/), [Auth.js](https://authjs.dev/), and [Supabase](https://supabase.com/)

The application is configured with Auth.js with [Google Provider](https://next-auth.js.org/providers/google) with database managed sessions. This makes the user's session available on server side. With Next's server side components, we do not yet need the user's session on client side.

## Configuration

Create `.env.local` file at root of the project and configure following keys:

```properties
NEXT_PUBLIC_AUTH_GOOGLE_CLIENT_ID=
NEXT_PUBLIC_AUTH_GOOGLE_SECRET_KEY=

# https://next-auth.js.org/configuration/options#options
# When deploying to production, set the NEXTAUTH_URL environment variable to the canonical URL of your site.
NEXTAUTH_URL=http://localhost:3000

# A random string is used to hash tokens, sign/encrypt cookies and generate cryptographic keys.
NEXTAUTH_SECRET=
```

You can find steps here to create Google client ID and secret keys on [Google for Developers](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid)

Create `.env` file to configure database url for Prisma

```properties
# PostgreSQL connection string used for migrations
DIRECT_URL="postgres://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# PostgreSQL connection string with pgBouncer config — used by Prisma Client
DATABASE_URL="postgres://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:6543/postgres?pgbouncer=true"
```

## Commands

1. Prisma migration - `npx prisma db push` or `npx prisma migrate dev`
2. Prisma generation - `npx prisma generate`
3. Run the application - `npm run dev`

### Database Migration

1. Update the `prisma/schema.prisma` file with desired schema
2. Run `npx prisma generate` to generate Prisma types
3. Run `npx prisma db push` to updated schema with supabase (Note: it will drop database)
4. `npx prisma migrate dev --name init`
