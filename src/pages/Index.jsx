import { Box, Container, VStack, HStack, IconButton, Input, Textarea, Avatar, Text, Divider, Flex } from "@chakra-ui/react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaUser } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <HStack spacing={0} align="stretch">
        {/* Sidebar */}
        <VStack
          as="nav"
          spacing={4}
          p={4}
          align="center"
          borderRight="1px"
          borderColor="gray.200"
          width="20%"
          minH="100vh"
        >
          <IconButton aria-label="Home" icon={<FaHome />} size="lg" />
          <IconButton aria-label="Explore" icon={<FaHashtag />} size="lg" />
          <IconButton aria-label="Notifications" icon={<FaBell />} size="lg" />
          <IconButton aria-label="Messages" icon={<FaEnvelope />} size="lg" />
          <IconButton aria-label="Profile" icon={<FaUser />} size="lg" />
        </VStack>

        {/* Main Feed */}
        <VStack
          spacing={4}
          p={4}
          flex="1"
          align="stretch"
          borderRight="1px"
          borderColor="gray.200"
        >
          {/* Tweet Input Box */}
          <HStack spacing={4} p={4} borderBottom="1px" borderColor="gray.200">
            <Avatar name="User" />
            <Textarea placeholder="What's happening?" resize="none" />
          </HStack>

          {/* Tweets */}
          <VStack spacing={4} align="stretch">
            <Box p={4} borderBottom="1px" borderColor="gray.200">
              <HStack spacing={4}>
                <Avatar name="User" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">User Name</Text>
                  <Text>@username</Text>
                </VStack>
              </HStack>
              <Text mt={2}>
                This is a sample tweet. It contains some text to show how a tweet looks.
              </Text>
            </Box>
            <Box p={4} borderBottom="1px" borderColor="gray.200">
              <HStack spacing={4}>
                <Avatar name="User" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">User Name</Text>
                  <Text>@username</Text>
                </VStack>
              </HStack>
              <Text mt={2}>
                This is another sample tweet. It contains some text to show how a tweet looks.
              </Text>
            </Box>
          </VStack>
        </VStack>

        {/* Sidebar for Trends and Suggestions */}
        <VStack
          spacing={4}
          p={4}
          width="20%"
          minH="100vh"
          align="stretch"
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={2}>Trends for you</Text>
            <VStack spacing={2} align="stretch">
              <Text>#Trend1</Text>
              <Text>#Trend2</Text>
              <Text>#Trend3</Text>
            </VStack>
          </Box>
          <Divider />
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={2}>Who to follow</Text>
            <VStack spacing={2} align="stretch">
              <HStack spacing={4}>
                <Avatar name="User" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">User Name</Text>
                  <Text>@username</Text>
                </VStack>
              </HStack>
              <HStack spacing={4}>
                <Avatar name="User" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">User Name</Text>
                  <Text>@username</Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Index;