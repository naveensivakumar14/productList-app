function Header(){

    return(
        <div className="flex justify-between p-4 bg-[#17153B] text-white">
            <h1 className="text-2xl font-bold">Ezcart</h1>
            <div className=" text-xl font-bold">
                <button><i className="fa fa-shopping-cart"></i></button>
            </div>
        </div>
    )
}
export default Header