import React from 'react'
import styled from 'styled-components';
import { Header } from '../Header';
import { FaSort } from 'react-icons/fa';

const StyledMarkets = styled.div `
    .container {
        max-width: 1250px;
        padding: 0 20px;
        margin: 0 auto;
        margin-top: -70px;
    }
    .market__connect {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }
    .market__title {
        font-size: 2.0rem;
        font-weight: bold;
    }
    .market__total-money, .market__items {
        border-radius: 15px;
        color: rgb(255, 255, 255);
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-image: none;
        background-color: rgb(40, 41, 49);
        border-radius: 24px;
        box-shadow: none;
        margin-bottom: 32px;
    }
    .market__total-money {
        padding: 0;
    }
    .market__total-list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: auto;
        padding: 20px 5px;
    }
    .market__total-item + .market__total-item  {
        border-left: 1px solid #ffffff36;
    }
    .market__total-item {
        padding: 30px 35px;
    }
    .market__total-title {
        margin: 0px 0px 4px;
        font-size: 0.875rem;
        font-weight: 600;
        color: rgb(149, 151, 161);
    }
    .market__total-price {
        font-size: 1.8rem;
        font-weight: bold;
        line-height: 1.167;
    }
    .market__items-tools {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: auto;
        gap: 20px;
        margin-bottom: 15px;
    }
    .market__tool {
        justify-self: center;
    }
    .market__tool-name {
        display: flex;
        align-items: center;
        justify-content: left;
        color: rgb(149, 151, 161);
        cursor: pointer;
        font-size: 14px;
        &:hover .market__tool-sort {
            color: rgb(149, 151, 161);
        }
    }
    .market__tool-sort {
        margin-left: 5px;
        font-weight: normal;
        color: #fff;
    }
    .market__items-list {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: auto;
        align-items: center;
        gap: 20px;
        cursor: pointer;
        &:hover {
            background-color: #ffffff1f;
        }
    }
    .market__items-item {
        padding: 25px 3px;
        justify-self: center;
        text-align: right;
        .market__cript-text {
            font-size: 0.975rem;
            font-weight: bold;
            color: rgb(255, 255, 255);
            margin-bottom: 3px;
        }
        .market__cript-text--mini {
            font-size: 0.875rem;
            font-weight: 400;
            color: rgb(149, 151, 161);
            letter-spacing: 0.3px;
            line-height: 1.43;
        }
    }
    .market__items {
        padding-top: 55px;
        padding-bottom: 55px;
        height: 70vh;
        overflow-y: auto;
    }
    .market__items-item-preview {
        display: flex;
        justify-content: center;
        align-items: center;
        .market__cript-name {
            margin-left: 5px;
        }
    }
    .market__tool-name--phone, .market-phone__name {
        display: none;
    }
    .market__cripta {
        border-radius: 15px;
        background-color: rgb(40, 41, 49);
    }
    .market__cripta + .market__cripta {
        margin-top: 35px;
    }
    @media only screen and (max-width: 1440px) {
        .market__total-list {
            grid-template-columns: repeat(2, 1fr);
        }
        .market__total-item {
            margin: 5px;
            border-radius: 15px;
            background-color: rgb(40, 41, 49);
        }
        .market__total-item + .market__total-item {
            border: none;
        }
        .market__total-money {
            background-color: transparent;
        }
        .market-desktop__name {
            display: none;
        }
        .market-phone__name {
            display: block;
            width: 100%;
            border-bottom: 1px solid #ffffff1f;
        }
        .market__tool-name--phone {
            display: block;
            margin-bottom: 15px;
        }
        .market__items-tools {
            display: none;
        }
        .market__items {
            background-color: transparent;
        }
        .market__items-item {
            align-self: baseline;
            justify-self: start;
            text-align: start;
        }
        .market__items-list + .market__items-list {
            margin-top: 35px;
        }
        .market__items-item-preview {
            display: none;
        }
        .market__items-list {
            grid-template-columns: repeat(4, 1fr);
        }
        .market__cripta {
            padding: 20px 25px;
        }
        .market__cript-name {
            font-size: 1.3rem;
            font-weight: bold;
            line-height: 1.5;
            padding-bottom: 15px;
        }
        .market__items-item .market__cript-text {
            font-size: 0.8rem;
        }
        .market__items-item .market__cript-text--mini {
            font-size: 0.75rem;
        }
    }
    @media only screen and (max-width: 1280px) {
        .market__total-price {
            line-height: 1;
            font-size: 1rem;
        }
    }
    @media only screen and (max-width: 768px) {
        .market__total-list {
            grid-template-columns: repeat(1, 1fr);
        }
        .market__items-list {
            grid-template-columns: repeat(3, 1fr);
        }
        .market__title {
            display: none;
        }
        .market__connect-btn {
            width: 100%;
        }
    }
`

