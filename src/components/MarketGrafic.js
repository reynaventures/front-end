import React from 'react'
import styled from 'styled-components'
import { FaSort } from 'react-icons/fa';

const StyledMarketGrafic = styled.div `
    .market__items {
        border-radius: 15px;
        color: rgb(255, 255, 255);
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-image: none;
        background-color: rgb(40, 41, 49);
        border-radius: 24px;
        box-shadow: none;
        margin-bottom: 32px;
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
    .market__cripta {
        border-radius: 15px;
        background-color: rgb(40, 41, 49);
    }
    .market__cripta + .market__cripta {
        margin-top: 35px;
    }
    .market-phone__name {
            display: block;
            width: 100%;
            border-bottom: 1px solid #ffffff1f;
    }
    .market__cript-name {
            font-size: 1.3rem;
            font-weight: bold;
            line-height: 1.5;
            padding-bottom: 15px;
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
    .market__items-list + .market__items-list {
            margin-top: 35px;
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
`

function MarketGrafic() {
    return (
        <StyledMarketGrafic>
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
        </StyledMarketGrafic>
    )
}

export default MarketGrafic