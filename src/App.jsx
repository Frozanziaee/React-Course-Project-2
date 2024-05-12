import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Card from './component/Card'
import data from './data'


function App() {
  const cards = data.map(card => {
    return (
      <Card 
        key={card.id}
        img={card.coverImg}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
        openSpots={card.openSpots}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </>
  )
}

export default App
