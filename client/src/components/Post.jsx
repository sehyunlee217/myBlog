import { formatISO9075 } from 'date-fns';

function Post({ key, title, image, date, summary }) {

    console.log('http://localhost:3500/' + image);

    return (
        <div className="flex flex-col p-2 justify-between overflow-auto">
            <img className="object-cover h-20" src={'http://localhost:3500/' + image}></img>
            <div className="flex flex-col gap-1">
                <div className="text-2xl font-semibold">{title}</div>
                <div className="text-l ">{formatISO9075(new Date(date))}</div>
                <div>{summary}</div>
            </div>
        </div>
    );
}

export default Post;