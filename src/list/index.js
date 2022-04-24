// External dependencies
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Internal dependencies
import ItemCard from './ItemCard';
import data from './../mock';

// componentDidMount() {
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
// }

const List = () => {
	return (
		<Container>
			<Row>
				{data.episodes?.items.map((item, id) => (
					<ItemCard item={item} id={id} />
				))}
			</Row>

		</Container>
	)
}

export default List;
