import { Box, Typography, Container } from '@mui/material'
import Himachal from '../Image/Himachal.jpg';
function RockClimbing() {
    return (
        <>
            <Container >
                <Box sx={{ mt: 2 }}>
                    <img img src={Himachal} alt="Himachal" style={{ width: "100%", height: "auto", borderRadius: "20px", }} />
                    <Typography sx={{ mt: 2 }}>
                        There are several good rock climbing areas in India <br />
                        The Aravali hills have good climbing faces at Dumdama, Dhauj and Nuh, all situated near Delhi. The Western
                        Ghats have Mumbra and Dudha beyond Pune. Himachal Pradesh offers the Manali Valley, Chattru, Manikaran
                        and the Rohtang Pass. Rajasthan has Mount Abu and Sariska which have gentler rocks. In Karnataka there are the
                        Chamundi Hills. Sahyadri Range (Western Ghats) having natural rock climbing areas with various grades of
                        difficulties. Many virgin rock pinnacles & cracks in the un-explored region waiting to be explored.
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Best Time: Rock climbing can be undertaken throughout the year. India is a vast country and different parts of the
                        country have different climatic conditions. Although you can practice rock climbing in most parts of the country,
                        the the Himalayan region provides the best rock-climbing challenges for he expert climber. The ideal months to
                        practice this sport in the Himalayas are from April to June. In Delhi, however, the winter months are better than
                        the rest of the year because this is the time when you can combine rock climbing with the pleasure of
                        sightseeing. The weather in South India is ideal for rock climbing throughout the year. The November to April is
                        good time for climbing in Western Ghats.
                    </Typography>
                    <Typography sx={{mt:2}}>
                        Rock Climbing in India if we divide in four Zones as North Zone: Sheer rock faces, ideal for rock climbing, can be
                        found in many areas. The Aravali hills have good climbing faces at Dumdama, Dhauj and Nuh, all situated near
                        Delhi. Himachal Pradesh offers the Manali Valley, Manikaran and the Rohtang Pass.
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        West Zone: The Western Ghats have Mumbra and Dudha beyond Pune. There are several good rock-climbing
                        destinations near Mumbai like Kanheri Caves in the Borivili National Park, Mumbra Boulders, and Manori Rocks.
                        In Gujarat, Pavagadh is a favourite rock-climbing destination. Rajasthan has Mount Abu and Sariska which have
                        gentler rocks. In Karnataka there are the Chamundi Hills.
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        South Zone: Badami, a five-hour drive from Bangalore, is a good place for rock climbing. Bangalore is in the
                        centre of a number of rock-climbing destinations like Ramanagaram (the setting for the Hindi blockbuster Sholay),
                        Savandurga, Thuralli, Kabbal, Raogodhu, and others. Kambakkam at a distance of around 100 km from Chennai
                        provides good climbing in many grades while Hampi in Karnataka has some of the best granite rocks in India
                        providing the climbers ample opportunities to test their skills.
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        East Zone: In a 300-km radius adjoining Calcutta, there are some good rock-climbing destinations like Purulia,
                        Matha Bura, Jai Chandi, and Susunia Hills. The Himalayan Mountaineering Institute provides some courses in
                        Mountaineering at Gombu and Tenzing Norgay Rocks.
                    </Typography>
                </Box>  
            </Container>      
        </>
    )
}
export default RockClimbing;