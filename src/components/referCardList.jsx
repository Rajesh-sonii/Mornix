import ReferCard from "./referCard";

const ReferCardList = () => {
  return (
    <div className="container m-5 p-5 w-75">
            <div className="d-flex flex-row align-items-center justify-content-between">
                <div>Task Overwiew</div>
                <button className="btn btn-primary ms-3">My Rank 1</button>
            </div>
            <div className="row mt-5">
                {data.map((element, i) => {
                    return <div className="col" key={i}>
                        <ReferCard rank={element.rank} name={element.name} totalRefer={element.totalRefer} code={element.code}/>
                    </div>})}
            </div>
        </div>
  )
}

const data = [
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"},
    {rank: "1", name: "Rajesh Soni", totalRefer: "10", code: "LSDKFJDS"}
]

export default ReferCardList