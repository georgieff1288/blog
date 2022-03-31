module.exports = {
    css: {
        loaderOptions: {
            sass:{
                prependData: `@import "@/assets/scss/_variables.scss";
                @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');`
            }
        }
    }
}