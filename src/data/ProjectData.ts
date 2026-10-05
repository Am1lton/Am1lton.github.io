export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    iconUrl: string; // used as thumnail
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar 
    date: string; // date of the project

    constructor(id: string, name: string, iconUrl: string, html: string, date: string, accentColor = "#000000", isHigh = false, isWide = false){
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
        this.date = date;
    }
}
