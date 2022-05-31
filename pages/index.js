import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardComponent from "../components/CardComponent";

export default function Home() {
    return (
        <div className="container cards d-flex gap-3">
            <div className="cards d-flex gap-3 mt-5">
                <CardComponent bgColor='bg-primary' text='Primary Card'></CardComponent>
                <CardComponent bgColor='bg-warning' text='Warning Card'></CardComponent>
                <CardComponent bgColor='bg-success' text='Success Card'></CardComponent>
                <CardComponent bgColor='bg-danger' text='Danger Card'></CardComponent>
            </div>
        </div>
    )
}
