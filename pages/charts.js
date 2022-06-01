import AreaChart from '../components/AreaChart';

function table() {
    return (
        <div>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Charts</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item">
                        <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Charts</li>
                </ol>
                <div className="card mb-4">
                    <div className="card-body">
                        Chart.js is a third party plugin that is used to generate the charts in this template.
                        The charts below have been customized - for further customization options, please visit the
                        official
                        <a target="_blank" href="https://datatables.net/">
                            Chart.js documentation
                        </a>
                        .
                    </div>
                </div>
                <AreaChart/>
            </div>
        </div>
    );
}

export default table;