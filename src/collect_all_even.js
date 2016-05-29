
function collect_same_elements(collection_a, object_b) {
	var i,j;
	var arr=new Array();
	for(i in collection_a){
		var f=collection_a[i].key;
		for(j=0;j<object_b.value.length;j++)
			if(f===object_b.value[j]){
				arr.push(object_b.value[j]);
				break;
			}
				
		}
		return arr;
	}
module.exports = collect_same_elements;
