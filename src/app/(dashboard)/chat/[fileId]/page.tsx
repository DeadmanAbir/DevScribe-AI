import MainScreen from "../_components/mainscreen";
import Navbar from "../_components/navbar";

const Interaction = ({params} : any) => {
    console.log(params);
    //now fetch all detasils about the file and then proceed
    return ( <div className="h-screen overflow-hidden max-w-full mx-auto">
        <Navbar/>
        <MainScreen/>
    </div> );

}
 
export default Interaction;