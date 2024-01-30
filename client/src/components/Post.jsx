import { format } from 'date-fns';
import { Link } from "react-router-dom";

function Post({ title, image, date, summary, _id }) {

    return (
        <Link to={`/posts/${ _id }`} className="flex flex-col justify-between pb-10 bg-opacity-60 pt-4">
            <img className="object-cover h-36 hover:opacity-80" src={'https://api.shyun.dev/' + image} />
            <div className="flex flex-col gap-1">
                <div className='flex justify-between align-middle'>
                    <div className="text-2xl font-abril py-2 font-bold">{title}</div>
                    <div className="text-base flex justify-center items-center text-gray-500 dark:text-gray-200">
                        {format(new Date(date), "MMM do, yyyy")}
                    </div>
                </div>
                <div className='text-md line-clamp-2'>{summary}</div>
            </div>
        </Link>

    );
}

export default Post;