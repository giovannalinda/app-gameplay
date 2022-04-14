import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { NavigatorProps } from "../routes/auth.routes";

export type UseNavigationProp = NativeStackNavigationProp<NavigatorProps, 'Home' | 'SignIn'>