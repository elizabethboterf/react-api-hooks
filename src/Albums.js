import React from "react";

function Albums({albums}){
  const list = [];
  console.log(albums);
  for(let album in albums){
    const item =(<li>{ablum.id} {album.title}</li>);
    list.push(item);
  }
    return (
      <ul>{list}</ul>                      
   );
}

export default Albums;