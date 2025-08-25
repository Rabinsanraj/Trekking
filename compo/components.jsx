import { Container, Grid, List, ListItem, Typography, Box,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, ListItemText,} from "@mui/material";
import Himachal from '../Image/Himachal.jpg';
import Things from '../Image/Things.jpg';

export function FirstPara() {
  return (
    <Container>
      <Box sx={{ mt: 2 }}>
        <Box component="img" src={Himachal} alt="Himachal" style={{ width: "100%", height: "auto", borderRadius: "20px", }} />
        <Typography sx={{ mt: 2 }}>
          Being a soft-adventure sport, almost anyone in reasonable physical condition can go trekking. To get initiated into
          trekking begin with day hikes, returning to your starting point in the evening. Move on to a multi-day trek which
          is relatively easy, in order to get to know your ability and aptitude. You can venture into the mountains with an
          experienced trekker, join an adventure club, or go with a reputed adventure travel company. It is not a good idea
          to venture out into the mountains alone – unless you happen to be a distant relative of the mythical Himalayan
          yeti (or an aspiring Reinhold Messner, the first person in the world to have climbed all fourteen 8000m peaks,
          including the first oxygen-less ascent and later the first solo ascent of Everest).
        </Typography>
        <Typography sx={{ mt: 2 }}>
          A basic knowledge of camp craft, map reading and first aid is essential before you go trekking. It’s a good idea to
          do an adventure course from one of the mountaineering/ adventure institutes in India. A basic course in
          mountaineering and a first-aid course are recommended if you decide to take it up more seriously and trek to
          remote/high-altitude areas. Get as much information about the trekking area as possible – the people, their
          culture, the geography, terrain, medical/rescue facilities and weather conditions – before you go.
        </Typography>
      </Box>
    </Container>
  )
}

