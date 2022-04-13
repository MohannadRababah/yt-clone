import React ,{useState,useEffect} from "react";
import SearchBar from "./SearchBar";
import VideoList from "./vidoeList";
import VideoDetail from "./VideoDetail";
import useVideos from "./UseVideos";


const App=()=>{

   
    
    const [selectedVideo,setSelectedVideo]=useState(null)
    
    const [videos,search]=useVideos('sky')
    
    
    useEffect(()=>{
        setSelectedVideo(videos[0])
    },[videos])

    
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>

            <div className="ui grid">
                
            <div className="ui row">

            <div className="eleven wide column">
            <VideoDetail video={selectedVideo}/>
            

            </div></div>
            
            <VideoList onVideoSelect={(video)=>setSelectedVideo( video )} videos={videos}/>
            </div>
        </div>
    );
}



export default App;

//AIzaSyBB11OE2rG4xhB-13a1sKm1yg-3ZMwVi0c