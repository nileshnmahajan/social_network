var ee;
function add_friend(e,id)
{
	ee=e;
	console.log(e);
	e.innerHTML="cancle request";
	e.removeAttribute("onclick")
	e.setAttribute("onclick","cancle_frindship(this,'"+id+"')");
	var crf=document.getElementsByName("csrfmiddlewaretoken")[0].value;
	var fd=new FormData();
	fd.append("csrfmiddlewaretoken",crf);
	fd.append("id",id);
	xhr("/add_friend","post",fd,friend_added,0);
}
function friend_added(data)
{
	friend_collection_id
	
}	



function cancle_frindship(e,id)
{
	e.innerHTML="add Friend";
	e.removeAttribute("onclick")
	e.setAttribute("onclick","add_friend(this,'"+id+"')");
	var crf=document.getElementsByName("csrfmiddlewaretoken")[0].value;
	var fd=new FormData();
	fd.append("csrfmiddlewaretoken",crf);
	fd.append("id",id);
	xhr("/cancle_frindship","post",fd,rejected,0);
}

function rejected(data)
{
	
			
}

/*
function unblock(e,id)
{
	//currently not implimented
	//now implemented on chats,js
}*/

function accept(e,id)
{
	e.innerHTML="remove";
	e.removeAttribute("onclick")
	e.setAttribute("onclick","cancle_frindship(this,'"+id+"')");
	var crf=document.getElementsByName("csrfmiddlewaretoken")[0].value;
	var fd=new FormData();
	fd.append("csrfmiddlewaretoken",crf);
	fd.append("id",id);
	xhr("/accept_frindship","post",fd,accepted,0);
}
function accepted(data)
{
	
}