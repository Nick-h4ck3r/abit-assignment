import Footer from "@/components/Footer";
import Header from "@/components/Header";
import UserPage from "@/components/UserPage";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <UserPage />
      <Footer />
    </div>
  );
}
