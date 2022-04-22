// External dependencies
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Internal dependencies
import ItemCard from './ItemCard';
import data from './../mock';

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