import { table } from "console";
import style from "./ProductsTable.module.css"
const OurProducts = [
  { category: "Fruits", Name: "Apple", Num: 39 },
  { category: "Fruits", Name: "Banana", Num: 89 },
  { category: "Fruits", Name: "Tomato", Num: 39 },
];


function ProductsTable({ OurProducts }: { OurProducts: { category: string; Name: string; Num: number }[] }) {
  return (
    <table className="table-auto  p-3">
      <thead className="bg-sky-500/100 p-2 text-white">
        <tr>
          <th className={style.td}>Name</th>
          <th className={style.td}>Category</th>
          <th className={style.td}>Number</th>
        </tr>
      </thead>
      <tbody className="text-sky-800">
        {OurProducts.map((product, index) => (
          <tr key={index}>
            <td className={style.td}>{product.Name}</td>
            <td className={style.td}>{product.category}</td>
            <td className={style.td}>{product.Num}</td>
          </tr>
        ))}
        
      </tbody>
      </table>
  );
}


export { ProductsTable, OurProducts };