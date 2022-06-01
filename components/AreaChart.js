const AreaChart = (props) => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-chart-area me-1"></i>
                    Area Chart Example
            </div>
        <div className="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
        </div>
    );
}

export default AreaChart; 