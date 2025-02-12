// import Card from "../components/card"
// import InfoCard from "../components/infoCard"
// import ReferCard from "../components/referCard"
// import TaskCards from "../components/TaskCards"
// import ReferCardList from "../components/referCardList"
// import Sidemenu from "../components/sidemenu"

import InformaticCards from "../components/informaticCards"
import TaskCards from "../components/TaskCards"
import ReferCardList from "../components/referCardList"

const Home = () => {
  return (<div>
  {/* <Sidemenu/> */}
    {/* <Card title="Home" img="https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link="https://www.google.com/" text="Task open"/>
    <InfoCard title="Wallet Balance" text="₹700" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&s"/>
    <ReferCard/>
    <TaskCards/> */}
    {/* <ReferCardList/> */}
    <InformaticCards/>
    <TaskCards/>
    <TaskCards/>
    <TaskCards/>
    <ReferCardList/>
  </div>
  )
}

export default Home