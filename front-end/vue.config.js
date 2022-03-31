module.exports = {
    css: {
        loaderOptions: {
            sass:{
                prependData: `@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                @import "@/assets/scss/_variables.scss";`
            }
        }
    }
}