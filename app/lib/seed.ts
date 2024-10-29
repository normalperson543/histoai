import prisma from "./db";
import { initImagesDirectory } from "./actions";
export default async function seedDatabase() {
    const users = await prisma.user.createMany({
        "data": [
            {
                username: "admin",
                firstName: "Admin",
                lastName: "Admin",
                password: "12345"
            }
        ],
    });
    await initImagesDirectory();
    console.log("Successfully seeded the database")
}