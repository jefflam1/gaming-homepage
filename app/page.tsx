import Header from "@/components/Header";
import Title from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Title />
    </main>
  );
}
