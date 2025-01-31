
import { ref } from "vue";
import { defineStore } from "pinia";
import { isMobile } from "@/scripts/utils";

onresize = () => {
    const mobile = isMobile();
    const applicationStore = useApplicationStore();
    applicationStore.setIsDeviceMobile(mobile);
}

export const useApplicationStore = defineStore('applicationStore', () => {
    const isDeviceMobile = ref(isMobile());
    const setIsDeviceMobile = (value) => isDeviceMobile.value = value;

    return ({ isDeviceMobile, setIsDeviceMobile });
});