import * as React from 'react';
import {
  Timeline, 
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
  TimelineConnector
} from '@mui/lab';

import { PRIMARY_COLOR } from '../settings/constants';
import {Typography, styled } from '@mui/material';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import CoffeeRoundedIcon from '@mui/icons-material/CoffeeRounded';
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import LaptopMacRoundedIcon from '@mui/icons-material/LaptopMacRounded';



const CusTimelineDot = styled(TimelineDot)({
  background: PRIMARY_COLOR,
})
const CusTimelineConnector = styled(TimelineConnector)({
  //background: PRIMARY_COLOR,
})
const CusTimelineContent = styled(TimelineContent)({
 // background: PRIMARY_COLOR,
})

export default function MyTimeline() {
  return (
    <Timeline position="alternate">
     <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <CusTimelineConnector />
          <CusTimelineDot>
            <ApartmentRoundedIcon />
          </CusTimelineDot>
          <CusTimelineConnector />
        </TimelineSeparator>
        <CusTimelineContent sx={{ py: 3, px: 2 }}>
          <Typography variant="h6" component="span">
           Jr Frontend ReactJS Development
          </Typography>
          <Typography>
           SPLabs CO., LTD
          </Typography>
        </CusTimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
         2021 - 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <CusTimelineConnector />
          <CusTimelineDot>
            <ApartmentRoundedIcon />
          </CusTimelineDot>
          <CusTimelineConnector />
        </TimelineSeparator>
        <CusTimelineContent sx={{ py: 3, px: 2 }}>
          <Typography variant="h6" component="span">
           Sr Frontend Development
          </Typography>
          <Typography>
            JAY Branding CO., LTD
          </Typography>
        </CusTimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <CusTimelineConnector />
          <CusTimelineDot>
            <ApartmentRoundedIcon />
          </CusTimelineDot>
          <CusTimelineConnector />
        </TimelineSeparator>
        <CusTimelineContent sx={{ py: 3, px: 2 }}>
          <Typography variant="h6" component="span">
           Jr Frontend Development
          </Typography>
          <Typography>
           VTTech Solution CO., LTD
          </Typography>
        </CusTimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <CusTimelineConnector />
          <CusTimelineDot>
            <StoreRoundedIcon />
          </CusTimelineDot>
          <CusTimelineConnector />
        </TimelineSeparator>
        <CusTimelineContent sx={{ py: 3, px: 2 }}>
        <Typography variant="h6" component="span">
            Owner
          </Typography>
          <Typography>
            Calligraphy Shop 
          </Typography>
        </CusTimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <CusTimelineConnector />
          <CusTimelineDot>
            <CoffeeRoundedIcon />
          </CusTimelineDot>
          <CusTimelineConnector />
        </TimelineSeparator>
        <CusTimelineContent sx={{ py: 3, px: 2 }}>
        <Typography variant="h6" component="span">
            Manager
          </Typography>
          <Typography>
            Coffee Shop 
          </Typography>
        </CusTimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <CusTimelineConnector />
          <CusTimelineDot>
            <LaptopMacRoundedIcon />
          </CusTimelineDot>
          <CusTimelineConnector />
        </TimelineSeparator>
        <CusTimelineContent sx={{ py: 3, px: 2 }}>
        <Typography variant="h6" component="span">
           Intern Fullstack Development
          </Typography>
          <Typography>
            Dong Thap University
          </Typography>
        </CusTimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2015 - 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <CusTimelineConnector />
          <CusTimelineDot>
            <SchoolRoundedIcon />
          </CusTimelineDot>
          <CusTimelineConnector />
        </TimelineSeparator>
        <CusTimelineContent sx={{ py: 3, px: 2 }}>
        <Typography variant="h6" component="span">
           Computer Science
          </Typography>
          <Typography>
            Dong Thap University
          </Typography>
        </CusTimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          1997
        </TimelineOppositeContent>
        <TimelineSeparator>
          <CusTimelineConnector />
          <CusTimelineDot>
            <CakeRoundedIcon />
          </CusTimelineDot>
          <CusTimelineConnector />
        </TimelineSeparator>
        <CusTimelineContent sx={{ py: 3, px: 2 }}>
        <Typography variant="h6" component="span">
        Year of birth
          </Typography>
          <Typography>
            
          </Typography>
        </CusTimelineContent>
      </TimelineItem>
     
    </Timeline>
  );
}
