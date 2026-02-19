import { defineStore } from "pinia";


//we usually create separate stores/files based on features or responsibilities, not one big store.

export const useTaskStore = defineStore('taskStore',{
    state: () => (
        {
            tasks : [
                {id: 1, title: "Milk" , isFav : false},
                {id: 2, title: "Burger", isFav : true}
            ],
            name : 'Eren'
        }
    )
})


