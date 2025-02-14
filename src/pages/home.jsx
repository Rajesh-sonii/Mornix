import TaskCards from "../components/TaskCards"
import ReferCardList from "../components/referCardList"
import InformaticCards from "../components/informaticCards"

const Home = () => {
  return (<>
    {/* // <div className="container"> */}
      <h3 className="d-flex flex-row justify-content-center">Hello Rajesh, {"How's your day going?"}</h3>
      <InformaticCards />
      <TaskCards />
      <TaskCards />
      <TaskCards />
      <ReferCardList />
    {/* // </div> */}
  </>
  )
}

export default Home