import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Flex, Heading, Text, Spinner } from "@chakra-ui/react";
import { getPosts } from "../api/posts";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doFetchPosts = async () => {
      const { data } = await getPosts();

      setPosts(data);
      setLoading(false);
    };
    doFetchPosts();
  }, []);

  getPosts();
  return (
    <>
      <Header />
      <Flex direction="column" p="4rem">
        <Heading as="h1" size="lg" mb="2rem" textAlign="center">
          Publicaciones Recientes
        </Heading>

        {loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          posts.map((post) => (
            <Flex
              key={post.id}
              direction="column"
              m="0.5rem"
              border="1px solid #c2c2c2"
              borderRadius="8px"
              p="2rem"
            >
              <Heading as="h3" size="lg">
                {post.title}
              </Heading>
              <Text>{post.body}</Text>
            </Flex>
          ))
        )}
      </Flex>
    </>
  );
};

export default Home;
