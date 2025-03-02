
import styles  from "./Menu.module.css";
function Menu() {

    return  <div className="${`styles.menu`} text-sky-700 bg-sky-200 border-lg flex gap-12" >
                <h2>Menu</h2>
                <ol className={styles.menuItems}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Info</li>
                </ol>

            </div>
}

export default Menu;