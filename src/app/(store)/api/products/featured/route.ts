import data from "../data.json";

export async function GET() {
  console.log("GET", "...featureds");
  return Response.json(
    data.products.filter((product) => product.featured === true)
  );
}
