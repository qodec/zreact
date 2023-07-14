export default function Footer({ year }) {
  year = year || 2025;

  return (
    <footer className="py-6 px-6 bg-blue-900 text-white text-opacity-50 flex justify-between">
      <div>Logo</div>
      <div>Copyright &copy; {year}</div>
    </footer>
  );
}
