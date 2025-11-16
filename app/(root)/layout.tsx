import Navbar from "@/components/Navbar";
import { Suspense } from "react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
        <Suspense fallback={<nav className="h-14 bg-gray-100 animate-pulse" />}>
          <Navbar />
        </Suspense>
        {children}
    </main>
  );
}