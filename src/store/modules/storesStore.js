import {getStoreListAPI,searchStores, searchWholeStores} from "@/api/stores.js";

const storesStore = {
    namespaced: true,
    state: {
        searchInfo : {lat : "", lng : ""},
        houseInfo : [],
        storeList : [],
        selectedOption : ""
    },
    getters: {

    },
    mutations: {
        SET_LOCS: (state, datas) => {
            state.searchInfo.lat = datas.x
            state.searchInfo.lng = datas.y

        },
        SET_WHOLE_STORES:(state,datas)=>{
            state.houseInfo = []
            datas.forEach(data=>{
                state.houseInfo.push(data.trarNo)
            })
        },
        SET_STORE_LIST:(state,data)=>{
            state.storeList = data
        }
    },
    actions: {
        async getGeoInfo({commit},address) {
             await searchStores(address,
                ({data}) => {
                    commit("SET_LOCS",data.documents[0])
                    const params = {lat : data.documents[0].x , lng : data.documents[0].y}
                    searchWholeStores(
                        params,
                        ({data}) => {
                            commit("SET_WHOLE_STORES",data.body.items)
                        },
                        (error)=>{
                            console.log(error)
                        }
                    )
                    // const params = {lat : this.state.searchInfo.lat , lng : this.state.searchInfo.lng}
                    // dispatch("getWholeStore",params)
                },
                (error) => {
                    console.log(error)
                }
            );
            // const params = {lat : this.state.searchInfo.lat , lng : this.state.searchInfo.lng}
        },
        getWholeStore({commit},input) {
            searchWholeStores(
                input,
                ({data}) => {
                    commit("SET_WHOLE_STORES",data.body.items)
                },
                (error)=>{
                    console.log(error)
                }
            )
        },
        getStoreList({commit},da){
            let len = da.length
            const num = Math.floor(Math.random()*len)
            const param = {"storeNumber":da[num]}
            getStoreListAPI(
                param,
                ({data})=>{
                    commit("SET_STORE_LIST",data.body.items)
                },
                (error)=>{
                    console.log(error)
                }
            )
        },
        clearHouseInfos(){
            this.state.houseInfo = []
        }
    },
};

export default storesStore;
