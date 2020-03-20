let btn_search_info = document.querySelector('.btn-search_info');
let isMenuOpen_info = false;

function search_info() {
    if(isMenuOpen_info == false){
        let div_container = document.createElement('div');
        isMenuOpen_info = true;
        div_container.style.cssText =
     `width: 65%;
	dipslay:block;
	margin-left: 20%;
    margin-top: -4%;
	border-radius:3%;
	background-color:#2b2b2b;
	height:100%;
    `

    let formms = document.createElement('form');
    formms.setAttribute('action','../../php/search_info.php');
    formms.setAttribute('method','post');

    formms.append(div_container);

    main_info.append(formms);
    

    let btn_close_menu = document.createElement('img');
    btn_close_menu.setAttribute('src','https://img.icons8.com/ios-glyphs/30/000000/macos-close.png');
    div_container.append(btn_close_menu);

    btn_close_menu.onclick = function(){
		isMenuOpen_info = false;
		main_info.removeChild(formms);
	}

    let input_search_name = document.createElement('input');
    input_search_name.style.cssText =` width: 40%;
    height: 10%;
    margin-left:25%;
	`
    div_container.append(input_search_name);
    input_search_name.setAttribute('name','name');
    input_search_name.setAttribute('placeholder','Name');
    
    let btn_search_info = document.createElement('button');
	btn_search_info.classList.add('btn-input_product');
	btn_search_info.style.cssText = `
	margin-left:50%;
	margin-top: 30%; 
	`
	btn_search_info.setAttribute('type','submit');
	btn_search_info.innerText = "Search";
    div_container.append(btn_search_info);
    
    btn_search_info.onclick = function() {
        let cont_div_search = document.createElement('div');
        let input_search_name = document.createElement('div');
        


        cont_date.append(cont_div_search);
		cont_div_search.append(input_search_name);
    }

    }
    else if(isMenuOpen_info == true){
		console.log('ss');
	}
}

btn_search_info.onclick = search_info;
