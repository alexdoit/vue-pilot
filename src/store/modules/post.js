export default{
    state: 
    { 
        posts:[]
    },
    mutations: 
    {
        updatePosts(state,posts)
        {
            state.posts = posts;
        }
    },
    actions: 
    {
        async fetchPosts(ctx)
        {
            const res = await fetch("https://cors-anywhere.herokuapp.com/http://3.121.162.138/API/PatOrder");
            //const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const posts = await res.json();
            ctx.commit('updatePosts',posts);
            //this.posts = posts; 
        }
    },
    getters:
    {    
        allPosts(state)
        {
            return state.posts;
        }
    }    
  }