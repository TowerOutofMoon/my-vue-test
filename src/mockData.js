export const mockUserGroupsResponse =  {
  "status": "success",
  "data":[
    {
      groupId: 1,
      groupName: "Admin Group",
      users: [
        { id: 1, name: "John Doe", email: "john.doe@example.com", role: "admin", createdAt: "2023-01-01T00:00:00Z" },
        { id: 2, name: "Peter Park", email: "peter.park@example.com", role: "admin", createdAt: "2023-01-01T12:00:00Z" },
        { id: 3, name: "Mary Jane", email: "mary.jane@example.com", role: "admin", createdAt: "2023-01-02T14:00:00Z" },
        { id: 4, name: "Tony Kay", email: "tony.kay@example.com", role: "admin", createdAt: "2023-01-03T00:00:00Z" },
        { id: 5, name: "GG Bond", email: "gg.bond@example.com", role: "admin", createdAt: "2023-01-04T12:00:00Z" },
        { id: 6, name: "Beyonce", email: "beyonce@example.com", role: "admin", createdAt: "2023-01-05T14:00:00Z" },
      ]
    },
    {
      groupId: 2,
      groupName: "Editor Group",
      users: [
        { id: 1, name: "user1", email: "user1@example.com", role: "user", createdAt: "2023-01-01T11:00:00Z" },
        { id: 2, name: "user2", email: "user2@example.com", role: "user", createdAt: "2023-01-02T12:00:00Z" },
        { id: 3, name: "user3", email: "user3@example.com", role: "user", createdAt: "2023-01-03T13:00:00Z" },
        { id: 4, name: "user4", email: "user3@example.com", role: "user", createdAt: "2023-01-01T18:00:00Z" },
      ]
    },
  ]
}

export const mockProductResponse = {
  "status": "success",
  "data": [
    {id: 1, name: 'Product A', price: 20, reviews: [{ id: 1, rating: 4 },{ id: 2, rating: 5 }]},
    {id: 2, name: 'Product B', price: 30, reviews: [{ id: 1, rating: 3 },{ id: 2, rating: 4 },{ id: 3, rating: 5 }]},
    {id: 3, name: 'Product C', price: 10, reviews: [{ id: 1, rating: 4 },{ id: 2, rating: 5 }]},
    {id: 4, name: 'Product D', price: 25, reviews: [{ id: 1, rating: 2 },{ id: 2, rating: 5 }]},  
  ],
}

export const mockUserRegisterResponse = {
  "status": "success",
  "data": [
    {
      "_id": "61f7c9e68d2fa1b8d4a2a9f0",
      "username": "john.doe",
      "email": "john.doe@example.com",
      "registrationDate": "2022-01-01T00:00:00Z",
      "status": { "code": 1, "description": "Active" }
    },
    {
      "_id": "61f7c9e68d2fa1b8d4a2a9f1",
      "username": "jane.smith",
      "email": "jane.smith@example.com",
      "registrationDate": "2022-02-15T00:00:00Z",
      "status": { "code": 0, "description": "Inactive" }
    },
    {
      "_id": "61f7c9e68d2fa1b8d4a2a9f2",
      "username": "bob.johnson",
      "email": "bob.johnson@example.com",
      "registrationDate": "2022-03-20T00:00:00Z",
      "status": { "code": 1, "description": "Active" }
    }  
  ]
}