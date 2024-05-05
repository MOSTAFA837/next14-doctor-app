import Navbar from "@/components/frontend/Navbar";
import MegaMenu from "@/components/frontend/NavigationMenu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />

      <div className="mx-auto py-3 max-w-5xl">
        <MegaMenu />
      </div>

      {children}
    </div>
  );
}
