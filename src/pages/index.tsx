import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Alert } from "../types/Alert";

const Home: NextPage = () => {
  const [alerts, setAlerts] = useState<Alert | null>(null);
  // const [alerts, setAlerts] = useState<Alert | null>();

  useEffect(() => {
    setInterval(() => {
      fetch("/api/alerts")
        .then((res) => res.json())
        .then((data) => {
          setAlerts(data.alerts);
        });
    }, 500);
  }, []);

  return (
    <Box>
      <Container mt={"5vh"}>
        {!alerts?.data && <h1>No alerts</h1>}
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {alerts &&
            alerts.data &&
            alerts?.data.map((alert, index) => {
              return (
                <GridItem
                  // textColor={"gray.700"}
                  bgColor={"gray.700"}
                  key={index}
                >
                  <Text p={"20px"}>{alert}</Text>
                </GridItem>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

