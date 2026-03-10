interface VideoTitleProps {
  title: string;
  overview: string;
}




const VideoTitle = ({title, overview}: VideoTitleProps) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-16 absolute text-white bg-linear-to-r from-black">
      <h1 className="font-bold text-6xl"> {title} </h1>
      <p className="py-6 text-lg w-1/3"> {overview} </p>

      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg mx-2
         hover:bg-white/80 cursor-pointer"> 
          ▶ Play
        </button>
        <button className="bg-gray-500/40 text-white p-4 px-12 text-xl rounded-lg cursor-pointer hover:bg-gray-600/50">
          ⓘ More Info
        </button>
      </div>
      
    </div>
  )
}


export default VideoTitle; 