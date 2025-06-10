import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultChart=[
  { "id": 1, "name": "Ayan", "math": 78, "physics": 72, "chemistry": 80 },
  { "id": 2, "name": "Rima", "math": 85, "physics": 88, "chemistry": 81 },
  { "id": 3, "name": "Tariq", "math": 92, "physics": 91, "chemistry": 89 },
  { "id": 4, "name": "Sneha", "math": 67, "physics": 65, "chemistry": 70 },
  { "id": 5, "name": "Nabil", "math": 73, "physics": 70, "chemistry": 75 },
  { "id": 6, "name": "Fariha", "math": 88, "physics": 86, "chemistry": 90 },
  { "id": 7, "name": "Imran", "math": 59, "physics": 62, "chemistry": 55 },
  { "id": 8, "name": "Lima", "math": 91, "physics": 89, "chemistry": 92 },
  { "id": 9, "name": "Rafi", "math": 76, "physics": 74, "chemistry": 79 },
  { "id": 10, "name": "Misha", "math": 64, "physics": 61, "chemistry": 66 },
  { "id": 11, "name": "Zubair", "math": 82, "physics": 80, "chemistry": 84 },
  { "id": 12, "name": "Tumpa", "math": 69, "physics": 67, "chemistry": 72 },
  { "id": 13, "name": "Hasib", "math": 95, "physics": 94, "chemistry": 96 },
  { "id": 14, "name": "Nusrat", "math": 87, "physics": 85, "chemistry": 89 },
  { "id": 15, "name": "Arif", "math": 60, "physics": 58, "chemistry": 62 },
  { "id": 16, "name": "Puja", "math": 80, "physics": 79, "chemistry": 83 },
  { "id": 17, "name": "Riyan", "math": 74, "physics": 76, "chemistry": 72 },
  { "id": 18, "name": "Sumaiya", "math": 90, "physics": 92, "chemistry": 88 },
  { "id": 19, "name": "Nadim", "math": 66, "physics": 68, "chemistry": 65 },
  { "id": 20, "name": "Borna", "math": 70, "physics": 73, "chemistry": 69 }
]



const ReChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultChart}>
             <XAxis></XAxis>   
             <Line dataKey='physics'></Line>
             <Line dataKey='math' stroke='red'></Line>
             <YAxis></YAxis>
            </LineChart>
        </div>
    );
};

export default ReChart;