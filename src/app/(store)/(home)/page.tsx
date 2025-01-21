export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="bg-gray-700">
      <h1>Home Page</h1>
    </div>
  );
}
