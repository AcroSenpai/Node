var Agenda=function(title,initial){

	this.title=title;
	this.contents=initial;

	this.changeTittle=function(title){
		this.title=title;
	};

	this.push=function(nom,telf){
		this.contents[nom]=telf;
	};
	this.erase=function(nom){
		delete this.contents[nom];
	};
	this.list=function(){
		console.log(title);
		for(var i in this.contents){
			console.log(i+": "+this.contents[i]);
		}


	}
};
module.exports=Agenda;