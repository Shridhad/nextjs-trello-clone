/*
  Warnings:

  - You are about to drop the column `listId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the `CardList` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `profileId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Card" DROP CONSTRAINT "Card_listId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CardList" DROP CONSTRAINT "CardList_projectId_fkey";

-- AlterTable
ALTER TABLE "public"."Card" DROP COLUMN "listId",
ADD COLUMN     "profileId" UUID NOT NULL,
ADD COLUMN     "projectId" UUID NOT NULL;

-- DropTable
DROP TABLE "public"."CardList";

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."Card" ADD CONSTRAINT "Card_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."Profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
