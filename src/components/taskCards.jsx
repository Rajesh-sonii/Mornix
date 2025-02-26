import Card from "../components/card"

const TaskCards = () => {
    return (
        <div className="container bg-dark p-5 mt-4 d-flex row justify-content-center">
            {/* <div className="justify-content-start d-flex flex-row align-items-center"> */}
            <div className="col d-flex">
                <div className="text-white">Task Overwiew</div>
                <button className="btn btn-primary btn-sm ms-3">click me</button>
            </div>
            <div className="row mt-5 flex justify-content-center align-items-center">
                {data.map((element, i) => {
                    return <div className="col p-2" key={i}>
                        <Card img={element.img} link={element.link} text={element.text} title={element.title} />
                    </div>})}
            </div>
        </div>
    )
}



const data = [
    { img: "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://www.google.com/", text: "Task open", title: "hello" },
    { img: "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://www.google.com/", text: "Task open", title: "hello" },
    { img: "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://www.google.com/", text: "Task open", title: "hello" },
    { img: "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", link: "https://www.google.com/", text: "Task open", title: "hello" }
];

export default TaskCards