import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { walletName } from '../store/selectors/userSelectors';
import styled from 'styled-components';

const StyledWalletConnect = styled.div `
    position: relative;
    .market__wallet-error {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        color: #9e2020;
        font-size: 11px;
        font-weight: bold;
        margin: 5px 0;
    }
    .market__connect-btn--active {
        background-color: #282931;
        border: 2px solid rgb(58, 120, 255);
        &:hover {
            background-color: rgb(58, 120, 255);
        }
    }
    @media only screen and (max-width: 768px) {
        .market__connect-btn {
            width: 100%;
        }
    }
`

function WalletConnect({ setHandleLogout }) {

    const wallet = useSelector(walletName);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    
	const connectWalletHandler = () => {
        if(wallet) {
            setHandleLogout(true);
        }
		else if (window.ethereum && window.ethereum.isMetaMask) {
			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			});
		} else {
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

    const accountChangedHandler = (newAccount) => {
        console.log(newAccount);
		dispatch({type: `userLogIn`, payload: {wallet: newAccount}});
	}

    const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}

    window.ethereum.on('accountsChanged', accountChangedHandler);
	window.ethereum.on('chainChanged', chainChangedHandler);
    console.log(wallet);
    return (
        <StyledWalletConnect>
            <button 
                className={!wallet ? 'market__connect-btn btn' : 'market__connect-btn--active btn'}
                type='button' 
                onClick={connectWalletHandler}>{wallet ?
                    [...wallet].splice(0, 8).join('') + '...'
                    : 
                    'Connect wallet'}
            </button>
            <p className='market__wallet-error'>{errorMessage}</p>
        </StyledWalletConnect>
    )
}

export default WalletConnect;