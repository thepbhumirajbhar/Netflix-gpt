interface VideoTitleProps {
  title: string;
  overview: string;
}




const VideoTitle = ({title, overview}: VideoTitleProps) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-6xl"> {title} </h1>
      <p className="py-6 text-lg w-1/3"> {overview} </p>

      <div className="">
        <button className="bg-gray-500/40 text-white p-4 px-12 text-xl rounded-lg mx-2"> 
          ▶️ Play
        </button>
        <button className="bg-gray-500/40 text-white p-4 px-12 text-xl rounded-lg">
          More Info
        </button>
      </div>
      
    </div>
  )
}


export default VideoTitle; 