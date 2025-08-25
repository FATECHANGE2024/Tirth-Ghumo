import Navbar from "@/component/navbar"
import Header from "@/component/header"
import UpcomingDestination from "@/section/upcoming-destination";
import Footer from "@/component/footer"
import Hero from "@/section/hero";
import Gallery from "@/component/gal";
import Services from "@/section/services";
import Temples from "@/section/temples";
import Feedback from "@/section/feedback";


export default function Home() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <UpcomingDestination/>
    <Services/>
    <Temples/>
    <Gallery/>
    <Feedback/>
    <Footer />
   
    </>
  );
}
