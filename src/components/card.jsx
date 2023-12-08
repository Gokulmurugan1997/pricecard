import React from "react"

function Card({data}) {
 

    return (
      <>
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
              <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
                <li className={data.isUser?"":"text-muted"}><span className="fa-li"><i className={data.isUser?"fas fa-check":"fas fa-times"}></i></span>{data.User}</li>
                <li className={data.isStorage?"":"text-muted"}><span className="fa-li"><i className={data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{data.Storage}</li>
                <li className={data.isProjects?"":"text-muted"}><span className="fa-li"><i className={data.isProjects?"fas fa-check":"fas fa-times"}></i></span>{data.Projects}</li>
                <li className={data.isaccess?"":"text-muted"}><span className="fa-li"><i className={data.isaccess?"fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
                <li className={data.isPrivProjects?"":"text-muted"}><span className="fa-li"><i className={data.isPrivProjects?"fas fa-check":"fas fa-times"}></i></span>{data.PrivProjects}</li>
                <li className={data.isSupport?"":"text-muted"}><span className="fa-li"><i className={data.isSupport?"fas fa-check":"fas fa-times"}></i></span>{data.Support}</li>
                <li className={data.isdomain?"":"text-muted"}><span className="fa-li"><i className={data.isdomain?"fas fa-check":"fas fa-times"}></i></span>{data.domain}
                </li>
                <li className={data.isReports?"":"text-muted"}><span className="fa-li"><i className={data.isReports?"fas fa-check":"fas fa-times"}></i></span>{data.Reports}</li>
              </ul>
              <div className="d-grid">
                <a href="#" className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>
 
      </>
    )
  }
  
  export default Card