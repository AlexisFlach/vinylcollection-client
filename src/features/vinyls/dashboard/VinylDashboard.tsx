import React from 'react'
import { Card, Col, Row, Stack, } from 'react-bootstrap'
import { Vinyl } from '../../../app/models/vinyl'
import VinylDetails from '../details.tsx/VinylDetails'
import VinylForm from '../form/VinylForm'
import VinylTable from './VinylTable'


interface Props {
    vinyls: Vinyl[];
    selectedVinyl: Vinyl | undefined;
    selectVinyl: (id: number) => void;
    cancelSelectVinyl: () => void;
    editMode: boolean;
    openForm: (id: number) => void;
    closeForm: () => void;
    createOrEdit: (vinyl: Vinyl) => void;
    deleteVinyl: (id: number) => void;
}
const VinylDashboard = ({ vinyls, selectedVinyl, selectVinyl, cancelSelectVinyl, editMode, openForm, closeForm, createOrEdit, deleteVinyl }: Props) => {
    return (
        <>
            <Row>
                <Col>
                    {selectedVinyl &&
                        <VinylDetails vinyl={selectedVinyl} openForm={openForm} cancelSelectVinyl={cancelSelectVinyl} />
                    }
                </Col>
                <Col>
                    {editMode &&
                        <VinylForm
                            closeForm={closeForm}
                            vinyl={selectedVinyl}
                            createOrEdit={createOrEdit}
                        />
                    }
                </Col>
            </Row>
            <VinylTable
                vinyls={vinyls}
                selectVinyl={selectVinyl}
                deleteVinyl={deleteVinyl}
            />
        </>
    )
}

export default VinylDashboard
