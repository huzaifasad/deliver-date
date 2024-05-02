import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { convertOffsetInMinutesToString, findTimeZone, TimeZoneSelectDialog } from 'react-timezone-map-select';

const DEFAULT_TIME_ZONE_NAME = 'America/Los_Angeles';

function Timezone() {
  /** Timezone name */
  const [timezoneName, setTimezoneName] = useState(DEFAULT_TIME_ZONE_NAME);

  /** Set true when you open TimeZoneSelectDialog. */
  const [open, setOpen] = useState(false);

  /** Called when you press "Open Dialog" button. */
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  /** Called when TimeZoneSelectDialog is closed. */
  const handleClose = useCallback((newTimeZoneName) => {
    setTimezoneName(newTimeZoneName);
    setOpen(false);
  }, []);

  /** Detailed timezone info */
  const timezone = findTimeZone(timezoneName);
  const timeOffset = timezone ? convertOffsetInMinutesToString(timezone?.rawOffsetInMinutes) : 0;

  return (
    <Container>
      <Box>
        <p>Timezone = {timezoneName}</p>
        <p>Country = {timezone ? timezone.countryName : 'Unknown'}</p>
        <p>Cities = {timezone ? timezone.mainCities.join(', ') : 'Unknown'}</p>
        <p>Offset = {timeOffset}</p>
      </Box>
      <Box>
        <Button onClick={handleOpen} variant="contained" >
          Open Dialog
        </Button>
      </Box>
      <TimeZoneSelectDialog
        open={open}
        timeZoneName={timezoneName}
        onClose={handleClose}
      />
    </Container>
  );
}

export default Timezone;
