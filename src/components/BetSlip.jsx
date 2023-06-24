import React from 'react';

const BetSlip = () => {

        // const NumberInput = () => {
        // const decrement = (e) => {
        //   const btn = e.target.parentNode.parentElement.querySelector(
        //     'button[data-action="decrement"]'
        //   );
        //   const target = btn.nextElementSibling;
        //   let value = Number(target.value);
        //   value--;
        //   target.value = value;
        // };
      
        // const increment = (e) => {
        //   const btn = e.target.parentNode.parentElement.querySelector(
        //     'button[data-action="decrement"]'
        //   );
        //   const target = btn.nextElementSibling;
        //   let value = Number(target.value);
        //   value++;
        //   target.value = value;
        // };




    return (

        <div className='w-full text-white text-xl'>
            <div className="bg-[#1F3140] border-y-[3px] border-[#0F60A0]" >
                <div className="">
                    <div className="offer-form ">
                        <div className="offer-input-group flex ">
                            <div className="input-group   bg-slate-600">
                                <div className="bet-minus">
                                    <button type="button" className="dec btn btn-secondary">
                                        <span className="material-icons">-</span>
                                    </button>
                                </div>
                                <input type="number" className="form-control" />
                                <div className="bet-plus">
                                    <button type="button" className="dec btn btn-secondary">
                                        <span className="material-icons">+</span>
                                    </button>
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="bet-minus">
                                    <button type="button" className="dec btn btn-secondary">
                                        <span className="material-icons">remove</span>
                                    </button>
                                </div>
                                <input type="number" placeholder="Stake" className="form-control" />
                                <div className="bet-plus">
                                    <button type="button" className="dec btn btn-secondary">
                                        <span className="material-icons">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-offer-form-group">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="input-group">
                                    <div className="bet-minus">
                                        <button type="button" className="dec btn btn-secondary">
                                            <span className="material-icons">remove</span>
                                        </button>
                                    </div>
                                    <input type="number" className="form-control" />
                                    <div className="bet-plus">
                                        <button type="button" className="dec btn btn-secondary">
                                            <span className="material-icons">add</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="bet-minus">
                                        <button type="button" className="dec btn btn-secondary">
                                            <span className="material-icons">remove</span>
                                        </button>
                                    </div>
                                    <input type="number" placeholder="Stake" className="form-control" />
                                    <div className="bet-plus">
                                        <button type="button" className="dec btn btn-secondary">
                                            <span className="material-icons">add</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="default-stake">
                            <div className="stake">
                                <a href="javascript:void(0)" data-cancellation-period={75}>
                                    <span>100</span>
                                </a>
                                <a href="javascript:void(0)" data-cancellation-period={75}>
                                    <span>1,000</span>
                                </a>
                                <a href="javascript:void(0)" data-cancellation-period={75}>
                                    <span>2,000</span>
                                </a>
                                <a href="javascript:void(0)" data-cancellation-period={75}>
                                    <span>5,000</span>
                                </a>
                                <a href="javascript:void(0)" data-cancellation-period={75}>
                                    <span>10,000</span>
                                </a>
                                <a href="javascript:void(0)" data-cancellation-period={75}>
                                    <span>20,000</span>
                                </a>
                                <a href="javascript:void(0)" data-cancellation-period={75}>
                                    <span>50,000</span>
                                </a>
                                <a href="javascript:void(0)" data-cancellation-period={75}>
                                    <span>100,000</span>
                                </a>
                                <a href="javascript:void(0)" className="clear-btn" data-cancellation-period={75}>Clear</a>
                            </div>
                        </div>
                        <div className="multi-form-button pt-2 pb-2">
                            <div className="d-flex justify-content-end flex-wrap align-items-center">
                                <button className="btn cancel-btn" data-cancellation-period={75}>
                                    <span>Cancel</span>
                                </button>
                                <button className="btn bet-place-btn" data-cancellation-period={75}>
                                    <span className="material-icons">check</span>
                                    <span>Place Bet</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default BetSlip;