function Markets() {
    return (
        <StyledMarkets>
            <Header/>
            <div className='container'>
                <div className="market__connect">
                    <h2 className="market__title">Markets</h2>
                    <button className='market__connect-btn btn' type='button'>Connect wallet</button>
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
                            <p className="market__tool-name">Total Supply <FaSort className='market__tool-sort'/></p>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Supply APY <FaSort className='market__tool-sort'/></p>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Total Borrow <FaSort className='market__tool-sort'/></p>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Borrow APY <FaSort className='market__tool-sort'/></p>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Liquidity <FaSort className='market__tool-sort'/></p>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Collateral F. <FaSort className='market__tool-sort'/></p>
                        </li>
                        <li className="market__tool">
                            <p className="market__tool-name">Price <FaSort className='market__tool-sort'/></p>
                        </li>
                    </ul>
                    <div className="market__cripta">
                        <div className="market-phone__name">
                            <img src="#" alt="" />
                            <p className="market__cript-name">Eitny</p>
                        </div>
                        <ul className="market__items-list">
                            <li className="market__items-item market__items-item-preview">
                                <img src="#" alt="" />
                                <p className="market__cript-name">Eitny</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Total Supply</h5>
                                <p className="market__cript-text">243.29M</p>
                                <p className="market__cript-text--mini">1.37M BNB</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Supply APY</h5>
                                <p className="market__cript-text">0.53%</p>
                                <p className="market__cript-text--mini">0.28%</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Total Borrow</h5>
                                <p className="market__cript-text">$66.99M</p>
                                <p className="market__cript-text--mini">223.67K BNB</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Borrow APY</h5>
                                <p className="market__cript-text">-0.24%</p>
                                <p className="market__cript-text--mini">1.73%</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Liquidity</h5>
                                <p className="market__cript-liqudity">$345.19M</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Collateral F.</h5>
                                <p className="market__cript-collateral">80%</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Price</h5>
                                <p className="market__cript-price">$4.20</p>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="market__cripta">
                        <div className="market-phone__name">
                            <img src="#" alt="" />
                            <p className="market__cript-name">Eitny</p>
                        </div>
                        <ul className="market__items-list">
                            <li className="market__items-item market__items-item-preview">
                                <img src="#" alt="" />
                                <p className="market__cript-name">REC</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Total Supply</h5>
                                <p className="market__cript-text">133.9M</p>
                                <p className="market__cript-text--mini">0.24M BNB</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Supply APY</h5>
                                <p className="market__cript-text">0.37%</p>
                                <p className="market__cript-text--mini">0.20%</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Total Borrow</h5>
                                <p className="market__cript-text">$16.79M</p>
                                <p className="market__cript-text--mini">153.23K BNB</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Borrow APY</h5>
                                <p className="market__cript-text">0.17%</p>
                                <p className="market__cript-text--mini">1.01%</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Liquidity</h5>
                                <p className="market__cript-liqudity">$137.19M</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Collateral F.</h5>
                                <p className="market__cript-collateral">60%</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Price</h5>
                                <p className="market__cript-price">$3.10</p>
                            </li>
                        </ul>
                    </div>

                    <div className="market__cripta">
                        <div className="market-phone__name">
                            <img src="#" alt="" />
                            <p className="market__cript-name">Eitny</p>
                        </div>
                        <ul className="market__items-list">
                            <li className="market__items-item market__items-item-preview">
                                <img src="#" alt="" />
                                <p className="market__cript-name">BTC</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Total Supply</h5>
                                <p className="market__cript-text">543.19M</p>
                                <p className="market__cript-text--mini">2.77M BNB</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Supply APY</h5>
                                <p className="market__cript-text">1.33%</p>
                                <p className="market__cript-text--mini">0.61%</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Total Borrow</h5>
                                <p className="market__cript-text">$67.50M</p>
                                <p className="market__cript-text--mini">298.17K BNB</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Borrow APY</h5>
                                <p className="market__cript-text">0.74%</p>
                                <p className="market__cript-text--mini">3.93%</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Liquidity</h5>
                                <p className="market__cript-liqudity">$545.19M</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Collateral F.</h5>
                                <p className="market__cript-collateral">90%</p>
                            </li>
                            <li className="market__items-item">
                                <h5 className="market__tool-name market__tool-name--phone">Price</h5>
                                <p className="market__cript-price">$14.50</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </StyledMarkets>
    )
}

export default Markets