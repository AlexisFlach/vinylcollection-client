import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Vinyl } from '../../../app/models/vinyl';


interface Props {
    vinyls: Vinyl[];
    selectVinyl: (id: number) => void;
    deleteVinyl: (id: number) => void;

}
const VinylTable = ({ vinyls, selectVinyl, deleteVinyl }: Props) => {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Album Name</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                <tbody>
                    {vinyls.map(vinyl => (
                        <tr>
                            <td>{vinyl.id}</td>
                            <td>{vinyl.title}</td>
                            <td>{vinyl.artist}</td>
                            <Button onClick={() => selectVinyl(vinyl.id)}>View Vinyl</Button>
                            <Button onClick={() => deleteVinyl(vinyl.id)}>Delete Vinyl</Button>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default VinylTable;
