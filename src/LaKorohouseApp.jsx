import { Header } from './templates/Header'
import { Footer } from './templates/Footer'

import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <div className="App text-white bg-[url('/background.jpg')] bg-fixed flex flex-col min-h-screen justify-start">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
