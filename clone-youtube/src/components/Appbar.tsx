import { SearchBar } from "./SearchBar"

export const AppBar=()=>{
    return <div className="flex justify-between bg-black text-white p-2">
        <div>
            Youtube
        </div>
        <div>
            <SearchBar/>
        </div>
        <div>
            sign in
        </div>
    </div>
}