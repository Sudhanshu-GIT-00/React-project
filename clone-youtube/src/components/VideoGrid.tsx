import { VideoCard } from "./VideoCard"

const VIDEOS = [
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  },
  {
    title: "There are some video | 30 day plan | play and watch",
    image: "image.png",
    thumbImage: "thumb.png",
    timestamp: "30 day ago",
    author: "Aman Raja",
    view: "500M",
  }
]

export const VideoGrid = () => {
  return <div className="grid grid-cols-1
  md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map(video => <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            timestamp={video.timestamp}
            author={video.author}
            view={video.view}
            ></VideoCard>
        </div>
      )}
    </div>
}
