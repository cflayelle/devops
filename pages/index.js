import CardComponent from "../components/CardComponent";
import DataTableComponent from "../components/DataTableComponent";

export default function Home() {
    return (
        <div className="container">
            <div className="cards d-flex gap-3 mt-5 flex-column flex-lg-row">
                <CardComponent bgColor='bg-primary' text='Primary Card'/>
                <CardComponent bgColor='bg-warning' text='Warning Card'/>
                <CardComponent bgColor='bg-success' text='Success Card'/>
                <CardComponent bgColor='bg-danger' text='Danger Card'/>
            </div>

            <DataTableComponent/>
        </div>
    )
}
