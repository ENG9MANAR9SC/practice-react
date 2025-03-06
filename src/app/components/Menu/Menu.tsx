'use client'
import React from 'react';
import Link from 'next/link';
import styles  from "./Menu.module.css";
function Menu() {

    return  <div className={`${`styles.menu`} justify-between p-4 text-sky-700 bg-sky-200 border-lg flex gap-24`} >
                <a>manaralkheirsy@gmail.com</a>
                <ol className={styles.menuItems}>
                    <Link href="/">Home</Link>
                    <Link href="/categories">Categories</Link>
                    <Link href="/products">Products</Link>
                    <Link href="/information">Info</Link>
                    <Link href="/about">About</Link>
                    <Link href="/jobs">Jobs</Link>
                </ol>

            </div>
}

export default Menu;