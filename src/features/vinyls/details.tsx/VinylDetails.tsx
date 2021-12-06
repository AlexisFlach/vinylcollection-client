import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Vinyl } from '../../../app/models/vinyl'

interface Props {
  vinyl: Vinyl;
  cancelSelectVinyl: () => void;
  openForm: (id: number) => void;
}
const VinylDetails = ({ vinyl, cancelSelectVinyl, openForm }: Props) => {
  return (
    <Card className="text-center">
      <Card.Header>Active</Card.Header>
      <Card.Body>
        <Card.Title>{vinyl.title}</Card.Title>
        <Card.Text>
          By: {vinyl.artist}
        </Card.Text>
        <Button variant="primary" onClick={() => { openForm(vinyl.id) }}>Edit</Button>
        <Button variant="danger" onClick={cancelSelectVinyl}>Cancel</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
}

export default VinylDetails
