import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS, FONTSTYLES } from "../setters/styles";
import { Patient, ScreenNavigationProp } from "../setters/types";

const PatientDirectoryButton = ({ patient, nav }: { patient: Patient, nav: ScreenNavigationProp }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                style={[styles.patientButton, { flex: 9 }]}
                onPress={() => {
                    nav.navigate("PatientProfile", { patient: patient })
                }}>

                <Text style={styles.nameText}>{patient.firstName} {patient.lastName}</Text>

                <Text style={[
                    styles.functionalityText,
                    { textAlign: "center" },
                    patient.fLevel === "Finish Assessment" && { color: COLORS.warning },
                ]}>
                    {patient.fLevel}
                </Text>

            </TouchableOpacity>
        </View>
    )
}

export default PatientDirectoryButton;

const styles = StyleSheet.create({
    nameText: {
        color: COLORS.purpleLighter,
        fontSize: 36,
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
    },
    functionalityText: {
        color: COLORS.purpleLighter,
        fontSize: 26,
        fontFamily: 'Roboto-Bold',
    },
    patientButton: {
        backgroundColor: COLORS.purpleSoft,
        borderColor: COLORS.purpleDark,
        borderWidth: 4,
        borderRadius: 10,
        padding: 10,
        marginBottom: 6,
    }
})