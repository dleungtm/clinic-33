-- POPULATE USER ROLES
INSERT INTO role ("role_name") VALUES ('administrator');
INSERT INTO role ("role_name") VALUES ('clinician');
INSERT INTO role ("role_name") VALUES ('receptionist');
INSERT INTO role ("role_name") VALUES ('pharmacist');
INSERT INTO role ("role_name") VALUES ('patient');

-- POPULATE USERS
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Desmond', 'Leung', '778-987-1234', '3233 Wesbrook Mall, Vancouver, BC V6T 1W5', 'dleung', 'howaboutno', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Nicholas', 'Chim', '778-321-7890', '2205 Lower Mall, Vancouver, BC V6T 1Z4', 'nchim', 'howaboutno1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Cynthia', 'Deng', '778-356-7848', '2424 E 1st Ave, Vancouver, BC V5N 1C3', 'cdeng', 'howaboutno2', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Bryan', 'Chiu', '778-423-8575', '4620 Dunbar St, Vancouver, BC V6S 2G8', NULL, NULL, TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Sullivan', 'Keith', '778-818-7032', '208 Hastings Street, Vancouver, BC V6C 1B4', 'sullkeith', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Aron', 'Christensen', '778-889-0361', '4370 Robson St, Vancouver, BC V6B 3K9', 'arochriste', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Phoebe', 'Dickson', '778-645-0812', '3080 Hastings Street, Vancouver, BC V62 1X4', 'phoebedicks', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Meredith', 'Little', '778-782-5194', '1881 Nootka Street, Vancouver, BC V5M 3M5', 'meredlittle', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Cara', 'Ross', '778-638-5414', '3982 Cordova Street, Vancouver, BC V6B 1E1', 'caro', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Isabelle', 'Duncan', '778-335-8179', '2826 Hastings Street, Vancouver, BC V6C 1B4', 'isabelleduncan', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Alice', 'Sherman', '778-542-0372', '3935 Cardero St, Vancouver, BC S4P 3Y2', 'alsherma', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Kaia', 'Miller', '778-168-9173', '122 Walter Hardwick Ave, Vancouver, BC V5Y 0C9', 'kaimille', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Briella', 'Greer', '778-408-9367', '2485 Broadway W, Vancouver, BC V6K 2E8', 'brielgree', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Tyler', 'Pate', '778-753-7929', '563 Union St, Vancouver, BC V6A 2B7', 'tylerpate', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Reese', 'Hopkins', '778-847-2470', '3007 8th Ave W, Vancouver, BC V6K 2C2', 'reesehopkin', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Lexie', 'Pope', '778-179-0252', '5980 Battison St, Vancouver, BC V5R 4M8', 'lexpop', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Christina', 'Bullock', '778-499-1149', '1410 Tolmie St, Vancouver, BC V6R 4B3', 'christbullock', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Harrison', 'Norman', '778-897-8170', '836 30th Ave E, Vancouver, BC V5V 2W1', 'harrnorma', 'hunter1', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Elaine', 'Mcclain', '778-122-4024', '2439 7th Ave W, Vancouver, BC V6K 1Y6', 'elainemcclain', 'hunter1', FALSE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Peter', 'Ryan', '778-391-5708', '2425 7th Ave W, Vancouver, BC V6K 1Y6', 'petrya', 'hunter1', FALSE);

