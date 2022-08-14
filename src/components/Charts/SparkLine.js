import {
  ChartComponent,
  Inject,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Category,
  Legend,
  DataLabel,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

function SparkLine({ data }) {
  return (
    <>
      <ChartComponent
        title="Sales Statistics"
        primaryXAxis={{ valueType: 'Category', title: 'Month' }}
        legendSettings={{ visible: true }}
        tooltip={{ enable: true }}
      >
        <Inject services={[LineSeries, Category, Legend, DataLabel, Tooltip]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective
            type="Line"
            dataSource={data}
            xName="month"
            yName="sales"
            name="Sales"
            marker={{ dataLabel: { visible: true }, visible: true }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </>
  );
}

export default SparkLine;
