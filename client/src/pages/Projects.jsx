
export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://api.shyun.dev/projects', {
            method: 'GET',
            credentials: "include"
        }).then(
            res => { res.json().then(project => { setProjects(project); }); }
        );
    }, []);

    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 max-w-lg w-full">
                {projects.length > 0 && projects.map(project =>
                    <Project
                        key={post._id}
                        title={post.title}
                        image={post.filePath}
                        date={post.date}
                        summary={post.summary}
                        _id={post._id}
                    />
                )}
            </div>
        </div>

    );
}