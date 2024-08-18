import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const LineGraph = () => {
  const options = {
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thurday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    datasets: [
      {
        label: 'Steps',
        data: [3000, 4100, 4500, 6000, 700, 8500],
        boderColor: 'rgba(75,192,192)',
      },
      {
        label: 'Runnig',
        data: [3000, 4100, 4500, 6000, 700, 8500],
        boderColor: 'rgba(75,192,192)',
      },
    ],
  };
  const data = {};
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
