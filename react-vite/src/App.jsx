import DisplayProduct from './component/DisplayProduct';
import DisplayProductBrands from './component/DisplayProductBrands';
import DisplayProductByCategory from './component/DisplayProductByCategory';
import MultipleTodos from './component/MultipleTodos';
import NamesList from './component/NamesList';
import ProductDetail from './component/ProductDetail';
import SingleTodoDetail from './component/SingleTodoDetail';
import "./App.css"

export default function App() {
    return (
        <>
            <h1 style={{textAlign:"center"}}>Tasks: how to use &#10100; javascript &#10101; inside JSX  and <span style={{color:'gold'}}>array.map()</span> </h1>
            <h2 style={{textAlign:"center"}}> all the json/object and array[] datas are in their respective &lt;Components/&gt;. </h2>
            <hr />
            <SingleTodoDetail />
            <hr />
            <ProductDetail />
            <hr />
            <NamesList />
            <hr />
            <MultipleTodos />
            <hr />
            <DisplayProduct />
            <hr />
            <DisplayProductByCategory />
            <hr />
            <DisplayProductBrands />
            <hr />
        </>
    )
}
