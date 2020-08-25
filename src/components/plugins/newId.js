let firstId = 248;
let lastId = 29;

export default function(prefix = 'ID-') {
	firstId += 10;
	lastId += 3;
	return `${prefix}${firstId}${lastId}`;
}
