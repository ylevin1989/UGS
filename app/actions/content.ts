"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const CONTENT_PATH = path.join(process.cwd(), "data", "content.json");

export const getContent = cache(async function getContent() {
    try {
        const fileContent = await fs.readFile(CONTENT_PATH, "utf-8");
        return JSON.parse(fileContent);
    } catch (error) {
        console.error("Error reading content.json:", error);
        return null;
    }
});

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
