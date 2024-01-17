import { format } from 'date-fns';
import { Link } from "react-router-dom";

function Post({ title, image, date, summary, _id }) {

    return (
        <Link to={`/posts/${ _id }`} className="flex flex-col justify-between pb-10 bg-neutral-100 bg-opacity-60 ">
            <img className="object-cover h-20 rounded-lg hover:opacity-80" src={'https://myblogapi-410916.ue.r.appspot.com/' + image} />
            <div className="flex flex-col gap-1">
                <div className='flex justify-between align-middle'>
                    <div className="text-2xl font-abril text-gray-800 dark:text-slate-50">{title}</div>
                    <div className="text-sm flex justify-center items-center text-gray-500 dark:text-slate-200">
                        {format(new Date(date), "MMM do - yyyy")}
                    </div>
                </div>
                <div className='text-md line-clamp-2'>{summary}</div>
            </div>
        </Link>

    );
}

export default Post;