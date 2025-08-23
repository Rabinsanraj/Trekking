
import { Typography, Container, Box, } from "@mui/material";

import {TrekkingList, TrekkingPlaces, TrekkingTips,
  FirstPara, SecondPara, Equipment, BestSeason} from "../compo/components";

function Trekking() {
    return (
        <>
            <Box>
                <FirstPara />
                <SecondPara />
                <Equipment />
                <Container maxWidth="lg">
                    <TrekkingList />
                </Container>
                <BestSeason />
                <Container>
                    <Box sx={{ width: "100%", mt: 2, }}>
                        <Typography variant='h6' fontWeight={'bold'}>Trekking Destinations in india</Typography>
                        <TrekkingPlaces />
                    </Box>
                </Container>
                <Container>
                    <Box sx={{ width: "100%", mt: 2, }}>
                        <Typography variant='h6' fontWeight={'bold'} sx={{ mt: 2 }}>Tips</Typography>
                        <TrekkingTips />
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default Trekking;