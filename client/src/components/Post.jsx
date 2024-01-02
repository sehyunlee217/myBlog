import { formatISO9075 } from 'date-fns';
import { Link } from "react-router-dom";

function Post({ title, image, date, summary, _id }) {

    return (
        <div className="flex flex-col p-2 justify-between overflow-auto">
            <img className="object-cover h-20" src={'http://localhost:3500/' + image} />
            <div className="flex flex-col gap-1">
                <Link to={`/posts/${ _id }`}>
                    <div className="text-2xl font-semibold">{title}</div>
                </Link>
                <div className="text-l ">{formatISO9075(date)}</div>
                <div>{summary}</div>
            </div>
        </div >
    );
}

export default Post;