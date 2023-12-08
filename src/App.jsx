import React from "react"
import Card from "./components/card"


function App() {
 const data = [
  {
  plan:"FREE",
  price:"0",
  User:"single user",
  isUser:true,
  Storage:"50GB storage",
  isStorage:true,
  Projects:"Unlimited public projects",
  isProjects:true,
  access:"Community Access",
  isaccess:true,
  PrivProjects:"Unlimited Private Projects",
  isPrivProjects:false,
  Support:"Dedicated Phone Support",
  isSupport:false,
  domain:"Free Subdomain",
  isdomain:false,
  Reports:"Monthly Status Reports",
  isReports:false
 },
 {
  plan:"PLUS",
  price:"9",
  User:"5 user",
  isUser:true,
  Storage:"50GB storage",
  isStorage:true,
  Projects:"Unlimited public projects",
  isProjects:true,
  access:"Community Access",
  isaccess:true,
  PrivProjects:"Unlimited Private Projects",
  isPrivProjects:true,
  Support:"Dedicated Phone Support",
  isSupport:true,
  domain:"Free Subdomain",
  isdomain:true,
  Reports:"Monthly Status Reports",
  isReports:false
 },
 {
  plan:"PRO",
  price:"49",
  User:"Unlimited user",
  isUser:true,
  Storage:"50GB storage",
  isStorage:true,
  Projects:"Unlimited public projects",
  isProjects:true,
  access:"Community Access",
  isaccess:true,
  PrivProjects:"Unlimited Private Projects",
  isPrivProjects:true,
  Support:"Dedicated Phone Support",
  isSupport:true,
  domain:"Free Subdomain",
  isdomain:true,
  Reports:"Monthly Status Reports",
  isReports:true
 }
 ]

  return (
    <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return <Card data = {e} key={i}/>
        })
      }
    </div>
  </div>
</section>
    </>
  )
}

export default App
