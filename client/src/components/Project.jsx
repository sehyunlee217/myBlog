import { format } from 'date-fns';
import { BiLogoGithub } from "react-icons/bi";


function Project({ title, image, date, summary, linkto, github, _id }) {

    return (
        <div className="flex flex-col justify-between pb-10 bg-opacity-60 pt-4">
            <a href={linkto} className='cursor-pointer h-24 hover:opacity-80'>
                <img className="object-cover" src={'https://api.shyun.dev/' + image} />
            </a>
            <div className="flex flex-col gap-1">
                <div className='flex justify-between align-middle'>
                    <div className="text-2xl font-abril py-2 font-bold">{title}</div>
                    <a href={github} className="cursor-pointer hover:text-korean_oak">
                        <BiLogoGithub size={20} />
                    </a>
                </div>
                <div className='text-md line-clamp-2'>{summary}</div>
                <div className="text-base flex justify-center items-center text-gray-500 dark:text-gray-200">
                    {format(new Date(date), "MMM do, yyyy")}
                </div>
            </div>
        </div>

    );
}

export default Project;