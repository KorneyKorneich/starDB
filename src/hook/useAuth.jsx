import { useContext } from "react";
import { AuthContext } from "../components/hoc-helper/Auth-provider";
export const useAuth = () => {
    return useContext(AuthContext);
};
