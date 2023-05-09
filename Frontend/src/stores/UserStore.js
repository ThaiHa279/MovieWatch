import {defineStore} from "pinia"
import userService from "../services/user.service";

export const useUserStore = defineStore( "UserStore", {
    state: ()=>{
        return{ 
            user: null
        }
    },
    actions: {
        async login(data) {
            try {
                this.user = await userService.login(data);
            } catch (error) {
                console.log(error);
            }
        },
        async register(data) {
            try {
                this.user = await userService.register(data);
            } catch (error) {
                console.log(error);
            }
        },
    }
});