import SoonForm from "@/components/ui/SoonForm";
import Link from "next/link";

function ShopPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <nav className="absolute top-0 right-0 z-10 p-6">
        <Link href="/home" className="text-xl hover:opacity-70">
          Home
        </Link>
      </nav>
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: "url('/images/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />
      <SoonForm />
    </div>
  );
}

export default ShopPage;
