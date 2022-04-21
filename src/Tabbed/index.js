
import React from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import List from './../list';
import Us from './../us';

class Tabbed extends React.Component {
	render() {
		return (
            <Tabs
            defaultActiveKey="episodes"
            transition={true}
            id="noanim-tab-example"
            className="mb-3 justify-content-center"
            >
                <Tab eventKey="episodes" title="Espisódios">
                    <List />
                </Tab>
                <Tab eventKey="us" title="Nós">
                    <Us />
                </Tab>
            </Tabs>
		)
	}
}

export default Tabbed;