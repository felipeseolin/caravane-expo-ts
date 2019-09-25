import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Section = ({ title, description, children }) => {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View>
                {children}
            </View>
        </>
    );
};

export default Section;
