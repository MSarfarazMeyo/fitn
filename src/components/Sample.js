import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Clipboard,
  StyleSheet,
} from "react-native";
import { sendPushNotification } from "../services/PushTokenServices";

export const Sample = ({ expoPushToken }) => {
  const [copiedText, setCopiedText] = useState(expoPushToken);

  const copyToClipboard = () => {
    Clipboard.setString(expoPushToken);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => copyToClipboard()}>
          <Text>Click here to copy to Clipboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => fetchCopiedText()}>
          <Text>View copied text</Text>
        </TouchableOpacity>

        <Text style={styles.copiedText}>{copiedText}</Text>
      </View>
      <View style={styles.container}>
        <Text>Your expo push token: {expoPushToken}</Text>
        <Button
          title="Send Notification"
          onPress={async () => {
            await sendPushNotification(expoPushToken);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  copiedText: {
    marginTop: 10,
    color: "red",
  },
});
