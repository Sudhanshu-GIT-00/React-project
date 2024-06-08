export function VideoCard(props: any) {
  return (
    <div className="p-5 bg-black">
      <img src={props.image} className="rounded-xl " alt="hallo" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 rounded-xl">
          <img className={"rounded-full"} src={props.thumbImage} alt="" />
        </div>
        <div className="col-span-10 pl-4">
          <div className="text-justify">{props.title}</div>
          <div className="col-span-10 text-gray-400 text-base">
            {props.author}
          </div>
          <div className="col-span-10 text-gray-400 text-base">
          {props.view} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
