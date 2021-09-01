import React, {useEffect, useState} from "react";
import Albums from "./Albums.js";

function AlbumList({ user = {}}) {
  const [albums, setAlbums]= useState(null);
  
  useEffect(()=>{
    const abort = new AbortController();
    setAlbums({});
    async function loadAlbums(){
      try{
        const response = await fetch(
       `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`,
        {signal: abort.signal});
        const albumsAPI = await response.json();
        setAlbums(albumsAPI);
      }catch(error){
        if(error.name==="AbortError"){
        }else{
          throw error;
        }
      }
    }
    loadAlbums();
    return ()=>abort.abort();
  },[user]);
  
  if(albums){
    console.log(albums);
    return <Albums albums={albums} />;
  }
  return <p>Please click on a user name to the left</p>;
}

export default AlbumList;
