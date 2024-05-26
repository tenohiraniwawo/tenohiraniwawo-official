import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

const Information = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://tenohira-news.microcms.io/api/v1/news",
          {
            headers: {
              "X-MICROCMS-API-KEY": import.meta.env.VITE_X_MICROCMS_API_KEY,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching content");
        }

        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchNews();
    console.log(news);
  }, []);
  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          お知らせ
        </Typography>
        {news.contents.map((announcement) => (
          <Box key={announcement.id} mb={4}>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2" color="textSecondary" mr={2}>
                {new Date(announcement.publishedAt).toLocaleDateString()}
              </Typography>
            </Box>
            <Typography variant="h5" component="h2" gutterBottom>
              {announcement.title}
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
              <span
                dangerouslySetInnerHTML={{ __html: announcement.content }}
              />
            </Typography>
            <Divider />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Information;