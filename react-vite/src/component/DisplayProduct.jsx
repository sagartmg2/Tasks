
import Output from "../assets/show-products-list.png"

export default function DisplayProduct() {
    let products = [
        { id: 1, category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { id: 2, category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { id: 3, category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { id: 4, category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { id: 5, category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { id: 6, category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ];
    return (
        <>
            <h2>DisplayProducts // Output should be as image below </h2>
            <img src={Output} alt="" />
            {/* <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>In-Stock</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>name</td>
                        <td>price</td>
                        <td>stocked</td>
                        <td>category</td>
                    </tr>
                </tbody>
            </table> */}
        </>
    )
}
