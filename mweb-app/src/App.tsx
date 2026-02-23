import NavBar from '@components/Layout/Navigation/NavBar'
import ViewPage from '@pages/ViewPage'

function App() {
  return (
    <body className="bg-[url(/backgrounds/fundoazul/fundoazul_03.jpg)] bg-fixed min-full bg-cover">
      <NavBar />
      <ViewPage />
    </body>
  )
}

export default App