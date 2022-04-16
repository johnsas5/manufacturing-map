import {
  collection
} from "firebase/firestore";
import { db } from "./dbconfig";

export const onlineUsersCollName = "onlineUsers";
export const onlineUsersColl = collection(db, onlineUsersCollName);

export const downtimeEntriesCollName = "downtimeEntries";
export const downtimeEntriesColl = collection(db, downtimeEntriesCollName);

export const chatMessagesCollName = "messages";
export const chatmessagesColl = collection(db, chatMessagesCollName);