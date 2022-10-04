import React from 'react';
import Search from './Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CoPresentIcon from '@mui/icons-material/CoPresent';

function App() {
  return (
    <>

      <Search />
      <button type="button" class="btn btn-light" style={{ marginLeft: '100px', paddingTop: '156vh', marginTop: '-168vh', paddingLeft: '9vh', borderRadius: '0px' }}></button>
      <HomeIcon style={{marginLeft: '-7vh', marginTop: '-124rem'}} />
      <AccessibilityNewIcon style={{marginLeft: '-25px', marginTop: '-116rem'}} />
      <PeopleIcon style={{marginLeft: '-22px', marginTop: '-108rem'}}/>
      <CoPresentIcon style={{marginLeft: '-25px', marginTop: '-100rem'}} />
      <button type="button" class="btn btn-light" style={{ marginLeft: '74rem', paddingTop: '156vh', marginTop: '-168vh', paddingLeft: '10vh', borderRadius: '0px' }}></button>
    </>
  );
}


export default App;
