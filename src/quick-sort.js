'use strict';

function quickSort(input) {
    if(input !== null && input !== undefined && input.constructor === Array)
    {
        if(input.length > 1)
        {
            if(input.every(function(ele) { return ele.constructor === String; }))
            {
                //input.sort();
                sortString(input, 0, input.length-1)
            }
            else if(input.every(function(ele) { return ele.constructor === Number; }))
            {
                //input.sort(function(a,b) { return a-b; }); 
                sortNumber(input, 0, input.length-1)
            }            
            return input;            
        }
        else{
            return input;
        }
    }
    else{
        throw "Input not Array"
    }
};
function sortNumber(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	var pivotidx = (left + right) / 2; 
	var pivot = parseInt(arr[pivotidx.toFixed()]);
	while (i <= j)
	{
		while (parseInt(arr[i]) < pivot)
		i++;
		while (parseInt(arr[j]) > pivot)
			j--;
		if (i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}

	/* recursion */
	if (left < j)
		sortNumber(arr, left, j);
	if (i < right)
		sortNumber(arr, i, right);
	return arr;
}
function sortString(arr, left, right)
{
	var i = left;
	var j = right;
	var tmp;
	var pivotidx = (left + right) / 2; 
	var pivot = arr[pivotidx.toFixed()];
	while (i <= j)
	{
		while (arr[i] < pivot)
		i++;
		while (arr[j] > pivot)
			j--;
		if (i <= j)
		{
			tmp = arr[i];
			arr[i] = arr[j];
			arr[j] = tmp;
			i++;
			j--;
		}
	}

	/* recursion */
	if (left < j)
		sortString(arr, left, j);
	if (i < right)
		sortString(arr, i, right);
	return arr;
}
module.exports = quickSort;