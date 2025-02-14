import InfoCard from "./infoCard"

const InformaticCards = () => {
  return (
    <div className="container p-5 mt-0">
                <div className="d-flex flex-row align-items-center justify-content-between">
                    <div>Task Overwiew</div>
                </div>
                <div className="row mt-5">
                    {data.map((element, i) => {
                        return <div className="col pt-2" key={i}>
                            <InfoCard img={element.image} title={element.title} text={element.text}/>
                        </div>})}
                </div>
            </div>
  )
}


const data = [
  {image: "https://icons.veryicon.com/png/o/internet--web/single-color-linear-business-enterprise-ppt/wallet-46.png", title:"Wallet Balance", text:"0"},
  {image: "https://cdn4.vectorstock.com/i/1000x1000/83/68/refer-a-friend-icon-share-sign-vector-23498368.jpg", title:"Refer Earning", text:"0"},
  {image: "https://logowik.com/content/uploads/images/803_arrowcircle.jpg", title:"Total Refer", text:"0"},
  {image: "https://icons.veryicon.com/png/o/internet--web/single-color-linear-business-enterprise-ppt/wallet-46.png", title:"Total Withdrawn", text:"0"},
  {image: "https://static.vecteezy.com/system/resources/thumbnails/000/550/535/small_2x/user_icon_007.jpg", title:"Downline Team", text:"0"},
  {image: "https://static.vecteezy.com/system/resources/thumbnails/009/361/798/small_2x/stack-dollar-bill-note-icon-illustration-line-art-cash-money-payment-business-currency-finance-banking-asset-vector.jpg", title:"Member Commission", text:"0"},
]

export default InformaticCards