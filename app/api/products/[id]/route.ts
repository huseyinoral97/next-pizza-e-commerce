import { prisma } from "../../../utils/connect"
import { NextRequest, NextResponse } from "next/server";


// GET SINGLE PRODUCT
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    console.log("params", params)
    try {
        const singleProduct = await prisma.product.findUnique({
            where: {
                id: id,
            }
        });
        return new NextResponse(JSON.stringify(singleProduct), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }),
            { status: 500 }
        );
    }
};