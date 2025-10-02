export default function TailwindTest() {
  return (
    <div className="p-4">
      <div className="bg-blue-500 sm:bg-red-500 text-white p-4">
        Resize the screen: blue below 640px, red at ≥640px
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="bg-green-500 p-4 text-white">Box 1</div>
        <div className="bg-purple-500 p-4 text-white">Box 2</div>
      </div>
    </div>
  );
}
