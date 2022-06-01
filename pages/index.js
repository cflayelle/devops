import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import CardComponent from "../components/CardComponent";

export default function Home() {
    return (
        <div className="container">
            <div className="cards d-flex gap-3 mt-5 flex-column flex-lg-row">
                <CardComponent bgColor='bg-primary' text='Primary Card'/>
                <CardComponent bgColor='bg-warning' text='Warning Card'/>
                <CardComponent bgColor='bg-success' text='Success Card'/>
                <CardComponent bgColor='bg-danger' text='Danger Card'/>
            </div>
        </div>
    )
}
