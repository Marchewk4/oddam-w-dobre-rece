
import { useState } from 'react';
import Decoration from "../../assets/Decoration.svg";

import "../../scss/main.scss"

function Organization({ name, description, purpose }) {
    return (
        <div className='organization'>
            <div>
                <h3>{name}</h3>
                <span className='description'>{description}</span>
            </div>
            <div>
                <span>{purpose}</span>
            </div>
        </div>
    );
};

function HomeOrganizations() {
    const [state, setState] = useState({
        data: {
            'organizations': [
                {
                    name:`Organizacja "Lorem Ipsum 1"`,
                    description:"Sed molestie sit amet nisi ac venenatis. Suspendisse potenti.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Organizacja "Lorem Ipsum 2"`,
                    description:" Vestibulum nec pretium ante. Donec nec massa eu arcu dapibus placerat aliquet id lacus.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Organizacja "Lorem Ipsum 3"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Organizacja "Lorem Ipsum 4"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Organizacja "Lorem Ipsum 5"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Organizacja "Lorem Ipsum 6"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                }
            ],
            'fundations': [
                {
                    name:`Fundacja "Lorem Ipsum 1"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 2"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 3"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 4"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 5"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 6"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 7"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 8"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Fundacja "Lorem Ipsum 9"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
            ],
            'localCollections': [
                {
                    name:`Zbiórka "Lorem Ipsum 1"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Zbiórka "Lorem Ipsum 2"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
                {
                    name:`Zbiórka "Lorem Ipsum 3"`,
                    description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                    purpose:"Vestibulum vel leo lacus."
                },
            ],
        },
        currentType: "organizations",
        organizationsPage: 0,
    });

    const changeTypeOfOrganization = (type) => {
        setState({ ...state, currentType: type, organizationsPage: 0 });
    };

    const changeOrganizationPage = (nr) => {
        setState({ ...state, organizationsPage: nr });
    };

    const createPageButtons = (nr) => {
        if (nr < 2) {
            return null;
        } else {
            let buttons = [];
            for (let i = 0; i < nr; i++) {
                buttons.push(
                    <button
                        key={i}
                        className={(state.organizationsPage === i) ? "active" : "pasive"}
                        onClick={() => { changeOrganizationPage(i) }}>
                        {i + 1}
                    </button>
                );
            }
            return buttons;
        }
    };

    const data = state.data;
    const type = state.currentType;
    const page = state.organizationsPage;
    const nrOfBtns = Math.ceil(data[type].length / 3);
    const displayedOrganizations = data[type].slice(page * 3, (page + 1) * 3);

    return (
        <>
            <div className='organizations' name="homeOrganizations">
                <h2>Komu pomagamy?</h2>
                <img src={Decoration} alt="decoration"/>
                <ul className='organization_choice'>
                    <li>
                        <button
                            className={(state.currentType === 'fundations') ? "active" : "pasive"}
                            onClick={() => changeTypeOfOrganization('fundations')}>
                            Fundacjom
                        </button>
                    </li>
                    <li>
                        <button
                            className={(state.currentType === 'organizations') ? "active" : "pasive"}
                            onClick={() => changeTypeOfOrganization('organizations')}>
                            Organizacjom<br />pozarządowym
                        </button>
                    </li>
                    <li>
                        <button
                            className={(state.currentType === 'localCollections') ? "active" : "pasive"}
                            onClick={() => changeTypeOfOrganization('localCollections')}>
                            Lokalnym<br />zbiórkom
                        </button>
                    </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className='organizations-details'>
                    {displayedOrganizations.map((e, index) => (
                        <Organization
                            key={index}
                            name={e.name}
                            description={e.description}
                            purpose={e.purpose}
                            border={false}
                        />
                    ))}
                </div>
                <div className='pageBtns'>
                    {createPageButtons(nrOfBtns)}
                </div>
            </div>
        </>
    );
};

export default HomeOrganizations;
