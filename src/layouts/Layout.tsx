import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// to ensure that the children must be pass to the layout
type Props = {
   children : React.ReactNode;
   showHero? : boolean;
}

const Layout = ({children, showHero = false}: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            {showHero && <Hero/>}
           <div className="container mx-auto flex-1 py-10">{children}</div>
           <Footer/> 
        </div>
        
    )
}

export default Layout;