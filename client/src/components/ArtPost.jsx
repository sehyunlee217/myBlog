import { Link } from "react-router-dom";
import { format } from 'date-fns';

function ArtPost({ title, image, date, summary, _id, num }) {

    return (
        <Link to={`/arts/${ _id }`} className="m-1 flex font-nunito">
            <div className="flex flex-col justify-between overflow-auto self-center ">
                <div className="">
                    <img className="object-cover hover:opacity-80 md:max-h-[365px]" src={'http://localhost:3500/' + image} />
                    <div className="flex flex-col gap-1">
                        <div className='flex justify-between align-middle'>
                            <div className="text-sm font-semibold">{title}</div>
                            <div className="text-xs flex justify-center items-center text-gray-500">
                                {format(new Date(date), "MMM do. yyyy")}
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </Link>

    );
}

export default ArtPost;