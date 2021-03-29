import React from "react";
import * as Linking from "expo-linking";
import {Button, Card, Col, Content, Grid, H2, H3, Text,} from "native-base";
import {useQuery} from "react-query";
import {useParams} from "react-router-native";

import {API} from "../../api";

export const BreweryDetails = () => {
    const {id} = useParams();
    const {isLoading, error, data} = useQuery(id, () => API.getBrewery(id));
    if (isLoading) return <H2>Загрузка...</H2>;
    if (error || !data.data)
        return <Text>An error has occurred: {error.message}</Text>;
    const onCall = () => {
        Linking.openURL("Телефон:" + data.data.phone);
    };
    const onGoToWebsite = () => {
        Linking.openURL(data.data.website_url);
    };
    return (
        <Content>
            <H2>{data.data.name}</H2>
            <H3>
                {data.data.state}, {data.data.city}
            </H3>
            <Card>
                <Grid>
                    <Col>
                        <Button onPress={onGoToWebsite}>
                            <Text>Перейти на сайт</Text>
                        </Button>
                    </Col>
                </Grid>
            </Card>
        </Content>
    );
};
