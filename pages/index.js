import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from 'next/link'

export default function Home() {
  return (
   <div>
     <h1>Home page</h1>
       <Link href="/maro"><a>See Maro Listing</a></Link>
   </div>
  )
}
