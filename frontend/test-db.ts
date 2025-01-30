import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Connecté à MySQL avec Prisma !");
  } catch (error) {
    console.error("❌ Erreur de connexion :", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
