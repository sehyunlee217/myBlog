import { useEffect, useState, useContext } from "react";
import { format } from 'date-fns';
import { useParams, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../components/UserContext";

export default function ArtPostPage() {
    const { userInfo, setUserInfo } = useContext(UserContext);

    const [artpostData, setArtPostData] = useState('');
    const { _id } = useParams();

    useEffect(() => {
        fetch(`https://api.shyun.dev/arts/${ _id }`, {
            method: 'GET',
            credentials: 'include'
        }).then(
            res => { res.json().then(data => { setArtPostData(data); }); }
        );;
    }, []);

    useEffect(() => {
        fetch('https://api.shyun.dev/auth/login', {
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
        <>
            {artpostData && (
                <div className="flex justify-center items-center font-nunito h-full">
                    <div className="flex flex-col max-w-4xl">
                        <img className=" max-h-[700px]" src={'https://api.shyun.dev/' + artpostData.filePath} />
                        <div className="flex flex-col justify-center items-center py-4">
                            <div className="text-xl font-bold">{artpostData.title}</div>
                            <div>{artpostData.summary}</div>
                            <div>{format(new Date(artpostData.createdAt), "MMM do. yyyy")}</div>
                            <div className="flex text-sm">
                                {userInfo && (
                                    <Link to={'edit'} ><div>Edit</div></Link>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}