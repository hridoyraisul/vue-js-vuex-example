import {createStore} from 'vuex'

const store = createStore({
    state(){
        return {
            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
        }
    },
    mutations:{
        changeImageLink(state, link){
            state.link = link;
        }
    },
    actions:{
        changeLink(context, link){
            context.commit('changeImageLink', link);
        }
    },
    getters:{
        getImageLink(state){
            return state.link;
        }
    }
});

export default store;