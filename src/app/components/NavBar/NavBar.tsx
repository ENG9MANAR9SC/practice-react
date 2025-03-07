import styles from "./NavBar.module.css";

function NavBar() {
    return  <div className={`${styles.nav} flex justify-between text-sky-100 bg-sky-900`}>
                <a className="font-bold">
                    Company Profile
                </a>
                <ul className={`flex gap-18 cursor-pointer`}>
                    <li>Facebook</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul> 
            </div>

}
export default NavBar;