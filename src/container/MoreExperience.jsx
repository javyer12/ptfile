import React from 'react';
import Paper from '@mui/material/Paper';

import Search from "../components/experience/Search";
import { Tags } from "../components/experience/Tags";
import Diploma from "../components/experience/Diploma";
import Heading from "../components/Heading";
function MoreExperience() {
      return (
            <>
                  <Heading />
                  <Paper
                        variant='elevation'
                        sx={{
                              p: '2px 4px',
                              display: 'block',
                              alignItems: 'center',
                              width: "90%",
                              margin: '5%',
                        }}
                  >
                        <Search />
                        <Tags />
                        <Diploma />
                  </Paper>
            </>
      )
}

export default MoreExperience