-- ASSIGN USER ROLES
INSERT INTO user_role ("user_id", "role_id") VALUES (1, 1);
INSERT INTO user_role ("user_id", "role_id") VALUES (2, 2);
INSERT INTO user_role ("user_id", "role_id") VALUES (3, 4);
INSERT INTO user_role ("user_id", "role_id") VALUES (4, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (1, 2);
INSERT INTO user_role ("user_id", "role_id") VALUES (5, 3);
INSERT INTO user_role ("user_id", "role_id") VALUES (6, 4);
INSERT INTO user_role ("user_id", "role_id") VALUES (7, 2);
INSERT INTO user_role ("user_id", "role_id") VALUES (8, 2);
INSERT INTO user_role ("user_id", "role_id") VALUES (9, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (10, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (11, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (12, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (13, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (14, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (15, 3);
INSERT INTO user_role ("user_id", "role_id") VALUES (16, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (17, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (18, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (19, 5);

-- ASSIGN USER HEALTH INFO
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (4, 9121746121, '1974-11-01', 171, 'O+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (9, 7797662508, '1969-04-04', 176, 'O-', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (11, 9151695106, '1981-05-23', 165, 'O+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (12, 8126833431, '1986-07-29', 138, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (13, 3615308310, '1956-08-23', 135, 'B-', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (14, 7151151294, '1992-03-12', 140, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (16, 2543669742, '1986-03-29', 178, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (17, 3042128721, '1989-09-30', 163, 'B+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (18, 8726346196, '1958-11-16', 134, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (19, 6848503302, '1986-06-11', 141, 'A-', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (20, 2294738669, '1962-01-22', 155, 'AB-', 'F');

-- CREATE TIME BLOCKS
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (1, '09:00:00', '09:30:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (2, '09:30:00', '10:00:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (3, '10:00:00', '10:30:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (4, '10:30:00', '11:00:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (5, '11:00:00', '11:30:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (6, '11:30:00', '12:00:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (7, '12:00:00', '12:30:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (8, '12:30:00', '13:00:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (9, '13:00:00', '13:30:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (10, '13:30:00', '14:00:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (11, '14:00:00', '14:30:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (12, '14:30:00', '15:00:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (13, '15:00:00', '15:30:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (14, '15:30:00', '16:00:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (15, '16:00:00', '16:30:00');
INSERT INTO timeblock ("timeblock_id", "start_time", "end_time") VALUES (16, '16:30:00', '17:00:00');

-- ASSIGN AVAILABILITIES
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 6, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 0, 1, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (13, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (14, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (15, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (16, 1, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (13, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (14, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (15, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (16, 2, 2, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (13, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (14, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (15, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (16, 3, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (13, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (14, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (15, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (16, 4, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (13, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (14, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (15, 5, 8, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (16, 5, 8, TRUE);

-- CREATE APPOINTMENTS
INSERT INTO appointment ("date", "timeblock_id", "patient_id", "clinician_id") VALUES ('2017-10-19', 4, 4, 7);
INSERT INTO appointment ("date", "timeblock_id", "patient_id", "clinician_id") VALUES ('2017-11-08', 9, 9, 7);
INSERT INTO appointment ("date", "timeblock_id", "patient_id", "clinician_id") VALUES ('2017-12-19', 13, 12, 2);
INSERT INTO appointment ("date", "timeblock_id", "patient_id", "clinician_id") VALUES ('2018-01-08', 10, 4, 2);

-- CREATE BILLING HISTORY
INSERT INTO billing_history ("patient_id", "appointment_id", "amount", "date_paid") VALUES (4, 1, 300.00, '2017-11-23');
INSERT INTO billing_history ("patient_id", "appointment_id", "amount", "date_paid") VALUES (9, 2, 300.00, NULL);

-- CREATE APPOINTMENT RECORD
INSERT INTO appointment_record ("appointment_id", "patient_id", "notes") VALUES (1, 4, 'Higher than normal blood pressure; prescribed 30 units Vasotec.');
INSERT INTO appointment_record ("appointment_id", "patient_id", "notes") VALUES (2, 9, 'Prolonged cold; prescribed 60 units Tylenol 3.');

-- POPULATE MEDICATIONS
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Benadryl', 250, 2.33);
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Claritin', 250, 0.56);
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Ampicillin', 250, 0.32);
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Vasotec', 250, 0.68);
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Effexor XR', 250, 0.85);
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Glucotrol XL', 250, 0.46);
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Metformin', 250, 0.35);
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Aleve', 250, 1.00);
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Aspirin', 250, 0.42);
INSERT INTO medication("name", "inventory", "unit_price") VALUES('Tylenol 3', 250, 0.75);

-- CREATE PRESCRIPTION
INSERT INTO prescription ("patient_id", "clinician_id", "medication_id", "date_prescribed", "dosage", "filled_by") VALUES(4, 7, 4, '2017-10-19 00:00:00', 30, 3);
INSERT INTO prescription ("patient_id", "clinician_id", "medication_id", "date_prescribed", "dosage", "filled_by") VALUES(9, 7, 10, '2017-11-08 00:00:00', 60, NULL);
