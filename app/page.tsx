


import { HeroSectionJoyeria } from "@/components/Hero";
import { NavbarJoye } from "@/components/NavBar";
import { ProductsCategories } from "@/components/ProductsCategories"; 
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
 

import { Banner } from "@/components/Banner";

export default function Home() {

  
  return (

    <main>

      <NavbarJoye />
      <HeroSectionJoyeria />
      {/* <ProductsCategories /> */}
      <ServicesSection />
      <Banner />
      <Footer />

      
      



      {/* <div className="h-200"></div> */}

      


    </main>

  );
}
