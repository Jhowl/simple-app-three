
import React from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Us extends React.Component {
	render() {
		return (
			<Container>
				<Row>
				<Col sm="4">
					<Card className="mt-3 p-3">
						<Card.Body>
							<Card.Title>
									<h2>Lukita</h2>
							</Card.Title>
							<Card.Img 
								variant="bottom" 
								src="lukita.jpeg" />
							<Card.Text className="mt-3">
								Nascido em Belo Horizonte e criado em Governador Valadares, Lucas Daher, Lukita para os amigos e Lukita da Galera para os mais íntimos, é um administrador de empresas, entusiasta de jiu-jitsu e ativista da luta contra o estereótipo do nerd. Sua maior contribuição para o funcionamento do Podcast é dar pitaco no trabalho do Aguiar. Dono de uma peculiar paixão por macacos, viciado em trocadilhos envolvendo órgãos no mínimo polêmicos do corpo humano, gamer supremo (de uma amostra de 5 pessoas) e Mestre Pokémon devidamente reconhecido pela Liga 3 de Vida (para total e completo desespero do Paraíba), Lukita tem como um dos objetivos de vida um dia conseguir corrigir o português do PB.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col sm="4">
					<Card className="mt-3 p-3">
					<Card.Body>
						<Card.Title>
								<h2>Aguiar</h2>
						</Card.Title>
						<Card.Img 
								variant="bottom" 
								src="aguiar.jpeg" />
						<Card.Text className="mt-3">
							Mineiro nascido e castigado pelo sol quente de Governador Valadares, Rafael Aguiar, também conhecido como Terule ou simplesmente Aguiar, é analista de sistemas, amante dos livros e apaixonado por jogos e tecnologia. Conhecido por suas gambiarras tecnológicas ultra-avançadas (recursos técnicos), é ele quem efetivamente coloca o 3 de Vida para funcionar. Atualmente, além de participar das discussões inusitadas, desempenha as funções de chefe de TI, designer gráfico, editor, relações públicas, sonoplasta e inquisidor. Correu atrás do Paraíba e do Lukita igual a um doido pra fazer este podcast acontecer e espera continuar fazendo apenas por diversão, mas se tiver umas garoupas e lobos-guará envolvidos não vai reclamar.
						</Card.Text>
					</Card.Body>
					</Card>
				</Col>
				<Col sm="4">
					<Card className="mt-3 p-3">
					<Card.Body>
						<Card.Title>
								<h2>Paraíba</h2>
						</Card.Title>
						<Card.Img 
								variant="top"
								src="paraiba.jpeg" />
						<Card.Text className="mt-3">
						Nascido no longínquo litoral paraibano e criado em terras mineiras, Danilo Cavalcante, o Paraíba, é escritor, biólogo não praticante, leitor compulsivo, rpgista e portador de sérios problemas de memória. É o responsável pela maioria dos textos que vocês vão encontrar por aqui e tem o costume de infernizar a vida dos seus colegas de podcast com sua síndrome do impostor. É apaixonado pelo universo Star Wars e pelos gêneros de ficção científica e fantasia no geral. Também curte um bom RPG (na tela ou na mesa; tanto faz), além de jogos de luta e alguns títulos de RTS. Devoto fervoroso de Charles Darwin, amante de estrogonofe de carne e preguiçoso assumido, o maior sonho do PB é dominar o mundo; mas como ele sabe que isso dificilmente vai acontecer, tem como objetivo de vida viver da sua arte, de preferência em uma casa rodeada por um fosso e vigiada por gansos-de-guarda treinados na arte do ninjutsu.
						</Card.Text>
					</Card.Body>
					</Card>
				</Col>
				</Row>
			</Container>
		)
	}
}

export default Us;