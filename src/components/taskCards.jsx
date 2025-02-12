import Card from "../components/card"

const TaskCards = () => {
    return (
        <div className="container bg-dark m-5 p-5">
            <div className="justify-content-start d-flex flex-row align-items-center">
                <div>Task Overwiew</div>
                <button className="btn btn-primary btn-sm ms-3">click me</button>
            </div>
            <div className="row mt-5">
                {data.map((element, i) => {
                    return <div className="col" key={i}>
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