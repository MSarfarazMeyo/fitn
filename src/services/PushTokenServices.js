import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export async function sendPushNotification(userToken) {
  await Notifications.scheduleNotificationAsync({
    content: {
      to: userToken,
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: null,
  });
}
