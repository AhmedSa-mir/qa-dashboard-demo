import {JetView} from "webix-jet";
import {getUserActivity} from "models/useractivity";

export default class UserActivityView extends JetView {
	config(){
		return {
			gravity:3,
			rows:[
				{ type:"header", template:"User activity" },
				{
					view:"geochart",
					localId:"geo",
					// provide your own Google API key 
					// https://developers.google.com/maps/documentation/javascript/get-api-key
					key:"AIzaSyAi0oVNVO-e603aUY8SILdD4v9bVBkmiTg",
					chart:{
						colorAxis:{
							colors:[  "#FDBF4C", "#1CA1C1", "#FF5C4C" ]
						},
						legend:"none",
						datalessRegionColor:"#D9D8D7",
						projection:"kavrayskiy-vii"
					}
				}
			]
		};
	}
	init(){
		this.$$("geo").parse(getUserActivity());
	}
}