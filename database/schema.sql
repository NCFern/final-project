set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."users" (
    "userId" serial NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL unique,
    "password" TEXT NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."nurseEntries" (
    "nurseId" serial NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "nurseAddress" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "userId" integer NOT NULL,
    "hospitalId" integer NOT NULL,
    CONSTRAINT "nurseEntries_pk" PRIMARY KEY ("nurseId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."hospitalLocations" (
    "hospitalId" serial NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    CONSTRAINT "hospitalLocations_pk" PRIMARY KEY ("hospitalId")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "nurseEntries" ADD CONSTRAINT "nurseEntries_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "nurseEntries" ADD CONSTRAINT "nurseEntries_fk1" FOREIGN KEY ("hospitalId") REFERENCES "hospitalLocations"("hospitalId");
