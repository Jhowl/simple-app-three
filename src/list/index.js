import React from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import data from './../database'

class List extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			episodes: null
		};
	}	

	componentDidMount() {

		// fetch('https://api.spotify.com/v1/shows/3H4BkVACf2vM2wqbeMHaPZ',
		// 	{	
		// 		method: 'GET',	
		// 		headers: {	
		// 			authorization: "Bearer BQC8h-SX_Hvy2E1eoRnfstSFSCRdnAHHG4JZ-T3O86sceeedbL4_VL04RT45lmE_OmHjXIImIBQe0R-1dcVplpVg1cTZnWnhuDjpjcGMuPPkHR5KB3-X3jtLquEyMQc21NGRAubOvG9RFBEZ1Jrl_ZinTPPT"
		// 		}
		// 	}
		// )
  	// .then(response => response.json())
  	// .then(data => {
		// 	this.setState({ episodes: data.episodes })
		// })

		this.setState({ episodes: data.episodes })
	}

	render() {
		const { episodes } = this.state;

		console.log(episodes)

		return (
			<Container>
					<Row>
					{episodes?.items.map(item => (
					<Col sm="4">
							<Card className="mt-3 p-3">
							<Card.Body>
									<Card.Title>
										<h2>{item.name}</h2>
									</Card.Title>
									<Card.Text>
										{item.description}
										<iframe title={item.name}
											src={`https://open.spotify.com/embed/episode/${item.id}?utm_source=generator`}
											width="100%" 
											height="232" 
											rameBorder="0" 
											allowfullscreen="" 
											allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
									</Card.Text>
							</Card.Body>
							</Card>
					</Col>
					))}
					</Row>

			</Container>
		)
	}
}

export default List;