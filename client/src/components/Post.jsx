import { formatISO9075, format } from 'date-fns';
import { Link } from "react-router-dom";

function Post({ title, image, date, summary, _id }) {

    return (
        <div className="flex flex-col justify-between overflow-auto">
            <img className="object-cover h-20 rounded-lg hover:opacity-80" src={'http://localhost:3500/' + image} />
            <div className="flex flex-col gap-1">
                <div className='flex justify-between align-middle'>
                    <Link to={`/posts/${ _id }`}>
                        <div className="text-2xl font-semibold">{title}</div>
                    </Link>
                    <div className="text-sm flex justify-center items-center text-gray-500">
                        {format(new Date(date), "MMM do - yyyy")}
                    </div>
                </div>
                <div className='text-md'>{summary}</div>
            </div>
        </div >
    );
}

export default Post;