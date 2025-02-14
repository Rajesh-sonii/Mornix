import NewTaskCard from "../components/newTaskCard";

const ViewLatestTask = () => {
  return (
    <div className="container p-5">
      <h5>My today&apos;s tasks</h5>
      <div className="row">
        {
          DATA.map((data, index)=>{
            return <div className="col mt-2" key={index}>
              <NewTaskCard status={data.status} link={data.link}/>
            </div>
          })
        }
      </div>
    </div>
  )
}


const DATA = [
  {
    "status": "pending",
    "link": "https://example.com/task1"
  },
  {
    "status": "completed",
    "link": "https://example.com/task2"
  },
  {
    "status": "pending",
    "link": "https://example.com/task3"
  },
  {
    "status": "completed",
    "link": "https://example.com/task4"
  },
  {
    "status": "pending",
    "link": "https://example.com/task5"
  },
  {
    "status": "completed",
    "link": "https://example.com/task6"
  },
  {
    "status": "pending",
    "link": "https://example.com/task7"
  },
  {
    "status": "completed",
    "link": "https://example.com/task8"
  },
  {
    "status": "pending",
    "link": "https://example.com/task9"
  },
  {
    "status": "completed",
    "link": "https://example.com/task10"
  },
  {
    "status": "pending",
    "link": "https://example.com/task11"
  },
  {
    "status": "completed",
    "link": "https://example.com/task12"
  },
  {
    "status": "pending",
    "link": "https://example.com/task13"
  },
  {
    "status": "completed",
    "link": "https://example.com/task14"
  },
  {
    "status": "pending",
    "link": "https://example.com/task15"
  },
  {
    "status": "completed",
    "link": "https://example.com/task16"
  },
  {
    "status": "pending",
    "link": "https://example.com/task17"
  },
  {
    "status": "completed",
    "link": "https://example.com/task18"
  },
  {
    "status": "pending",
    "link": "https://example.com/task19"
  },
  {
    "status": "completed",
    "link": "https://example.com/task20"
  },
  {
    "status": "pending",
    "link": "https://example.com/task21"
  },
  {
    "status": "completed",
    "link": "https://example.com/task22"
  },
  {
    "status": "pending",
    "link": "https://example.com/task23"
  },
  {
    "status": "completed",
    "link": "https://example.com/task24"
  },
  {
    "status": "pending",
    "link": "https://example.com/task25"
  },
  {
    "status": "completed",
    "link": "https://example.com/task26"
  },
  {
    "status": "pending",
    "link": "https://example.com/task27"
  },
  {
    "status": "completed",
    "link": "https://example.com/task28"
  },
  {
    "status": "pending",
    "link": "https://example.com/task29"
  },
  {
    "status": "completed",
    "link": "https://example.com/task30"
  }
];
export default ViewLatestTask