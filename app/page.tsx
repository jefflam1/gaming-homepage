import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import SecondContent from "@/components/SecondContent";
import Slider from "@/components/Slider";
import ThirdContent from "@/components/ThirdContent";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-[1440px] mx-auto">
      <Header />
      <Title />
      <MainContent />
      <Slider />
      <SecondContent />
      <ThirdContent />
      <Footer />
    </main>
  );
}
