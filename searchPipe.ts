import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: "searchFor"
})
export class SearchPipe implements PipeTransform{
	transform(dataArray: Array<any>, searchParam: string, ...searchProps: Array<string>){
		return (dataArray.length && searchParam.length) ?
            dataArray.filter((data)=>
				searchProps.map((searchProp)=>
					data[searchProp].toUpperCase().includes(searchParam.toUpperCase())
				)
				.some((res)=> res)
			)
			: dataArray;
	}
}