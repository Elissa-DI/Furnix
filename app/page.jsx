import Footer from "@components/Home/footer"
import Products from "@components/Home/products"
import Range from "@components/Home/range"
import Slider from "@components/Home/slider"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Range />
      <Products />
      <Slider />
      <Footer />
    </section>
  )
}

export default Home