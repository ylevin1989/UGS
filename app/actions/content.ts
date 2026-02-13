"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const CONTENT_PATH = path.join(process.cwd(), "data", "content.json");

export async function getContent() {
    try {
        const data = await fs.readFile(CONTENT_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading content:", error);
        return null;
    }
}

export async function updateContent(newData: any) {
    try {
        await fs.writeFile(CONTENT_PATH, JSON.stringify(newData, null, 2), "utf-8");
        revalidatePath("/");
        return { success: true };
    } catch (error) {
        console.error("Error updating content:", error);
        return { success: false, error: "Failed to save data" };
    }
}
