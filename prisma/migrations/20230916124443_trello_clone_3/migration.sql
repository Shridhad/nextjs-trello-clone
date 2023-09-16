-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "extensions";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";

-- CreateEnum
CREATE TYPE "public"."ProjectType" AS ENUM ('TodoList', 'Kanban');

-- CreateTable
CREATE TABLE "public"."Card" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT DEFAULT '',
    "description" TEXT DEFAULT '',
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "dueDate" TIMESTAMPTZ(6),
    "archived" BOOLEAN DEFAULT false,
    "listId" UUID NOT NULL,
    "key" VARCHAR DEFAULT '',

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "type" "public"."ProjectType" NOT NULL DEFAULT 'TodoList',
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "profileId" UUID NOT NULL,
    "key" VARCHAR NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Profile" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CardList" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT DEFAULT '',
    "description" TEXT DEFAULT '',
    "order" INTEGER DEFAULT 0,
    "updatedAt" TIMESTAMPTZ(6),
    "archived" BOOLEAN DEFAULT false,
    "projectId" UUID,

    CONSTRAINT "CardList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_listId_fkey" FOREIGN KEY ("listId") REFERENCES "public"."CardList"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."Profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."CardList" ADD CONSTRAINT "CardList_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
