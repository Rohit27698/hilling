
import React,{useState} from 'react'
import {Box,  Heading, Text,
  Button,
  Image,Center,IconButton,SlideFade,Input,Divider, 
  useBreakpointValue,Grid,
} from "@chakra-ui/react";
import {ExternalLinkIcon,
  CalendarIcon,
  SearchIcon,
  SunIcon,
  ChevronLeftIcon, ChevronRightIcon, ChatIcon,
} from "@chakra-ui/icons"
import Nature from "./Images/Nature.jpg"
import Darjiling from "./Images/Nature Images/Darjiling.jpg"
import Kasuli from "./Images/Nature Images/Kasuli.jpg"
import Khandala from "./Images/Nature Images/Khandala.jpeg"
import KULU_Manali from "./Images//Nature Images/KULU_Manali.jpg"
import lehladakh from "./Images/Nature Images/leh-ladakh.jpg"
import Lonawala from "./Images/Nature Images/Lonawala.jpeg"
import Nainital from "./Images/Nature Images/Nainital-Hill-Station.webp"
import map from "./Images/map.jpg"
import logo1 from "./Images/ComLogo/logo1.jpg"
import logo2 from "./Images/ComLogo/logo2.jpg"
import logo3 from "./Images/ComLogo/logo3.jpg"
import logo4 from "./Images/ComLogo/logo4.jpg"
import {Link} from "react-router-dom";

