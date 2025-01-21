import data from "../data.json";

export async function GET() {
  console.log("GET", "...featureds");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json(
    data.products.filter((product) => product.featured === true)
  );
}
