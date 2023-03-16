import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {
    return (
        <div className='bg-primary relative min-h-screen pb-44 md:pb-20'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout