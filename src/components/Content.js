import React, { useState } from 'react'
import Login from './Login'
import SvgImage from '../images/hero.svg'
import List from './List'


function Content() {
    const [state, setstate] = useState({ add: true, list: false })
    return (
        <div className="content">
            {
                state.add ?
                    (
                        <div className="text-content">
                            <div className="inner-content">
                                <h1>Enter the details</h1>
                                <h3><strong>Fill the following fields to add data.</strong></h3>
                                <Login />
                            </div>
                        </div>
                    ) :
                    <List />
            }


            <div className="image">
                <img src={SvgImage} alt='svg' />
                <div className="actions">
                    <button onClick={() => setstate({ add: true, list: false })}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <g id="plus" transform="translate(-3 -3)">
                                <line id="Line_400" dataName="Line 400" y2="17" transform="translate(12 3.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <line id="Line_401" dataName="Line 401" x1="17" transform="translate(3.5 12)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                        </svg>
                        <h3>Add to list</h3>
                    </button>
                    <button onClick={() => setstate({ add: false, list: true })}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.207" height="15.379" viewBox="0 0 19.207 15.379">
                            <g id="checklist" transform="translate(-2.793 -4.293)">
                                <line id="Line_146" data-name="Line 146" x2="10" transform="translate(11.5 6)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <line id="Line_147" data-name="Line 147" x2="10" transform="translate(11.5 12)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <line id="Line_148" data-name="Line 148" x2="10" transform="translate(11.5 18)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_122" data-name="Path 122" d="M3.5,6l.58.58a2,2,0,0,0,2.84,0L8.5,5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_123" data-name="Path 123" d="M3.5,12l.58.58a2,2,0,0,0,2.84,0L8.5,11" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                <path id="Path_124" data-name="Path 124" d="M3.5,18l.58.58a2,2,0,0,0,2.84,0L8.5,17" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </g>
                        </svg>
                        <h3>View list</h3>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Content
