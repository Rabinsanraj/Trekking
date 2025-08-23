import { Container, Grid, List, ListItem, Typography, Box, Link } from "@mui/material";
import Himachal from '../Image/Himachal.jpg';
import Things from '../Image/Things.jpg';
import styled from "@emotion/styled";

const CustomLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  fontWeight: 600, 
  transition: "all 0.2s ease-in-out",
  fontSize: "18px",
  [theme.breakpoints.up("xs")]: { fontSize: "18px" },
  [theme.breakpoints.up("sm")]: { fontSize: "20px" },
  [theme.breakpoints.up("md")]: { fontSize: "24px" },
  [theme.breakpoints.up("lg")]: { fontSize: "30px" },
  "&:hover": {
    color: "blue",
  },
  "&active": {
    color: "blue",
    transition:"scale(0.95)",
  },
}))


export function SecondNav() {
  return (
     <Container mt={2} sx={{textAlign:"center"}}>
            <Grid container width="100%" display="flex" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
              {/* Column 1 */}
        <Grid size={{ lg:3, sm:5,md:6,xs:6}}>
          <CustomLink to="#" variant="h6" sx={{
            textDecoration: "none", color: "inherit", cursor: 'pointer',}}> Mountaineering </CustomLink>
              </Grid>
              {/* Column 2 */}
        <Grid size={{ lg: 3, sm: 5, md: 6, xs: 6 }} >
                <CustomLink to="#" variant="h6" sx={{ textDecoration: "none", color: "inherit", cursor: 'pointer' }}> Trekking </CustomLink>
              </Grid>
              {/* Column 3 */}
        <Grid size={{ lg: 3, sm: 5, md: 6, xs: 6 }} >
                <CustomLink to="#" variant="h6" sx={{ textDecoration: "none", color: "inherit", cursor: 'pointer' }} > Rock Climbing </CustomLink>
              </Grid>
              {/* Column 4 */}
        <Grid size={{ lg: 3, sm: 5, md: 6, xs: 6 }}>
                <CustomLink to="#" variant="h6" sx={{ textDecoration: "none", color: "inherit", cursor: 'pointer' }}> Sport Climbing </CustomLink>
              </Grid>
            </Grid>
          </Container>
  )
}

export function FirstPara() {
  return (
    <Container>
      <Box sx={{ mt: 2 }}>
        <img src={Himachal} alt="Himachal" style={{ width: "100%", height: "auto", borderRadius: "20px", }} />
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
        <img src={Things} alt="Things" style={{ width: "100%", height: "auto", borderRadius: "20px", }} />
      </Box>
      <Typography variant='h6' fontWeight={'bold'}  sx={{ textAlign: "center", mt: 2 }}>Equipment</Typography>
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
    "Packing a rucksack",
    "Pacing yourself on a trek",
    "Timing – ‘Start early and arrive early’ is the cardinal rule of trekking",
    "Porters and guides – A guide, or guide-cum-cook, is important on routes that are remote, tougher and relatively less trodden. Porters, with the option of ponies, will come in extremely handy on longer trips, especially if you’re carrying lots of provisions.",
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
