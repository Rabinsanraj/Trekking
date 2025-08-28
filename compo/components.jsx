import {
  Container, Grid, List, ListItem, Typography, Box, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, ListItemText,
} from "@mui/material";
import Himachal from '../Image/Himachal.jpg';
import Things from '../Image/Things.jpg';
import data from '../compo/Data.json'

export function FirstPara() {
  return (
    <Container>
      <Box sx={{ mt:2}}>
        <Box component="img" src={Himachal} alt="Himachal" style={{ width: "100%", height: "auto", borderRadius: "20px", }} />
        {data.FirstPara.map((para, i) => (
          <Typography mt={2} key={i} variant="body1" paragraph>
            {para}
          </Typography>
        ))}
      </Box>
    </Container>
  )
}

export function SecondPara() {
  return (
    <Container>
      <Box>
        <Typography variant='h6' fontWeight={'bold'} marginTop={2}>Trekking in India</Typography>
        {data.SecondPara.map((para, i) => (
          <Typography key={i} variant="body1" paragraph>
            {para}
          </Typography>
        ))}
      </Box>
    </Container>
  )
}

export function Equipment() {
  return (
    <Container>
      <Box sx={{ mt: 2 }}>
        <Box component="img" src={Things} alt="Things" style={{ width: "100%", height: "auto", borderRadius: "20px", }} />
      </Box>
      <Typography variant='h6' fontWeight={'bold'} sx={{ textAlign: "center", mt: 2 }}>Equipment</Typography>
      <Typography sx={{ textAlign: "center" }}> It is possible to rent/buy trekking equipment all over India from clubs and adventure- gear manufacturers. Do<br />
        thoroughly check all gear before venturing out into the mountains</Typography>
    </Container>
  )
}

