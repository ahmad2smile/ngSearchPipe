
#   Angular 4 Pipe for Search

####    Usage

For search through a array of Objects:

`*ngFor="let item of items | searchFor: searchParam:'email':'subject':'message'"`

`items` are data you wanna search through

`searchFor` Angular Pipe name

`searchParam: string` Search Query

`email: string` Property on item that you wanna search through

`subject: string` Property on item that you wanna search through

`message: string` Property on item that you wanna search through

Pipe is generic enough to handle as many properties on objects as needed.