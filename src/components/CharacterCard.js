import React from "react";
import { Card, Image, Icon } from 'semantic-ui-react';

export default function CharacterCard({ character }) {
  return (
    <Card>
      <Image src={character.image} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          <span>{character.species} {character.status}</span>
        </Card.Meta>
        <Card.Description>
          Location: {character.location.name}<br/>
          Origin: {character.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='video' />
          {character.episode.length} Episodes
      </Card.Content>
    </Card>
  )
}
