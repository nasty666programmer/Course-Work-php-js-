let btn_add_info = document.querySelector('.btn-add-block_info');
var bodyNode = document.querySelector(".main");
let main_info = document.querySelector('.main-info');
let cont_date = document.querySelector('.container_date');
const thems_light = document.querySelector('.themes_light');
const thems_dark= document.querySelector('.themes_dark');
let isMenuOpen = false;



const ss = (() => {
	thems_light.onclick = function() {
		if(bodyNode.classList.contains('dark')){
			bodyNode.classList.remove('dark')
		}
		bodyNode.classList.add('light');
			
	}
	
	thems_dark.onclick = function() {
		if(bodyNode.classList.contains('light')){
			bodyNode.classList.remove('light')
		}
		bodyNode.classList.add('dark');
		
		}
		
})


ss();

 function toggleMenu(){
	if(isMenuOpen == false){
	let div = document.createElement('div');
	isMenuOpen = true;
	div.style.cssText = `width: 65%;
	dipslay:block;
	margin-left: 30%;
    margin-top: -4%;
	border-radius:3%;
	background-color:#2b2b2b;
	height:100%;
	`
	main_info.append(div);
	let btn_close = document.createElement('img');
	btn_close.setAttribute('src','https://img.icons8.com/ios-glyphs/30/000000/macos-close.png');
	div.append(btn_close);

	btn_close.onclick = function(){
		isMenuOpen = false;
		main_info.removeChild(div);
	}

	let forms = document.createElement('form');
	forms.setAttribute('action','../../php/add_info.php');
	forms.setAttribute('method','post');

	div.append(forms);

	let div_input = document.createElement('div');
	div_input.style.cssText = `
	height:300px;
	width:600px;
	`
	div_input.classList.add('div-input_product');
	forms.append(div_input);

	let input_name_product = document.createElement('input');
	input_name_product.style.cssText = `
    width: 20%;
    height: 8%;
	margin-left: 22%;
    margin-top: 5%;
	`
	input_name_product.innerText = 'name product';
	div_input.append(input_name_product);
	input_name_product.setAttribute('name','name');
	input_name_product.setAttribute('placeholder','Name');

	let input_amount_product = document.createElement('input');
	input_amount_product.style.cssText = `
	width: 20%;
    height: 8%;
	`
	input_amount_product.setAttribute('name','amount');
	input_amount_product.setAttribute('placeholder','Amount');
	div_input.append(input_amount_product);

	let input_summ_product = document.createElement('input');
	input_summ_product.style.cssText = `
	width: 20%;
    height: 8%;`
	div_input.append(input_summ_product);
	input_summ_product.setAttribute('name','price');
	input_summ_product.setAttribute('placeholder','Price');

	let input_code_product = document.createElement('input');
	input_code_product.style.cssText = `
	width: 7%;
	height: 8%;
	`
	div_input.append(input_code_product);
	input_code_product.setAttribute('name','code');
	input_code_product.setAttribute('placeholder','Code');

	let btn_input_product = document.createElement('button');
	btn_input_product.classList.add('btn-input_product');
	btn_input_product.style.cssText = `
	margin-left:50%;
	margin-top: 30%; 
	`
	btn_input_product.setAttribute('type','submit');
	btn_input_product.innerText = "Add";
	div_input.append(btn_input_product);

	btn_input_product.onclick = function() {
		/*let cont_div = document.createElement('div');
		let name_prdct_date_name = document.createElement('div');
		let name_prdct_date_amount = document.createElement('div');
		let name_prdct_date_summ = document.createElement('div');
		let name_prdct_date_code = document.createElement('div');
		cont_div.classList.add('cont_date');*/
		
		cont_date.append(cont_div);
		cont_div.append(name_prdct_date_name);
		cont_div.append(name_prdct_date_amount);
		cont_div.append(name_prdct_date_summ);
		cont_div.append(name_prdct_date_code);
		name_prdct_date_name.append(input_name_product.value);
		name_prdct_date_amount.append(input_amount_product.value);
		name_prdct_date_summ.append(input_summ_product.value);
		name_prdct_date_code.append(input_code_product.value);
		}
	}
	else if(isMenuOpen == true){
		console.log('ss');
	}
	
}

btn_add_info.onclick = toggleMenu;
