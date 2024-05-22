import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";
import MegaMenu from "@/components/frontend/NavigationMenu";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Navbar session={session} />

      <div className="mx-auto py-3 fixed top-[6rem] border-b border-gray-200 pl-11 mt-[1px] w-full z-50 bg-white">
        <MegaMenu />
      </div>

      <div className="mt-[80px] -z-10 min-h-screen">{children}</div>

      <Footer />
    </div>
  );
}
