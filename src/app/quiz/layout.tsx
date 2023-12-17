export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav>
      <h1>Header</h1>
      {children}
    </nav>
  );
}
