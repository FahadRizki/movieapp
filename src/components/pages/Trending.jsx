import TopMovie from "../Movie/TopMovie"
import Navbar from "../Layouts/Navbar"

function Trending() {
    return (
       
            <div className="bg-black">
                <Navbar activeLink="trending"></Navbar>
                <TopMovie></TopMovie>
            </div>
       
    )
}

export default Trending