import { useEffect, useState } from "react";
import { formatISO9075 } from 'date-fns';
import { useParams } from "react-router-dom";

export default function PostPage() {

    const [postData, setPostData] = useState('');
    const { _id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3500/post/${ _id }`, {
            method: 'GET',
            credentials: 'include'
        }).then(
            res => { res.json().then(postData => { setPostData(postData); }); }
        );;
    }, []);

    return (
        <>
            {postData && (
                <div>
                    <img className=" h-96" src={'http://localhost:3500/' + postData.filePath} />

                    <div className="text-4xl">{postData.title}</div>

                    <div className="flex gap-4 text-sm">
                        <div className="text-m">Joe Lee</div>
                        <div className="text-m">{formatISO9075(postData.date)}</div>
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
                </div>
            )}
        </>
    );
}
