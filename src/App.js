
import ArcSvg from './widgets/arcSvg/arcSvgComponent';
import SparkLineSvg from './widgets/sparkLine/sparkLineComponent';


function App() {
  return (
    <div className="App">
      <ArcSvg width={300} height={300} rotateToPercentage={86} />
      <SparkLineSvg width={600} strokeWidth={2} percentages={[70,30,60,20,40,20,45,10,40,50,14,40,80,3,60,90,60,100,60,90,50,14,40,80,3,60,0,20,40,100,70,30,60,20,40,20,45,10,40,50,14,40,80,3,60,90,60,100,60,90,50,14,40,80,3,60,0,20,40,100,70,30,60,20,40,20,45,10,40,50,14,40,80,3,60,90,60,100,60,90,50,14,40,80,3,60,0,20,40,100]} />
    </div>
  );
}

export default App;
