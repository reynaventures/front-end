import { Link } from "react-router-dom"

export const MobileMenu = ({ closeMobileMenu }) => {
    return (
        <div className="mobileMenu">
            <div className="mobileMenu-logo-wrp">
                <Link to={"/home"} className="header-item logo-link">
                         <svg width="auto" height="40" viewBox="0 0 362 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.7936 44.2117H24.9892L16.306 28.5023H9.41239V44.2117H0V0H20.6807C25.2323 0 28.8337 1.32569 31.4851 3.97707C34.1807 6.62844 35.5285 10.0531 35.5285 14.2512C35.5285 17.8747 34.5784 20.8133 32.6782 23.067C30.8223 25.3207 28.5465 26.7568 25.8509 27.3755L35.7936 44.2117ZM19.2888 20.2168C21.2331 20.2168 22.8239 19.6865 24.0612 18.6259C25.2986 17.5212 25.9172 16.0629 25.9172 14.2512C25.9172 12.4394 25.2986 11.0032 24.0612 9.94267C22.8239 8.83792 21.2331 8.28555 19.2888 8.28555H9.41239V20.2168H19.2888Z" fill="black" />
                            <path d="M87.1361 44.2117H55.8498V0H87.1361V8.28555H65.2622V17.6317H86.6721V25.9172H65.2622V35.9262H87.1361V44.2117Z" fill="black" />
                            <path d="M129.492 44.2117H120.08V26.1161L103.045 0H113.783L124.786 17.7642L135.657 0H146.395L129.492 26.1161V44.2117Z" fill="black" />
                            <path d="M203.302 44.2117H194.221L173.143 15.378V44.2117H163.73V0H173.408L193.89 27.7732V0H203.302V44.2117Z" fill="black" />
                            <path d="M266.505 44.2117H255.767L253.05 36.7216H234.092L231.308 44.2117H220.57L237.672 0H249.47L266.505 44.2117ZM250.465 28.436L243.571 9.41239L236.677 28.436H250.465Z" fill="black" />
                            <path d="M268.82 0.0219727H281.709L298.28 44.2116H285.391L268.82 0.0219727Z" fill="#F5565A" />
                            <path d="M18.6186 97.6076H16.3796L0 58.3083H2.18002L17.4991 95.4276L32.8182 58.3083H34.9982L18.6186 97.6076Z" fill="black" />
                            <path d="M77.2283 97.6076H53.1891V58.3083H77.2283V60.0759H55.0745V76.5144H76.8158V78.282H55.0745V95.84H77.2283V97.6076Z" fill="black" />
                            <path d="M128.112 97.6076H126.227L99.713 61.3721V97.6076H97.8275V58.3083H99.713L126.227 94.1902V58.3083H128.112V97.6076Z" fill="black" />
                            <path d="M162.488 97.6076H160.602V60.0759H147.345V58.3083H175.803V60.0759H162.488V97.6076Z" fill="black" />
                            <path d="M220.44 94.1902C217.926 96.9398 214.313 98.3146 209.599 98.3146C204.886 98.3146 201.272 96.9398 198.758 94.1902C196.244 91.4407 194.987 87.6109 194.987 82.7009V58.3083H196.873V82.7009C196.873 87.1003 197.972 90.5176 200.172 92.9529C202.372 95.349 205.514 96.547 209.599 96.547C213.684 96.547 216.827 95.349 219.026 92.9529C221.226 90.5176 222.326 87.1003 222.326 82.7009V58.3083H224.211V82.7009C224.211 87.6109 222.954 91.4407 220.44 94.1902Z" fill="black" />
                            <path d="M272.047 97.6076H269.631L257.67 80.6388H248.243V97.6076H246.358V58.3083H259.909C263.248 58.3083 266.017 59.3099 268.217 61.3132C270.416 63.2771 271.516 65.9874 271.516 69.4441C271.516 72.9007 270.397 75.6306 268.158 77.6339C265.958 79.6371 263.209 80.6388 259.909 80.6388L272.047 97.6076ZM259.909 78.8712C262.776 78.8712 265.074 77.9874 266.803 76.2198C268.57 74.4522 269.454 72.1936 269.454 69.4441C269.454 66.6945 268.57 64.4555 266.803 62.7272C265.074 60.9596 262.776 60.0759 259.909 60.0759H248.243V78.8712H259.909Z" fill="black" />
                            <path d="M316.301 97.6076H292.262V58.3083H316.301V60.0759H294.147V76.5144H315.889V78.282H294.147V95.84H316.301V97.6076Z" fill="black" />
                            <path d="M348.566 98.3146C345.62 98.3146 342.969 97.7451 340.612 96.6059C338.255 95.4668 336.331 93.9546 334.838 92.0691L336.37 90.714C339.552 94.6027 343.617 96.547 348.566 96.547C350.727 96.547 352.593 96.2721 354.164 95.7221C355.735 95.133 356.913 94.3866 357.699 93.4832C358.484 92.5405 359.054 91.5978 359.408 90.6551C359.761 89.6731 359.938 88.6714 359.938 87.6502C359.938 85.6469 359.349 83.9775 358.17 82.642C356.992 81.2672 355.519 80.2852 353.751 79.696C351.984 79.1069 350.059 78.498 347.977 77.8695C345.935 77.2018 344.03 76.5733 342.262 75.9841C340.494 75.3556 339.021 74.3344 337.843 72.9203C336.665 71.5062 336.075 69.7583 336.075 67.6765C336.075 64.6127 337.273 62.1773 339.67 60.3705C342.066 58.5636 344.972 57.6602 348.39 57.6602C353.889 57.6602 358.131 59.5063 361.116 63.1986L359.643 64.5537C357.011 61.1364 353.26 59.4277 348.39 59.4277C345.483 59.4277 343.048 60.2133 341.084 61.7845C339.12 63.3164 338.138 65.2804 338.138 67.6765C338.138 69.1691 338.57 70.4457 339.434 71.5062C340.337 72.5668 341.476 73.3917 342.851 73.9809C344.265 74.5701 345.817 75.12 347.506 75.6306C349.234 76.102 350.943 76.6322 352.632 77.2214C354.321 77.7713 355.853 78.4391 357.228 79.2247C358.642 80.0103 359.781 81.1298 360.645 82.5831C361.548 83.9972 362 85.6862 362 87.6502C362 88.8678 361.784 90.0659 361.352 91.2443C360.92 92.3834 360.232 93.5225 359.29 94.6616C358.347 95.7614 356.953 96.6452 355.106 97.313C353.26 97.9807 351.08 98.3146 348.566 98.3146Z" fill="black" />
                        </svg>
                </Link>
                <button onClick={closeMobileMenu} className="mobileMenu-cross">
                    <svg clipRule="evenodd" fillRule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" /></svg>
                </button>
            </div>
            <nav className="mobileMenu-navigation">
                <ul className="mobileMenu-navigation-list">
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <input type="checkbox" id="mobile-investments" className="mobileMenu-navigation-list-item-checkbox" />
                        <label htmlFor="mobile-investments" className="navigation-list-item-title-mobile-wrp">
                            <span className="navigation-list-item-title mobile">Investment Products</span>
                            <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-1.38091e-05 -4.85498e-06L5.09999 5.77L-1.38091e-05 11.54" transform="translate(13.32 1) rotate(90)" stroke="#231536" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </label>
                        <ul className="mobileMenu-navigation-sublist">
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">All Products</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Ecosystem</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Reyna® Polygon Trust</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Reyna® DeFi Fund</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Investor Deck</a>
                            </li>
                        </ul>
                    </li>
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <input type="checkbox" id="mobile-metaverse" className="mobileMenu-navigation-list-item-checkbox" />
                        <label htmlFor="mobile-metaverse" className="navigation-list-item-title-mobile-wrp">
                            <span className="navigation-list-item-title mobile">Metaverse</span>
                            <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-1.38091e-05 -4.85498e-06L5.09999 5.77L-1.38091e-05 11.54" transform="translate(13.32 1) rotate(90)" stroke="#231536" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </label>
                        <ul className="mobileMenu-navigation-sublist">
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <Link to={"/wayc"} className="mobileMenu-navigation-sublist-item-link">Weary Ape Yacht Club</Link>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <Link to={"/wmyc"} className="mobileMenu-navigation-sublist-item-link">Weary Mutant Yacht Club</Link>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">WearyVerse</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="https://snapshot.org/#/wearyapeyc.eth" target="_blank" className="mobileMenu-navigation-sublist-item-link">Vote</a>
                            </li>
                        </ul>
                    </li>
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <input type="checkbox" id="mobile-learn" className="mobileMenu-navigation-list-item-checkbox" />
                        <label htmlFor="mobile-learn" className="navigation-list-item-title-mobile-wrp">
                            <span className="navigation-list-item-title mobile">Learn</span>
                            <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-1.38091e-05 -4.85498e-06L5.09999 5.77L-1.38091e-05 11.54" transform="translate(13.32 1) rotate(90)" stroke="#231536" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </label>
                        <ul className="mobileMenu-navigation-sublist">
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <Link to={"/toolkit"} className="mobileMenu-navigation-sublist-item-link">Digital Currency Toolkit</Link>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <Link to={"/building-blocks"} className="mobileMenu-navigation-sublist-item-link">Building Blocks</Link>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <Link to={"/reports-and-insights"} className="mobileMenu-navigation-sublist-item-link">Reports and Insights</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <input type="checkbox" id="mobile-about" className="mobileMenu-navigation-list-item-checkbox" />
                        <label htmlFor="mobile-about" className="navigation-list-item-title-mobile-wrp">
                            <span className="navigation-list-item-title mobile">About</span>
                            <svg width="15" height="7" viewBox="0 0 15 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-1.38091e-05 -4.85498e-06L5.09999 5.77L-1.38091e-05 11.54" transform="translate(13.32 1) rotate(90)" stroke="#231536" strokeWidth="1.7" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </label>
                        <ul className="mobileMenu-navigation-sublist">
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <Link to={"/about-reyna"} className="mobileMenu-navigation-sublist-item-link">About Reyna</Link>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="#" className="mobileMenu-navigation-sublist-item-link">Careers</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <Link to={"/press"} className="mobileMenu-navigation-sublist-item-link">Press</Link>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <a href="https://medium.com/@reynaventures" target="_blank" className="mobileMenu-navigation-sublist-item-link">Blog</a>
                            </li>
                            <li className="mobileMenu-navigation-sublist-item txt-regular">
                                <Link to={"/FAQs"} className="mobileMenu-navigation-sublist-item-link">FAQs</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="mobileMenu-navigation-list-item txt-regular">
                        <Link to={"/Contact"} className="navigation-list-item-link mobile">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}