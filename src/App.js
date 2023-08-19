import './App.css';
import { useEffect ,useState} from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
function App() {
  const [posts, setPosts] = useState('');
  const[loc,setLoc]=useState("auto:ip")
  useEffect(() =>{
    if(loc!==""){
      fetch(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=${loc}`)
      .then((response) => response.json())
      .then((data) => {
       
        if(data.error){
          setPosts("") 
        }
        else{
          setPosts(data)  
          if(data.current.condition.text.indexOf("Cloudy")>-1||data.current.condition.text.indexOf("cloudy")>-1){
            document.body.style.background=`url(https://c.pxhere.com/photos/ff/d4/storm_clouds_rain_florida_weather_nature_sky_landscape-1091806.jpg!d)`
          
           }
           if(data.current.condition.text.indexOf("Sun")>-1){
            document.body.style.background=`url(https://c4.wallpaperflare.com/wallpaper/307/723/696/field-ears-grains-rye-wallpaper-preview.jpg)`
          
           }
           if(data.current.condition.text.indexOf("rain")>-1||data.current.condition.text.indexOf("Rain")>-1){
            document.body.style.background=`url(https://samitivej-prod-new-website.s3.ap-southeast-1.amazonaws.com/public/uploads/descriptions/eeece6f94472507eff65a7277be708b6.jpg)`
          
           }
           if(data.current.condition.text.indexOf("Sunny")>-1||data.current.condition.text.indexOf("sunny")>-1){
            document.body.style.background=`url(https://c4.wallpaperflare.com/wallpaper/307/723/696/field-ears-grains-rye-wallpaper-preview.jpg)`
          
           }
           if(data.current.condition.text.indexOf("freez")>-1||data.current.condition.text.indexOf("Freez")>-1){
            document.body.style.background=`url(https://s3.envato.com/files/235126416/20517.jpg`
          
           }
           if(data.current.condition.text.indexOf("Clear")>-1){
            document.body.style.background=`url(https://s7d2.scene7.com/is/image/TWCNews/1031_nc_sunny_weather_3-1`
          
           }
           if(data.current.condition.text.indexOf("Mist")>-1){
            document.body.style.background=`url(https://image.shutterstock.com/image-photo/misty-road-out-town-netherlands-260nw-1576967857.jpg`
          
           }  
        }       
      })          
    }
    },[loc]);
      //function to get weather details of entered city
      const getWeather=()=>{   
        setLoc(document.getElementById('postsP').value.toUpperCase());
      }
      
      //function to search on pressing enter key
      const EnterKey=(event)=>{
        if (event.key === "Enter") {
        setLoc(event.target.value.toUpperCase())
      }
    }
   
  return (
   <>
     <div className="mainDiv">
      <div className='weatherHeading'><h1 id="app">Weather APP</h1></div>
        <div className='searchBar'>
           <input id='postsP' placeholder='enter location' autoFocus onKeyPress={EnterKey}></input>
            &emsp;
           <button type="button" id='mybtn' onClick={getWeather}>Click</button>
        </div>
        <div className='dataDis'>                  
               <div className='dataWeather' >          
              {(posts!='')?<div className='locat'>
                <h1 id='Location'><LocationOnOutlinedIcon sx={{fontSize:"30px"}}/> {posts.location.name}, {posts.location.region}</h1>
              <div><h3>{posts.current.last_updated}</h3></div>
            <div className='icontxt'>
              <div><img src={posts.current.condition.icon}/></div>&emsp;
              <div><h3>{posts.current.condition.text}</h3></div>
            </div>
            <div className='temp'>
              {/* <div><ThermostatIcon sx={{fontSize:"30px",height: "10vh"}}/></div>&emsp; */}
              <div><h1> {posts.current.temp_c}&#8451;</h1></div>
            </div>
              <div>
                <div><h3><AirIcon sx={{fontSize:"30px"}}/> {posts.current.wind_kph}km/hr</h3></div>
              </div>
              </div>:<div><p>Please Enter Correct location.</p></div>}
            </div>  
        </div>        
     </div> 
   </>
  );
}
export default App;
