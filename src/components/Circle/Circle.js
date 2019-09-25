import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const Circle = ({uri, children}) => {
    return (
        <>
            <Image 
                style={styles.image}
                source={{uri: "https://www.viajali.com.br/wp-content/uploads/2018/01/praia-do-gunga-1-730x730.jpg"}} 
            />
            <Text>{ children }</Text>
        </>
    );
};

export default Circle;