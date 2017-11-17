-- POPULATE USER ROLES
INSERT INTO role ("role_name") VALUES ('administrator');
INSERT INTO role ("role_name") VALUES ('clinician');
INSERT INTO role ("role_name") VALUES ('receptionist');
INSERT INTO role ("role_name") VALUES ('pharmacist');
INSERT INTO role ("role_name") VALUES ('patient');

-- POPULATE USERS
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Desmond', 'Leung', '778-987-1234', '3233 Wesbrook Mall, Vancouver, BC V6T 1W5', 'dleung', 'no', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Nicholas', 'Chim', '778-321-7890', '2205 Lower Mall, Vancouver, BC V6T 1Z4', 'nchim', 'no', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Cynthia', 'Deng', '778-356-7848', '2424 E 1st Ave, Vancouver, BC V5N 1C3', 'cdeng', 'no', TRUE);
INSERT INTO clinic_user ("first_name", "last_name", "phone_number", "address", "username", "password", "is_active") VALUES ('Bryan', 'Chiu', '778-423-8575', '4620 Dunbar St, Vancouver, BC V6S 2G8', 'bchiu', 'no', TRUE);
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
INSERT INTO user_role ("user_id", "role_id") VALUES (2, 1);
INSERT INTO user_role ("user_id", "role_id") VALUES (3, 1);
INSERT INTO user_role ("user_id", "role_id") VALUES (4, 1);
INSERT INTO user_role ("user_id", "role_id") VALUES (5, 2);
INSERT INTO user_role ("user_id", "role_id") VALUES (6, 2);
INSERT INTO user_role ("user_id", "role_id") VALUES (7, 2);
INSERT INTO user_role ("user_id", "role_id") VALUES (8, 3);
INSERT INTO user_role ("user_id", "role_id") VALUES (9, 4);
INSERT INTO user_role ("user_id", "role_id") VALUES (10, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (11, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (12, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (13, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (14, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (15, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (16, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (17, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (18, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (19, 5);
INSERT INTO user_role ("user_id", "role_id") VALUES (20, 5);

-- ASSIGN USER HEALTH INFO
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (1, 7894546798, '1984-03-23', 165, 'O+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (2, 3586787897, '1986-07-21', 138, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (3, 9867544478, '1956-02-24', 135, 'B-', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (4, 9787897867, '1992-09-02', 140, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (5, 3456677689, '1986-03-19', 178, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (6, 8776756755, '1989-06-20', 163, 'B+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (7, 5567678789, '1989-09-10', 163, 'B+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (8, 4567677687, '1958-12-10', 134, 'AB+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (9, 9121746121, '1974-11-03', 171, 'O+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (10, 7797662508, '1969-04-04', 176, 'O-', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (11, 9151695106, '1981-05-23', 165, 'O+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (12, 8126833431, '1986-07-29', 138, 'AB+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (13, 3615308310, '1956-08-23', 135, 'B-', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (14, 7151151294, '1992-03-12', 140, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (15, 2543669742, '1986-03-29', 178, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (16, 3042128721, '1989-09-30', 163, 'B+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (17, 8023458454, '1989-03-10', 163, 'B+', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (18, 8726346196, '1958-11-16', 134, 'AB+', 'M');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (19, 6848503302, '1986-06-11', 141, 'A-', 'F');
INSERT INTO user_health_info ("user_id", "phn", "dob", "height", "blood_type", "sex") VALUES (20, 2294738669, '1962-01-22', 155, 'AB-', 'M');

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
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (7, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (8, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 1, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (7, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (8, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 2, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (7, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (8, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 3, 5, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (7, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (8, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 4, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (7, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (8, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 5, 6, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (7, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (8, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 0, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (1, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (2, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (3, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (4, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (5, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (6, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (7, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (8, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (9, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (10, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (11, 6, 7, TRUE);
INSERT INTO availability ("timeblock_id", "day_of_week", "clinician_id", "is_active") VALUES (12, 6, 7, TRUE);


-- CREATE APPOINTMENTS
INSERT INTO appointment ("date", "timeblock_id", "patient_id", "clinician_id") VALUES ('2017-10-19', 4, 10, 6);
INSERT INTO appointment ("date", "timeblock_id", "patient_id", "clinician_id") VALUES ('2017-11-08', 9, 12, 5);
INSERT INTO appointment ("date", "timeblock_id", "patient_id", "clinician_id") VALUES ('2017-12-19', 13, 10, 6);
INSERT INTO appointment ("date", "timeblock_id", "patient_id", "clinician_id") VALUES ('2018-01-08', 10, 18, 6);

-- CREATE BILLING HISTORY
INSERT INTO billing_history ("patient_id", "appointment_id", "amount", "date_paid") VALUES (10, 1, 300.00, '2017-11-23');
INSERT INTO billing_history ("patient_id", "appointment_id", "amount", "date_paid") VALUES (12, 2, 300.00, NULL);

-- CREATE APPOINTMENT RECORD
INSERT INTO appointment_record ("appointment_id", "patient_id", "notes") VALUES (1, 10, 'Higher than normal blood pressure; prescribed 30 units Vasotec.');
INSERT INTO appointment_record ("appointment_id", "patient_id", "notes") VALUES (2, 12, 'Prolonged cold; prescribed 60 units Tylenol 3.');

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
INSERT INTO prescription ("patient_id", "clinician_id", "medication_id", "date_prescribed", "dosage", "filled_by") VALUES(10, 6, 4, '2017-10-19 00:00:00', 30, 3);
INSERT INTO prescription ("patient_id", "clinician_id", "medication_id", "date_prescribed", "dosage", "filled_by") VALUES(12, 5, 10, '2017-11-08 00:00:00', 60, NULL);
