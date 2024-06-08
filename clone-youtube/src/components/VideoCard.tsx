export function VideoCard(props: any) {
  return (
    <div>
      <img src={props.image} className="rounded-xl w-150 h-100" alt="hallo" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 rounded-xl">
          <img className={"rounded-full w-12 h-12"} src={props.thumbImage} alt="" />
        </div>
        <div className="col-span-10 pl-5">
          <div>{props.title}</div>
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
