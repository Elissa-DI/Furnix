import Products from "@components/Home/products"
import Range from "@components/Home/range"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Range />
      <Products />
    </section>
  )
}

export default Home