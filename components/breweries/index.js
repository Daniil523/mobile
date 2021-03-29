import React from "react";
import {AppLoading} from "expo";
import {H3, Icon, Left, List, ListItem, Right, Text} from "native-base";
import {ScrollView, View} from "react-native";
import {useQuery} from "react-query"; //ИСПОЛЬЗУЕМ БИБЛИОТЕКУ
import {useHistory} from "react-router-native";

import {API} from "../../api";

export const Breweries = () => {
    const history = useHistory();
    const {isLoading, error, data} = useQuery("breweries list", () =>
        API.getBreweries()
    );
    if (isLoading) return <AppLoading/>;
    if (error) return <Text>An error has occurred: {error.message}</Text>;
    const onItemPressed = (id) => (ev) => history.push(`/brewery/${id}`);
    return (
        <View>
            <ScrollView>
                <List>
                    {data?.data?.map(({id, name}) => {
                        return (
                            <ListItem onPress={onItemPressed(id)} key={id}>
                                <Left>
                                    <Text>{name}</Text>
                                </Left>
                                <Right>
                                    <Icon name="arrow-forward"/>
                                </Right>
                            </ListItem>
                        );
                    })}
                </List>
            </ScrollView>
        </View>
    );
};
