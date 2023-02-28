import Header from './header'
import Footer from './footer'

const Layout = ({children}) => {
    return (
        <div className='bg-primary'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout