const test_sponsor = document.getElementById('test_sponsor');
const test_program = document.getElementById('test_program');
const test_test    = document.getElementById('test_test');

function rest_dropdown(dropdown_element, title){
    dropdown_element.innerHTML = "";

    var opt = document.createElement('option');
    opt.value = "";
    opt.innerHTML = title;
    dropdown_element.appendChild(opt)
}

function set_options(value){
    var opt = document.createElement('option');
    opt.value = value;
    opt.innerHTML = value;
    return opt
}

test_sponsor.addEventListener("change", function(event){

    rest_dropdown(test_program,"Select a Program");
    rest_dropdown(test_test,"Select a Test");

    if(event.target.value == "AAPC"){
        test_program.appendChild(set_options("AAPC"));
    }else if(event.target.value == "ABPS"){
        test_program.appendChild(set_options("ABPS"));
    }else if(event.target.value == "Academic Language Therapy Association"){
        test_program.appendChild(set_options("Academic Language Therapy Association"));
    }else if(event.target.value == "AHA- Active House Alliance"){
        test_program.appendChild(set_options("AHA- Active House Alliance"));
    }else if(event.target.value == "Am Assoc for Lab Animal Science"){
        test_program.appendChild(set_options("American Associatioon for Animal Science"));
    }else if(event.target.value == "AM Board Quality Assurance and Utilization Review Physicians"){
        test_program.appendChild(set_options("Health Care Quality & Management"));
    }else if(event.target.value == "American Academy of Nurse Practitioners Certification Board"){
        test_program.appendChild(set_options("American Academy of Nurse Practitioners Certification Board"));
    }else if(event.target.value == "American Association of Heart Failure Nurses"){
        test_program.appendChild(set_options("American Association of Heart Failure Nurses"));
    }else if(event.target.value == "American Board for Certification in O, P&P"){
        test_program.appendChild(set_options("American Board for Certification in O, P&P"));
    }else if(event.target.value == "American Board of Cardiovascular Perfusion"){
        test_program.appendChild(set_options("American Board of Cardiovascular Perfusion"));
    }else if(event.target.value == "American Board of Dermatology"){
        test_program.appendChild(set_options("American Board of Dermatology"));
    }else if(event.target.value == "American Board of Family Medicine"){
        test_program.appendChild(set_options("American Board of Family Medicine"));
    }else if(event.target.value == "American Board of Gastroenterology Nurses"){
        test_program.appendChild(set_options("American Board of Gastroenterology Nurses"));
    }else if(event.target.value == "American Board of Ophthalmology"){
        test_program.appendChild(set_options("American Board of Ophthalmology"));
    }else if(event.target.value == "American Board of Opticianry - National Contact Lens Examine"){
        test_program.appendChild(set_options("American Board of Opticianry - National Contact Lens Examine"));
    }else if(event.target.value == "American Board of Oral and Maxillofacial Radiology"){
        test_program.appendChild(set_options("American Board of Oral and Maxillofacial Radiology"));
    }else if(event.target.value == "American Board of Oral and Maxillofacial Surgery"){
        test_program.appendChild(set_options("American Board of Oral and Maxillofacial Surgery"));
    }else if(event.target.value == "American Board of Pediatrics"){
        test_program.appendChild(set_options("American Board of Pediatrics"));
    }else if(event.target.value == "American Board of Preventive Medicine"){
        test_program.appendChild(set_options("American Board of Preventive Medicine"));
    }else if(event.target.value == "American College of Radiology"){
        test_program.appendChild(set_options("American College of Radiology"));
    }else if(event.target.value == "American College of Veterinary Dermatology"){
        test_program.appendChild(set_options("American College of Veterinary Dermatology"));
    }else if(event.target.value == "American College of Veterinary Internal Medicine"){
        test_program.appendChild(set_options("Cardiology Specialty Examination"));
        test_program.appendChild(set_options("General Examination"));
        test_program.appendChild(set_options("LAIM Specialty Exam"));
        test_program.appendChild(set_options("Neurology Specialty Examination"));
        test_program.appendChild(set_options("Nutrition Specialty Examination"));
        test_program.appendChild(set_options("Oncology Specialty Examination"));
        test_program.appendChild(set_options("SAIM Specialty Examination"));
    }else if(event.target.value == "American College of Veterinary Pathologists"){
        test_program.appendChild(set_options("American College of Veterinary Pathologists"));
    }else if(event.target.value == "American Concrete Institute"){
        test_program.appendChild(set_options("American Concrete Institute"));
    }else if(event.target.value == "American Electrology Association IBEC"){
        test_program.appendChild(set_options("American Electrology Association IBEC"));
    }else if(event.target.value == "American Institute of Certified Planners"){
        test_program.appendChild(set_options("American Institute of Certified Planners"));
    }else if(event.target.value == "American Nurses Credentialing Center"){
        test_program.appendChild(set_options("American Nurses Credentialing Center"));
        test_program.appendChild(set_options("American Nurses Credentialing Center Readiness"));
    }else if(event.target.value == "American Osteopathic Association"){
        test_program.appendChild(set_options("American Osteopathic Board of Emergency Medicine"));
        test_program.appendChild(set_options("American Osteopathic Board of Internal Medicine"));
        test_program.appendChild(set_options("American Osteopathic Board of Pediatrics"));
    }else if(event.target.value == "American Petroleum Institute"){
        test_program.appendChild(set_options("American Petroleum Institute"));
    }else if(event.target.value == "American Society for Quality"){
        test_program.appendChild(set_options("American Society for Quality"));
    }else if(event.target.value == "American Society of Mechanical Engineers"){
        test_program.appendChild(set_options("American Society of Mechanical Engineers"));
    }else if(event.target.value == "American Speech-Language-Hearing Association"){
        test_program.appendChild(set_options("ASHA Assistant Certification Program (ACP)"));
    }else if(event.target.value == "American Veterinary Medical Association"){
        test_program.appendChild(set_options("American Veterinary Medical Association"));
    }
    else if(event.target.value == "American Welding Society"){
        test_program.appendChild(set_options("American Welding Society"));
        test_program.appendChild(set_options("Prometric Test Drive-AWS"));
    }
    else if(event.target.value == "Arkanas Certified Nursing Assistant"){
        test_program.appendChild(set_options("Arkanas Certified Nursing Assistant"));
    }
    else if(event.target.value == "Arkanas Contractor Licensing Board"){
        test_program.appendChild(set_options("Arkanas Contractor Licensing Board"));
    }
    else if(event.target.value == "Ascend Learning, LLC"){
        test_program.appendChild(set_options("National Healthcareer Association"));
    }
    else if(event.target.value == "ASIS International"){
        test_program.appendChild(set_options("ASIS International"));
    }
    else if(event.target.value == "Associated Board Certification International"){
        test_program.appendChild(set_options("Associated Board Certification International"));
    }
    else if(event.target.value == "Associated for Clinical Research Professionals"){
        test_program.appendChild(set_options("Associated for Clinical Research Professionals"));
    }
    else if(event.target.value == "Association for Facilities Engineering"){
        test_program.appendChild(set_options("Association for Facilities Engineering"));
    }
    else if(event.target.value == "Association of Certified Fraud Examiners"){
        test_program.appendChild(set_options("Certified Fraud Examiner"));
    }
    else if(event.target.value == "Association of Professional Bookkeepers"){
        test_program.appendChild(set_options("Am Institute of Professional Bookkeepers"));
    }
    else if(event.target.value == "Association of Professional Bookkeepers - PREPAID"){
        test_program.appendChild(set_options("Am Institute of Professional Bookkeepers - Prepaid Students"));
    }
    else if(event.target.value == "Association of Workplace Investigators"){
        test_program.appendChild(set_options("Association of Workplace Investigators"));
        test_program.appendChild(set_options("Prometric Test Drive - AWI"));
    }
    else if(event.target.value == "Australian Council for Educational Research"){
        test_program.appendChild(set_options("International Student Admissions Test"));
    }
    else if(event.target.value == "Bahrain National Health Regulation Authority"){
        test_program.appendChild(set_options("Bahrain National Health Regulation Authority"));
    }
    else if(event.target.value == "Bangladesh College of Veterinary Surgeons"){
        test_program.appendChild(set_options("Veterinary Board Examination"));
    }
    else if(event.target.value == "Board for Global EHS Credentialing"){
        test_program.appendChild(set_options("Board for Global EHS Credentialing"));
    }
    else if(event.target.value == "Board of Pharmacy Specialties"){
        test_program.appendChild(set_options("Board of Pharmacy Specialties Test Drive"));
        test_program.appendChild(set_options("Board of Pharmacy Specialties"));
    }
    else if(event.target.value == "CA Engineers, Land Surveyors and Geologists"){
        test_program.appendChild(set_options("CA Engineers, Land Surveyors and Geologists"));
    }
    else if(event.target.value == "Canadian Alliance of Physiotherapy Regulators"){
        test_program.appendChild(set_options("Canadian Alliance of Physiotherapy Regulators"));
        test_program.appendChild(set_options("Canadian Alliance of Physiotherapy Regulators Practice Exams"));
    }
    else if(event.target.value == "Canadian Society for Medical Laboratory Science"){
        test_program.appendChild(set_options("Canadian Society for Medical Laboratory Science"));
        test_program.appendChild(set_options("CSMLS Exam Demo"));
    }
    else if(event.target.value == "Catalyst Futures B.V."){
        test_program.appendChild(set_options("Catalyst Futures Systematic Trading"));
    }
    else if(event.target.value == "CDCA-WREB-CITA"){
        test_program.appendChild(set_options("CDCA-WREB-CITA"));
    }
    else if(event.target.value == "CDISC"){
        test_program.appendChild(set_options("CDISC Certification"));
    }
    else if(event.target.value == "Certible"){
        test_program.appendChild(set_options("Certible"));
        test_program.appendChild(set_options("Certible Certification"));
        test_program.appendChild(set_options("Certified Customer Experience Professional "));
        test_program.appendChild(set_options("Edinburgh Whisky Academy"));
    }
    else if(event.target.value == "Certification Board of Infection Control and Epidemiology"){
        test_program.appendChild(set_options("Certification Board of Infection Control and Epidemiology"));
    }
    else if(event.target.value == "Certification Commission for Healthcare Interpreters"){
        test_program.appendChild(set_options("Certification Commission for Healthcare Interpreters"));
        test_program.appendChild(set_options("ETOE Interpret"));
    }
    else if(event.target.value == "Certified Financial Planner"){
        test_program.appendChild(set_options("Certified Financial Planne"));
    }
    else if(event.target.value == "CFA Institute Test Drive (ESG exam only)"){
        test_program.appendChild(set_options("ESG Investing TEST DRIVE"));
    }
    else if(event.target.value == "Chartered Alternative Investment Analyst Association"){
        test_program.appendChild(set_options("Financial Data Professional"));
    }
    else if(event.target.value == "Client Success"){
        test_program.appendChild(set_options("Propel Client Success"));
    }
    else if(event.target.value == "CMT Association"){
        test_program.appendChild(set_options("CMT Association"));
    }
    else if(event.target.value == "CMT Demo (ABC) Program"){
        test_program.appendChild(set_options("Americal Board of Certification (CMT)"));
          test_program.appendChild(set_options("Configuration Management Team"));
    }
    else if(event.target.value == "College Board - AP Exams (India)"){
        test_program.appendChild(set_options("College Board - AP Exams (India)"));
        test_program.appendChild(set_options("College Board - AP Exams (India) - Late"));
    }
    else if(event.target.value == "College Board - AP Exams (Singapore)"){
        test_program.appendChild(set_options("College Board - AP Exams (Singapore)"));
        test_program.appendChild(set_options("College Board - AP Exams (Singapore) - Late"));
    }
    else if(event.target.value == "College of Family Physicians of Canada"){
        test_program.appendChild(set_options("College of Family Physicians of Canada"));
        test_program.appendChild(set_options("Remote Compatibility Check"));
    }
    else if(event.target.value == "COLLEGE OF PHARMACISTS OF BRITISH COLUMBIA"){
        test_program.appendChild(set_options("COLLEGE OF PHARMACISTS OF BRITISH COLUMBIAn"));
    }
    else if(event.target.value == "Commission for Case Managers Certification"){
        test_program.appendChild(set_options("Commission for Case Managers Certification"));
    }
    else if(event.target.value == "Confluent"){
        test_program.appendChild(set_options("Confluent"));
    }
    else if(event.target.value == "Connecticut Department of Public Health"){
        test_program.appendChild(set_options("Connecticut Department of Public Health"));
    }
    else if(event.target.value == "Construction Specifications Institute"){
        test_program.appendChild(set_options("Construction Specifications Institute"));
    }
    else if(event.target.value == "Contractor Workforce Qualification Assurance Program"){
        test_program.appendChild(set_options("Contractor Workforce Qualification Assurance Program"));
    }
    else if(event.target.value == "Council of Interstate Testing Agencies"){
        test_program.appendChild(set_options("Council of Interstate Testing Agencies"));
    }
    else if(event.target.value == "Council on Licensure, Enforcement and Regulation"){
        test_program.appendChild(set_options("Council on Licensure, Enforcement and Regulation"));
    }
    else if(event.target.value == "Department of Healthcare Professions - MOPH - State of Qatar"){
        test_program.appendChild(set_options("Department of Healthcare Professions - MOPH - State of Qatar"));
    }
    else if(event.target.value == "Design-Build Institute of America"){
        test_program.appendChild(set_options("Design-Build Institute of America"));
    }
    else if(event.target.value == "DSST"){
        test_program.appendChild(set_options("College Student"));
        test_program.appendChild(set_options("DANTES"));
    }
    else if(event.target.value == "Dubai Health Authority"){
        test_program.appendChild(set_options("Dubai Health Authority"));
    }
    else if(event.target.value == "Dubai Health Care City Authority"){
        test_program.appendChild(set_options("Dubai Health Care City Authority"));
    }
    else if(event.target.value == "ECOTEST Quality Certificates Issuing Services"){
        test_program.appendChild(set_options("ECOTEST Quality Certificates Issuing Services Program"));
    }
    else if(event.target.value == "Educational Records Bureau"){
        test_program.appendChild(set_options("Educational Records Bureau"));
    }
    else if(event.target.value == "EduClasses"){
        test_program.appendChild(set_options("Food Managers Certification"));
    }
    else if(event.target.value == "Elsevier"){
        test_program.appendChild(set_options("Elsevier"));
    }
    else if(event.target.value == "ETS TESTING"){
        test_program.appendChild(set_options("GACE ParaProfessional"));
    }
    else if(event.target.value == "European Personal Selection Office"){
        test_program.appendChild(set_options("389/21(AD6) - field of sustainable agriculture + rural devel"));
        test_program.appendChild(set_options("CAST JRC"));
        test_program.appendChild(set_options("COM/AD/01/20 Internal Competition"));
        test_program.appendChild(set_options("COM/AD/02/21 Internal Competition AD5"));
        test_program.appendChild(set_options("COM/TA/AD/01-04/21 Translators"));
        test_program.appendChild(set_options("COM/TA/AD01-AD04/21"));
        test_program.appendChild(set_options("EPSO Certification Examination"));
        test_program.appendChild(set_options("EPSO/AD/375-379/20 Lawyer Linguists"));
        test_program.appendChild(set_options("EPSO/AD/375-379/20 Lawyer Linguists (AD7)"));
        test_program.appendChild(set_options("EPSO/AD/380/19"));
        test_program.appendChild(set_options("EPSO/AD/381/20"));
        test_program.appendChild(set_options("EPSO/AD/381/20 Administration in the field of European Law"));
        // test_program.appendChild(set_options(""));.........................................................
        test_program.appendChild(set_options("EPSO/AD/382/20"));
        test_program.appendChild(set_options("EPSO/AD/382/20 EEAS"));
        test_program.appendChild(set_options("EPSO/AD/383-388/21 LL OT"));
        // test_program.appendChild(set_options(""));.........................................................
        test_program.appendChild(set_options("EPSO/AD/383-388/21 LL OT Translation test"));
        test_program.appendChild(set_options("EPSO/AD/389/21 - field of sustainable agriculture + rural de"));
        test_program.appendChild(set_options("EPSO/AD/390/21 - field of chemicals policy Written Test"));
        test_program.appendChild(set_options("EPSO/AD/390/21 (AD6) - field of chemicals policy"));
        test_program.appendChild(set_options("EPSO/AD/391/21"));
        // test_program.appendChild(set_options(""));.........................................................
        test_program.appendChild(set_options("EPSO/AD/392/21 - Administrators"));
        test_program.appendChild(set_options("EPSO/AD/392/21 - CO385"));
        test_program.appendChild(set_options("EPSO/AD/393/21 EDPS"));
        test_program.appendChild(set_options("EPSO/AD/393/21 European Data Protection Supervision (EDPS)"));
        // test_program.appendChild(set_options(""));.........................................................
        test_program.appendChild(set_options("EPSO/AD/394-395/21"));
        test_program.appendChild(set_options("EPSO/AD/394-395/21 - Case Study"));
        test_program.appendChild(set_options("EPSO/AD/396/21"));
        test_program.appendChild(set_options("EPSO/AD/396/21 LL GA Translation"));
        test_program.appendChild(set_options("EPSO/AD/397/21"));
        // test_program.appendChild(set_options(""));.........................................................
        test_program.appendChild(set_options("EPSO/AD/398/22"));
        test_program.appendChild(set_options("EPSO/AD/399/22"));
        test_program.appendChild(set_options("EPSO/AST/148/21"));
        // test_program.appendChild(set_options(""));.........................................................
        test_program.appendChild(set_options("EPSO/AST/149/21 Nuclear Inspectors"));
        test_program.appendChild(set_options("EPSO/AST/149/21 Nuclear Inspectors Case Study"));
        test_program.appendChild(set_options("EPSO/AST/150/21"));
        // test_program.appendChild(set_options(""));.........................................................
        test_program.appendChild(set_options("EPSO/AST/151/22"));
        test_program.appendChild(set_options("EPSO/AST/152/22"));
        // test_program.appendChild(set_options(""));.........................................................
        test_program.appendChild(set_options("EPSO/AST/152/22 FRT"));
        test_program.appendChild(set_options("EPSO/AST/153/22"));
        test_program.appendChild(set_options("EPSO/AST/154/22 (fields: 1-2)"));
        test_program.appendChild(set_options("EPSO/AST/154/22 (fields: 3-4-5-6)"));
        test_program.appendChild(set_options("EPSO/AST/155/22"));
        test_program.appendChild(set_options("EPSO/AST-SC/10/20"));
        test_program.appendChild(set_options("EPSO/AST-SC/11/21"));
        // test_program.appendChild(set_options(""));.........................................................
        test_program.appendChild(set_options("Junior Professionals Programme"));
    }
    else if(event.target.value == "Events Industry Council"){
        test_program.appendChild(set_options("Events Industry Council"));
    }
    else if(event.target.value == "Eversource Energy Service Company"){
        test_program.appendChild(set_options("Eversource Energy Service Company-Contractor Employees only"));
        test_program.appendChild(set_options("Eversource Energy Service Company-Eversource Employees only"));
    }
    else if(event.target.value == "Exam Master Corporation"){
        test_program.appendChild(set_options("Exam Master Corporation"));
    }
    else if(event.target.value == "F5 Networks"){
        test_program.appendChild(set_options("F5 Networks"));
    }
    else if(event.target.value == "FINRA"){
        test_program.appendChild(set_options("FINRA"));
        test_program.appendChild(set_options("FINRA RP"));
        test_program.appendChild(set_options("NMLS RP"));
    }
    else if(event.target.value == "FSBPT"){
        test_program.appendChild(set_options("Federation of State Boards of Physical Therapy"));
    }
    else if(event.target.value == "GCC Electrical Testing Laboratory"){
        test_program.appendChild(set_options("GCC Electrical Testing Laboratory"));
    }
    else if(event.target.value == "Ghana Investment and Securities Institute Limited"){
        test_program.appendChild(set_options("GISI Professional Qualification"));
    }
    else if(event.target.value == "Global Fintech Institute"){
        test_program.appendChild(set_options("Chartered Fintech Professional"));
    }
    else if(event.target.value == "Green Business Certification lnc"){
        test_program.appendChild(set_options("GBCI Test Drive"));
        test_program.appendChild(set_options("Green Business Certification lnc"));
    }
    else if(event.target.value == "Gulf Organisation for Research & Development"){
        test_program.appendChild(set_options("Gulf Organisation for Research & Development"));
    }
    else if(event.target.value == "Healthcare Sterile Processing Association (Formerly IAHCSMM)"){
        test_program.appendChild(set_options("Healthcare Sterile Processing Association (Formerly IAHCSMM)"));
    }
    else if(event.target.value == "Hello World Kids"){
        test_program.appendChild(set_options("HelloCode Master Certificate"));
    }
    else if(event.target.value == "Human Assets Training Institute"){
        test_program.appendChild(set_options("Contractor Work Permit Receiver Prerequisite"));
    }
    else if(event.target.value == "Human Resource Professional Association"){
        test_program.appendChild(set_options("Human Resource Professional Association"));
    }
    else if(event.target.value == "HydraFacial Connect Certification"){
        test_program.appendChild(set_options("HydraFacial Connect Certification"));
    }
    else if(event.target.value == "Institute of Certified Management Accountants"){
        test_program.appendChild(set_options("Institute of Certified Management Accountants"));
    }
    else if(event.target.value == "International Board of Heart Rhythm Examiners"){
        test_program.appendChild(set_options("International Board of Heart Rhythm Examiners"));
    }
    else if(event.target.value == "International Board of Lactation Consultant Examiners"){
        test_program.appendChild(set_options("International Board of Lactation Consultant Examiners"));
    }
    else if(event.target.value == "International Board of Speciality Certification"){
        test_program.appendChild(set_options("International Board of Speciality Certification"));
    }
    else if(event.target.value == "International Council of Shopping Centers"){
        test_program.appendChild(set_options("International Council of Shopping Centers"));
    }
    else if(event.target.value == "International Facility Management Association"){
        test_program.appendChild(set_options("International Facility Management Association"));
    }
    else if(event.target.value == "International WELL Building Institute"){
        test_program.appendChild(set_options("International WELL Building Institute"));
    }
    else if(event.target.value == "IRS Special Enrollment Examination"){
        test_program.appendChild(set_options("IRS Special Enrollment Examination"));
    }
    else if(event.target.value == "ISA"){
        test_program.appendChild(set_options("ISA Certification & Security Certificate Exams"));
        test_program.appendChild(set_options("ISA84 Certificate Program"));
    }
    else if(event.target.value == "ISOGRAD"){
        test_program.appendChild(set_options("TOSA CERTIFICATION"));
    }
    else if(event.target.value == "KAPLN"){
        test_program.appendChild(set_options("Kaplan Official Test Day Experience"));
    }
    else if(event.target.value == "Korean Software Testing Qualifications Board"){
        test_program.appendChild(set_options("ISTQB Certified Tester"));
    }
    else if(event.target.value == "Language Testing International"){
        test_program.appendChild(set_options("Lymphology Association of North America"));
    }
    else if(event.target.value == "Law School Admission Council"){
        test_program.appendChild(set_options("Law School Admission Test"));
    }
    else if(event.target.value == "Lymphology Association of North America"){
        test_program.appendChild(set_options("Lymphology Association of North America"));
    }
    else if(event.target.value == "Maryland Insurance Administration"){
        test_program.appendChild(set_options("Maryland Insurance Administration"));
        test_program.appendChild(set_options("Maryland Insurance Administration Retake"));
    }
    else if(event.target.value == "Massachusetts Insurance"){
        test_program.appendChild(set_options("Massachusetts Insurance"));
    }
    else if(event.target.value == "Matrix42"){
        test_program.appendChild(set_options("Matrix42"));
    }
    else if(event.target.value == "Medical Council of Canada"){
        test_program.appendChild(set_options("Qualifying Examination - Part I"));
        test_program.appendChild(set_options("Therapeutics Decision-Making Examination"));
    }
    else if(event.target.value == "Medical Dosimetrist Certification Board"){
        test_program.appendChild(set_options("Medical Dosimetrist Certification Board"));
    }
    else if(event.target.value == "Medical Surgical Nursing Certification Board"){
        test_program.appendChild(set_options("Medical Surgical Nursing Certification Board"));
    }
    else if(event.target.value == "Michigan Language Assessment"){
        test_program.appendChild(set_options("Michigan English Test (MET)"));
    }
    else if(event.target.value == "Moody's Analytics"){
        test_program.appendChild(set_options("Moody's Analytics"));
    }
    else if(event.target.value == "Moody's"){
        test_program.appendChild(set_options("Moody's"));
    }
    else if(event.target.value == "National Board for Certification of School Nurses"){
        test_program.appendChild(set_options("National Board for Certification of School Nurses"));
    }
    else if(event.target.value == "National Board of Medical Examiners"){
        test_program.appendChild(set_options("American Association of Medical Assistants"));
        test_program.appendChild(set_options("American Board of Medical Genetics and Genomics"));
        test_program.appendChild(set_options("American Board of Obesity Medicine"));
        test_program.appendChild(set_options("American Board of Orthopaedic Surgery"));
        test_program.appendChild(set_options("American Board of Physical Therapy Specialties"));
        test_program.appendChild(set_options("American Board of Preventive Medicine"));
        test_program.appendChild(set_options("American Baord of Quality & Utilization Review Physicians"));
        test_program.appendChild(set_options("American Board of Surgery"));
        test_program.appendChild(set_options("American Osteopathic Board Of Orthopaedic Surgery"));
        test_program.appendChild(set_options("Health & Wellness Coach Certifying Examination Program"));
        test_program.appendChild(set_options("International Board of Heart Rhythm Examiners"));
        test_program.appendChild(set_options("International Council for Veterinary Assessment"));
        test_program.appendChild(set_options("Nat. Commission for Cert. of Anesthesiologist Assistants"));
        test_program.appendChild(set_options("National Board of Echocardiography"));
        test_program.appendChild(set_options("NBME Subject Examination Program"));
        test_program.appendChild(set_options("Special Purpose Exam"));
        test_program.appendChild(set_options("STEP1"));
        test_program.appendChild(set_options("STEP2"));
        test_program.appendChild(set_options("STEP3"));
        test_program.appendChild(set_options("Surgery of the Hand Subspecialty Certification Examination"));
        test_program.appendChild(set_options("USMLE Practice Tests"));
    }
    else if(event.target.value == "National Board of Osteopathic Medical Examiners"){
        test_program.appendChild(set_options("AMERICAN BOARD OF HAIR RESTORATION SURGERY"));
    }
    else if(event.target.value == "National Commission for Health Education Credentialing"){
        test_program.appendChild(set_options("National Commission for Health Education Credentialing"));
    }
    else if(event.target.value == "National Council for Certified Personal Trainers"){
        test_program.appendChild(set_options("National Council for Certified Personal Trainers"));
    }
    else if(event.target.value == "National Council of Architectural Registration Boards"){
        test_program.appendChild(set_options("National Council of Architectural Registration Boards"));
    }
    else if(event.target.value == "National Council on Strength & Fitness"){
        test_program.appendChild(set_options("National Council on Strength & Fitness"));
    }
    else if(event.target.value == "National Dental Assisting Examining Board"){
        test_program.appendChild(set_options("National Dental Assisting Examining Board"));
    }
    else if(event.target.value == "National Dental Examining Board of Canada"){
        test_program.appendChild(set_options("National Dental Examining Board of Canada"));
    }
    else if(event.target.value == "National Elevator Industry Educational Program"){
        test_program.appendChild(set_options("National Elevator Industry Educational Program"));
    }
    else if(event.target.value == "National Federation of Paralegal Associations"){
        test_program.appendChild(set_options("National Federation of Paralegal Associations"));
    }
    else if(event.target.value == "National Fire Protection Assoc"){
        test_program.appendChild(set_options("National Fire Protection Assocs"));
    }
    else if(event.target.value == "National Football League Players Association"){
        test_program.appendChild(set_options("National Football League Players Association"));
    }
    else if(event.target.value == "National Inspection Testing and Certification Corporation"){
        test_program.appendChild(set_options("National Inspection Testing and Certification Corporation"));
    }
    else if(event.target.value == "National Institute for Automotive Service Excellence"){
        test_program.appendChild(set_options("National Institute for Automotive Service Excellence"));
    }
    else if(event.target.value == "National Registry of Certified Medical Examiners"){
        test_program.appendChild(set_options("National Registry of Certified Medical Examiners"));
    }
    else if(event.target.value == "National Roofing Contractors Association"){
        test_program.appendChild(set_options("National Roofing Contractors Association"));
    }
    else if(event.target.value == "NCIDQ"){
        test_program.appendChild(set_options("NCIDQ"));
    }
    else if(event.target.value == "NCTRC"){
        test_program.appendChild(set_options("NCTRC"));
    }
    else if(event.target.value == "Nebraska Insurance"){
        test_program.appendChild(set_options("Nebraska Insurance"));
    }
    else if(event.target.value == "New H3C Technologies Co., Ltd."){
        test_program.appendChild(set_options("GB"));
    }
    else if(event.target.value == "New Hampshire Insurance"){
        test_program.appendChild(set_options("New Hampshire Insurance"));
    }
    else if(event.target.value == "New Mexico Insurance"){
        test_program.appendChild(set_options("New Mexico Insurance"));
    }
    else if(event.target.value == "Nokia Shanghai Bell"){
        test_program.appendChild(set_options("Nokia Partner Skills"));
    }
    else if(event.target.value == "North Dakota Insurance"){
        test_program.appendChild(set_options("North Dakota Insurance"));
        test_program.appendChild(set_options("North Dakota Insurance Retake"));
    }
    else if(event.target.value == "Northeast Gas Association"){
        test_program.appendChild(set_options("NGA Operator Qualification Program"));
    }
    else if(event.target.value == "Nursing Community Assessment Service"){
        test_program.appendChild(set_options("Nursing Community Assessment Service"));
    }
    else if(event.target.value == "Office of Administration"){
        test_program.appendChild(set_options("Commonwealth of Pennsylvania"));
    }
    else if(event.target.value == "Oklahoma Insurance"){
        test_program.appendChild(set_options("Oklahoma Bails Bondsman "));
        test_program.appendChild(set_options("Oklahoma Insurance Adjuster "));
        test_program.appendChild(set_options("Oklahoma Insurance Producer "));
    }
    else if(event.target.value == "Oman Medical Specialty Board"){
        test_program.appendChild(set_options("Oman Medical Specialty Board"));
    }
    else if(event.target.value == "Oncology Nursing Certification Corporation"){
        test_program.appendChild(set_options("Oncology Nursing Certification Corporation"));
    }
    else if(event.target.value == "Ontario College of Pharmacists"){
        test_program.appendChild(set_options("Ontario College of Pharmacist"));
    }
    else if(event.target.value == "OutSystems"){
        test_program.appendChild(set_options("OutSystems"));
    }
    else if(event.target.value == "Pediatric Nursing Certification Board"){
        test_program.appendChild(set_options("Pediatric Nursing Certification Board"));
    }
    else if(event.target.value == "PeopleCert"){
        test_program.appendChild(set_options("PeopleCerts"));
    }
    else if(event.target.value == "Pharmacy Examining Board of Canada"){
        test_program.appendChild(set_options("Non-Eligibility Remote Compatibility Check"));
        test_program.appendChild(set_options("Pharmacy Examining Board of Canada"));
    }
    else if(event.target.value == "PROC"){
        test_program.appendChild(set_options("PROC"));
    }
    else if(event.target.value == "Product Development Management Association"){
        test_program.appendChild(set_options("Product Development Management Association"));
    }
    else if(event.target.value == "Professional Credentialing Services"){
        test_program.appendChild(set_options("Arizona Cosmetology"));
    }
    else if(event.target.value == "Professional Testing Corporation"){
        test_program.appendChild(set_options("AAET The Nerve Conduction Association"));
        test_program.appendChild(set_options("ABOP"));
        test_program.appendChild(set_options("ABRET Neurodiagnostic Credentialing and Accreditation"));
        test_program.appendChild(set_options("ACCE Healthcare Technology Certification Commission"));
        test_program.appendChild(set_options("AIS Certification Board"));
        test_program.appendChild(set_options("American Board of Clinical Neurophysiology"));
        test_program.appendChild(set_options("American Board of Clinical Pharmacology, lnc."));
        test_program.appendChild(set_options("American Board of Multiple Specialties in Podiatry"));
        test_program.appendChild(set_options("American Board of Neurophysiology Monitoring"));
        test_program.appendChild(set_options("American Board of Spine Surgery"));
        test_program.appendChild(set_options("American Board of Wound Medicine and Surgery"));
        test_program.appendChild(set_options("American Hippotherapy Certification Board"));
        test_program.appendChild(set_options("American Hypertension Specialist Certification Program"));
        test_program.appendChild(set_options("Aromatherapy Registration Council"));
        test_program.appendChild(set_options("Association for Strategic Planning"));
        test_program.appendChild(set_options("Association of Marital and Family Therapy Regulatory Boards"));
        test_program.appendChild(set_options("Board of Behavioral Sleep Medicine"));
        test_program.appendChild(set_options("Canadian Board of Registration of EEG Technologists"));
        test_program.appendChild(set_options("Certification Board for Equine Interaction Professionals"));
        test_program.appendChild(set_options("Certification Council for Professional Dog Trainers"));
        test_program.appendChild(set_options("Certification Nurse Life Care Planners Certification Board"));
        test_program.appendChild(set_options("Certified Physician Life Care Planner Certification Board"));
        test_program.appendChild(set_options("Commission on Paraoptometric Certification"));
        test_program.appendChild(set_options("Consortium of Multiple Sclerosis Centers"));
        test_program.appendChild(set_options("Corporate Housing Providers Association"));
        test_program.appendChild(set_options("Culinary Medicine Specialist Board"));
        test_program.appendChild(set_options("Eye Bank Association of America"));
        test_program.appendChild(set_options("Global Business Travel Association"));
        test_program.appendChild(set_options("Immunoglobulin National Society"));
        test_program.appendChild(set_options("International Avian/Animal Trainers Certification Board"));
        test_program.appendChild(set_options("International Foundation for Retirement Education"));
        test_program.appendChild(set_options("Multiple Sclerosis Nursing Certification Board"));
        test_program.appendChild(set_options("National Academy of Certified Care Managers"));
        test_program.appendChild(set_options("National Board of Nutrition Support Certification"));
        test_program.appendChild(set_options("National Board of Physician Nutrition Specialists"));
        test_program.appendChild(set_options("National Certifying Board for Ophthalmic Registered Nurses"));
        test_program.appendChild(set_options("National Emergency Number Association"));
        test_program.appendChild(set_options("Nat'l Board for Cert of Orthopaedic Physician's Assistants"));
        test_program.appendChild(set_options("Nat'l Cert Board of Otorhinolaryngology & Head-Neck Nurses"));
        test_program.appendChild(set_options("North American Registry of Midwives"));
        test_program.appendChild(set_options("Professional Animal Care Certification Council"));
        test_program.appendChild(set_options("Reseach Administrators Certification Council"));
        test_program.appendChild(set_options("Society for Marketing Professional Services"));
        test_program.appendChild(set_options("World Pet Association"));
    }
    else if(event.target.value == "Professional Testing lnc"){
        test_program.appendChild(set_options("National Placement and Referral Alliance"));
    }
    else if(event.target.value == "PROMETRIC"){
        test_program.appendChild(set_options("Prometric Test Drive"));
    }
    else if(event.target.value == "Prometric English Language Proficiency"){
        test_program.appendChild(set_options("Prometric English Language Proficiency"));
    }
    else if(event.target.value == "Public Relations Uni Acrd Board"){
        test_program.appendChild(set_options("Public Relations Uni Acrd Board"));
    }
    else if(event.target.value == "Qualcomm Technologies, lnc."){
        test_program.appendChild(set_options("Qualcomm Certification"));
    }
    else if(event.target.value == "QuantInsti Quantitative Learning Private Limited"){
        test_program.appendChild(set_options("QuantInsti Quantitative Learning Private Limited"));
    }
    else if(event.target.value == "Rehabilitation Engineering and Assistive Technology Society"){
        test_program.appendChild(set_options("Rehabilitation Engineering and Assistive Technology Society"));
    }
    else if(event.target.value == "Saudi Commission for Health Specialties"){
        test_program.appendChild(set_options("Saudi Licencing Examination"));
        test_program.appendChild(set_options("SCHS Promotion Exams"));
    }
    else if(event.target.value == "Secuencias de cursos verificados de ABA Espana"){
        test_program.appendChild(set_options("Secuencias de cursos verificados de ABA Espana"));
    }
    else if(event.target.value == "Sharjah Health Authority"){
        test_program.appendChild(set_options("Sharjah Health Authority"));
    }
    else if(event.target.value == "Simplify Compliance"){
        test_program.appendChild(set_options("Association of Clinical Documentation Integrity Specialists"));
        test_program.appendChild(set_options("Association of Home Care Coding & Compliance"));
        test_program.appendChild(set_options("National Association of Healthcare Revenue Integrity"));
    }
    else if(event.target.value == "SOA"){
        test_program.appendChild(set_options("SOA"));
    }
    else if(event.target.value == "Society for Human Resource Management"){
        test_program.appendChild(set_options("Society for Human Resource Management"));
    }
    else if(event.target.value == "Society for Worldwide Interbank Financial Telecommunication"){
        test_program.appendChild(set_options("Society for Worldwide Interbank Financial Telecommunication"));
    }
    else if(event.target.value == "SSAT by The Enrollment Management Association"){
        test_program.appendChild(set_options("SSAT by The Enrollment Management Association"));
    }
    else if(event.target.value == "TESTCASES"){
        test_program.appendChild(set_options("ELIGIBILITY EXAMS"));
        test_program.appendChild(set_options("NON-ELIG"));
        test_program.appendChild(set_options("VOUCHER_EXAM"));
    }
    else if(event.target.value == "The Centre of Excellence for Applied Reseach & Training"){
        test_program.appendChild(set_options("Abu Dhabi Department of Community Development"));
        test_program.appendChild(set_options("UAE Ministry of Health"));
    }
    else if(event.target.value == "The Chartered Institute of Taxation"){
        test_program.appendChild(set_options("The Association of Taxation Technicians"));
        test_program.appendChild(set_options("The Chartered Institute of Taxation"));
    }
    else if(event.target.value == "The State Bar of California"){
        test_program.appendChild(set_options("The State Bar of California"));
    }
    else if(event.target.value == "Touchstone Institute"){
        test_program.appendChild(set_options("CELBAN"));
        test_program.appendChild(set_options("Practice CELBAN"));
    }
    else if(event.target.value == "Uniform CPA Exam"){
        test_program.appendChild(set_options("Uniform CPA Exam"));
    }
    else if(event.target.value == "Union Pacific"){
        test_program.appendChild(set_options("UP2"));
    }
    else if(event.target.value == "United States Marshals Service"){
        test_program.appendChild(set_options("United States Marshals Service"));
    }
    else if(event.target.value == "Universal Public Purchasing Certification Council"){
        test_program.appendChild(set_options("Universal Public Procurement Certification Council"));
    }
    else if(event.target.value == "Urban Planning Council"){
        test_program.appendChild(set_options("Pearl Community OR Building Rating System Exam"));
    }
    else if(event.target.value == "Utah Insurance Department"){
        test_program.appendChild(set_options("Utah Insurance Department"));
    }
    else if(event.target.value == "Vascular Access Certification Corporation"){
        test_program.appendChild(set_options("Vascular Access Certification Corporation"));
    }
    else if(event.target.value == "Vermont Insurance"){
        test_program.appendChild(set_options("Vermont Insurance"));
    }
    else if(event.target.value == "Virginia Department of Insurance"){
        test_program.appendChild(set_options("Virginia Department of Insurance"));
    }
    else if(event.target.value == "Wakne Limited"){
        test_program.appendChild(set_options("Licensing School"));
    }
    else if(event.target.value == "WebCE, lnc."){
        test_program.appendChild(set_options("TXADj"));
        test_program.appendChild(set_options("WebCE, lnc."));
    }
    else if(event.target.value == "World Bank"){
        test_program.appendChild(set_options("EDGE"));
    }
    else if(event.target.value == "ZOOM"){
        test_program.appendChild(set_options("Western Regional Examining Board"));
    }
    else if(event.target.value == "大力教育"){
        test_program.appendChild(set_options("UX设计测评"));
    }
    else if(event.target.value == "巨量认证 (OMC)"){
        test_program.appendChild(set_options("巨量引擎数字营销职业能力认证"));
        test_program.appendChild(set_options("巨量引擎数字营销职业能力认证（双认证)"));
    }
    else if(event.target.value == "特许私人财富管理师认证标准指导委员会(CPWMSC)"){
        test_program.appendChild(set_options("特许私人财富管理师 (CPWM®) 认证考试"));
    }
    else if(event.target.value == "阿里云全球培训中心"){
        test_program.appendChild(set_options("阿里云认证"));
    }
});

