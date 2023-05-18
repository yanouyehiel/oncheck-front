import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Variation des prix</h2>
            <Line 
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Evolution des prix au cours du temps sur ce produit"
                        },
                        legend: {
                            display: false
                        }
                    }
                }}
            />
        </div>
    )
}

export default LineChart;