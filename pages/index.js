import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CardComponent from "../components/CardComponent";
import AreaChart from '../components/ areachart';
import BarChart from '../components/BarChart';

export default function Home() {
    return (
        <div>
            <div className="container">
                <div className="cards d-flex gap-3 mt-5 p-5 flex-column flex-lg-row">
                    <CardComponent bgColor='bg-primary' text='Primary Card'/>
                    <CardComponent bgColor='bg-warning' text='Warning Card'/>
                    <CardComponent bgColor='bg-success' text='Success Card'/>
                    <CardComponent bgColor='bg-danger' text='Danger Card'/>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <AreaChart/>
                    </div>
                    <div className="col-xl-6">
                        <BarChart/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
