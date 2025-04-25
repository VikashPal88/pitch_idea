import Navbar from "@/components/Navbar";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      {/* Navbar is an async server component */}
      <Navbar />
      {children}
    </main>
  );
}
