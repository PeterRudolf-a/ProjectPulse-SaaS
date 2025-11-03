export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 border-t">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} ProjectPulse. All rights reserved.
      </p>
    </footer>
  );
}
