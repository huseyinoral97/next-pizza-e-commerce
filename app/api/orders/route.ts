import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../utils/connect";
import { getAuthSession } from "@/app/utils/auth";


// GET ALL CATEGORIES
export const GET = async (req: NextRequest) => {
    const session = await getAuthSession();

    if (session) {
        try {
            const categories = await prisma.category.findMany();
            return new NextResponse(JSON.stringify(categories), { status: 200 });
        } catch (error) {
            return new NextResponse(
                JSON.stringify({ message: "Something went wrong", status: 500 })
            );
        }
    } else {
        return new NextResponse(
            JSON.stringify({ message: "You are not authenticated!", status: 401 })
        );
    }
}

export const POST = () => {
    return new NextResponse("Hello", { status: 200 });
};
