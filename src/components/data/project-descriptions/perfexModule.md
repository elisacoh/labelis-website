### [Problem]
Perfex CRM allows clients to create unlimited staff and roles by default, which exposes system misuses, especially when admin rights are given to clients of the platform.

### [Solution & Core Architecture]
A custom Perfex CRM module was developed to enforce limits on staff and role creation for non-superadmin users:

Centralized configuration panel for staff/role limits

Role-based access restriction to the Roles page

Password-protected access to module settings and uninstallation

### [Feature Snapshot]
Staff and role cap enforcement logic

Superadmin-controlled settings (limit, authorized users)

Tamper-proof module with fallback access recovery

Soft deletion rollback on module uninstall

### [Tech Stack]
**Backend:**
PHP (CodeIgniter/Perfex), MySQL

**Frontend:**
jQuery, Bootstrap (Perfex-compatible)

**Infra:**
Local dev + remote deployment

### [My Role]
Designed full architecture and permission flow

Developed backend logic and limit enforcement

Created UI panels inside Perfex's admin area

Delivered the module to a client under NDA

### [Current Status]
Delivered and integrated with client instance

Deployed with usage by external clients

Two upgrades already requested (limit per role & manual override)

### [Roadmap]
Per-role limit logic (paid upgrade)

Audit logs per action

Monthly usage metrics for over-limit tracking

### [Long-term Vision]
Offer Perfex-compatible security modules to agencies managing client portals — enforcing usage boundaries, reducing abuse, and improving system integrity.