test_program.addEventListener("change", function(event){

    rest_dropdown(test_test,"Select a Test");

    if(event.target.value == "AAPC"){
        test_test.appendChild(set_options("CPC (Certified Professional Coder)"));
        test_test.appendChild(set_options("CPC (Certified Professional Coder) Voucher Transfer"));
    }else if(event.target.value == "ABPS"){
        test_test.appendChild(set_options("Plastic Surgery Written Exam"));
    }

    

    else if(event.target.value == "Uniform CPA Exam"){
        test_test.appendChild(set_options("AUDITING AND ATTESTATION"));
        test_test.appendChild(set_options("AUDITING AND ATTESTATION (GUAM ONLY)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation (International)"));
        test_test.appendChild(set_options("Auditing and Attestation Exam (For TA Use only)"));
        test_test.appendChild(set_options("BUSINESS ENVIRONMENT AND CONCEPTS"));
        test_test.appendChild(set_options("BUSINESS ENVIRONMENT AND CONCEPTS (GUAM ONLY)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts (International)"));
        test_test.appendChild(set_options("Business Environment and Concepts Exam (For TA Use only)"));
        test_test.appendChild(set_options("CPA Exam Preview"));
        test_test.appendChild(set_options("FINANCIAL ACCOUNTING AND REPORTING"));
        test_test.appendChild(set_options("FINANCIAL ACCOUNTING AND REPORTING (GUAM ONLY)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting (International)"));
        test_test.appendChild(set_options("Financial Accounting and Reporting Exam (For TA Use only)"));
        test_test.appendChild(set_options("International Qualification Exam"));
        test_test.appendChild(set_options("REGULATION"));
        test_test.appendChild(set_options("REGULATION (GUAM ONLY)"));
        test_test.appendChild(set_options("Regulation (International)"));
        test_test.appendChild(set_options("Regulation (International)"));
        test_test.appendChild(set_options("Regulation (International)"));
        test_test.appendChild(set_options("Regulation (International)"));
        test_test.appendChild(set_options("Regulation Exam (For TA Use Only)"));
    }else if(event.target.value == "UP2"){
        test_test.appendChild(set_options("Apprentice Diesel Electrician and Diesel Electrician"));
        test_test.appendChild(set_options("Apprentice Diesel Mechanic and Diesel Mechanic"));
        test_test.appendChild(set_options("Apprentice Freight Car Repairer, Freight Car Repairer"));
        test_test.appendChild(set_options("Clerical Test Battery"));
        test_test.appendChild(set_options("Coach Cleaner"));
        test_test.appendChild(set_options("Electronic Technician/Installation Technician"));
        test_test.appendChild(set_options("Mechanical Service Operator (Car)"));
        test_test.appendChild(set_options("Mechanical Service Operator (Locomotive)"));
    }else if(event.target.value == "United States Marshals Service"){
        test_test.appendChild(set_options("THE US MARSHALS SERVICE MERIT PROMOTION EXAM"));
    }else if(event.target.value == "Universal Public Procurement Certification Council"){
        test_test.appendChild(set_options("Certified Professional Public Buyer"));
        test_test.appendChild(set_options("Certified Professional Public Buyer French"));
        test_test.appendChild(set_options("Certified Professional Public Buyer Practice Exams"));
        test_test.appendChild(set_options("Certified Public Procurement Officer"));
        test_test.appendChild(set_options("Certified Public Procurement Officer French"));
        test_test.appendChild(set_options("Certified Public Procurement Officer Practice Exam"));
    }else if(event.target.value == "Pearl Community OR Building Rating System Exam"){
        test_test.appendChild(set_options("Pearl Building Rating System Exam"));
        test_test.appendChild(set_options("Pearl Community Rating System Exam"));
    }else if(event.target.value == "Utah Insurance Department"){
        test_test.appendChild(set_options("Adjusters Accident and Health Exam"));
        test_test.appendChild(set_options("Adjusters Crop Exam"));
        test_test.appendChild(set_options("Adjusters Workers Compensation Exam"));
        test_test.appendChild(set_options("Adjuster’s Property and Casualty Exam"));
        test_test.appendChild(set_options("Consultants Accident and Health Exam"));
        test_test.appendChild(set_options("Consultants Casualty Exam"));
        test_test.appendChild(set_options("Consultants Combined Life, Accident and Health Exam"));
        test_test.appendChild(set_options("Consultants Combined Property and Casualty Exam"));
        test_test.appendChild(set_options("Consultants Life Exam"));
        test_test.appendChild(set_options("Consultants Property Exam"));
        test_test.appendChild(set_options("Fingerprint"));
        test_test.appendChild(set_options("Producers Accident and Health Exam"));
        test_test.appendChild(set_options("Producers Casualty Exam"));
        test_test.appendChild(set_options("Producers Combined Life, Accident and Health Exam"));
        test_test.appendChild(set_options("Producers Combined Property and Casualty Exam"));
        test_test.appendChild(set_options("Producers Life Exam"));
        test_test.appendChild(set_options("Producers Personal Lines Exam"));
        test_test.appendChild(set_options("Producers Property Exam"));
        test_test.appendChild(set_options("Producers Title Escrow Exam"));
        test_test.appendChild(set_options("Producers Title Examination Exam"));
        test_test.appendChild(set_options("Producers Title Marketing Representative Exam"));
        test_test.appendChild(set_options("Surplus Lines Producer Exam"));
        test_test.appendChild(set_options("Utah Laws and Regulations Exam"));
    }else if(event.target.value == "Vascular Access Certification Corporation"){
        test_test.appendChild(set_options("Vascular Access Certification"));
    }else if(event.target.value == "Vermont Insurance"){
        test_test.appendChild(set_options("1425 - PROD LIFE"));
        test_test.appendChild(set_options("1427 - PROD ACC, HLTH & HMO"));
        test_test.appendChild(set_options("1429 - PROD LIFE, ACC, HLTH & HMO"));
        test_test.appendChild(set_options("1431 - PROD PC"));
        test_test.appendChild(set_options("1433 - ADJ PC"));
        test_test.appendChild(set_options("1434 - ADJ WORK COMP"));
        test_test.appendChild(set_options("1435 - PROD BAIL BOND"));
        test_test.appendChild(set_options("1437 - MOTOR VEH DMG APPR"));
        test_test.appendChild(set_options("1438 - TITLE"));
        test_test.appendChild(set_options("1439 - PROD PERS LINES"));
        test_test.appendChild(set_options("1441 - PRODUCER'S PROPERTY"));
        test_test.appendChild(set_options("1442 - PRODUCER'S CASUALTY"));
    }else if(event.target.value == "Virginia Department of Insurance"){
        test_test.appendChild(set_options("VA Health Insurance"));
        test_test.appendChild(set_options("VA Life and Annuities Insurance"));
        test_test.appendChild(set_options("VA Life, Annuities and Health Insurance"));
        test_test.appendChild(set_options("VA Personal Lines Insurance"));
        test_test.appendChild(set_options("VA Property and Casualty Insurance"));
        test_test.appendChild(set_options("VA Public Adjuster"));
        test_test.appendChild(set_options("VA Title Insurance"));
    }else if(event.target.value == "Licensing School"){
        test_test.appendChild(set_options("Microsoft Licensing Body of Knowledge 2021"));
    }else if(event.target.value == "TXADj"){
        test_test.appendChild(set_options("TX180"));
    }else if(event.target.value == "WebCE, lnc."){
        test_test.appendChild(set_options("WebCE 180 minute exam"));
        test_test.appendChild(set_options("WebCE 30 minute exam"));
        test_test.appendChild(set_options("WebCE 60 minute exam"));
        test_test.appendChild(set_options("WebCE 90 minute exam"));
    }else if(event.target.value == "EDGE"){
        test_test.appendChild(set_options("EDGE Bahasa"));
        test_test.appendChild(set_options("EDGE Chinese"));
        test_test.appendChild(set_options("EDGE English"));
        test_test.appendChild(set_options("EDGE Spanish"));
        test_test.appendChild(set_options("EDGE Vietnamese"));
    }else if(event.target.value == "Western Regional Examining Board"){
        test_test.appendChild(set_options("Comprehensive Treatment Plan 2022"));
        test_test.appendChild(set_options("Local Anesthesia Exam 2022"));
    }else if(event.target.value == "UX设计测评"){
        test_test.appendChild(set_options("2022 UX招聘测评"));
    }else if(event.target.value == "巨量引擎数字营销职业能力认证"){
        test_test.appendChild(set_options("信息流广告（中级）营销师"));
        test_test.appendChild(set_options("信息流广告（初级）营销师"));
        test_test.appendChild(set_options("初级信息流广告营销师(II类)"));
        test_test.appendChild(set_options("初级店铺运营认证"));
        test_test.appendChild(set_options("初级直播运营认证"));
        test_test.appendChild(set_options("初级短视频运营认证"));
        test_test.appendChild(set_options("巨量创意（中级）营销师"));
        test_test.appendChild(set_options("巨量创意（初级）营销师"));
        test_test.appendChild(set_options("巨量千川广告（中级）营销师"));
        test_test.appendChild(set_options("巨量千川广告（初级）营销师"));
        test_test.appendChild(set_options("搜索广告（初级）营销师"));
        test_test.appendChild(set_options("网络主播（初级）营销师"));
        test_test.appendChild(set_options("营销科学（初级）分析师"));
    }else if(event.target.value == "巨量引擎数字营销职业能力认证（双认证)"){
        test_test.appendChild(set_options("直播销售员职业技能等级认定 （理论四级)"));
        test_test.appendChild(set_options("视频创推-员职业技能等级认定 （理论四级)"));
    }else if(event.target.value == "特许私人财富管理师 (CPWM®) 认证考试"){
        test_test.appendChild(set_options("特许私人财富管理师 (CPWM®) 认证考试"));
    }else if(event.target.value == "阿里云认证"){
        test_test.appendChild(set_options("阿里云上云规划师ACP认证"));
        test_test.appendChild(set_options("阿里云云原生容器工程师ACP认证"));
        test_test.appendChild(set_options("阿里云云原生微服务工程师ACP认证"));
        test_test.appendChild(set_options("阿里云云安全工程师ACP认证"));
        test_test.appendChild(set_options("阿里云云网络工程师ACP认证"));
        test_test.appendChild(set_options("阿里云云计算工程师ACP认证"));
        test_test.appendChild(set_options("阿里云云计算架构师ACE认证"));
        test_test.appendChild(set_options("阿里云人工智能工程师ACP认证"));
        test_test.appendChild(set_options("阿里云关系型数据库工程师ACP认证"));
        test_test.appendChild(set_options("阿里云大数据分析师ACP认证"));
        test_test.appendChild(set_options("阿里云大数据工程师ACP认证"));
        test_test.appendChild(set_options("阿里云工业视觉智能工程师ACP认证"));
        test_test.appendChild(set_options("阿里云数据中心IT高级运维工程师认证"));
        test_test.appendChild(set_options("阿里云数据中心弱电高级运维工程师认证"));
        test_test.appendChild(set_options("阿里云数据中心暖通高级运维工程师认证"));
        test_test.appendChild(set_options("阿里云数据中心电气高级运维工程师认证"));
        test_test.appendChild(set_options("阿里云数据仓库工程师ACP认证"));
        test_test.appendChild(set_options("阿里云物联网工程师ACP认证"));
    }
});
