import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Vinyl } from '../models/vinyl';
import Header from './Header';
import VinylDashboard from '../../features/vinyls/dashboard/VinylDashboard';
import { Container } from 'react-bootstrap';


const App = () => {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const [selectedVinyl, setSelectedVinyl] = useState<Vinyl | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Vinyl[]>('https://localhost:5001/api/vinyls')
      .then(res => {
        setVinyls(res.data)
      })
  }, [])

  const handleSelectVinyl = (id: number) => {
    setSelectedVinyl(vinyls.find(x => x.id === id));
  }

  const handleCancelSelectVinyl = () => {
    setSelectedVinyl(undefined);
  }

  const handleFormOpen = (id?: number) => {
    id ? handleSelectVinyl(id) : handleCancelSelectVinyl();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleCreateOrEditVinyl = (vinyl: Vinyl) => {
    vinyl.id ? setVinyls([...vinyls.filter(x => x.id != vinyl.id), vinyl])
      : setVinyls([...vinyls, vinyl]);
    setEditMode(false);
    setSelectedVinyl(vinyl);
  }

  const handleDeleteVinyl = (id: number) => {
    setVinyls([...vinyls.filter(x => x.id !== id)])
  }
  return (
    <>
      <Header openForm={handleFormOpen} />
      <Container>
        <VinylDashboard
          vinyls={vinyls}
          selectedVinyl={selectedVinyl}
          selectVinyl={handleSelectVinyl}
          cancelSelectVinyl={handleCancelSelectVinyl}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditVinyl}
          deleteVinyl={handleDeleteVinyl}
        />
      </Container>
    </>
  );
}

export default App;
