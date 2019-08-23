import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default function PageNav(props) {
  return (
    <div>
    <div className='ui center'>
      {props.page > 1 && 
        (<Button 
          compact 
          size='mini' 
          class='ui button' 
          onClick={() => props.prevPage()}>
            <Icon name='left arrow' />
        </Button>)}
      <span> Page: {props.page} </span>
      {props.page < props.pageCount && 
        (<Button 
          compact 
          size='mini' 
          class='ui button' 
          onClick={() => props.nextPage()}>
            <Icon name='right arrow'></Icon>
        </Button>)}
    </div>
    </div>
  )
}