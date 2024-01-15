import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import styles from './productDetails.style'
import { COLORS } from '../constants'

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.contaier}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='heart' size={30} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: "https://d3ls91xgksobn.cloudfront.net/651x434,fit/etuovimedia/images/property/import/300/673300/0e76b9541118d347871c0e0e51d244c4/69570ecde99b28b82390b180164ea5b9/ORIGINAL.jpeg"}}
        style={styles.image}
      />
    </View>
  )
}

export default ProductDetails