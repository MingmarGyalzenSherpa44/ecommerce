import Hero from "../molecules/Hero";
import SubNav from "../molecules/SubNav";
import Categories from "../molecules/Categories";
import Advertisement from "../molecules/Advertisement";
import Mission from "../molecules/Mission";

export default function Home() {
  return (
    <>
      <SubNav />
      <Hero />
      <Categories />
      <Advertisement />
      <Mission />
    </>
  )
}
