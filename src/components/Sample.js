import React from "react";
import { Button, Text, View } from "react-native";
import { sendPushNotification } from "../services/PushTokenServices";

export const Sample = ({ expoPushToken }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text>Your expo push token: {expoPushToken}</Text>
      <Button
        title="Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
  );
};
