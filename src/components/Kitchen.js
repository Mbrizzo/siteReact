import React from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Kitchen.css';

const Kitchen = () => {
  const cardInfo = [
    {
      image: 'https://i.ibb.co/W6k9fW2/quizizz.png',
      title: 'Quizizz',
      text:
        'O Quizizz é usado por mais de 20 milhões de pessoas por mês para treinamento, orientação e integração de funcionários, envolvimento do cliente, e-Learning e ensino, em escolas, residências e escritórios em todo o mundo. O que está esperando?',
      list: 'Iphone - Android - Windows',
    },
    {
      image: 'https://i.ibb.co/6P7CpSL/Jitsi.png',
      title: 'Jitsi Meet',
      text:
        'Vá em frente, faça um vídeo chat com toda a equipe. Convide todos que você conhece. Jitsi Meet é uma solução de videoconferência 100% open source totalmente criptografada que você pode usar o dia todo, todos os dias, gratuitamente.',
      list: 'Iphone - Android - Web',
    },
    {
      image: 'https://i.ibb.co/g4mj39q/zoom-cloud-meetings-163835.png',
      title: 'Zoom',
      text:
        'O Zoom fornece serviços de videoconferência que combina videoconferência, reuniões online, chat. O zoom oferece uma maneira de iniciar ou participar de uma reunião de vídeo com 100 pessoas, compartilhamento de tela e mensagens instantâneas.',
      list: 'Freemium',
    },
    {
      image: 'https://i.ibb.co/JyzYYMW/gotomeeting.png',
      title: 'GoToMeeting',
      text:
        'GoToMeeting é um software de reunião on-line, compartilhamento de área de trabalho e videoconferência que permite ao usuário se encontrar com outros usuários, clientes, ou colegas através da Internet em tempo real.',
      list: '$$$',
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Img
          variant="top"
          src="https://i.ibb.co/W6k9fW2/quizizz.png"
          src={card.image}
        />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{card.list}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="dark">Saiba Mais</Button>
        </Card.Body>
      </Card>
    );
  };

  return <div className="cards">{cardInfo.map(renderCard)}</div>;
};

export default Kitchen;
