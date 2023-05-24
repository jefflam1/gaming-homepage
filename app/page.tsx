import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Title />
      <MainContent />
    </main>
  );
}
