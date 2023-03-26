import { Box, Button, MenuItem, Tab, Tabs, TextField } from '@mui/material'
import { useState } from 'react'

import {
  Container,
} from './styled'
export const CardTravel = ()=>{
  const [value,setValue] = useState(0)

  function handleChange(_:React.SyntheticEvent<Element, Event>,value: number){
    setValue(value )
  }
const currencies = [{value:"abc",label:"ABC"},{value:"123", label:"123"}]
  return(
    <Container elevation={3}>
    <Box >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Flights"  />
        <Tab label="Stays"  />
      </Tabs>
      <div>
        <div>
          <TextField placeholder='Fron-to'/>
          <TextField placeholder='Fron-to'/>
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField placeholder='Fron-to'/>
        </div>
        <div>
          <Button  sx={{'sm':{width:"100%"}}} >Promo Code</Button>
          <Button  fullWidth variant='outlined'>Show Flights</Button>
        </div>
      </div>
    </Box>
    </Container>
  )
}
