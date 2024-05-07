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

      <div className="mx-auto py-3 fixed top-[6rem] border-b border-gray-200 pl-11 mt-[1px] w-full z-50 bg-white">
        <MegaMenu />
      </div>

      <div className="mt-[150px] -z-10">{children}</div>
    </div>
  );
}
