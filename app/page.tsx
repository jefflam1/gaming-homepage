import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Slider from "@/components/Slider";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Title />
      <MainContent />
      <Slider />
      <Footer />
    </main>
  );
}
