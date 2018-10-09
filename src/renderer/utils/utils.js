export const openLink = link => {
    require("electron").shell.openExternal(link)
}