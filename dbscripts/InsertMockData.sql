-- INITIALIZE USER ROLES
INSERT INTO role("role_name") VALUES('administrator');
INSERT INTO role("role_name") VALUES('clinician');
INSERT INTO role("role_name") VALUES('receptionist');
INSERT INTO role("role_name") VALUES('pharmacist');
INSERT INTO role("role_name") VALUES('patient');

-- INSERT USERS
INSERT INTO clinic_user("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES('Desmond', 'Leung', '778-987-1234', '3233 Wesbrook Mall, Vancouver, BC V6T 1W5', 'dleung', 'howaboutno', TRUE);
INSERT INTO clinic_user("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES('Nicholas', 'Chim', '778-321-7890', '2205 Lower Mall, Vancouver, BC V6T 1Z4', 'nchim', 'howaboutno1', TRUE);
INSERT INTO clinic_user("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES('Cynthia', 'Deng', '778-356-7848', '2424 E 1st Ave, Vancouver, BC V5N 1C3', 'cdeng', 'howaboutno2', TRUE);
INSERT INTO clinic_user("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES('Bryan', 'Chiu', '778-423-8575', '4620 Dunbar St, Vancouver, BC V6S 2G8', NULL, NULL, TRUE);

-- ASSIGN USER ROLES
INSERT INTO user_role("user_id", "role_id") VALUES(1, 1);
INSERT INTO user_role("user_id", "role_id") VALUES(2, 2);
INSERT INTO user_role("user_id", "role_id") VALUES(3, 4);
INSERT INTO user_role("user_id", "role_id") VALUES(4, 5);
INSERT INTO user_role("user_id", "role_id") VALUES(1, 2);

-- POPULATE MEDICATIONS
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Benadryl', 100, '2.33');
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Claritin', 100, '0.56');
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Ampicillin', 100, '0.32');
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Vasotec', 100, '0.68');
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Effexor XR', 100, '0.85e');
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Glucotrol XL', 100, '0.46');
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Metformin', 100, '0.35');
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Aleve', 100, '1.00');
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Aspirin', 100, '0.42');
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Tylenol', 100, '0.35');
