import React from 'react'

import "./ContractCard.css"

const ContractCard = (props) => {
    return (
        <div className="ccard">
            <div className="ccard__title">
                <div className="ccard__amount">
                    <span className='amount__title'>Estimated Value</span>
                    <h3 className="amount__value">{props.amount}</h3>
                </div>
                <div className={props.class}>{props.status}</div>
            </div>
            <div className="ccard__body">
                <div className="agreement-no">
                    <p className="title">Agreement No.</p>
                    <p className="a-no">{props.number}</p>
                </div>
                <div className="agency-user">
                    <p className="title">Agency User</p>
                    <p className="a-user">{props.user}</p>
                </div>
                <div className="contract-type">
                    <p className="title">Contract Type</p>
                    <p className="c-type">{props.type}</p>
                </div>
                <div className="stage">
                    <p className="title">Stage</p>
                    <p className="s">{props.stage}</p>
                </div>
            </div>
        </div>
    )
}

export default ContractCard