import React, {ReactNode} from 'react'
import { KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback,Keyboard } from 'react-native'

type Props = {
    children:ReactNode
}
export default function KeyBoardAvoidWrapper({children}:Props) {
    return (
        <KeyboardAvoidingView style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}