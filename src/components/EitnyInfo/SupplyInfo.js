import React from 'react';
import styled from 'styled-components';

const StyledSupplyInfo = styled.div `
margin-bottom: 20px;
    .first-line--supply {
        position: relative;
        height: 2px;
        background-color: rgb(24, 223, 139);
        width: 100%;
        height: 1px;
        margin-left: 15px;
    }
    .supply-tag:before {
            content: '';
            width: 10px;
            height: 10px;
            position: absolute;
            top: 50%;
            left: -20px;
            background-color: rgb(24, 223, 139);
            transform: translateY(-50%);
            border-radius: 50%;
    }
`

function SupplyInfo() {
    return (
        <StyledSupplyInfo>
            <li className='marketitem__card'>
                <div className="marketitem__card-titles">
                    <h5 className="marketitem__title-card">Supply info</h5>
                    <p className="marketitem__tag supply-tag">Supply APY</p>
                </div>
                <div className="marketitem__card-info-list">
                    <div className="marketitem__card-info">
                        <p>Total supply</p>
                        <h4>$3.48M</h4>
                    </div>
                    <div className="marketitem__card-info">
                        <p>APY</p>
                        <h4>0%</h4>
                    </div>
                    <div className="marketitem__card-info">
                        <p>Distribution APY</p>
                        <h4>0%</h4>
                    </div>
                </div>
                <div className="marketitem__grafic">
                    <ul className="marketitem__grafic-procents">
                        <li className="marketitem__grafic-procent">5% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">4% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">3% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">2% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">1% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">0%
                            <div className="first-line--supply">
                                <ul className="marketitem__time">
                                    <li className="marketitem__time-number">10.16</li>
                                    <li className="marketitem__time-number">10.20</li>
                                    <li className="marketitem__time-number">10.24</li>
                                    <li className="marketitem__time-number">10.28</li>
                                    <li className="marketitem__time-number">11.01</li>
                                    <li className="marketitem__time-number">11.05</li>
                                    <li className="marketitem__time-number">11.09</li>
                                    <li className="marketitem__time-number">11.13</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </StyledSupplyInfo>
    )
}

export default SupplyInfo