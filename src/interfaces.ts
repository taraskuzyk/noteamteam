export interface Project {
	id: number,
	lat: number,
	long: number,
	creatorId: number,
	points: number,
	isCompleted: number,
	beforeImage: string,
	afterImage: string
}


export interface User {
	id: number,
	name: string,
	email: string,
	score: number,
	community: string,
}

export interface Assignment {
	projectId: number,
	userId: number,
	dueBy: Date
}
