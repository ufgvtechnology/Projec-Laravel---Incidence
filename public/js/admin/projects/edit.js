$(function (){
		
	$('[data-category]').on('click', editCategoryModal);
	$('[data-level]').on('click', editLevelModal);

});

function editCategoryModal(){
	//id
	var category_id= $(this).data('category');
	$('#category_id').val(category_id);
	//name
	var name= $(this).parent().prev().text();
	//alert(name)
	$('#category_name').val(name);


	//modal
	//$('#modalEditCategory').modal('show')
	$('#modalEditCategory').modal('show')

}

function editLevelModal(){

	//id
	var level_id= $(this).data('level');
	$('#level_id').val(level_id);
	//name
	var name= $(this).parent().prev().text();
	//alert(name)
	$('#level_name').val(name);


	//modal
	//$('#modalEditCategory').modal('show')
	$('#modalEditLevel').modal('show')

}