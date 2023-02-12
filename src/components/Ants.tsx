import React, { useContext } from "react"
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { AntsContext } from '../context/AntsProvider'
import { SvgCss } from 'react-native-svg'
import { antSvg } from '../utils/svgs'

type Ant = {
    name: string,
    length: number,
    color: string,
    weight: number,
    position: number,
    status: string,
}

const Ants = () => {
    const { antPositions } = useContext(AntsContext);

    if (!antPositions) return null

    return antPositions?.map((ant: Ant, i: number) => {
        return (
            <View key={i} style={styles.Acontainer}>
                <SvgCss width={100} height={100} xml={antSvg(ant?.color)} />
                <View style={{ paddingLeft: 10 }} >
                    <Text>{ant.name}</Text>
                    <Text>length: {ant.length}</Text>
                    <Text>weight: {ant.weight}</Text>
                    <Text>status: {ant.status}</Text>
                    {!!ant.position && <Text>position: {ant.position}</Text>}
                </View>
            </View>
        )
    })

}

const styles = StyleSheet.create({
    Acontainer: { flexDirection: 'row', alignContent: 'center' },
});

export default Ants