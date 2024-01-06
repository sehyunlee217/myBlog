import { Link } from "react-router-dom";
import { format } from 'date-fns';

function ArtPost({ title, image, date, summary, _id }) {

    return (
        <Link to={`/posts/art/${ _id }`}>
            <div className="flex flex-col justify-between overflow-auto">
                <img className="object-cover h-20 rounded-lg hover:opacity-80" src={'http://localhost:3500/' + image} />
                <div className="flex flex-col gap-1">
                    <div className='flex justify-between align-middle'>
                        <div className="text-2xl font-semibold">{title}</div>
                        <div className="text-sm flex justify-center items-center text-gray-500">
                            {format(new Date(date), "MMM do - yyyy")}
                        </div>
                    </div>
                    <div className='text-md'>{summary}</div>
                </div>
            </div >
        </Link>

    );
}

export default ArtPost;