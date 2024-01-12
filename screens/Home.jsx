import { TouchableOpacity, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { Welcome, Carousel } from '../components/index'


const Home = () => {
  return (
    <SafeAreaView>
      {/* this view to design home appbar */}
      <View style={styles.appBarWrapper}>

        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24}/>

          <Text style={styles.location}> Islamabad Pakistan </Text>

          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}> 8 </Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity> 
          </View>

        </View>
        
      </View>
      {/* Need scroll view to show the body of the screen. */}
      <ScrollView>
        <Welcome/>
        <Carousel/>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home