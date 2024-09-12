import Hero from "../molecules/Hero";
import SubNav from "../molecules/SubNav";
import Categories from "../molecules/Categories";
import Advertisement from "../molecules/Advertisement";
import Mission from "../molecules/Mission";
import EverlaneFavorites from "../molecules/EverlaneFavorites";

export default function Home() {
  return (
    <>
      <SubNav />
      <Hero />
      <Categories />
      <Advertisement />
      <Mission />
      <EverlaneFavorites />
    </>
  )
}
