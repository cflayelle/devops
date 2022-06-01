import Head from "next/head";
import AreaChart from '../components/AreaChart';

function table(){
    return <div>
<div>
      
      <div class="container-fluid px-4">
        <h1 class="mt-4">Charts</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li class="breadcrumb-item active">Charts</li>
        </ol>
        <div class="card mb-4">
          <div class="card-body">
            Chart.js is a third party plugin that is used to generate the charts in this template. 
            The charts below have been customized - for further customization options, please visit the official
            <a target="_blank" href="https://datatables.net/">
              Chart.js documentation
            </a>
              .
          </div>
        </div>   
        <AreaChart/>
      </div>

    </div>
  </div>
     
}
export default table