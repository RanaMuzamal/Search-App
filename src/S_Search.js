import React from 'react'
import data from './data'

export const S_Search = () => {
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                {data.cardData.map((item,index)=>{
                    return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src={item.img} className="card-img-top" />
                            <div className="card-title">{item.title}</div>
                            <div className="card-text">{item.desc}</div>
                        </div>
                    </div>
                    )
                })}         
            </div>
        </section>
    )
}
