import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard 
      title={"There are some video | 30 day plan | play and watch"}
      image={"image.png"}
      thumbImage={"thumb.png"}
      timestamp={"30 day ago"}
      author={"Aman Raja"}
      view={"500M"}
      />
    </div>
  );
}
