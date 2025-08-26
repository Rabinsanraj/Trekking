import { Container, Box, Typography, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import Himachal from '../Image/Himachal.jpg';
import {
    SportManagementTable, WorldLevelCompetetion, Competetions, Achivements, WhatIsSportClimbing,
    SportClimbingPara, InfrastructureRequired,
    BenefitsOfClimbing,
    InIndia,
    Training,
    AsianCpmpetetion
} from '../compo/components';

function SportClimbing() {
    return (
        <Container>
            <Box sx={{ mt: 2 }}>
                {/* Hero Image */}
                <Box component="img" src={Himachal} alt="Himachal"
                    sx={{ width: "100%", height: "auto", borderRadius: "20px" }} />
                <WhatIsSportClimbing />
                <SportClimbingPara />
                <InfrastructureRequired />
                <SportManagementTable />
                <Competetions />
                <WorldLevelCompetetion />
                <AsianCpmpetetion />
                <Training />
                <Achivements />
                <InIndia />
                <BenefitsOfClimbing />
            </Box>
        </Container>
    );
}

export default SportClimbing;
