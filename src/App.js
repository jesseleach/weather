function App() {
  const title = "Weather App";
  const subtitle = "Weather Report from Some of My Favorite Cities";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="Pictures" id="flex">
          <div className="image-container">
          <div className="center">New York City</div>
            <img
              className="box"
              src="https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg"
            ></img>
          </div>

          <div className="image-container">
            <div className="center">Mannheim</div>
          <img
            className="box"
            src="https://media.istockphoto.com/id/1223692341/photo/top-view-of-the-embankment-of-the-neckar-river-bridges-tv-tower-green-grass-and-trees.jpg?s=612x612&w=0&k=20&c=IxWnbsuu2tDLt07fTVWV7pGis9bdpFzfZmERdarz6lw="
          />
</div>

<div className="image-container">
            <div className="center">Jacksonville</div>
          <img
            className="box"
            src="https://www.hellolanding.com/blog/wp-content/uploads/2021/09/image2-12-1200x800.jpg"
          />
</div>


</div>     
        
        <div className="display">
        <img
        className="weather"
        src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/6DQSYHUBHNHVBKLHCRKC6WYDVI.jpg"
        />
     <h2>weather</h2>
      </div>
      </div>
      <footer>
      <p>words</p>
      </footer>
     
    </div>
  );
}

export default App;
