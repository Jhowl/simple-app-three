import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';

// Styles
const tagLatest = {
    width: 'fit-content',
    fontWeight: 'bold',
    borderRadius: '4px',
    marginLeft: '10px',
    display: 'flex',
    fontSize: '12px',
}

const closedExcerpt = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical'
}

const opened = {
    WebkitBoxOrient: 'vertical'
}

const number = {
    position: 'absolute',
    fontSize: '280px',
    color: 'black',
    margin: '0',
    padding: '0',
    top: '0',
    lineHeight: '1',
    zIndex: '0',
    opacity: '.3',
    left: '0',
    transform: 'translateX(-50%)',
    fontWeight: 'bold'
}



const ItemCard = ({ item, id }) => {
    const [viewAll, setViewAll] = useState(false);

    useEffect(() => {
        console.log(item);
    })

    return (
        <Col sm="12" className="p-0">
            <Card className="mt-3 p-3" style={{ border: 'none' }}>
                <div style={number}>
                    {item.name.charAt(0)}
                </div>
                <Card.Body className="d-block d-md-flex p-0" style={{ zIndex: '30' }}>
                    <Col xs={12} md={5} lg={4}>
                        <iframe title={item.name}
                            src={`https://open.spotify.com/embed/episode/${item.id}?utm_source=generator`}
                            width="100%"
                            height="232"
                            rameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

                    </Col>
                    <Col xs={12} md={7} lg={8} style={{ paddingLeft: "30px" }} >
                        {id === 0 && (
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                                <img alt="icone de notificação" src="notification.png" width={20} height={20} />
                                <span style={tagLatest}>Ouça o episódio mais recente</span>
                            </div>
                        )}
                        <Card.Title>
                            <h2>{item.name.substring(3)}</h2>
                        </Card.Title>
                        <Card.Text
                            style={viewAll ? {...opened} : {...closedExcerpt, ...{WebkitLineClamp: id = 0 ? 4 : 6}}}
                        >
                            {item.description}
                        </Card.Text>
                        <button className="btn text-decoration-underline p-0" onClick={() => setViewAll(!viewAll)}>{viewAll ? "Fechar" : 'Leia mais' }</button>
                    </Col>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemCard;
