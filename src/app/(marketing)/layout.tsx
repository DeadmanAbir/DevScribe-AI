import Navbar from "./_components/navbar";

const MarketingPageLayout = ({children}:{children:React.ReactNode}) => {
    return ( <div className="h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 to-black">
    <Navbar/>
    {children}
    </div> );
}
 
export default MarketingPageLayout;