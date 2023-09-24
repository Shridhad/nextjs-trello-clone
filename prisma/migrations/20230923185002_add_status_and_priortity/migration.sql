/*
  Warnings:

  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."IssueStatus" AS ENUM ('Backlog', 'Planned', 'InProgress', 'Paused', 'Blocked', 'Completed', 'Canceled');

-- CreateEnum
CREATE TYPE "public"."IssuePriority" AS ENUM ('NoPriority', 'Urgent', 'High', 'Medium', 'Low');

-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_profileId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_projectId_fkey";

-- DropTable
DROP TABLE "public"."Card";

-- CreateTable
CREATE TABLE "public"."Issue" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT DEFAULT '',
    "description" TEXT DEFAULT '',
    "status" "public"."IssueStatus" NOT NULL DEFAULT 'Backlog',
    "priority" "public"."IssuePriority" NOT NULL DEFAULT 'NoPriority',
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "dueDate" TIMESTAMPTZ(6),
    "archived" BOOLEAN DEFAULT false,
    "projectId" UUID NOT NULL,
    "profileId" UUID NOT NULL,
    "key" VARCHAR DEFAULT '',

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Issue" ADD CONSTRAINT "Issue_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."Issue" ADD CONSTRAINT "Issue_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."Profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
