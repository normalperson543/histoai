import prisma from "./db";
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
}