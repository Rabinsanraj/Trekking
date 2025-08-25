import { Container, Box, Typography, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import Himachal from '../Image/Himachal.jpg';
import { SportManagementTable, WorldLevelCompetetion, Competetions, Achivements } from '../compo/components';

function SportClimbing() {
    return (
        <Container>
            <Box sx={{ mt: 2 }}>
                {/* Hero Image */}
                <Box
                    component="img"
                    src={Himachal}
                    alt="Himachal"
                    sx={{ width: "100%", height: "auto", borderRadius: "20px" }}
                />

                {/* WHAT IS SPORT CLIMBING */}
                <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
                    WHAT IS SPORT CLIMBING
                </Typography>
                <Typography component="div" sx={{ mt: 2 }}>
                    Climbing is a primary human movement. As children, we crawl, learn to climb and then learn to walk. Sport
                    climbing is just an embellishment of that reflex we've all exercised on ladders, stairs or trees. Sport climbing is an
                    offshoot of natural rock climbing and is more accessible than traditional rock climbing, both in terms of location
                    and cost. While its genesis lay in Mountaineering, it has evolved into a unique sport accessible to millions, who
                    practise it both indoors and outdoors. Sport climbing involves high-intensity climbing on relatively short routes.
                    Its distinguishing characteristics include preplaced bolts and an emphasis on the physical aspect of the climb
                    rather than the destination or summit. Sport routes can be found indoors or out, on nearby, accessible rock crags
                    or on artificial walls at a gym or a competition arena. India houses some of the world's most renowned climbing
                    destinations like Badami, Hampi, Dhauj, Chhatru, the Sahyadris and Rishikesh. The sheer volume of unexplored
                    areas, however, catalyzes the possibility of a massive expansion in the scene that currently sits on the verge of
                    becoming a very stable tourist economy. Also, the symbiosis between outdoor and indoor climbing has facilitated
                    more frequent and rewarding competitive circuits. In short, there's a lot to watch, but even more to watch out
                    for!
                </Typography>

                {/* SPORT CLIMBING AS A COMPETITIVE SPORT */}
                <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
                    SPORT CLIMBING AS A COMPETITIVE SPORT
                </Typography>
                <Typography component="div" sx={{ mt: 2 }}>
                    Sport climbing on an artificial wall surface was officially confirmed as an additional sport for the Tokyo 2020
                    Olympic Games by the IOC Session in Rio de Janeiro in August 2016 and it has been included as a medal sport in
                    the 2018 Youth Olympic Games in Buenos Aires. The International Federation of Sport Climbing (IFSC) is the
                    international governing body for the sport of competitive climbing. It was founded in Frankfurt on 27 January
                    2007 by 48 member federations. The IFSC is recognized by the IOC, is member of ARISF, Sport Accord and
                    IWGA.
                </Typography>

                <Typography mt={2}>
                    International Competition Climbing includes the following Disciplines:
                </Typography>

                {/* Disciplines */}
                <Typography component="div" mt={2}>
                    <strong>a) Lead: </strong>
                    Climbs ('Routes') are climbed with the competitor clipping into protection points as they climb (on "Lead").
                    Progression along the line of the route determines a competitor's ranking. Lead climbing is a height competition
                    within a specified time frame in which climbers attach a safety rope and climb a fixed course on a wall exceeding
                    12 meters. It focuses on the difficulty of a route.
                </Typography>

                <Typography component="div" mt={2}>
                    <strong>b) Bouldering: </strong>
                    Short climbs ('Boulders') are attempted without ropes but with landing mats for protection. Climbers climb fixed
                    routes on a wall of 5 meters or less, and are ranked by the number of routes they have completed in the designated
                    time frame. It focuses on short 'problem' sequences of 5 to 6 moves.
                </Typography>

                <Typography component="div" mt={2}>
                    <strong>c) Speed: </strong>
                    Climbs are attempted with an in-situ rope on ("Top-Rope"). Speed climbers climb a fixed route on a 15 meter wall
                    with holds. The time to complete the route determines a competitor's ranking. It is a sprint race in which split-second
                    timing is required.
                </Typography>

                <Typography component="div" mt={2}>
                    <strong>d) Team Speed: </strong>
                    This new discipline has been introduced in the Olympic format. It is a relay competition with teams of three athletes
                    of the same sex. The race is held on the speed climbing wall, split into four lanes, two for each team.
                </Typography>

                <Typography component="div" mt={2}>
                    Climbing is a challenging, thoroughly enjoyable and highly addictive sport that nurtures great physical (strength,
                    balance, coordination) and mental (confidence, trust in others, commitment) attributes whilst remaining non
                    discriminatory regarding gender or age. It places an emphasis on gymnastic-like ability, strength, and endurance.
                    The athletes have to use his/her two hands and two legs but not all four at one time. At least one out of four
                    points of his body should be free leaving him to push up, hence it is based and known as 3 point climbing.
                    <br />
                    <br />
                    In addition to the Athletes who participate in the competitions, several other categories of officials/ athletes are
                    also actively involved in the conduct of sport climbing activity
                </Typography>

                {/* Officials */}
                <Typography component="div" mt={2}>
                    <strong>1. Belayers: </strong> Are trained to handle safety rope of the climbers and arrest the fall of athletes in case they slip, to
                    prevent injuries and ensure safe descent.
                </Typography>

                <Typography component="div" mt={2}>
                    <strong>2. Route Setters: </strong> They plan and co-ordinate all matters of route setting and route maintenance, including the
                    design of each route or boulder; the installation of holds, protection points and other equipment; repair and
                    cleaning of routes and boulders. They are responsible for checking the technical standard and safety of each
                    route or boulder.
                </Typography>

                <Typography component="div" mt={2}>
                    <strong>3. Judges: </strong> They judge the performance of the competitors on routes and boulders respectively. National Judges
                    shall be persons holding an international or a national license and are expected to be fully informed of the
                    technical rules and regulations governing competitions approved by the IFSC
                </Typography>

                {/* INFRASTRUCTURE */}
                <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
                    INFRASTRUCTURE REQUIREMENT
                </Typography>
                <Typography component="div" mt={2}>
                    The infrastructure required for the practice of the sport is a designed climbing wall fitted with holds to enable
                    climbing on the wall. It can be done on any existing wall or a separate structure safely with the aid of the rope
                    belay. <br />
                    However, on most modern walls, the material most often used is a thick multiplex board with holes drilled into it.
                    The face of the multiplex board climbing surface is covered with textured products including concrete and paint
                    or polyurethane loaded with sand. In addition to the textured surface and hand holds, the wall may contain
                    surface structures such as indentions (in cuts) and protrusions (bulges), or take the form of an overhang, under
                    hang or crack. Some grips are formed to mimic the conditions of outdoor rock, including some that are oversized
                    and can have other grips bolted onto them. <br />
                    However for a competition the wall needs to be standardized as per IFSC parameters.
                </Typography>

                {/* MANAGED TABLE */}
                <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
                    MANAGEMENT OF THE SPORT IN INDIA
                </Typography>
                <Typography component="div" mt={2}>
                    Indian Mountaineering Foundation (IMF) represents India in the IFSC and coordinates the activities of the sport
                    climbing in the country strictly according to the guide lines of IFSC. IMF National Sport Climbing Committee
                    plans, coordinates and executes sport climbing activities and events across the country through various Zonal
                    Committees.
                </Typography>
                <Box>
                    <SportManagementTable />
                </Box>

                {/* COMPETITIONS */}
                <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
                    COMPETETION
                </Typography>
                <Typography mt={2}>
                    Competitions are held keeping the Asian/ world parameters in view. Athletes are selected to take part in the all
                    three (Lead, Speed & Boldering) events of the Asian Championship and then on to the world Cups/ World
                    Championship.
                </Typography>
                <Box>
                    <Competetions />
                </Box>

                {/* WORLD LEVEL COMPETITION */}
                <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
                    WORLD LEVEL COMPETETION
                </Typography>
                <WorldLevelCompetetion />

                {/* ASIAN COMPETITIONS */}
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

                {/* TRAINING COURSES */}
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

                {/* ACHIEVEMENTS */}
                <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>
                    INDIA'S ACHIVEMENTS IN INTERNATIONAL EVENTS
                </Typography>
                <Achivements />
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
                <Typography variant="h6" mt={2} sx={{ fontWeight: "bold" }}>BENEFITS OF SPORT CLIMBING</Typography>

                <List>
                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={<Typography component="span" fontWeight="bold">
                            Combines cardio and strength into a single workout:
                        </Typography>} secondary=" During a single session of rock climbing, the body executes a number 
                        of physical tests, including boosting heart rate, building muscle and developing stamina. The upper
                        body strength required for rock climbing is a given for pulling oneself up, while the legs and core
                        build muscle as the body strives to find balance. According to a 1997 study published in the British
                        Journal of Sports Medicine, the cardio and energy consumed in rock climbing is similar to running at a
                         pace between 8 and 11 minutes per mile."/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={
                                <Typography component="span" fontWeight="bold">
                                    Strengthens and tones muscles:
                                </Typography>}
                            secondary="Rock climbing requires several different muscles groups to be engaged during 
                            the workout. Abs, obliques, delts, traps, biceps, lats, quads, calves. In fact, rock climbing 
                            even works your forearm muscles by strengthening a climber's grip. Virtually all major muscles 
                            groups are incorporated in even a single rock climbing expedition. A review published in the Journal
                             of Human Kinetics in 2011 reported that elite rock climbers often have lower body mass indexes, 
                             lower body fat percentages, and increased handgrip strengths"/>
                    </ListItem>

                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={
                                <Typography component="span" fontWeight="bold">
                                    Increases flexibility:
                                </Typography>}secondary="Rock climbing encourages participants to increase their range of motion. 
                            Rock climbing demands flexibility and adaptability as it requires climbers to reach, 
                            leap and climb to handholds and footholds usually far from a comfortable distance. According 
                             the July 2011 issue of 'Medicine & Science in Sports & Exercise', the American College of Sports 
                             Medicine suggested stretching should be done at least twice a week to increase flexibility, range 
                             of motion and improve blood circulation."/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={<Typography component="span" fontWeight="bold">
                            Mental strength: 
                        </Typography>} secondary=" In bouldering the routes climbers take are called problems-and justly so, as a rock climbing 
                            requires problem-solving skills. Navigating routes demands a climber to judge their individual abilities, such as 
                            reach, strength required to complete the next step, current energy levels and route planning. Furthermore, 
                            rock climbing requires hand-eye coordination necessary for a climber to judge what he or she sees in a crag 
                            and how to reach it"/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={<Typography component="span" fontWeight="bold">
                            Reduces stress: 
                        </Typography>} secondary="  Rock climbing reduces stress by increasing levels of nor epinephrine, a neurotransmitter in 
                        the body that aids in releasing stress. Climbers oftentimes become immersed in the flow of the activity 
                        enabling them to become consumed in the activity of reaching, climbing and leaping, creating as sense of 
                        ecstasy. Climbing outdoors also has been proven to further lower stress levels as climbers are more exposed 
                        to the sun and Vitamin D."/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={<Typography component="span" fontWeight="bold">
                            Burns calories: 
                        </Typography>} secondary="Harvard Health Publications reported that a 155-pound person burns about 818 calories 
                        hourly during a rock-climbing ascent and 596 calories per hour while rappelling. According to Dr. Kathleen 
                        Zelman of WebMD, burning 500 calories more than one eats every day can help shed 1-2 pounds per week."/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={<Typography component="span" fontWeight="bold">
                            Prevents chronic disease:
                        </Typography>} secondary="The various exercises involved in rock climbing can aid in the prevention of chronic 
                        illnesses, such as heart disease, high blood pressure, high blood cholesterol and diabetes. The Centers for 
                        Disease Control and Prevention said rock climbing was a vigorous and intense physical activity and because of 
                        its health benefits in reducing stress, cardiovascular activity and building muscle, rock climbing can decrease
                        the risk for various chronic illnesses"/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={<Typography component="span" fontWeight="bold">
                            Breathtaking sights: 
                        </Typography>} secondary="Regardless of whether a climber is indoors or outdoors, climbers unanimously partake in 
                        the euphoric feeling of being on top of the world. In reaching the summit of a climb, climbers view the 
                        vantage point from a breathtaking vantage point from an awe-inspiring, bird's-eye view. This view will 
                        oftentimes be accompanied by adrenaline, happiness and excitement, all of which are positive feelings that
                        foster a sense of accomplishment and just reward, especially after put in so much work."/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={<Typography component="span" fontWeight="bold">
                            Conquers fears: 
                        </Typography>} secondary="Fear is among the greatest obstacles which prevent us from enjoying life to its fullest extent. 
                        Since of the most commonly held fears among people are the fear of heights and the fear of falling from 
                        heights. Rock climbing is a fantastic way to conquer these fears. Climbers are frequently strapped to 
                        harnesses, whether or not the climb is being done indoors or outdoors. The harness serves as a safety 
                        measure, preventing climbers from falling when they should lose their balance or grip. With the security of 
                        the harness, climbers can reach heights at their own comfort level. Conquering this fear of heights empowers
                        many climbers and helps build confidence and self-esteem."/>
                    </ListItem>
                    <ListItem sx={{ display: "list-item", pl: 2 }}>
                        <ListItemText primary={<Typography component="span" fontWeight="bold">
                            Challenge yourself: 
                        </Typography>} secondary="As confidence and self-reliance increase within climbs, climbers find themselves standing 
                        on the edge of their comfort zones. Climbing provides many with the opportunity to tap into the mind and 
                        body's limitless potential, enabling them to challenge themselves further in completing increasingly complex 
                        routes. Even when a route is completed, climbers will continue to tackle more challenges with even greater
                        difficulties."/>
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
}

export default SportClimbing;
