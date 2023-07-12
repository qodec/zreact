export default function Footer({ year }) {
  year = year || 2025;

  return (
    <footer>
      <div>Logo</div>
      <div>Copyright &copy; {year}</div>
    </footer>
  );
}
