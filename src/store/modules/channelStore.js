import { createSlice } from "@reduxjs/toolkit";

// 创建一个channelStore
const channelStore = createSlice({
    name: 'channel',              
    initialState: {
        channelList: []
    },
    reducers: {
        // 添加频道
        setChannelFn(state, action) {
            state.channelList = action.payload;
        },

    }
})

const { setChannelFn } = channelStore.actions;
function getListApiFn() {
    return async (dispatch) => {
        const data = await fetch("http://geek.itheima.net/v1_0/channels");
        const res = await data.json();
        console.log(res, "data.json()");
        console.log(res.data.channels, "res.data.channels");
        dispatch(setChannelFn(res.data.channels));
    }
}
const channelReducer = channelStore.reducer;
export default channelReducer;
export { getListApiFn }