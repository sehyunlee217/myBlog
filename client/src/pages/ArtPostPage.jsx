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
        fetch(`http://localhost:3500/arts/${ _id }`, {
            method: 'GET',
            credentials: 'include'
        }).then(
            res => { res.json().then(data => { setArtPostData(data); }); }
        );;
    }, []);

    useEffect(() => {
        fetch('http://localhost:3500/auth/login', {
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
                <div className="flex justify-center font-nunito">
                    <div className="flex flex-col max-w-3xl">
                        <img className="" src={'http://localhost:3500/' + artpostData.filePath} />
                        <div className="flex justify-between items-center">
                            <div>{artpostData.title}</div>
                            <div>{artpostData.summary}</div>
                        </div>

                        <div className="flex gap-4 text-sm">
                            <div className="text-m">{format(new Date(artpostData.createdAt), "MMM do. yyyy")}</div>
                            {userInfo && (
                                <Link to={'edit'} ><div className="text-m">Edit</div></Link>
                            )}
                        </div>
                    </div>

                </div>
            )}
        </>
    );
}