import CardComponent from "../components/CardComponent";
import AreaChart from '../components/Areachart';
import BarChart from '../components/BarChart';
import DataTableComponent from "../components/DataTableComponent";
import Head from "next/head";

import Navbar from "../components/navbar";

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
                      <div className="card mb-4">
                          <div className="card-header">
                              <i className="fas fa-chart-bar me-1"></i>
                                  Area Chart Example
                          </div>
                          <div className="card-body">
                            <canvas id="myBarChart" width="100%" height="40"></canvas>
                            <AreaChart/>
                          </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-bar me-1"></i>
                                Bar Chart Example
                        </div>
                        <div className="card-body">
                          <canvas id="myBarChart" width="100%" height="40"></canvas>
                          <BarChart/>
                        </div>
                      </div>
                    </div>
                </div>
                <DataTableComponent/>
            </div>
        </div>
    );
}