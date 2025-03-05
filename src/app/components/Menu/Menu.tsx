
import styles  from "./Menu.module.css";
function Menu() {

    return  <div className={`${`styles.menu`} justify-between p-4 text-sky-700 bg-sky-200 border-lg flex gap-24`} >
                <a>manaralkheirsy@gmail.com</a>
                <ol className={styles.menuItems}>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Products</li>
                    <li>Info</li>
                    <li>About</li>
                    <li>Jobs</li>
                </ol>

            </div>
}

export default Menu;