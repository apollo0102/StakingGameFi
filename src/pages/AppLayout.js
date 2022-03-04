import Header from '../components/header'
import Footer from '../components/footer'

const AppLayout = (props) => {
  return (
    // <div className="app-layout bg-[url('https://journeytothemetaverse.net/wp-content/uploads/2022/01/saintVsHellboundBanner-1.gif')] bg-center bg-no-repeat bg-cover">
      <div className="app-layout font-sans">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default AppLayout