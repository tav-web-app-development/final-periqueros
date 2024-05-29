# Route Documentation

## Routes
| endpoint | method | body | return | description |
| --- | --- | --- | --- | --- |
| `/events` | `GET` | | `{"events": [ { ... }, { ... }]}` | Get all events |
| `/events/:id` | `GET` | | `{"event": { ... }}` | Get event by ID |
| `/events` | `POST` | `{"name": "...", "date": "...", ...}` | `{"eventId": 1}` | Create a new event |
| `/events/:id` | `DELETE` | | `{"message": "Event deleted"}` | Delete event by ID |
| `/registrations` | `GET` | | `{"registrations": [ { ... }, { ... }]}` | Get all registrations |
| `/registrations/:id` | `GET` | | `{"registration": { ... }}` | Get registration by ID |
| `/registrations` | `POST` | `{"eventId": 1, "userId": 1, ...}` | `{"registrationId": 1}` | Create a new registration |
| `/registrations/:id` | `DELETE` | | `{"message": "Registration deleted"}` | Delete registration by ID |
| `/registrations/user/:userId` | `GET` | | `{"registrations": [ { ... }, { ... }]}` | Get registrations by user ID |
| `/registrations/event/:eventId` | `GET` | | `{"registrations": [ { ... }, { ... }]}` | Get registrations by event ID |
| `/users` | `GET` | | `{"users": [ { ... }, { ... }]}` | Get all users |
| `/users/:id` | `GET` | | `{"user": { ... }}` | Get user by ID |
| `/users` | `POST` | `{"name": "...", "email": "...", ...}` | `{"userId": 1}` | Create a new user |
| `/users/:id` | `DELETE` | | `{"message": "User deleted"}` | Delete user by ID |
