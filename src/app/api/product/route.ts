
import { PRODUCT_DATA } from "./data";

export async function GET() {
    return new Response(JSON.stringify(PRODUCT_DATA))   
}