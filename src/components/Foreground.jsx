import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is mapping data from foreground to card component.",
      filesize: ".9mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is mapping data from foreground to card component.",
      filesize: ".9mb",
      close: true,
      tag: { isopen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "This is mapping data from foreground to card component.",
      filesize: ".9mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full  flex gap-5 flex-wrap p-5">
     {data.map((item, index)=> 
      <Card data={item} reference = {ref}/>
     )}
    </div>
  );
};

export default Foreground;
