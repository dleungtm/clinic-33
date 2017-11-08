-- INITIALIZE USER ROLES
INSERT INTO "Role"("role_name") VALUES('administrator');
INSERT INTO "Role"("role_name") VALUES('clinician');
INSERT INTO "Role"("role_name") VALUES('receptionist');
INSERT INTO "Role"("role_name") VALUES('pharmacist');
INSERT INTO "Role"("role_name") VALUES('patient');

-- INSERT USERS
INSERT INTO "User"("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES('Desmond', 'Leung', '778-987-1234', '3233 Wesbrook Mall, Vancouver, BC V6T 1W5', 'dleung', 'howaboutno', TRUE);
INSERT INTO "User"("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES('Nicholas', 'Chim', '778-321-7890', '2205 Lower Mall, Vancouver, BC V6T 1Z4', 'nchim', 'howaboutno1', TRUE);
INSERT INTO "User"("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES('Cynthia', 'Deng', '778-356-7848', '2424 E 1st Ave, Vancouver, BC V5N 1C3', 'cdeng', 'howaboutno2', TRUE);
INSERT INTO "User"("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES('Bryan', 'Chiu', '778-423-8575', '4620 Dunbar St, Vancouver, BC V6S 2G8', NULL, NULL, TRUE);

-- ASSIGN USER ROLES