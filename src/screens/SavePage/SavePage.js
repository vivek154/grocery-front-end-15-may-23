import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import PageHeader from '../PageHeader/PageHeader'
import BottomNavBar from '../BottomNavBar/BottomNavBar'
import {data} from "./data"
import SaveIcon from "../../svg/save.svg"
import MyCartCard from '../MyCartPage/MycartCard/MyCartCard'
const SavePage = () => {
  return (
    <>
      <PageHeader text="Save"></PageHeader>
      <ScrollView style={{height:"60%"}}>
        <View>
        {data.map((item,index)=>{
          return <MyCartCard item={item} key={index} SVGIcon={SaveIcon}></MyCartCard>
        })}
        </View>
      </ScrollView>
      
      <BottomNavBar></BottomNavBar>
    </>
  )
}

export default SavePage

const styles = StyleSheet.create({})