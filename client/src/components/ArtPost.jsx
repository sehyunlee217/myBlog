import { Link } from "react-router-dom";
import { format } from 'date-fns';

function ArtPost({ title, image, date, summary, _id, num }) {

    return (
        <Link to={`/arts/${ _id }`} className="m-1 flex font-nunito items-center justify-center hover:cursor-pointer">
            <div className="flex flex-col justify-between self-center ">
                <div className="">
                    <div className="overflow-hidden">
                        <img className="object-cover hover:opacity-80 md:max-h-[365px] max-h-[700px] hover:scale-110 duration-500 transition-transform" src={'https://myblogapi-410916.ue.r.appspot.com/' + image} />
                    </div>
                    <div className="flex flex-col">
                        <div className='flex justify-between items-start gap-2 pt-2'>
                            <div className="text-sm font-semibold">{title}</div>
                            <div className="text-xs flex justify-center items-center text-gray-500">
                                <div className="">
                                    {format(new Date(date), "yyyy")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </Link>

    );
}

export default ArtPost;