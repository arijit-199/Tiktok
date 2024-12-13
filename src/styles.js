import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
    },
    postContainer: {
        margin: 0,
        padding: 0,
        width: "100%",
        height: Dimensions.get('window').height,
    },
    video: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "black",
    },
    uiContainer: {
        height: "100%",
        justifyContent: "flex-end",
    },
    rightContainer: {
        padding: 12,
        alignSelf: "flex-end",
        display: "flex",
        flexDirection: "column",
        gap: 18
    },
    iconView: {
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    },
    profileDetailsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    proPic: {
        width: 36,
        height: 36,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50
    },
    songDetailsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    songRow: {
        display: "flex",
        flexDirection: "column"
    },
    videoDetails: {
      padding: 12,
    }

})

export default styles
