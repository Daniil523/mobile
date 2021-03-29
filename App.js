import React, {useEffect, useState} from "react";
import {AppLoading} from "expo";
import {
    BackButton,
    NativeRouter as Router,
    Route,
    Switch,
} from "react-router-native";
import {Container, Header, Body, Title} from "native-base";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import * as Font from "expo-font";

import {Breweries} from "./components/breweries";
import {BreweryDetails} from "./components/brewery";

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    //ПОДГРУЗКА ШРИФТОВ
    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                Roboto: require("native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
                ...Ionicons.font,
            });
            setIsLoading(false);
        };
        loadFonts();
    }, []);

    return isLoading ? (
        <AppLoading/>
    ) : (
        <Container>
            <Header>
                <Body>
                    <Title>ПивоЗаведения</Title>
                </Body>
            </Header>
            <Router>
                <BackButton>
                    <Switch>
                        //СПИСОК ВСЕХ ПИВОВАРЕН И ПРИ КЛИКЕ НА ОДНУ ИЗ НИХ БУДЕТ ОТКРЫВАТЬСЯ БОЛЕЕ ПОДРОБНЫЙ СПИСОК
                        <Route exact path="/" component={Breweries}/>
                        <Route path="/brewery/:id" component={BreweryDetails}/>
                    </Switch>
                </BackButton>
            </Router>
        </Container>
    );
}
