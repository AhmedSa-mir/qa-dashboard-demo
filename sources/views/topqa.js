import {JetView} from "webix-jet";
import {getQATeam} from "models/qateam";

export default class TopQAView extends JetView {
	config(){
		return {
			gravity:2,
			rows:[
				{
					type:"header", template:"Top QA"
				},
				{
					view:"scrollview",
					body:{
						view:"dataview",
						localId:"dataview",
						css:"qacards",
						xCount:3,
						select:true,
						type:{
							width:"auto", 
							height:93,
							// templateStart:webix.template('<div webix_l_id="#id#" class="{common.classname()} card" {common.aria()} style="width:31%; height:{common.height}px; float:left; overflow:hidden;">'),
							template:(obj,common) => {
								return common.userPic(obj)
									+ common.level(obj)
									+ common.stars(obj)
									+ "<span class='qaname'>" + obj.name + "</span>"
									+ obj.category;
							},
							// templateEnd:webix.template("</div>"),
							userPic:obj => {
								if (obj.photo)
									return "<image class='userphoto' src='data/photos/"
										+ obj.photo + ".jpg'>";
								else
									return "<span class='userpic'>"
										+ obj.name.charAt(0) + "</span>";
							},
							stars:obj => {
								let result = "";
								for (let i = 1; i <= 5; i++){
									let color = (i <= obj.stars) ? "gold" : "grey";
									result += `<span class='webix_icon mdi mdi-star star_${color}'></span>`;
								}
								return "<span class='stars'>" + result + "</span>";
							},
							level:obj => `<span class="level ${obj.level}">${obj.level}</span>`
						}
					}
				}
			]
		};
	}
	init(){
		this.$$("dataview").parse(getQATeam());
	}
}
