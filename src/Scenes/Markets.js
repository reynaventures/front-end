import React, { useState } from 'react'
import styled from 'styled-components';
import MarketGrafic from '../components/MarketGrafic';
import MetamaskWallet from '../components/MetamaskWallet';

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
    .market__total-money {
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
    .market__tool-sort {
        margin-left: 5px;
        font-weight: normal;
        color: #fff;
    }
    .market__items {
        padding-top: 55px;
        padding-bottom: 55px;
        height: 70vh;
        overflow-y: auto;
    }
    .market__connect-btn--active {
        background-color: #282931;
        border: 2px solid rgb(58, 120, 255);
        &:hover {
            background-color: rgb(58, 120, 255);
        }
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
        .market__items-item-preview {
            display: none;
        }
        .market__items-list {
            grid-template-columns: repeat(4, 1fr);
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

    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
    const [handleLogout, setHandleLogout] = useState(false);

	const connectWalletHandler = () => {
        setHandleLogout(true);
		if (window.ethereum && window.ethereum.isMetaMask) {
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0].substring(0, 7) + '...');
			})
			.catch(error => {
				setErrorMessage(error.message);
			});

		} else {
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

    const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
	}

    const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

    window.ethereum.on('accountsChanged', accountChangedHandler);
	window.ethereum.on('chainChanged', chainChangedHandler);


    return (
        <StyledMarkets>
            <div className='container'>
                <div className="market__connect">
                    <h2 className="market__title">Markets</h2>
                    <button 
                        className={defaultAccount === null ? 'market__connect-btn btn' : 'market__connect-btn--active btn'}
                        type='button' 
                        onClick={connectWalletHandler}>{defaultAccount !== null ?
                            defaultAccount
                            : 
                            'Connect wallet'}
                    </button>
                    {errorMessage}
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
                <MarketGrafic/>
                {(defaultAccount !== null && handleLogout) && <MetamaskWallet setHandleLogout={setHandleLogout}/>}
            </div>
        </StyledMarkets>
    )
}

export default Markets