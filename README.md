# broadcast

Simple Node.js/Express backend for managing users, content, uploads, and schedules.

**Features**
- **Authentication:** login/register endpoints and auth controllers (see `routes/auth.routes.js`, `controllers/auth.controllers.js`).
- **Content management:** create/read/update/delete content via `routes/content.routes.js` and `controllers/content.controllers.js`.
- **Principles API:** endpoints and logic in `routes/principle.routes.js` and `controllers/principle.  controllers.js`.
- **Role-based access control:** middleware in `middleware/role.js` to enforce permissions.
- **File uploads:** upload middleware and `uploads/` folder for storing files (`middleware/upload.js`).
- **Scheduling & subjects:** models for schedules and subjects (`models/schedule.model.js`, `models/subject.model.js`).
- **Database connection:** configuration and connection code in `config/db.js`.

**Ignored files (from .gitignore)**
- `node_modules/` — local dependency folder; do not commit to the repository.
- `.env` — environment variables and secrets (database credentials, JWT secrets); keep this file out of version control.


