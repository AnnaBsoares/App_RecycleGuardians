import { Image } from "react-native";

export default function ProfileIcon() {
  return (
    <Image source={require('../../assets/profileIcon.png')} style={{ position: 'absolute', top: 35, zIndex: 1, left: 15 }} />
  );
}