export function SecondPara() {
  return (
    <Container>
      <Box>
        <Typography variant='h6' fontWeight={'bold'} marginTop={2}>Trekking in India</Typography>
        <Typography>
          Trekking in India started when the land was inhabited in prehistoric times. There are perhaps as many trekking
          routes in India as there are Indians. It was in the 1970’s and 1980’s that trekking started gaining in popularity as a
          recreational/adventure sport. A number of religious sites and shrines across the country, especially in Jammu and
          Kashmir, and in the Garhwal region of Uttarakhand – such as Badrinath, Amarnath, Gangotri, Hemkund,
          Joshimath, Kedarnath, Vaishno Devi and Yamunotri – entail trekking for a couple of days in the mountains.
          Trekking in India has grown in leaps and bounds and the current trekking scenario is very promising, with
          thousands of Indians and foreigners hitting trekking trails each year.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          What India can boast of is some of the most stunning trekking routes in the world – many of the mountain
          passes in the Ladakh and Zanskar Himalayas are above 5000m. But there are plenty of gentler and smaller trails,
          at different altitudes, both in the mountains and in the forests. If you’re looking for less arduous hikes, you’ll find
          plenty in in the Western Ghats and the Nilgiri Hills of south India (Munnar and Wayanad in Kerala, Coorg in
          Karnataka, and around Ooty in Tamil Nadu).
        </Typography>
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

export function TrekkingList() {
  const items = [
    "Small rucksack / knapsack", "Sleeping bag", "Lockable duffel bag", "Karrimat / Therm-a-Rest", "Tent",
    "Personal toiletries", "Water bottle (at least 2 litres)", "First-aid kit",
    "Camera with spare batteries and film (carry more film than you think you will need!)", "Headlamp / torch with spare cells",
    "Maps", "Diary/pen/reading material", "Sewing kit", "Swiss Army knife", "Whistle",
    "Sunscreen – with high SPF (at least 30, to better protect you from harmful UV rays)", "Lip salve/ChapStick",
    "Sunglasses with retainers/spare prescription glasses", "Lighter", "Emergency rations/goodies",
    "Parachute cord", "Ski-stick/ice-axe", "Rope (for high-altitude treks)", "Plastic bags and Ziplocs for packing gear",
  ];

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

export function TrekkingPlaces() {
  const places = [
    "Jammu and Kashmir (Ladakh, Zanskar)",
    "Himachal Pradesh",
    "Uttarakhand (Garhwal, Kumaon)",
    "Sikkim and Darjeeling",
    "Northeast states (Arunachal Pradesh)",
    "Western Ghats",
    "South India (Nilgiris, Coorg)",
  ];

  return (
    <List>
      {places.map((place, index) => (
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
  const tips = [
    "Hydration",
    "Clothing / staying warm (‘Cover your head if your feet are cold gentlemen’ is an old English saying)",
    "Packing a rucksack", "Pacing yourself on a trek",
    "Timing – ‘Start early and arrive early’ is the cardinal rule of trekking",
    "Porters and guides – A guide, or guide-cum-cook, is important on routes that are remote, tougher and relatively less trodden.Porters, with the option of ponies, will come in extremely handy on longer trips, especially if you’re carrying lots of provisions.",
    "Mules and horses on the trail",
  ];

  return (
    <List>
      {tips.map((tip, index) => (
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

export function SportManagementTable() {
  const rows = [
    {
      committee: "IMF North Zone Committee, New Delhi",
      jurisdiction: "Jammu & Kashmir, Punjab, Haryana, Uttar Pradesh, Delhi, Uttarakhand"
    },
    {
      committee: "IMF South Zone Committee, Bengaluru",
      jurisdiction: "Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, Kerala"
    },
    {
      committee: "IMF East Zone Committee, Kolkata",
      jurisdiction: "West Bengal, Odisha, Jharkhand, Bihar, Sikkim"
    },
    {
      committee: "IMF West Zone Committee, Pune",
      jurisdiction: "Maharashtra, Rajasthan, Madhya Pradesh, Chhattisgarh, Goa"
    },
    {
      committee: "IMF North East Zone Committee, Manipur",
      jurisdiction: "Manipur, Assam, Arunachal Pradesh, Meghalaya, Mizoram, Nagaland, Tripura"
    },
    {
      committee: "Services Zone",
      jurisdiction: "Indian Army, Air force and Navy"
    },
    {
      committee: "Police Service Zone",
      jurisdiction: "ITBP, BSF, CRPF and other CAPFs"
    }
  ];

  return (
    <TableContainer component={Paper} sx={{ mt: 2, overflowX: "auto",
      maxWidth: "100%", }} >
      <Table sx={{ minWidth: 600 }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#ced3d8ff", border: "1px solid #ccc" }}>
            <TableCell variant="h6" sx={{ fontWeight: "bold", border: "1px solid #ccc" }}>Zonal Committee</TableCell>
            <TableCell variant="h6" sx={{ fontWeight: "bold", border: "1px solid #ccc" }}>Jurisdiction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ border: "1px solid #ccc" }}>{row.committee}</TableCell>
              <TableCell sx={{ border: "1px solid #ccc" }}>{row.jurisdiction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function Competetions() {
  const rows = [
    { group: "Men/Women", age: "17 years & beyond", lead: true, speed: true, bouldering: true},
    {group: "Junior Boys/Girls",age: "14-16 years",lead: true,speed: true,bouldering: true},
    {group: "Sub Junior Boys/Girls",age: "10-13 years",lead: true,speed: true,bouldering: true}
  ];

  return (
    <Box sx={{ mt: 2 }}>
      <TableContainer
        component={Paper}
        sx={{ overflowX: "auto", maxWidth: "100%",}}>
        <Table sx={{ minWidth: 650, border: "1px solid #ccc" }}>
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
            {rows.map((row, index) => (
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
    </Box>
  );
}

export function WorldLevelCompetetion() {
  const competetions = [
    "World Cup (Above 16 Yrs) — held every year",
    "World Youth (Above 16 Yrs) — held every year",
    "World Championship (16 Yrs) — held every two years",
    "World Para Climbing (Above 16 Yrs) — held every two years",
  ];

  return (
    <>
      <List sx={{ listStyleType: "disc", pl: 4 }}>
        {competetions.map((comp, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            <ListItemText primary={comp} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export function Achivements() {
  const achivements = [
"2 Silver medals in 2002 Asian Youth Championship, Malaysia",
" 1 Silver & 1 Bronze in 2004 Asia Cup, Uttar Kashi, India",
" 1 Bronze in 2005 Asian Youth Championship, Hong Kong",
" 2 Silver medals in 2008 Asian Youth Cup, Bali",
" 1 Bronze in 2008 Asian Youth Championship",
" 11 Medals(3 Golds) in 2009 Asian Youth Championship, Kazakhstan",
" 1 Silver and 1 Bronze in 2009 World Trex Games, Korea",
" 3 Silvers in 2011 Asian Youth Championship, Singapore",
" 1 Gold in 2012 at World Para Climbing Championship",
" 1 Bronze in 2013 Asian Youth Championship",
" 1 Gold, 2 Silver and 1 Bronze in 2015 Asian Youth Championship",
" 1 Gold in 2017 Asian Youth Championship Singapore",
  ];

  return (
    <>
      <List sx={{ listStyleType: "disc", pl: 4 }}>
        {achivements.map((achive, index) => (
          <ListItem key={index} sx={{ display: "list-item" }}>
            <ListItemText primary={achive} />
          </ListItem>
        ))}
      </List>
    </>
  );
}