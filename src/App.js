function App() {
  const title = "Weather App";
  const subtitle = "Weather Report from Some of My Favorite Cities";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="Pictures" id="flex">
          <img className="box" src="https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg"/>
          <img className="box" src="https://media.istockphoto.com/id/1223692341/photo/top-view-of-the-embankment-of-the-neckar-river-bridges-tv-tower-green-grass-and-trees.jpg?s=612x612&w=0&k=20&c=IxWnbsuu2tDLt07fTVWV7pGis9bdpFzfZmERdarz6lw="/>
          <img className="box" src="https://media.istockphoto.com/id/635980782/photo/jacksonville-florida-skyline.jpg?s=612x612&w=0&k=20&c=RxzHa9J6kFYF4E3J-HUVGMnb-fWEbsRZ7-QI0oRJen0="/>
        </div>
        <div className="display">
          <h1>Display</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
