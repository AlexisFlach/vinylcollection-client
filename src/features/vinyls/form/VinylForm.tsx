import React, { ChangeEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Vinyl } from '../../../app/models/vinyl'

interface Props {
    closeForm: () => void;
    vinyl: Vinyl | undefined;
    createOrEdit: (vinyl: Vinyl) => void;
}
const VinylForm = ({ closeForm, vinyl: selectedVinyl, createOrEdit }: Props) => {

    const initialState = selectedVinyl ?? {
        id: 0,
        title: "",
        artist: 0
    }

    const [vinyl, setVinyl] = useState(initialState);

    const handleSubmit = () => {
        createOrEdit(vinyl);

    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setVinyl({ ...vinyl, [name]: value })
    }
    return (
        <>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Album Title</Form.Label>
                    <Form.Control type="text" placeholder={vinyl?.title} value={vinyl.title} name="title" onChange={handleInputChange} />

                </Form.Group>

                <Form.Select aria-label="Default select example">
                    <option>Select Artist</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="danger" onClick={() => closeForm()}>
                    Close form
                </Button>
            </Form>
        </>
    )
}

export default VinylForm
