export default function Test() {
  const day = new Date();
  console.log(day);
  return (
    <div>
      <h1>Test</h1>
      <p>{day}</p>
    </div>
  );
}