const Home = () => {

  const [windowStart, setWindowStart] = useState(0);

  const images = [
    Darjiling,
    Kasuli,
    Khandala,
    KULU_Manali,
    lehladakh,
    Lonawala,
    Nainital,
    Darjiling,
    Kasuli,
    Khandala,
    KULU_Manali,
    lehladakh,
    Lonawala,
    Nainital,
  ];

    

  const windowsize = useBreakpointValue({ base: 1, sm: 2, md: 4 }); 

  const goToPreviousWindow = () => {
    setWindowStart((prevStart) => Math.max(0, prevStart - windowsize));
  };

  const goToNextWindow = () => {
    setWindowStart((prevStart) => Math.min(images.length - windowsize, prevStart + windowsize));
  };

  const testimonials = [
    {
      name: "Prince Vejeta",
      rating: 5,
      feedback: "I'm Happy because I had a good experience with Healing. Thank you so much.",
    },
    {
      name: "Itachi uchiha",
      rating: 3,
      feedback: "I'm Happy because I had a best experience with Healing. Thank you so much.",
    },
    {
      name: "Madara Uchiha",
      rating: 5,
      feedback: "I'm Happy because I had a cool experience with Healing. Thank you so much.",
    },
    {
      name: "Obito",
      rating: 4,
      feedback: "I'm Happy because I had an amazing experience with Healing. Thank you so much.",
    },
    {
      name: "Light Yagami",
      rating: 5,
      feedback: "I'm Happy because I had best experience with Healing. Thank you so much."
    }
  ];


  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  return <Box backgroundColor={"rgb(124, 141, 211)"} marginTop={"-1px"}>
    <Box paddingTop={"100px"}>
      <Heading size='2xl' lineHeight={1.3} color={"white"}>
       Escape From Reality <br /> 
       Let's Explore The World
      </Heading>

      <Text color={"white"} marginTop={"40px"}>
        Get amazing experience here, no matter where in the world you want to go, <br />
        we can help you go there anytime.
      </Text>

      <Button leftIcon={<ExternalLinkIcon />} backgroundColor={"orange"} color={"white"} padding={"2px"} width={"150px"} borderRadius={"10px"}
      marginTop={"50px"}
      >
     <Link to="/ourworlds"> Book a Trip</Link>
      </Button>
      
      <Image src={Nature} alt='nature_one' width={"100%"}></Image>
    </Box>
    
    <Box backgroundColor={"rgb(26, 29, 46)"} >
      <Box  paddingTop={"150px"}>
        <Text color={"rgba(7,89,145,255)"}>Get Amazing Experience</Text>
        <Heading size={"lg"} color={"white"} paddingTop={"10px"}>Find Travel Perfection</Heading>
        <Text fontSize={"sm"} color={"white"} paddingTop={"25px"}>Bibendum pharetra faucibus at sapien a faucibus vitae senectus <br />
        morbi consequat sed orci, vulputate id pellentesque 
        </Text>
      </Box>

      <Box width={"100%"} display={"flex"}
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent={"space-evenly"} marginTop={"50px"} padding={"30px"}
      gap={{ base: "20px", md: "10px" }}
      >
        
        <Box boxShadow='xs' p='6' rounded='md' bg='rgb(26, 29, 60)'
        padding={{ base: "20px", md: "40px" }}
        flex={{ base: "none", md: "1" }}
        maxWidth={{ base: "none", md: "350px" }}
        >
          <Center>
            <Box borderRadius={"18px"} backgroundColor={"gray"} 
             width={{ base: "16%", md: "20%" }}
             height={"45px"}
              display="flex" justifyContent="center" alignItems="center" >
              <CalendarIcon/>
            </Box>
          </Center>
          <br />
          <Link to="/ourworlds"><Heading color={"white"} size={"lg"}>Schedule a Plan</Heading> <br /></Link>
          <Text color={"white"} fontSize={"small"}>Quis pretium placerat morbi <br />
            morbi arcu non lobortis neque, porta <br />
            ligula platea eget ultricies.
          </Text>
        </Box>

        <Box boxShadow='xs' p='6' rounded='md' bg='rgb(26, 29, 60)'
         padding={{ base: "20px", md: "40px" }}
         flex={{ base: "none", md: "1" }}
         maxWidth={{ base: "none", md: "350px" }}
        >
          <Center>
            <Box borderRadius={"18px"} backgroundColor={"gray"} 
             width={{ base: "16%", md: "20%" }}
             height={"45px"}
              display="flex" justifyContent="center" alignItems="center" >
              <SearchIcon/>
            </Box>
          </Center>
          <br />
          <Link to="/ourworlds"><Heading color={"white"} size={"lg"}>Find a Destination</Heading> <br /></Link>
          <Text color={"white"} fontSize={"small"}>Luctus ac et egestas sagittis a<br />
            nulla mauris id turpis vitae erat nibh <br />
            gravida convallis lorem.
          </Text>
        </Box>

        <Box boxShadow='xs' p='6' rounded='md' bg='rgb(26, 29, 60)'
        padding={{ base: "20px", md: "40px" }}
        flex={{ base: "none", md: "1" }}
        maxWidth={{ base: "none", md: "350px" }}
        >
          <Center>
            <Box borderRadius={"18px"} backgroundColor={"gray"} width={{ base: "16%", md: "20%" }}
             height={"45px"}
              display="flex" justifyContent="center" alignItems="center" >
              <SunIcon/>
            </Box>
          </Center>
          <br />
          <Link to="/ourworlds"> <Heading color={"white"} size={"lg"}>Enjoy Your Trip</Heading> <br /></Link>
          <Text color={"white"} fontSize={"small"}>Ligula dui sit integer vestibulum, Facilisis <br />
            et viverra volutpat mollis leo sapien <br />
            mauris nulla marcu.
          </Text>
        </Box>
      </Box>


      <Box>
        <Text>Popular Destination</Text>
        <Box display={"flex"} justifyContent={"space-around"}>
          <Heading color={"white"}>Recommended Destination</Heading>
            <Box display={"flex"}>
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={goToPreviousWindow}
              aria-label="Previous"
              mr={2}
            />
            <IconButton
              icon={<ChevronRightIcon />}
              onClick={goToNextWindow}
              aria-label="Next"
              ml={2}
            />
            </Box>
          </Box>
          <SlideFade in offsetY="20px">
          <Box display="flex" padding={"40px"} windowsize={"100%"}>
            {images.slice(windowStart, windowStart + windowsize).map((image, index) => (
              <Box
                key={index}
                mr={10}
                width="300px"
                height="400px"
                style={{ position: 'relative' }}
              >
                <img
                  src={image}
                  alt={`Image ${windowStart + index + 1}`}
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            ))}
          </Box>
        </SlideFade>
      </Box>

      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}
        marginTop={{ base: "50px", md: "100px" }}
        padding={{ base: "0", md: "20px" }}
        color={"white"}
        justifyContent={"space-evenly"}
        alignItems={{ base: "center", md: "initial" }}
      >
        <Box
        width={{ base: "100%", md: "auto" }} maxWidth={{ base: "none", md: "50%" }}
        >
          <Image src={map}/>
        </Box>

        <Box 
        textAlign={{ base: "center", md: "left" }} marginTop={{ base: "40px", md: "0" }}
        >
          <Text color={"rgba(7,89,145,255)"}>Benefits</Text>
          <br />
          <Heading size={"lg"}>Our Team Already Available <br/>
              All Over the World
          </Heading>
          <br />
          <Text>Sed ut perspiciatis unde omnis iste natus error sit <br />
              voluptatem accusantium doloremque laudantium, tatam
           </Text>
           <br />
           <Box display={"flex"}
           flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "center", md: "space-between" }}
           >
              <Box
              textAlign={{ base: "center", md: "left" }} marginBottom={{ base: "20px", md: "0" }}
              > <Heading>16K+</Heading> <Text fontSize={"sm"}>Happy Customers</Text> </Box>
              <Box
              textAlign={{ base: "center", md: "left" }} marginBottom={{ base: "20px", md: "0" }}
              > <Heading>20K+</Heading> <Text fontSize={"sm"}>Registered Company</Text> </Box>
              <Box
              textAlign={{ base: "center", md: "left" }} marginBottom={{ base: "20px", md: "0" }}
              > <Heading>20K+</Heading> <Text fontSize={"sm"}>Registered Country</Text> </Box>
           </Box>
        </Box>
      </Box>

      <Box marginTop={"100px"} display={"flex"} justifyContent={"center"} alignContent={"center"} flexDirection={{ base: "column", md: "row" }} gap={"100px"}>
      <Box>
        <Text color={"rgba(7,89,145,255)"}>Testimonials</Text>
        <br />
        <Heading color={"white"}>What People Say <br /> About Our Services</Heading>
        <br />
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={goToPreviousSlide}
            aria-label="Previous"
            mr={2}
            display={{ base: "none", md: "flex" }}
          />
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={goToNextSlide}
            aria-label="Next"
            ml={2}
            display={{ base: "none", md: "flex" }}
          />
          <Box flexGrow={1} textAlign="center">
            <Text color={"white"}>There are many Variations</Text>
          </Box>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={4}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            padding="20px"
            textAlign="left"
            display={index === currentSlide ? "block" : "none"}
            boxShadow='2xl'
            p='6'
          >
            <Box
              borderRadius={"18px"}
              backgroundColor={"gray"}
              width={"10%"}
              height={"45px"}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ChatIcon/>
            </Box>
            <br />
            <Text color={"white"}>{testimonial.name}</Text> <br />
            <Box display={"flex"} color={"white"}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <SunIcon key={i} />
              ))}
            </Box>{" "}
            <br />
            <Text color={"white"} fontSize={"sm"}>
              {testimonial.feedback}
            </Text>
          </Box>
        ))}
      </Box>

      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent="center"
        marginTop={"10px"}
        
      >
        <IconButton
          icon={<ChevronLeftIcon />}
          onClick={goToPreviousSlide}
          aria-label="Previous"
          mr={2}
        />
        <IconButton icon={<ChevronRightIcon />} onClick={goToNextSlide} aria-label="Next" ml={2} />
      </Box>
    </Box>

    <Box marginTop={{ base: "100px", md: "50px" }} textAlign="center">
      <Text color="rgba(7, 89, 145, 255)">Subscription</Text>
      <Heading color="white" marginTop="20px" marginBottom="10px">
        Join Our Community to Get the Best Price
      </Heading>
      <Text color="white" fontSize="md">
        Subscribe to be the first to hear about upcoming fintech services!
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        marginTop="20px"
        justifyContent="center"
        alignItems={"center"}
        marginLeft={"100px"}
        marginRight={"100px"}
      >
        <Image src={logo1} />
        <Image src={logo2} />
        <Image src={logo3} />
        <Image src={logo4} />
      </Grid>
      <Box display="flex" flexDirection={{ base: "column", md: "row" }} alignItems="center" justifyContent="center" marginTop="50px">
        <Input placeholder="Enter your email" marginBottom={{ base: "20px", md: "0" }} maxWidth="300px" />
        <Button colorScheme="orange" size="md" marginLeft={{ md: "10px" }}>
          Join Now
        </Button>
      </Box>
    </Box>

      <Divider marginTop={"50px"}/>
    </Box>


  {/* <Footer/> */}
  </Box>


}

export default Home
