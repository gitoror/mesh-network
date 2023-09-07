export default async function Test() {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}
