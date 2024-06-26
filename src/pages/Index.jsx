import { Box, Container, VStack, HStack, IconButton, Input, Textarea, Avatar, Text, Divider, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaUser, FaHeart, FaRegHeart } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([
    { id: 1, user: "User Name", username: "@username", content: "This is a sample tweet. It contains some text to show how a tweet looks.", likes: 0 },
    { id: 2, user: "User Name", username: "@username", content: "This is another sample tweet. It contains some text to show how a tweet looks.", likes: 0 }
  ]);

  const [tweetContent, setTweetContent] = useState("");
  const [likedTweets, setLikedTweets] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null);

  const handleTweet = (parentId = null) => {
    if (tweetContent.trim() !== "") {
      const newTweet = {
        id: tweets.length + 1,
        user: "User Name",
        username: "@username",
        content: tweetContent,
        likes: 0,
        parentId: parentId
      };
      setTweets([newTweet, ...tweets]);
      setTweetContent("");
    }
  };

  const handleLike = (id) => {
    if (likedTweets.includes(id)) {
      setLikedTweets(likedTweets.filter(tweetId => tweetId !== id));
      setTweets(tweets.map(tweet => tweet.id === id ? { ...tweet, likes: tweet.likes - 1 } : tweet));
    } else {
      setLikedTweets([...likedTweets, id]);
      setTweets(tweets.map(tweet => tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet));
    }
  };

  const openReplyBox = (tweetId) => {
    setReplyingTo(tweetId);
  };

  const Tweet = ({ tweet }) => (
    <Box key={tweet.id} p={4} borderBottom="1px" borderColor="gray.200">
      <HStack spacing={4}>
        <Avatar name="User" />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold">{tweet.user}</Text>
          <Text>{tweet.username}</Text>
        </VStack>
      </HStack>
      <Text mt={2}>{tweet.content}</Text>
      <HStack mt={2}>
        <IconButton
          size="sm"
          icon={likedTweets.includes(tweet.id) ? <FaHeart /> : <FaRegHeart />}
          onClick={() => handleLike(tweet.id)}
          colorScheme={likedTweets.includes(tweet.id) ? "red" : "gray"}
        />
        <Text>{tweet.likes} {tweet.likes === 1 ? "Like" : "Likes"}</Text>
        <Button size="sm" onClick={() => openReplyBox(tweet.id)}>Reply</Button>
      </HStack>
      {replyingTo === tweet.id && (
        <HStack spacing={4} p={4} borderBottom="1px" borderColor="gray.200">
          <Avatar name="User" />
          <Textarea 
            placeholder="Write a reply..." 
            resize="none" 
            value={tweetContent} 
            onChange={(e) => setTweetContent(e.target.value)} 
          />
          <Button onClick={() => handleTweet(tweet.id)} colorScheme="blue">Reply</Button>
        </HStack>
      )}
      <VStack spacing={4} align="stretch" pl={8}>
        {tweets.filter(t => t.parentId === tweet.id).map(reply => (
          <Tweet key={reply.id} tweet={reply} />
        ))}
      </VStack>
    </Box>
  );

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
            <Textarea 
              placeholder="What's happening?" 
              resize="none" 
              value={tweetContent} 
              onChange={(e) => setTweetContent(e.target.value)} 
            />
            <Button onClick={() => handleTweet()} colorScheme="blue">Tweet</Button>
          </HStack>

          {/* Tweets */}
          <VStack spacing={4} align="stretch">
            {tweets.filter(tweet => !tweet.parentId).map((tweet) => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
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