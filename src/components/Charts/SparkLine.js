import { LineChart, Line } from 'recharts';

function SparkLine({ data, color, type }) {
  return (
    <LineChart width={200} height={50} data={data}>
      <Line type={type} dataKey="pv" stroke={color} strokeWidth={1} />
    </LineChart>
  );
}

export default SparkLine;
