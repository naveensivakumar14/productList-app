import {Link} from 'react-router-dom';



function Header(){

    return(

        <div className="flex justify-between items-center p-6 bg-[#17153B] text-white">
            <h1 className="text-2xl font-bold">Ezcart</h1>
            <div className="flex  font-bold gap-4">
                <p className="p-1"><Link to={'ProductList'}>All Products</Link> </p>
                <p className="p-1"><Link to={'Cart'}>Your Cart</Link></p>
            </div>
            <div className=" text-xl font-bold">
                <button><i className="fa fa-shopping-cart"></i></button>
            </div>
        </div>
    )
}
export default Header