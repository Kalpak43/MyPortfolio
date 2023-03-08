import Card from "./Card";

export default function Main() {
    return (
        <div className="main flex-grow h-full text-center m-10 mb-0 overflow-y-auto scroll-smooth">
            <div id="intro" className="h-full flex justify-center flex-col w-full">
                <h1 className="name text-5xl">Kalpak Goshikwar</h1>
                <h2>Web Dev</h2>
                <h3>Hi This is Kalpak Goshikwar</h3>
                
            </div>
            <div className="h-full flex justify-center items-center">
                <div className="card-container h-full w-full flex items-center justify-evenly flex-wrap overflow-x-auto" id="card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    {/* <Card/>  */}
                </div>
            </div>
            <a href="#card-container" className="down text-3xl"><i className="fa-solid fa-angle-down"></i></a>
        </div>
    )
}