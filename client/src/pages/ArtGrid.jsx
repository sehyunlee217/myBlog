import { useEffect, useState } from "react";
import ArtPost from "../components/ArtPost";

export default function ArtGrid() {
    const [artposts, setArtPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3500/arts', {
            method: 'GET',
            credentials: "include"
        }).then(
            res => { res.json().then(artposts => { setArtPosts(artposts); }); }
        );
    }, []);

    return (
        <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 sm:max-w-lg md:grid-cols-3 md:max-w-3xl w-full grid-flow-dense pb-10 ">
                {artposts.length > 0 && artposts.sort((prev, cur) => new Date(prev.date).getTime() - new Date(cur.date).getTime()).map(artpost =>
                    <ArtPost
                        key={artpost._id}
                        title={artpost.title}
                        image={artpost.filePath}
                        date={artpost.createdAt}
                        summary={artpost.summary}
                        _id={artpost._id}
                        num={artpost.art}
                    />
                )}
            </div>
        </div>

    );
}