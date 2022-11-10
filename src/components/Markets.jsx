import React from 'react'
import styled from 'styled-components';
import { Header } from './Header';

const StyledMarkets = styled.div `
    .container {
        max-width: 1250px;
        padding: 0 20px;
        margin: 0 auto;
    }
`

function Markets() {
    return (
        <StyledMarkets>
            <Header/>
            <div className='container'>
                <div className="market__connect">
                    <h2 className="market__title">Markets</h2>
                    <button type='button'>Connect wallet</button>
                </div>
                <div className="market__total-money">
                    <ul className="market__total-list">
                        <li className="market__total-item">
                            <h5 className="market__total-title">Total Supply</h5>
                            <p className="market__total-price">$1,315,694,888.76</p>
                        </li>
                        <li className="market__total-item">
                            <h5 className="market__total-title">Total Borrow</h5>
                            <p className="market__total-price">$507,168,404.06</p>
                        </li>
                        <li className="market__total-item">
                            <h5 className="market__total-title">Available Liquidity</h5>
                            <p className="market__total-price">$809,107,098.60</p>
                        </li>
                        <li className="market__total-item">
                            <h5 className="market__total-title">Total Treasury</h5>
                            <p className="market__total-price">$4,453,504.20</p>
                        </li>
                    </ul>
                </div>
                <div className="market__items">
                    <ul className="market__items-tools">
                        <li className="market__tool">
                            <p className="market__tool-name">Asset</p>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Total Supply</p>
                            <span className="market__tool-sort"></span>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Supply APY</p>
                            <span className="market__tool-sort"></span>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Total Borrow</p>
                            <span className="market__tool-sort"></span>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Borrow APY</p>
                            <span className="market__tool-sort"></span>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Liquidity</p>
                            <span className="market__tool-sort"></span>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Collateral F.</p>
                            <span className="market__tool-sort"></span>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Price</p>
                            <span className="market__tool-sort"></span>
                        </li>
                    </ul>
                    <ul className="market__items-list">
                        <li className="market__items-item">
                            <img src="#" alt="" />
                            <p className="market__cript-name"></p>
                        </li>
                        <li className="market__items-item">
                            <p className="market__cript-supply">243.29M</p>
                            <p className="market__cript-supply--mini">1.37M BNB</p>
                        </li>
                        <li className="market__items-item">
                            <p className="market__cript-api">0.53%</p>
                            <p className="market__cript-api--mini">0.28%</p>
                        </li>
                        <li className="market__items-item">
                            <p className="market__cript-borrow">$66.99M</p>
                            <p className="market__cript-borrow--mini">223.67K BNB</p>
                        </li>
                        <li className="market__items-item">
                            <p className="market__cript-api">-0.24%</p>
                            <p className="market__cript-api--mini">1.73%</p>
                        </li>
                        <li className="market__items-item">
                            <p className="market__cript-liqudity">$345.19M</p>
                        </li>
                        <li className="market__items-item">
                            <p className="market__cript-collateral">80%</p>
                        </li>
                        <li className="market__items-item">
                            <p className="market__cript-price">$4.20</p>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledMarkets>
    )
}

export default Markets