export function TrekkingList() {

  const items = data.TrekkingItmesList;
  const mid = Math.ceil(items.length / 2);
  const col1 = items.slice(0, mid);
  const col2 = items.slice(mid);

  return (
    <Box mt={2}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid size={{ lg: 5, sm: 12, md: 6, xs: 12 }}  >
          <List>
            {col1.map((item, index) => (
              <ListItem key={index} >
                <Typography variant="body1">
                  {index + 1}. {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid >
        <Grid size={{ lg: 5, sm: 12, md: 6, xs: 12 }}>
          <List>
            {col2.map((item, index) => (
              <ListItem key={index + mid}>
                <Typography variant="body1">
                  {index + 1 + mid}. {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export function BestSeason() {
  return (
    <Container>
      <Box>
        <Typography variant='h6' fontWeight={'bold'} sx={{ textAlign: "center", mt: 2 }}>Best Season in India</Typography>
        <Typography sx={{ textAlign: "center" }}>
          <strong>May/June and September/October </strong>for Garhwal, Kumaon (Uttarakhand), Sikkim and Himachal Pradesh<br />
          <strong>June/July and August/September</strong> for Ladakh and Zanskar (Jammu and Kashmir)<br />
          One can trek in the foothills of the Himalayas from <strong>October through till March</strong>
        </Typography>
      </Box>
    </Container>
  )
}

export function TrekkingPlaces() {

  return (
    <List>
      {data.TrekkingPlaces.map((place, index) => (
        <ListItem key={index} sx={{ py: 0.5 }}>
          <Typography>
            {index + 1}. {place}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

export function TrekkingTips() {

  return (
    <List>
      {data.TrekkingTips.map((tip, index) => (
        <ListItem key={index} >
          <Typography>
            {index + 1}. {tip}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}

// ______________________________________________________________________

// Sport-Climbing

export function WhatIsSportClimbing() {
  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        WHAT IS SPORT CLIMBING
      </Typography>
      {data.WhatIsSportClimbing.map((para, i) => (
        <Typography key={i} variant="body1" paragraph>
          {para}
        </Typography>
      ))}
    </>
  )
}

export function SportClimbingPara() {
  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        SPORT CLIMBING AS A COMPETITIVE SPORT
      </Typography>
      {data.SportClimbing.map((para, i) => (
        <Typography key={i} variant="body1" paragraph sx={{ mt: 2 }}>
          {para}
        </Typography>
      ))}

      {data.SportClimbing2.map(({ name, description }, i) => (
        <Typography key={i} variant="body1" paragraph sx={{ mt: 2 }}>
          <strong>{name}</strong> {description}
        </Typography>
      ))}

      {data.SportClimbing2.map(({ para1 }, i) => (
        <Typography key={i} variant="body1" paragraph sx={{ mt: 2 }}>
          {para1}
        </Typography>
      ))}
      {data.SportClimbing2.map(({ para2 }, i) => (
        <Typography key={i} variant="body1" paragraph sx={{ mt: 2 }}>
          {para2}
        </Typography>
      ))}

      {data.SportClimbing2.map(({ name2, description2 }, i) => (
        <Typography key={i} variant="body1" paragraph sx={{ mt: 2 }}>
          <strong>{name2}</strong> {description2}
        </Typography>
      ))}
    </>
  )
}

export function InfrastructureRequired() {
  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        INFRASTRUCTURE REQUIREMENT
      </Typography>
      {data.InfrastructureRequired.map((para, i) => (
        <Typography key={i} variant="body1" paragraph>
          {para}
        </Typography>
      ))}
    </>
  )
}


export function SportManagementTable() {
  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        MANAGEMENT OF THE SPORT IN INDIA
      </Typography>
      {data.SportManagementTableRows.map(({ para }, i) => (
        <Typography key={i} variant="body1" paragraph>
          {para}
        </Typography>
      ))}
      <TableContainer component={Paper} sx={{
        mt: 2, overflowX: "none",
        maxWidth: "100%",
      }} >
        <Table sx={{ minWidth: 600, border: "1px solid #ccc", overflow:"scroll"}}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#ced3d8ff", border: "1px solid #ccc" }}>
              <TableCell variant="h6" sx={{ fontWeight: "bold", border: "1px solid #ccc" }}>Zonal Committee</TableCell>
              <TableCell variant="h6" sx={{ fontWeight: "bold", border: "1px solid #ccc" }}>Jurisdiction</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.SportManagementTableRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: "1px solid #ccc" }}>{row.committee}</TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>{row.jurisdiction}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>

  );
}

export function Competetions() {

  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        COMPETETION
      </Typography>
        {data.CompetetionsRows.map(({ para }, i) => (
          <Typography key={i} variant="body1" paragraph>
            {para}
          </Typography>
        ))}
        <TableContainer
          component={Paper}
          sx={{ overflowX: "auto", maxWidth: "100%", }}>
          <Table sx={{ minWidth: 650, border: "1px solid #ccc",overflow:"scroll" }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e9edf7" }}>
                <TableCell sx={{ fontWeight: "bold", border: "1px solid #ccc" }}>
                  Age Group
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", border: "1px solid #ccc" }}>
                  Age
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", border: "1px solid #ccc" }}>
                  Lead
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", border: "1px solid #ccc" }}>
                  Speed
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", border: "1px solid #ccc" }}>
                  Bouldering
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.CompetetionsRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {row.group}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {row.age}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc", textAlign: "center" }}>
                    {row.lead ? "✓" : ""}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc", textAlign: "center" }}>
                    {row.speed ? "✓" : ""}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc", textAlign: "center" }}>
                    {row.bouldering ? "✓" : ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}

export function WorldLevelCompetetion() {

  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        WORLD LEVEL COMPETETION
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4 }}>
        {data.WorldLevelCompetetion.map((comp, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            <ListItemText primary={comp} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export function Achivements() {

  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        INDIA'S ACHIVEMENTS IN INTERNATIONAL EVENTS
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4 }}>
        {data.achivements.map((achive, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            <ListItemText primary={achive} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export function AsianCpmpetetion() {
  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        ASIAN COMPETETIONS
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Asian championship (Above 16 Yrs) — held every year" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Asian youth championship (14-18 Yrs) — held every year" />
        </ListItem>
      </List>
    </>
  )
}

export function Training() {
  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        TRAINING COURSES
      </Typography>
      <Typography mt={2}>
        Training camps/ courses are conducted by the various Zones and also at the IMF Campus in New Delhi.
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Sport Climbing Introductory course : 5 day foundation level course for athletes" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Belayer Course : 3 day course" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Route Setters Course: 3 day course" />
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText primary="Judges Course : 3 day course" />
        </ListItem>
      </List>
    </>
  )
}
export function InIndia() {
  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
        INTERNATIONAL EVENTS IN INDIA
      </Typography>
      <Typography component="div">
        IMF regularly hosts several International level competitions in India which attract top international athletes.
        Some of the events conducted and planned in future are given below
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Asia Cup, Uttarkashi 2004" />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Bouldering World Cup at Navi Mumbai in 2016,2017" />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Bengaluru Bouldering Championship ,Sep 2017" />
          </ListItem>
        </List>
      </Typography>
    </>
  )
}

export function BenefitsOfClimbing() {
  return (
    <>
      <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>BENEFITS OF SPORT CLIMBING</Typography>
      <List>
        {data.Benefits.map(({ name, description }, i) => (
          <ListItem key={i} sx={{ display: "list-item", pl: 2 }}>
            <ListItemText primary={<Typography component="span" fontWeight="bold">
              {name}
            </Typography>} secondary={description} />
          
          </ListItem>))}
      </List>
    </>
  )
}