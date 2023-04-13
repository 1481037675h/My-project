import { defineStore } from 'pinia'
//定义store,参数是唯一id和配置对象
export const testStore = defineStore('testStore', {
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        getCount(state) {
            return state.count
        }
    },
    actions: {
        //设置count值，不能使用箭头函数，不然会改变this指向
        setCount(count: number) {
            console.log(count)
            this.count = count;
        }
    }
})