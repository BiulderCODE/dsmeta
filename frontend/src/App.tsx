import NotificationButton from "./componentes/notification button"
import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard"



function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard></SalesCard>
          </div>
        </section>
      </main>
    </>
  )

}

export default App
