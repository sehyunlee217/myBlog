import { useEffect, useState, useContext } from "react";
import { formatISO9075 } from 'date-fns';
import { useParams, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../components/UserContext";

export default function PostPage() {
    const { userInfo, setUserInfo } = useContext(UserContext);
    const [postData, setPostData] = useState('');
    const { _id } = useParams();

    useEffect(() => {
        fetch(`https://myblogapi-410916.ue.r.appspot.com/post/${ _id }`, {
            method: 'GET',
            credentials: 'include'
        }).then(
            res => { res.json().then(postData => { setPostData(postData); }); }
        );;
    }, []);

    useEffect(() => {
        fetch('https://myblogapi-410916.ue.r.appspot.com/auth/login', {
            method: 'GET',
            credentials: "include"
        }).then(res => {
            if (res.status == 403) {
                // not logged in so userinfo is still null
                // forbidden response
                console.clear();
            }
            else {
                res.json().then(info => {
                    setUserInfo(info);
                });
            }
        });
    }, []);

    return (
        <div className="flex items-center justify-center max-w-4xl pb-10 mb-10">
            {postData && (
                <div>
                    <img className="object-cover h-96" src={'https://api.shyun.dev/' + postData.filePath} />
                    <div className="flex justify-between items-center font-nunito">
                        <div className="text-4xl pt-3">{postData.title}</div>
                        {userInfo && (
                            <Link to={'edit'} ><div className="text-m">Edit</div></Link>
                        )}
                    </div>

                    <div className="flex justify-between text-sm font-nunito">
                        <div className="text-m">Joe Lee</div>
                        <div className="text-m">{formatISO9075(postData.date)}</div>
                    </div>

                    <div className="pt-8" dangerouslySetInnerHTML={{ __html: postData.content }}></div>
                </div>
            )}
        </div>
    );
}
