export default function ErrorMessage({ message }) {
  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-red-50 border border-red-200 rounded-lg text-center text-red-700">
      <p className="font-semibold">Unable to load photos</p>
      <p className="text-sm mt-1">{message}</p>
    </div>
  );
}
