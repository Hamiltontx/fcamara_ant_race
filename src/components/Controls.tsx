import React, { useContext, useEffect } from "react"
import {
    StyleSheet
} from 'react-native';
import { gql, useLazyQuery } from '@apollo/client'
import Button from '../components/Button'
import { AntsContext } from '../context/AntsProvider'
import { Ant } from '../utils/types'
import { generateAntWinLikelihoodCalculator } from '../utils/functions'

const ANTS_QUERY = gql`
  query {
    ants {
      name
      length
      color
      weight
    }
  }
`

const Controls = () => {
    const [callAnts, { loading, data }] = useLazyQuery(ANTS_QUERY);
    const { antPositions, control, setAntPositions, setRace, setControl } = useContext(AntsContext);

    const StartRaceCompletion = () => {
        setControl(true)
        antPositions?.map(async (ant: Ant, i: number) => {
            ant.status = 'in progress'
            ant.position = 0
            const AntRun = generateAntWinLikelihoodCalculator()
            AntRun((r: number) => {
                ant.position = r
                ant.status = 'calculated'
                antPositions.sort((a: Ant, b: Ant) => b.position - a.position);
                setRace(i)
            })
        })
    }

    useEffect(() => {
        let showData = data?.ants.map((item: Ant) => {
            return { ...item, status: 'not yet run' }
        })
        setAntPositions(showData)
    }, [data])

    console.log(control)

    return <>
        <Button
            onPress={callAnts}
            text="Call Ants"
            buttonStyle={styles.buttonCall}
            loading={loading}
        />
        {
            data && <Button
                onPress={StartRaceCompletion}
                text={control ? 'Race in progress' : 'Start Race'}
                buttonStyle={styles.buttonRace}
                disabled={control}
            />
        }
    </>

}

const styles = StyleSheet.create({
    buttonCall: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginBottom: 10,
    },
    buttonRace: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        marginBottom: 20
    },
});

export default Controls