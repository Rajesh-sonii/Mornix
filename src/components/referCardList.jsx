import ReferCard from "./referCard";

const ReferCardList = () => {
  return (
    <div className="container pt-5">
            <div className="d-flex flex-row align-items-center justify-content-between">
                <div>Task Overwiew</div>
                <button className="btn btn-primary ms-3">My Rank 1</button>
            </div>
            <div className="overflow-auto mt-5">
                {data.map((element, i) => {
                    return <div className="bg-dark" key={i}>
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