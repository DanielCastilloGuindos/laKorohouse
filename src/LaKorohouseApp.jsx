import { Header } from './templates/Header'
import { Footer } from './templates/Footer'

import { getProducts } from './helpers/getProducts'

import { AppRouter } from './router/AppRouter'

function App() {
  let products = getProducts();

  return (
    <div className="App bg-gray-50">
      <Header />

      <main className=''>
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
