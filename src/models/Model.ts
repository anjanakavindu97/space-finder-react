
export interface User {
    userName: String,
    email: String
}

export interface UserAttribute {
    Name: String,
    Value: String
}

export interface Space {
    spaceId: string
    name: string
    location: string
    photoUrl?: string
}