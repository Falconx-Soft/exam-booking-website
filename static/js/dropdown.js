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
        test_program.appendChild(set_options("American Association for Animal Science"));
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
    else if(event.target.value == "Arkansas Certified Nursing Assistant"){
        test_program.appendChild(set_options("Arkansas Certified Nursing Assistant"));
    }
    else if(event.target.value == "Arkansas Contractor Licensing Board"){
        test_program.appendChild(set_options("Arkansas Contractor Licensing Board"));
    }
    else if(event.target.value == "Ascend Learning, LLC"){
        test_program.appendChild(set_options("National Healthcareer Association"));
    }
    else if(event.target.value == "ASIS International"){
        test_program.appendChild(set_options("ASIS International"));
    }
    else if(event.target.value == "Associated Board Certifications International"){
        test_program.appendChild(set_options("Associated Board Certifications International"));
    }
    else if(event.target.value == "Association for Clinical Research Professionals"){
        test_program.appendChild(set_options("Association for Clinical Research Professionals"));
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
        test_program.appendChild(set_options("Board Of Pharmacy Specialities Test  Drive"));
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
        test_program.appendChild(set_options("Certified Customer Experience Professional"));
        test_program.appendChild(set_options("Edinburgh Whisky Academy"));
    }
    else if(event.target.value == "Certification Board of Infection Control and Epidemiology"){
        test_program.appendChild(set_options("Certification Board of Infection Control and Epidemiology"));
    }
    else if(event.target.value == "Certification Commission for Healthcare Interpreters"){
        test_program.appendChild(set_options("Certification Commission for Healthcare Interpreters"));
        // test_program.appendChild(set_options("ETOE Interpret"));
    }
    else if(event.target.value == "Certified Financial Planner"){
        test_program.appendChild(set_options("Certified Financial Planner"));
    }
    else if(event.target.value == "CFA Institute"){
        test_program.appendChild(set_options("Certificate in Investment Performance Measurement (CIPM)"));
        test_program.appendChild(set_options("CFA Program"));
        test_program.appendChild(set_options("ESG"));
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
        test_program.appendChild(set_options("American Board of Certification (CMT)"));
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
        test_program.appendChild(set_options("COLLEGE OF PHARMACISTS OF BRITISH COLUMBIA"));
    }
    else if(event.target.value == "Commission for Case Manager Certification"){
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
    else if(event.target.value == "European Personnel Selection Office"){
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
        test_program.appendChild(set_options("EPSO/AD/381/20 Administrators in the field of European Law"));
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
    else if(event.target.value == "Academic Language Therapy Association"){
        test_test.appendChild(set_options("Certified Academic Language Practitioner"));
        test_test.appendChild(set_options("Certified Academic Language Therapist"));
    }
    else if(event.target.value == "AHA- Active House Alliance"){
        test_test.appendChild(set_options("Active House Accredited Professional"));

    }
    else if(event.target.value == "American Association for Animal Science"){
        test_test.appendChild(set_options("ASSISTANT LAB ANIMAL TECHNICIAN"));
        test_test.appendChild(set_options("LABORATORY ANIMAL TECHNICIAN"));
        test_test.appendChild(set_options("LABORATORY ANIMAL TECHNOLOGIST"));

    }
    else if(event.target.value == "Health Care Quality & Management"){
        test_test.appendChild(set_options("Health Care Quality & Management"));

    }
    else if(event.target.value == "American Academy of Nurse Practitioners Certification Board"){
        test_test.appendChild(set_options("Adult-Gerontology Nurse Practitioner Exam"));
        test_test.appendChild(set_options("Emergency Nurse Practitioner Exam"));
        test_test.appendChild(set_options("Family Nurse Practitioner Exam"));

    }else if(event.target.value == "American Association of Heart Failure Nurses"){
        test_test.appendChild(set_options("CHFN"));
    }else if(event.target.value == "American Board for Certification in O, P&P"){
        test_test.appendChild(set_options("Combined O&P Written Exam"));
        test_test.appendChild(set_options("Mastectomy Fitter Written Cert. Exam"));
        test_test.appendChild(set_options("Orthotic Assistant Writter Certification Examination"));
        test_test.appendChild(set_options("Orthotic Fitter Written Cert. Exam"));
        test_test.appendChild(set_options("Orthotic Practitioner Written Cert. Exam"));
        test_test.appendChild(set_options("Orthotic Practitioner Written Sim. Cert. Exam"));
        test_test.appendChild(set_options("Orthotics Technician Written Certification Examination"));
        test_test.appendChild(set_options("Pedorthic Cert. Exam"));
        test_test.appendChild(set_options("Prosthetic Assistant Written Certification"));
        test_test.appendChild(set_options("Prosthetic Practitioner Written Cert. Exam"));
        test_test.appendChild(set_options("Prosthetic Practitioner Written Sim. Cert. Exam"));
        test_test.appendChild(set_options("Prosthetics Technician Written Certification Examination"));
        test_test.appendChild(set_options("Therapeutics Shoe Fitter Written Cert. Exam"));

    }
    else if(event.target.value == "American Board of Cardiovascular Perfusion"){
        test_test.appendChild(set_options("Clinical Applications in Perfusion Examination"));
        test_test.appendChild(set_options("Part 1 - Perfusion Basic Science Examination"));

    }
    else if(event.target.value == "American Board of Dermatology"){
        test_test.appendChild(set_options("Certification Exam"));

    }
    else if(event.target.value == "American Board of Family Medicine"){
        test_test.appendChild(set_options("Primary Certification/Recertification Exam"));
          test_test.appendChild(set_options("Sports Medicine Exam"));
    }
    else if(event.target.value == "American Board of Gastroenterology Nurses"){
        test_test.appendChild(set_options("Certified Gastroenterology Registered Nurse"));

    }
    else if(event.target.value == "American Board of Ophthalmology"){
        test_test.appendChild(set_options("Demonstration of Cognitive Ophthalmic Knowledge"));
        test_test.appendChild(set_options("Written Qualifying Examination"));
    }


    else if(event.target.value == "American Board of Opticianry - National Contact Lens Examine"){
        test_test.appendChild(set_options("American Board of Opticianry Mock Exam"));
        test_test.appendChild(set_options("American Board of Opticianry Practical Exam"));
        test_test.appendChild(set_options("Combines Contact Lens Registry Exam Basic"));
        test_test.appendChild(set_options("Combined National Opticianry Competency Exam Basic"));
        test_test.appendChild(set_options("Competency Exam Basic - NOCE Basic (Spanish)"));
        test_test.appendChild(set_options("Contact Lens Registry Exam - Advanced"));
        test_test.appendChild(set_options("Contact Lens Registry Exam - Basic"));
        test_test.appendChild(set_options("Contact Lens Registry Exam - Basic (Spanish)"));
        test_test.appendChild(set_options("National Contact Lens Examiners Practical Exam"));
        test_test.appendChild(set_options("National Opticianry Competency Exam Advanced - NOCE Advanced"));
        test_test.appendChild(set_options("National Opticianry Competency Exam Basic - NOCE Basic"));
    }
    else if(event.target.value == "American Board of Oral and Maxillofacial Radiology"){
        test_test.appendChild(set_options("Part 1 - Certifying Exam"));
    }
    else if(event.target.value == "American Board of Oral and Maxillofacial Surgery"){
        test_test.appendChild(set_options("Head and Neck Reconstructive Surgery"));
        test_test.appendChild(set_options("OMSITE"));
        test_test.appendChild(set_options("Pediatric Craniomaxillofacial Surgery"));
        test_test.appendChild(set_options("Qualifying Examination"));
    }
    else if(event.target.value == "American Board of Pediatrics"){
        test_test.appendChild(set_options("Adolescent Medicine (Certification)"));
        test_test.appendChild(set_options("Adolescent Medicine (In-training)"));
        test_test.appendChild(set_options("Adolescent Medicine (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Certification in Pediatric Hospital Medicine Exam"));
        test_test.appendChild(set_options("Child Abuse Pediatrics (Certification)"));
        test_test.appendChild(set_options("Child Abuse Pediatrics (IN-training)"));
        test_test.appendChild(set_options("Development-Behavioral Pediatrics (In-training)"));
        test_test.appendChild(set_options("Development-Behavioral Pediatrics (MOC-Subspecialty)"));
        test_test.appendChild(set_options("General Pediatrics (MOC - General)"));
        test_test.appendChild(set_options("General Pediatrics Certification"));
        test_test.appendChild(set_options("Hospital Medicine In-training"));
        test_test.appendChild(set_options("Neonatal-Parinatal Medicine (Certication)"));
        test_test.appendChild(set_options("Neonatal-Parinatal Medicine (In-training)"));
        test_test.appendChild(set_options("Neonatal-Parinatal Medicine (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Cardiology (Certification)"));
        test_test.appendChild(set_options("Pediatric Cardiology (In-training)"));
        test_test.appendChild(set_options("Pediatric Cardiology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Critical Care Medicine (Certification)"));
        test_test.appendChild(set_options("Pediatric Critical Care Medicine (In-training)"));
        test_test.appendChild(set_options("Pediatric Critical Care Medicine (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Development-Behavioral (Certification)"));
        test_test.appendChild(set_options("Pediatric Emergency Medicine (Certification)"));
        test_test.appendChild(set_options("Pediatric Emergency Medicine (In-training)"));
        test_test.appendChild(set_options("Pediatric Emergency Medicine (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Endocrinology (Certification)"));
        test_test.appendChild(set_options("Pediatric Endocrinology (In-training)"));
        test_test.appendChild(set_options("Pediatric Endocrinology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Gastroenterology (Certification)"));
        test_test.appendChild(set_options("Pediatric Gastroenterology (In-training)"));
        test_test.appendChild(set_options("Pediatric Gastroenterology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Hematology-Oncology (Certification)"));
        test_test.appendChild(set_options("Pediatric Hematology-Oncology (In-training)"));
        test_test.appendChild(set_options("Pediatric Hematology-Oncology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Infectious Disease (In-training)"));
        test_test.appendChild(set_options("Pediatric Infectious Diseases (Certification)"));
        test_test.appendChild(set_options("Pediatric Infectious Diseases (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Nephrology (Certification)"));
        test_test.appendChild(set_options("Pediatric Nephrology (In-training)"));
        test_test.appendChild(set_options("Pediatric Nephrology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Pulmonology (Certification)"));
        test_test.appendChild(set_options("Pediatric Pulmonology (In-training)"));
        test_test.appendChild(set_options("Pediatric Pulmonology (MOC - Subspecialty)"));
        test_test.appendChild(set_options("Pediatric Rheumatology (Certification))"));
        test_test.appendChild(set_options("Pediatric Rheumatology (In-training)"));
        test_test.appendChild(set_options("Pediatric Rheumatology (MOC - Subspecialty)"));
    }
    else if(event.target.value == "American Board of Preventive Medicine"){
        test_test.appendChild(set_options("Addiction Medicine Exam"));
        test_test.appendChild(set_options("Aerospace Medicine Exam"));
        test_test.appendChild(set_options("Clinical Informatics Exam"));
        test_test.appendChild(set_options("Core Exam"));
        test_test.appendChild(set_options("Occupational Medicine Exam"));
        test_test.appendChild(set_options("Public Health and General Preventive Medicine Exam"));
        test_test.appendChild(set_options("Undersea and Hyperbaric Medicine Exam"));
    }
    else if(event.target.value == "American College of Radiology"){
        test_test.appendChild(set_options("Diagnostic In-training Examination"));
        test_test.appendChild(set_options("Radiation Oncology In-Training Examination"));
    }
    else if(event.target.value == "American College of Veterinary Dermatology"){
        test_test.appendChild(set_options("ACVD Certifying Examination"));
    }
    else if(event.target.value == "Cardiology Specialty Examination"){
        test_test.appendChild(set_options("Anatomy/Pathology"));
        test_test.appendChild(set_options("Case Studies"));
        test_test.appendChild(set_options("Essay"));
        test_test.appendChild(set_options("MC"));
        test_test.appendChild(set_options("Physiologic Recordings"));
        test_test.appendChild(set_options("Video"));
    }
    else if(event.target.value == "General Examination"){
        test_test.appendChild(set_options("General Examination, Gen"));
        test_test.appendChild(set_options("General Examination, LA"));
        test_test.appendChild(set_options("General Examination, SA"));
    }
    else if(event.target.value == "LAIM Specialty Exam"){
        test_test.appendChild(set_options("CM"));
        test_test.appendChild(set_options("MC1"));
        test_test.appendChild(set_options("MC2"));
    }
    else if(event.target.value == "Neurology Specialty Examination"){
        test_test.appendChild(set_options("Clinical Cases"));
        test_test.appendChild(set_options("Electrodiagnostics"));
        test_test.appendChild(set_options("MC"));
        test_test.appendChild(set_options("Pathology"));
        test_test.appendChild(set_options("Radiology"));
    }
    else if(event.target.value == "Nutrition Specialty Examination"){
        test_test.appendChild(set_options("Clinical Cases Management"));
        test_test.appendChild(set_options("General Principles of Nutrition"));
        test_test.appendChild(set_options("Practical and Clinical Nutrition"));
    }
    else if(event.target.value == "Oncology Specialty Examination"){
        test_test.appendChild(set_options("MC1: Basic Science"));
        test_test.appendChild(set_options("MC2, Part A: Applied Clinical"));
        test_test.appendChild(set_options("MC2, Part B: Clinical Decision Making"));
    }
    else if(event.target.value == "SAIM Specialty Examination"){
        test_test.appendChild(set_options("SAIM Knowledge & Problem Solving"));
        test_test.appendChild(set_options("SAIM Medical Literature/MC"));
        test_test.appendChild(set_options("SAIM Patient Management"));
        test_test.appendChild(set_options("SAIM Knowledge & Problem Solving"));
        test_test.appendChild(set_options("SAIM Written"));
    }
    else if(event.target.value == "American College of Veterinary Pathologists"){
        test_test.appendChild(set_options("Phase II Anatomic Pathology Certifying Examination"));
        test_test.appendChild(set_options("Phase II Clinical Pathology Certifying Examination"));
    }
    else if(event.target.value == "American Concrete Institute"){
        test_test.appendChild(set_options("CONCRETE FIELD TESTING TECHNICIAN-GRADE I"));
        test_test.appendChild(set_options("CONCRETE FLATWORK ASSOCIATE & ADVANCED FLATWORK FINISHER"));
        test_test.appendChild(set_options("CONCRETE STRENGTH TESTING TECHNICIAN"));
        test_test.appendChild(set_options("CSA-Based Concrete Field-Testing Technician - Grade I"));
        test_test.appendChild(set_options("SHORTCRETE NOZZLEMAN-DRY MIX PROCESS"));
        test_test.appendChild(set_options("SHORTCRETE NOZZLEMAN-WET MIX PROCESS"));
        test_test.appendChild(set_options("TILT-UP SUPERVISOR/TECHNICIAN"));
    }
    else if(event.target.value == "American Electrology Association IBEC"){
        test_test.appendChild(set_options("AEA Licensure- Connecticut"));
        test_test.appendChild(set_options("AEA Licensure- Illinois"));
        test_test.appendChild(set_options("AEA Licensure- Maryland"));
        test_test.appendChild(set_options("AEA Licensure- New Jersey"));
        test_test.appendChild(set_options("AEA Licensure- North Carolina"));
        test_test.appendChild(set_options("AEA Licensure- Vermont"));
        test_test.appendChild(set_options("AEA Licensure- Wisconsin"));
        test_test.appendChild(set_options("Cert Prof Elec Exam (CPEM)"));
        test_test.appendChild(set_options("IBEC Electrology, Laser, and IPL Exam- FL"));
        test_test.appendChild(set_options("IBEC Licensure Exam"));

    }
    else if(event.target.value == "American Institute of Certified Planners"){
        test_test.appendChild(set_options("AICP Certification Exam"));
    }
    else if(event.target.value == "American Nurses Credentialing Center"){
        test_test.appendChild(set_options("Adult-Gerontology Acute Care Nurse Practitioner"));
        test_test.appendChild(set_options("Adult-Gerontology Acute Care Nurse Practitioner - Field Test "));
        test_test.appendChild(set_options("Adult-Gerontology Clinical Nurse Specialist"));
        test_test.appendChild(set_options("Adult-Gerontology Clinical Nurse Specialist -Field Test"));
        test_test.appendChild(set_options("Adult-Gerontology Primary Care Nurse Practioner"));
        test_test.appendChild(set_options("Adult-Gerontology Primary Care Nurse Practitioner- Field Test"));
        test_test.appendChild(set_options("Ambulatory Care Nursing"));
        test_test.appendChild(set_options("Ambulatory Care Nurse - Field Test"));
        test_test.appendChild(set_options("Cardiac Vascular Nursing"));
        test_test.appendChild(set_options("Cardiac-Vascular Nursing - Field Test"));
        test_test.appendChild(set_options("Case Management Nursing"));
        test_test.appendChild(set_options("Family NP"));
        test_test.appendChild(set_options("Family Nurse Practioner - Field Test"));
        test_test.appendChild(set_options("Field Test - Nurse Executive Advanced"));
        test_test.appendChild(set_options("Gerontological Nursing"));
        test_test.appendChild(set_options("Gerontology Nursing - Field Test"));
        test_test.appendChild(set_options("Informatics Nursing"));
        test_test.appendChild(set_options("Informatics Nursing - Field Test"));
        test_test.appendChild(set_options("Medical Surgical Nursing - Field Test"));
        test_test.appendChild(set_options("Medical-Surgical Nursing"));
        test_test.appendChild(set_options("National Healthcare Disaster Professional"));
        test_test.appendChild(set_options("Nurse Executive"));
        test_test.appendChild(set_options("Nurse Executive - Advanced"));
        test_test.appendChild(set_options("Nursing Case Management - Field Test"));
        test_test.appendChild(set_options("Nursing Executive - Field Test"));
        test_test.appendChild(set_options("Nursing Professional Development"));
        test_test.appendChild(set_options("Nursing Professional Development - Field Test"));
        test_test.appendChild(set_options("Pain Management Nursing"));
        test_test.appendChild(set_options("Pain Management Nursing - Field Test"));
        test_test.appendChild(set_options("Pediatric Nursing"));
        test_test.appendChild(set_options("Pediatric Nursing - Field Test"));
        test_test.appendChild(set_options("Pediatric Primary Care Nurse Practioner"));
        test_test.appendChild(set_options("Pediatric Primary Care Nurse Practioner - Field Test"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nurse Practioner"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing - Field Test"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing - Field Test"));

    }
    else if(event.target.value == "American Nurses Credentialing Center Readiness"){
        test_test.appendChild(set_options("Adult-Gerontology Acute Care NP Comprehensive Readiness"));
        test_test.appendChild(set_options("Adult-Gerontology Primary Care NP Comprehensive Readiness"));
        test_test.appendChild(set_options("Adult-Gerontology Primary Care NP Domain II Readiness"));
        test_test.appendChild(set_options("Family Nurse Practioner Comprehensive Readiness"));
        test_test.appendChild(set_options("Medical-Surgical Nursing Comprehensive Readiness"));
        test_test.appendChild(set_options("Nursing Professional Development Comprehensive Readiness"));
        test_test.appendChild(set_options("Psychiatric-Mental Health NP Comprehensive Readiness Test"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing Comprehensive Readiness"));
        test_test.appendChild(set_options("Psychiatric-Mental Health Nursing Domain III Readiness"));
    }
    else if(event.target.value == "American Osteopathic Board of Emergency Medicine"){
        test_test.appendChild(set_options("AOBEM Certification Examination Part 1"));
        test_test.appendChild(set_options("AOBEM Cognitive Assessment Examination"));
    }
  
    else if(event.target.value == "American Osteopathic Board of Internal Medicine"){
        test_test.appendChild(set_options("AOBIM Cardiology (Certification)"));
        test_test.appendChild(set_options("AOBIM Cardiology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Clinical Cardiac Electrophysiology (Certification)"));
        test_test.appendChild(set_options("AOBIM Clinical Cardiac Electrophysiology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Critical Care Medicine (Certification)"));
        test_test.appendChild(set_options("AOBIM Critical Care Medicine (Recertification)"));
        test_test.appendChild(set_options("AOBIM Endocrinology (Certification)"));
        test_test.appendChild(set_options("AOBIM Endocrinology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Gastroenterology (Certification)"));
        test_test.appendChild(set_options("AOBIM Gastroenterology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Geriatric Medicine (Certification)"));
        test_test.appendChild(set_options("AOBIM Geriatric Medicine (Recertification)"));
        test_test.appendChild(set_options("AOBIM Hematology (Certification)"));
        test_test.appendChild(set_options("AOBIM Hematology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Hospice and Palliative Medicine (Certification)"));
        test_test.appendChild(set_options("AOBIM Hospice and Palliative Medicine (Recertification)"));
        test_test.appendChild(set_options("AOBIM Hospital Medicine (Recertification)"));
        test_test.appendChild(set_options("AOBIM Infectious Disease (Certification)"));
        test_test.appendChild(set_options("AOBIM Infectious Disease (Recertification)"));
        test_test.appendChild(set_options("AOBIM Interventional Cardiology (Certification)"));
        test_test.appendChild(set_options("AOBIM Interventional Cardiology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Nephrology (Certification)"));
        test_test.appendChild(set_options("AOBIM Nephrology (Recertification/OCC) Exam"));
        test_test.appendChild(set_options("AOBIM Oncology (Certification)"));
        test_test.appendChild(set_options("AOBIM Oncology (Recertification)"));
        test_test.appendChild(set_options("AOBIM PULMONARY DISEASES (RECERTIFICATION)"));
        test_test.appendChild(set_options("AOBIM Pulmonary Diseases (Certification)"));
        test_test.appendChild(set_options("AOBIM Rheumatology (Certification)"));
        test_test.appendChild(set_options("AOBIM Rheumatology (Recertification)"));
        test_test.appendChild(set_options("AOBIM Sleep Medicine (Certification)"));
        test_test.appendChild(set_options("AOBIM Sleep Medicine (Recertification)"));
        test_test.appendChild(set_options("Internal Medicine Certification"));
        test_test.appendChild(set_options("Internal Medicine OCC"));
    }
    else if(event.target.value == "American Osteopathic Board of Pediatrics"){
        test_test.appendChild(set_options("AOBP Certification Exam"));
        test_test.appendChild(set_options("General Pediatrics OCC Cognitive Assessment Exam"));
    }
    else if(event.target.value == "American Petroleum Institute"){
        test_test.appendChild(set_options("1169 - Pipeline Inspector Certification"));
        test_test.appendChild(set_options("1169 - Pipeline Inspector Certification (Translated)"));
        test_test.appendChild(set_options("1184 - Pipeline Facility Construction Inspector"));
        test_test.appendChild(set_options("1184 - Pipeline Facility Construction Inspector (Translated)"));
        test_test.appendChild(set_options("510 - Pressure Vessel Inspector Certification"));
        test_test.appendChild(set_options("510 - Pressure Vessel Inspector Certification (Translated)"));
        test_test.appendChild(set_options("570 - Pipeline Inspector Certification"));
        test_test.appendChild(set_options("579 - Piping Inspector Certification (Translated)"));
        test_test.appendChild(set_options("571 - Corrosion & Material"));
        test_test.appendChild(set_options("571 - Corrosion & Material (Translated)"));
        test_test.appendChild(set_options("577 - Welding Inspection Metallurgy"));
        test_test.appendChild(set_options("580 - Risk Based Inspection"));
        test_test.appendChild(set_options("580 - Risk Based Inspection (Translated)"));
        test_test.appendChild(set_options("653 - Aboveground Storage Tanks"));
        test_test.appendChild(set_options("653 - Aboveground Storage Tanks (Translated)"));
        test_test.appendChild(set_options("939 - Refractory Personal Certification"));
        test_test.appendChild(set_options("936 - Refractory Personal Certification (Translated)"));
        test_test.appendChild(set_options("AQ1-Certified Auditor Professional Q1"));
        test_test.appendChild(set_options("AQ1-Certified Auditor Professional Q1 (Translated)"));
        test_test.appendChild(set_options("AQ2-Certified Auditor Professional Q2"));
        test_test.appendChild(set_options("SIEE - SIRE - Source Inspector Electrical Equipment"));
        test_test.appendChild(set_options("SIFE - Source Inspector Fixed Equipment"));
        test_test.appendChild(set_options("SIFE - Source Inspector Fixed Equipment (Translated)"));
        test_test.appendChild(set_options("SIRE - Source Inspector Rotating Equipment"));
        test_test.appendChild(set_options("TES - Tank Entry Supervisors"));
    }
    else if(event.target.value == "American Society for Quality"){
        test_test.appendChild(set_options("Certified Calibration Technician"));
        test_test.appendChild(set_options("Certified FedEx/ASQ QDM Expert"));
        test_test.appendChild(set_options("Certified Food Safety and Quality Auditor"));
        test_test.appendChild(set_options("Certified Manager of Quality Organizational Excellence (PBT)"));
        test_test.appendChild(set_options("Certified Manager of Quality/Organizational Excellence"));
        test_test.appendChild(set_options("Certified Master Black Belt"));
        test_test.appendChild(set_options("Certified Medical Device Auditor"));
        test_test.appendChild(set_options("Certified Pharmaceutical GMP Professional"));
        test_test.appendChild(set_options("Certified Quality Auditor"));
        test_test.appendChild(set_options("Certified Quality Engineer"));
        test_test.appendChild(set_options("Certified Quality Engineer (PBT)"));
        test_test.appendChild(set_options("Certified Quality Improvement Associate"));
        test_test.appendChild(set_options("Certified Quality inspector"));
        test_test.appendChild(set_options("Certified Quality Process Analyst"));
        test_test.appendChild(set_options("Certified Quality Technician"));
        test_test.appendChild(set_options("Certified Reliability Engineer"));
        test_test.appendChild(set_options("Certified Reliability Engineer (PBT)"));
        test_test.appendChild(set_options("Certified Six Sigma Black Belt"));
        test_test.appendChild(set_options("Certified Six Sigma Black Belt (PBT)"));
        test_test.appendChild(set_options("Certified Six Sigma Green Belt"));
        test_test.appendChild(set_options("Certified Six Sigma Green Belt (PBT)"));
        test_test.appendChild(set_options("Certified Six Sigma Yellow Belt"));
        test_test.appendChild(set_options("Certified Software Quality Engineer"));
        test_test.appendChild(set_options("Certified Supplier Quality Professional"));
        test_test.appendChild(set_options("Lean Specialized Credential"));
    }
    else if(event.target.value == "American Society of Mechanical Engineers"){
        test_test.appendChild(set_options("ASME NON DESTRUCTIVE EXAMINATION"));
        test_test.appendChild(set_options("CERT OF GD&T 1994 SENIOR LEVEL"));
        test_test.appendChild(set_options("CERT OF GD&T 1994 TECHNOLOGIST LEVEL"));
        test_test.appendChild(set_options("CERT OF GD&T 2009 SENIOR LEVEL"));
        test_test.appendChild(set_options("CERT OF GD&T 2009 TECHNOLOGIST LEVEL"));
        test_test.appendChild(set_options("CERT OF RESOURCE RECOVERY FACILITY OPERATORS"));
        test_test.appendChild(set_options("QFO"));
    }
    else if(event.target.value == "ASHA Assistant Certification Program (ACP)"){
        test_test.appendChild(set_options("Audiology Assistants"));
        test_test.appendChild(set_options("Speech-Language Pathology Assistants"));
    }
    else if(event.target.value == "American Veterinary Medical Association"){
        test_test.appendChild(set_options("Basic and Clinical Sciences Exam"));
        test_test.appendChild(set_options("Basic and Clinical Sciences Exam French"));
    }
    else if(event.target.value == "American Welding Society"){
        test_test.appendChild(set_options("ASME BPVC Section IX, Power B31.1 and Process B31.3 Piping"));
        test_test.appendChild(set_options("AWS API 1104 Pipeline"));
        test_test.appendChild(set_options("AWS CWI Part C API 1104 Pipeline"));
        test_test.appendChild(set_options("AWS CWI Part C D1.1 Structural Steel"));
        test_test.appendChild(set_options("AWS CWI Part C D1.5 Bridge Welding"));
        test_test.appendChild(set_options("AWS CWI Part C D17.1 Aerospace"));
        test_test.appendChild(set_options("AWS Certified Welding Engineer Part 1 Science Fundamentals"));
        test_test.appendChild(set_options("AWS Certified Welding Engineer Part 2 Applied Science"));
        test_test.appendChild(set_options("AWS Certified Welding Engineer Part 3 Welding Disciplines"));
        test_test.appendChild(set_options("AWS Certified Welding Engineer Part 4 Practical Welding"));
        test_test.appendChild(set_options("AWS Certified Welding Inspector (CWI) Part A Fundamentals"));
        test_test.appendChild(set_options("AWS D1.1 Structural Steel"));
        test_test.appendChild(set_options("AWS D1.2 Structural Aluminum"));
        test_test.appendChild(set_options("AWS D1.5 Bridge Welding"));
        test_test.appendChild(set_options("AWS D15.1 Railraod"));
        test_test.appendChild(set_options("AWS D17.1 Aerospace"));
        test_test.appendChild(set_options("AWS Magnetic Particle Testing (MT) Part A Fundamentals"));
        test_test.appendChild(set_options("AWS Magnetic Particle Testing (MT) Part C Specific"));
        test_test.appendChild(set_options("AWS Penetrant Testing (PT) Part A Fundamentals"));
        test_test.appendChild(set_options("AWS Penetrant Testing (PT) Part C Specific"));
        test_test.appendChild(set_options("AWS Senior Certified Welding Inspector (SCWI)"));
        test_test.appendChild(set_options("AWS Welder Performance Qualifier Endorsement-WPQ1"));
        test_test.appendChild(set_options("AWS Welding Procedure Qualifier Endorsement-WPQ2"));
        test_test.appendChild(set_options("Certified Resistance Welding Technician"));
        test_test.appendChild(set_options("Certified Welding Sales Representative (CWSR)"));
        test_test.appendChild(set_options("Certified Welding Supervisor Part A"));
        test_test.appendChild(set_options("Certified Welding Supervisor Part B"));
        test_test.appendChild(set_options("D1.5 Bridge Welding"));
        test_test.appendChild(set_options("ISO Standards Exam"));
        test_test.appendChild(set_options("Senior Certified Welding Inspector (SCWI) Parts A and B"));
        test_test.appendChild(set_options("Structural Bolting Inspection"));
    }
    else if(event.target.value == "Prometric Test Drive-AWS"){
        test_test.appendChild(set_options("Prometric Test Drive"));
    }
    else if(event.target.value == "Arkansas Contractor Licensing Board"){
        test_test.appendChild(set_options("Commercial Business and Law"));
    }
    else if(event.target.value == "National Healthcareer Association"){
        test_test.appendChild(set_options("NHA Certified Billing and Coding Specialist"));
        test_test.appendChild(set_options("NHA Certified Clinical Medical Assistant"));
        test_test.appendChild(set_options("NHA Certified EKG Technician"));
        test_test.appendChild(set_options("NHA Certified Medical Administrative Assistant"));
        test_test.appendChild(set_options("NHA Certified Patient Care Technician/Assistant"));
        test_test.appendChild(set_options("NHA Certified Pharmacy Technician"))
        test_test.appendChild(set_options("NHA Certified Phlebotomy Technician"));;
        test_test.appendChild(set_options("NHA Electronic Health Record Specialist"));
    }

    else if(event.target.value == "ASIS International"){
        test_test.appendChild(set_options("APP-Associate Protection Professional"));
        test_test.appendChild(set_options("APPS-Profesional De Proteccion Asociado"));
        test_test.appendChild(set_options("CPP-Certified Protection Professional"));
        test_test.appendChild(set_options("CPPS-Profesional Certificado en Protección"));
        test_test.appendChild(set_options("PCI - Professional Certified Investigator"));
        test_test.appendChild(set_options("PCIS - Invesdigator Profesional Certificado"));
        test_test.appendChild(set_options("PSP- Physical Security Professional"));
        test_test.appendChild(set_options("PSPS- Profesional en Seguridad Fisica"));

    }
    else if(event.target.value == "Associated Board Certifications International"){
        test_test.appendChild(set_options("ABCI Demo Exam"));
        test_test.appendChild(set_options("PLT21"));
        test_test.appendChild(set_options("PLT6"));
        test_test.appendChild(set_options("PRAC"));
        test_test.appendChild(set_options("Professional Licensure Test"));
        test_test.appendChild(set_options("Professional Licensure Test 2"));
        test_test.appendChild(set_options("Professional Licensure Test 3"));
        test_test.appendChild(set_options("Professional Licensure Test 4"));
        test_test.appendChild(set_options("True Ability Integration"));
        test_test.appendChild(set_options("True Ability Integration Test"));
    }
    else if(event.target.value == "Association for Clinical Research Professionals"){
        test_test.appendChild(set_options("ACRP Certified Professional"));
        test_test.appendChild(set_options("ACRP Project Manager"));
        test_test.appendChild(set_options("Certified Principal Investigator"));
        test_test.appendChild(set_options("Clinical Research Associate"));
        test_test.appendChild(set_options("Clinical Research Coordinator"));
        test_test.appendChild(set_options("Medical Device Professional Exam"));
    }
    else if(event.target.value == "Association for Facilities Engineering"){
        test_test.appendChild(set_options("Certified Plant Engineer"));
        test_test.appendChild(set_options("Certified Professional Maintenance Manager"));
        test_test.appendChild(set_options("Certified Professional Maintenance Manager - Spanish"));
        test_test.appendChild(set_options("Certified Professional Supervisor"));
        test_test.appendChild(set_options("Certified Professional Supervisor - Spanish"));
    }
    else if(event.target.value == "Certified Fraud Examiner"){
        test_test.appendChild(set_options("2021 CFE Exam - Financial Transactions and Fraud Schemes"));
        test_test.appendChild(set_options("2021 CFE Exam - Fraud Prevention and Deterrence"));
        test_test.appendChild(set_options("2021 CFE Exam - Investigation"));
        test_test.appendChild(set_options("2021 CFE Exam - Law"));
        test_test.appendChild(set_options("2022 CFE Exam - Financial Transactions and Fraud Schemes"));
        test_test.appendChild(set_options("2022 CFE Exam - Fraud Prevention and Deterrence"));
        test_test.appendChild(set_options("2022 CFE Exam - Investigation"));
        test_test.appendChild(set_options("2022 CFE Exam - Law"));
        test_test.appendChild(set_options("CFE Exam- Financial Transactions and Fraud Schemes"));
        test_test.appendChild(set_options("CFE Exam- Fraud Prevention and Deterrence"));
        test_test.appendChild(set_options("CFE Exam- Investigation"));
        test_test.appendChild(set_options("CFE Exam- Law"));
    }
    else if(event.target.value == "Am Institute of Professional Bookkeepers"){
        test_test.appendChild(set_options("ADJUSTMENTS AND ERROR CORRECTION"));
        test_test.appendChild(set_options("ADJUSTMENTS RETEST"));
        test_test.appendChild(set_options("DEPRECIATION RETEST"));
        test_test.appendChild(set_options("Discontinued-INVENTROY"));
        test_test.appendChild(set_options("ERROR CORRECTION RETEST"));
        test_test.appendChild(set_options("PAYROLL AND DEPRECIATION"));
        test_test.appendChild(set_options("PAYROLL RETEST"));

    }
    else if(event.target.value == "Am Institute of Professional Bookkeepers - Prepaid Students"){
        test_test.appendChild(set_options("ADJUSTMENTS AND ERROR CORRECTION"));
        test_test.appendChild(set_options("Adjustments Retest"));
        test_test.appendChild(set_options("Depreciation Retest"));
        test_test.appendChild(set_options("Discontinued-INVENTROY"));
        test_test.appendChild(set_options("Error Correction Retest"));
        test_test.appendChild(set_options("PAYROLL AND DEPRECIATION"));
        test_test.appendChild(set_options("Payroll Retest"));
    }
    else if(event.target.value == "Association of Workplace Investigators"){
        test_test.appendChild(set_options("Analysis and Report Writiing Assessment"));
        test_test.appendChild(set_options("Knowledge Test"));
        test_test.appendChild(set_options("Knowledge Test & Analysis and Report Writiing Assessment"));
    }
    else if(event.target.value == "Prometric Test Drive - AWI"){
        test_test.appendChild(set_options("Prometric Test Driver"));
    }
    else if(event.target.value == "International Student Admissions Test"){
        test_test.appendChild(set_options("ISAT"));
        test_test.appendChild(set_options("ISATR"));
    }
// *********************************************************************************
    else if(event.target.value == "Bahrain National Health Regulation Authority"){
        test_test.appendChild(set_options("Anastasia Tech"));
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Bahrain Dental Licensure Examination"));
        test_test.appendChild(set_options("Bahrain Medical Licensure Examination"));
        test_test.appendChild(set_options("Bahrain Nursing Licensure Examination"));
        test_test.appendChild(set_options("Bahrain Pharmacy Licensure Examination"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Clinical Dietician"));
        test_test.appendChild(set_options("Clinical Psychology"));
        test_test.appendChild(set_options("Critical Care Medicine"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygiene"));
        test_test.appendChild(set_options("Dental Implantology Examination"));
        test_test.appendChild(set_options("Dermatology"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Dietetics"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endocrinology"));
        test_test.appendChild(set_options("Endodontics"));
        test_test.appendChild(set_options("Gastroenterology"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Hematology and Oncology"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Technician Diploma"));
        test_test.appendChild(set_options("Lab Technologist Bachelor"));
        test_test.appendChild(set_options("Midwifery"));
        test_test.appendChild(set_options("Neurology"));
        test_test.appendChild(set_options("Nuclear Medicine Technologist"));
        test_test.appendChild(set_options("Nutrition"));
        test_test.appendChild(set_options("Obstetrics and Gynecology"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Optometrist"));
        test_test.appendChild(set_options("Oral and Maxillofacial Surgery"));
        test_test.appendChild(set_options("Orthodontics"));
        test_test.appendChild(set_options("Orthopedic Surgery"));
        test_test.appendChild(set_options("Otorhinolaryngology"));
        test_test.appendChild(set_options("Pediatric Dentistry"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Pharmacy Tech"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Prosthodontics"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Radiographer (Technologist)"));
        test_test.appendChild(set_options("Radiology (Technician)"));
        test_test.appendChild(set_options("Respiratory Care Licensure Examination"));
    }
    else if(event.target.value == "Veterinary Board Examination"){
        test_test.appendChild(set_options("Member of the College of Veterinary Surgeons"));
    }
    else if(event.target.value == "Board for Global EHS Credentialing"){
        test_test.appendChild(set_options("CERTIFIED INDUSTRIAL HYGIENIST"));
    }
    else if(event.target.value == "Board Of Pharmacy Specialities Test  Drive"){
        test_test.appendChild(set_options("BPS Test Drive"));
    }
    else if(event.target.value == "Board of Pharmacy Specialties"){
        test_test.appendChild(set_options("BOARD CERTIFIED SOLID ORGAN TRANSPLANTATION PHARMACY"));
        test_test.appendChild(set_options("Board Certified Ambulatory Care Pharmacist"));
        test_test.appendChild(set_options("Board Certified Ambulatory Care Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Cardiology Pharmacist"));
        test_test.appendChild(set_options("Board Certified Critical Care Pharmacist"));
        test_test.appendChild(set_options("Board Certified Critical Care Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Emergency Medicine Pharmacist"));
        test_test.appendChild(set_options("Board Certified Geriatric Pharmacist"));
        test_test.appendChild(set_options("Board Certified Geriatric Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Infectious Diseases Pharmacist"));
        test_test.appendChild(set_options("Board Certified Nuclear Pharmacist"));
        test_test.appendChild(set_options("Board Certified Nuclear Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Nutrition Support Pharmacist"));
        test_test.appendChild(set_options("Board Certified Nutrition Support Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Oncology Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Oncology Pharmacist"));
        test_test.appendChild(set_options("Board Certified Pediatric Pharmacy Specialist"));
        test_test.appendChild(set_options("Board Certified Pediatric Pharmacy Specialist Recert"));
        test_test.appendChild(set_options("Board Certified Pharmacotherapy Specialist"));
        test_test.appendChild(set_options("Board Certified Pharmacotherapy Specialist Recertification"));
        test_test.appendChild(set_options("Board Certified Psychiatric Pharmacist"));
        test_test.appendChild(set_options("Board Certified Psychiatric Pharmacist Recertification"));
        test_test.appendChild(set_options("Board Certified Sterile Compounding Pharmacist"));
    }
    else if(event.target.value == "CA Engineers, Land Surveyors and Geologists"){
        test_test.appendChild(set_options("California Civil Engineering Surveying Exam"));
        test_test.appendChild(set_options("California Civil Seismic Principles Examination"));
        test_test.appendChild(set_options("California Professional Land Surveyor Exam"));
        test_test.appendChild(set_options("California Specific Examination for Professional Geologists"));
        test_test.appendChild(set_options("California Traffic Engineer Exam"));
        test_test.appendChild(set_options("Certified Engineering Geologist"));
        test_test.appendChild(set_options("Certified Hydrogeologist"));
        test_test.appendChild(set_options("Civil Engineer Surveying Beta"));
        test_test.appendChild(set_options("Civil Seismic Principles Beta"));
        test_test.appendChild(set_options("Geotechnical Exam"));
        test_test.appendChild(set_options("PROFESSIONAL Geologist - Field Test"));
        test_test.appendChild(set_options("Professional Geophysicist"));
    }
    else if(event.target.value == "Canadian Alliance of Physiotherapy Regulators"){
        test_test.appendChild(set_options("L'examen de compétence en physiothérapie - Composante écrite"));
        test_test.appendChild(set_options("Physiotherapy Competency Examination - Written Component"));
    }
    else if(event.target.value == "Canadian Alliance of Physiotherapy Regulators Practice Exams"){
        test_test.appendChild(set_options("L'examen de préparation à la composante écrite de l'ECP"));
        test_test.appendChild(set_options("Written Component - Practice Exam"));
    }
     
    else if(event.target.value == "Canadian Society for Medical Laboratory Science"){
        test_test.appendChild(set_options("Clinical Genetics French"));
        test_test.appendChild(set_options("Clinical Gentics"));
        test_test.appendChild(set_options("Diagnostic Cytology"));
        test_test.appendChild(set_options("Diagnostic Cytology French"));
        test_test.appendChild(set_options("Medical Laboratory Assistant"));
        test_test.appendChild(set_options("Medical Laboratory Assistant- French"));
        test_test.appendChild(set_options("Medical Laboratory Technologist General"));
        test_test.appendChild(set_options("Medical Laboratory Technologist General French"));
    }
    else if(event.target.value == "CSMLS Exam Demo"){
        test_test.appendChild(set_options("CSMLS Exam Demo"));
    }
    else if(event.target.value == "Catalyst Futures Systematic Trading"){
        test_test.appendChild(set_options("Catalyst Futures Systematic Trading Level I "));
        test_test.appendChild(set_options("Catalyst Futures Systematic Trading Level II "));
    }
    else if(event.target.value == "CDCA-WREB-CITA"){
        test_test.appendChild(set_options("Dental Hygiene CSCE OSCE"));
        test_test.appendChild(set_options("Dental Hygiene Laws and Rules"));
        test_test.appendChild(set_options("Dental Laws and Rules"));
        test_test.appendChild(set_options("Dental Therapy OSCE"));
        test_test.appendChild(set_options("Diagnostic Skills Exam OSCE"));
        test_test.appendChild(set_options("LOCAL ANESTHESIA EXAM"));
        test_test.appendChild(set_options("NITROUS OXIDE EXAM"));
        test_test.appendChild(set_options("Sedation: Deep/GA"));
        test_test.appendChild(set_options("Sedation: Minimal"));
        test_test.appendChild(set_options("Sedation: Moderate"));
        test_test.appendChild(set_options("Sedation: Pediatric"));

    }
    else if(event.target.value == "CDISC Certification"){
        test_test.appendChild(set_options("Clinical Data Interchange Standards Consortium Tabulate"));
    }
    else if(event.target.value == "Certible"){
        test_test.appendChild(set_options("IREB CPRE Foundation Level - Chinese"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - Dutch"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - English"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - French"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - German"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - Portuguese"));
        test_test.appendChild(set_options("IREB CPRE Foundation Level - Spanish"));
        test_test.appendChild(set_options("IREB CPRE RE@Agile Primer - English"));
        test_test.appendChild(set_options("IREB CPRE RE@Agile Primer German"));
        test_test.appendChild(set_options("IREB CPRE-AL Elicitation and Consolidation"));
        test_test.appendChild(set_options("IREB CPRE-AL Elicitation and Consolidation - German"));
        test_test.appendChild(set_options("IREB CPRE-AL Requirements Management - German"));
        test_test.appendChild(set_options("IREB CPRE-AL Requirements Modeling - English"));
        test_test.appendChild(set_options("IREB CPRE-AL Requirements Modeling - German"));
        test_test.appendChild(set_options("UXQB CPUX Foundation Level - English"));
        test_test.appendChild(set_options("UXQB CPUX Foundation Level - French"));
        test_test.appendChild(set_options("UXQB CPUX Foundation Level - German"));
        test_test.appendChild(set_options("iSAQB CPSA Foundation Level - English"));
        test_test.appendChild(set_options("iSAQB CPSA Foundation Level - German"));
    }
    else if(event.target.value == "Certible Certification"){
        test_test.appendChild(set_options("Certible Certification Exam"));
        test_test.appendChild(set_options("Certible Certification Examination"));
    }
    else if(event.target.value == "Certified Customer Experience Professional"){
        test_test.appendChild(set_options("Certified Customer Experience Professional"));
    }
    else if(event.target.value == "Edinburgh Whisky Academy"){
        test_test.appendChild(set_options("Introduction to Whisky Certificate"));
    }
    else if(event.target.value == "Certification Board of Infection Control and Epidemiology"){
        test_test.appendChild(set_options("A-IPC BETA EXAM"));
        test_test.appendChild(set_options("Associates in Infection Prevention and Control"));
        test_test.appendChild(set_options("Certification In Infection Control"));
        test_test.appendChild(set_options("Certification in Infection Contol French"));
        test_test.appendChild(set_options("Long Term Care"));

    }
    else if(event.target.value == "Certification Commission for Healthcare Interpreters"){
        test_test.appendChild(set_options("Certified Healthcare Interpreter (CHI) - Arabic"));
        test_test.appendChild(set_options("Certified Healthcare Interpreter (CHI) - Mandarin"));
        test_test.appendChild(set_options("Certified Healthcare Interpreter (CHI) - Spanish"));
        test_test.appendChild(set_options("Core Certification Healthcare Interpreter"));
        test_test.appendChild(set_options("English-to-English Interpreting Examination"));
    }
    else if(event.target.value == "ETOE Interpret"){
        // test_test.appendChild(set_options("Certified Healthcare Interpreter (CHI) - Arabic"));
        // Testing Window: 30 DEC 2019 to 31 DEC 9999
        // test_test.appendChild(set_options("Certified Healthcare Interpreter (CHI) - Mandarin"));
        // test_test.appendChild(set_options("Certified Healthcare Interpreter (CHI) - Spanish"));
        // test_test.appendChild(set_options("ETOE Interpreting Skills Examination "));
    }
    else if(event.target.value == "Certified Financial Planner"){
        test_test.appendChild(set_options("CFP Testing Accommodations Exam"));
        test_test.appendChild(set_options("Certified Financial Planner"));
    }
    else if(event.target.value == "Certificate in Investment Performance Measurement (CIPM)"){
        test_test.appendChild(set_options("CIPM Level I"));
        test_test.appendChild(set_options("CIPM Level II"));
    }
    else if(event.target.value == "CFA Program"){
      test_test.appendChild(set_options("CFA Level I"));
      test_test.appendChild(set_options("CFA Level II"));
      test_test.appendChild(set_options("CFA Level III"));
    }
    else if(event.target.value == "ESG"){
        test_test.appendChild(set_options("Certificate in ESG Investing"));
    }

    else if(event.target.value == "ESG Investing TEST DRIVE"){
        test_test.appendChild(set_options("ESG Investing TEST DRIVE - This is not the real exam"));
    }
    else if(event.target.value == "Financial Data Professional"){
        test_test.appendChild(set_options("FDP Demo Exam"));
        test_test.appendChild(set_options("Financial Data Professional"));
    }
    else if(event.target.value == "Propel Client Success"){
        test_test.appendChild(set_options("Propel Client Success"));
    }
    else if(event.target.value == "CMT Association"){
        test_test.appendChild(set_options("Chartered Market Technician - Level I"));
        test_test.appendChild(set_options("Chartered Market Technician - Level II"));
        test_test.appendChild(set_options("Chartered Market Technician - Level III"));
    }
    else if(event.target.value == "American Board of Certification (CMT)"){
        test_test.appendChild(set_options("Dummy"));
        test_test.appendChild(set_options("Second exam name example ® PART 1"));
        test_test.appendChild(set_options("Test"));
    }
    else if(event.target.value == "Configuration Management Team"){
        test_test.appendChild(set_options("Electrocardiograph"));
        test_test.appendChild(set_options("Pediatric Surgery"));
        test_test.appendChild(set_options("Radiography Technician"));
        test_test.appendChild(set_options("Sterilization Health Assistant"));
        test_test.appendChild(set_options("Sterilization Specialist"));
    }
    else if(event.target.value == "College Board - AP Exams (India)"){
        test_test.appendChild(set_options("AP Art History"));
        test_test.appendChild(set_options("AP Biology"));
        test_test.appendChild(set_options("AP Calculus AB"));
        test_test.appendChild(set_options("AP Calculus BC"));
        test_test.appendChild(set_options("AP Chemistry"));
        test_test.appendChild(set_options("AP Comparative Government and Politics"));
        test_test.appendChild(set_options("AP Computer Science A"));
        test_test.appendChild(set_options("AP Computer Science Principles"));
        test_test.appendChild(set_options("AP English Language and Composition"));
        test_test.appendChild(set_options("AP English Literature and Composition"));
        test_test.appendChild(set_options("AP Environmental Science"));
        test_test.appendChild(set_options("AP European History"));
        test_test.appendChild(set_options("AP Human Geography"));
        test_test.appendChild(set_options("AP Macroeconomics"));
        test_test.appendChild(set_options("AP Microeconomics"));
        test_test.appendChild(set_options("AP Physics 1: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics 2: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics C: Electricity and Magnetism"));
        test_test.appendChild(set_options("AP Physics C: Mechanics"));
        test_test.appendChild(set_options("AP Psychology"));
        test_test.appendChild(set_options("AP Statistics"));
        test_test.appendChild(set_options("AP United States Government and Politics"));
        test_test.appendChild(set_options("AP United States History"));
        test_test.appendChild(set_options("AP World History: Modern"));
    }
    else if(event.target.value == "College Board - AP Exams (India) - Late"){
      test_test.appendChild(set_options("AP Art History"));
      test_test.appendChild(set_options("AP Biology"));
      test_test.appendChild(set_options("AP Calculus AB"));
      test_test.appendChild(set_options("AP Calculus BC"));
      test_test.appendChild(set_options("AP Chemistry"));
      test_test.appendChild(set_options("AP Comparative Government and Politics"));
      test_test.appendChild(set_options("AP Computer Science A"));
      test_test.appendChild(set_options("AP Computer Science Principles"));
      test_test.appendChild(set_options("AP English Language and Composition"));
      test_test.appendChild(set_options("AP English Literature and Composition"));
      test_test.appendChild(set_options("AP Environmental Science"));
      test_test.appendChild(set_options("AP European History"));
      test_test.appendChild(set_options("AP Human Geography"));
      test_test.appendChild(set_options("AP Macroeconomics"));
      test_test.appendChild(set_options("AP Microeconomics"));
      test_test.appendChild(set_options("AP Physics 1: Algebra-Based"));
      test_test.appendChild(set_options("AP Physics 2: Algebra-Based"));
      test_test.appendChild(set_options("AP Physics C: Electricity and Magnetism"));
      test_test.appendChild(set_options("AP Physics C: Mechanics"));
      test_test.appendChild(set_options("AP Psychology"));
      test_test.appendChild(set_options("AP Statistics"));
      test_test.appendChild(set_options("AP United States Government and Politics"));
      test_test.appendChild(set_options("AP United States History"));
      test_test.appendChild(set_options("AP World History: Modern"));
    }
    else if(event.target.value == "College Board - AP Exams (Singapore)"){
        test_test.appendChild(set_options("AP Art History"));
        test_test.appendChild(set_options("AP Biology"));
        test_test.appendChild(set_options("AP Calculus AB"));
        test_test.appendChild(set_options("AP Calculus BC"));
        test_test.appendChild(set_options("AP Chemistry"));
        test_test.appendChild(set_options("AP Comparative Government and Politics"));
        test_test.appendChild(set_options("AP Computer Science A"));
        test_test.appendChild(set_options("AP Computer Science Principles"));
        test_test.appendChild(set_options("AP English Language and Composition"));
        test_test.appendChild(set_options("AP English Literature and Composition"));
        test_test.appendChild(set_options("AP Environmental Science"));
        test_test.appendChild(set_options("AP European History"));
        test_test.appendChild(set_options("AP Human Geography"));
        test_test.appendChild(set_options("AP Macroeconomics"));
        test_test.appendChild(set_options("AP Microeconomics"));
        test_test.appendChild(set_options("AP Physics 1: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics 2: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics C: Electricity and Magnetism"));
        test_test.appendChild(set_options("AP Physics C: Mechanics"));
        test_test.appendChild(set_options("AP Psychology"));
        test_test.appendChild(set_options("AP Statistics"));
        test_test.appendChild(set_options("AP United States Government and Politics"));
        test_test.appendChild(set_options("AP United States History"));
        test_test.appendChild(set_options("AP World History: Modern"));
    }
    else if(event.target.value == "College Board - AP Exams (Singapore) - Late"){
        test_test.appendChild(set_options("AP Art History"));
        test_test.appendChild(set_options("AP Biology"));
        test_test.appendChild(set_options("AP Calculus AB"));
        test_test.appendChild(set_options("AP Calculus BC"));
        test_test.appendChild(set_options("AP Chemistry"));
        test_test.appendChild(set_options("AP Comparative Government and Politics"));
        test_test.appendChild(set_options("AP Computer Science A"));
        test_test.appendChild(set_options("AP Computer Science Principles"));
        test_test.appendChild(set_options("AP English Language and Composition"));
        test_test.appendChild(set_options("AP English Literature and Composition"));
        test_test.appendChild(set_options("AP Environmental Science"));
        test_test.appendChild(set_options("AP European History"));
        test_test.appendChild(set_options("AP Human Geography"));
        test_test.appendChild(set_options("AP Macroeconomics"));
        test_test.appendChild(set_options("AP Microeconomics"));
        test_test.appendChild(set_options("AP Physics 1: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics 2: Algebra-Based"));
        test_test.appendChild(set_options("AP Physics C: Electricity and Magnetism"));
        test_test.appendChild(set_options("AP Physics C: Mechanics"));
        test_test.appendChild(set_options("AP Psychology"));
        test_test.appendChild(set_options("AP Statistics"));
        test_test.appendChild(set_options("AP United States Government and Politics"));
        test_test.appendChild(set_options("AP United States History"));
        test_test.appendChild(set_options("AP World History: Modern"));
    }
    else if(event.target.value == "College of Family Physicians of Canada"){
        test_test.appendChild(set_options("Certification Examination in Family Medicine (English)"));
        test_test.appendChild(set_options("Examination of Added Competence in Emergency Medicine"));
        test_test.appendChild(set_options("L’Examen de compétence additionnelle en médecine d’urgence"));
        test_test.appendChild(set_options("L’examen de certification en médecine familiale"));
      }

    else if(event.target.value == "Remote Compatibility Check"){
        test_test.appendChild(set_options("Remote Proctoring Compatibility Check"));
        test_test.appendChild(set_options("Vérification de compatibilité de la surveillance à distance"));
      }
    else if(event.target.value == "COLLEGE OF PHARMACISTS OF BRITISH COLUMBIA"){
        test_test.appendChild(set_options("JURISPRUDENCE EXAM"));
      }
    else if(event.target.value == "Commission for Case Managers Certification"){
        test_test.appendChild(set_options("Certified Case Manager Examination"));
    }
    else if(event.target.value == "Confluent"){
        test_test.appendChild(set_options("Confluent Certified Administrator for Apache  Kafka"));
        test_test.appendChild(set_options("Confluent Certified Developer for Apache  Kafka"));
    }
    else if(event.target.value == "Connecticut Department of Public Health"){
        test_test.appendChild(set_options("Knowledge (Oral) Test"));
        test_test.appendChild(set_options("Knowledge (Written) Test"));
    }
    else if(event.target.value == "Construction Specifications Institute"){
        test_test.appendChild(set_options("Certified Construction Contract Administrator"));
        test_test.appendChild(set_options("Certified Construction Product Representative"));
        test_test.appendChild(set_options("Certified Construction Specifier"));
        test_test.appendChild(set_options("Construction Documents Technologist"));
    }
    else if(event.target.value == "Contractor Workforce Qualification Assurance Program"){
        test_test.appendChild(set_options("CWQAP Electrician"));
        test_test.appendChild(set_options("CWQAP HVAC Technician Exam"));
        test_test.appendChild(set_options("CWQAP Instrumentation Exam"));
        test_test.appendChild(set_options("CWQAP Machinist Exam"));
        test_test.appendChild(set_options("CWQAP Metals Fabricator Exam"));
        test_test.appendChild(set_options("CWQAP Metals Pipefitter Exam"));
    }
    else if(event.target.value == "Council of Interstate Testing Agencies"){
        test_test.appendChild(set_options("Computer Simulated Clinical Examination"));
        test_test.appendChild(set_options("Diagnostic Skills Exam"));
    }
    else if(event.target.value == "Council on Licensure, Enforcement and Regulation"){
        test_test.appendChild(set_options("NCIT Basic Exam"));
        test_test.appendChild(set_options("NCIT Specialized Exam"));
    }
    else if(event.target.value == "Department of Healthcare Professions - MOPH - State of Qatar"){
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Basic Paramedic"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Critical Care Medicine"));
        test_test.appendChild(set_options("DERMATOLOGY"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygienist"));
        test_test.appendChild(set_options("Dental Lab Technician"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Dietician Exam"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endocrinology"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("Gastroenterology"));
        test_test.appendChild(set_options("General Dentist"));
        test_test.appendChild(set_options("General Practitioner"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Technician"));
        test_test.appendChild(set_options("Lab Technologist"));
        test_test.appendChild(set_options("Neurosurgery"));
        test_test.appendChild(set_options("Obstetrics & Gynecology"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Orthopedic Surgery"));
        test_test.appendChild(set_options("Otorhinolaryngology"));
        test_test.appendChild(set_options("Paramedic"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Pediatrics Surgery"));
        test_test.appendChild(set_options("Pharmacist"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Radiology Technician"));
        test_test.appendChild(set_options("Radiology Technologist"));
        test_test.appendChild(set_options("Registered General Nurse"));
        test_test.appendChild(set_options("Registered Midwife"));
        test_test.appendChild(set_options("Sports Medicine"));
        test_test.appendChild(set_options("Urology"));
        test_test.appendChild(set_options("Vascular Surgery"));
    }
    else if(event.target.value == "Design-Build Institute of America"){
        test_test.appendChild(set_options("Designated Design-Build Professional Exam"));
    }
    else if(event.target.value == "College Student"){
        test_test.appendChild(set_options("A History of the Vietnam War"));
        test_test.appendChild(set_options("Art of the Western World"));
        test_test.appendChild(set_options("Astronomy"));
        test_test.appendChild(set_options("Business Ethics and Society"));
        test_test.appendChild(set_options("Business Mathematics"));
        test_test.appendChild(set_options("Computing & Information Technology"));
        test_test.appendChild(set_options("Criminal Justice"));
        test_test.appendChild(set_options("Environmental Science"));
        test_test.appendChild(set_options("Ethics in America"));
        test_test.appendChild(set_options("Ethics in Technology"));
        test_test.appendChild(set_options("Foundations of Education"));
        test_test.appendChild(set_options("Fundamentals of College Algebra"));
        test_test.appendChild(set_options("Fundamentals of Counseling"));
        test_test.appendChild(set_options("Fundamentals of Cybersecurity"));
        test_test.appendChild(set_options("General Anthropology"));
        test_test.appendChild(set_options("Health & Human Development"));
        test_test.appendChild(set_options("History of the Soviet Union"));
        test_test.appendChild(set_options("Human Resource Management"));
        test_test.appendChild(set_options("Introduction to Business"));
        test_test.appendChild(set_options("Introduction to Geography"));
        test_test.appendChild(set_options("Introduction to Geology"));
        test_test.appendChild(set_options("Introduction to Law Enforcement"));
        test_test.appendChild(set_options("Introduction to World Religions"));
        test_test.appendChild(set_options("Lifespan Development Psychology"));
        test_test.appendChild(set_options("Management Information Systems"));
        test_test.appendChild(set_options("Math for Liberal Arts"));
        test_test.appendChild(set_options("Money and Banking"));
        test_test.appendChild(set_options("Organizational Behavior"));
        test_test.appendChild(set_options("Personal Finance"));
        test_test.appendChild(set_options("Principals of Advanced English Composition"));
        test_test.appendChild(set_options("Principals of Statistics"));
        test_test.appendChild(set_options("Principles of Finance"));
        test_test.appendChild(set_options("Principles of Supervision"));
        test_test.appendChild(set_options("Substance Abuse"));
        test_test.appendChild(set_options("Technical Writing"));
        test_test.appendChild(set_options("The Civil War and Reconstruction"));
    }
    else if(event.target.value == "DANTES"){
        test_test.appendChild(set_options("A History of the Vietnam War"));
        test_test.appendChild(set_options("Art of the Western World"));
        test_test.appendChild(set_options("Astronomy"));
        test_test.appendChild(set_options("Business Ethics and Society"));
        test_test.appendChild(set_options("Business Mathematics"));
        test_test.appendChild(set_options("Computing & Information Technology"));
        test_test.appendChild(set_options("Criminal Justice"));
        test_test.appendChild(set_options("Environmental Science"));
        test_test.appendChild(set_options("Ethics in America"));
        test_test.appendChild(set_options("Ethics in Technology"));
        test_test.appendChild(set_options("Foundations of Education"));
        test_test.appendChild(set_options("Fundamentals of College Algebra"));
        test_test.appendChild(set_options("Fundamentals of Counseling"));
        test_test.appendChild(set_options("Fundamentals of Cybersecurity"));
        test_test.appendChild(set_options("General Anthropology"));
        test_test.appendChild(set_options("Health & Human Development"));
        test_test.appendChild(set_options("History of the Soviet Union"));
        test_test.appendChild(set_options("Human Resource Management"));
        test_test.appendChild(set_options("Introduction to Business"));
        test_test.appendChild(set_options("Introduction to Geography"));
        test_test.appendChild(set_options("Introduction to Geology"));
        test_test.appendChild(set_options("Introduction to Law Enforcement"));
        test_test.appendChild(set_options("Introduction to World Religions"));
        test_test.appendChild(set_options("Lifespan Development Psychology"));
        test_test.appendChild(set_options("Management Information Systems"));
        test_test.appendChild(set_options("Math for Liberal Arts"));
        test_test.appendChild(set_options("Money and Banking"));
        test_test.appendChild(set_options("Organizational Behavior"));
        test_test.appendChild(set_options("Personal Finance"));
        test_test.appendChild(set_options("Principals of Advanced English Composition"));
        test_test.appendChild(set_options("Principals of Statistics"));
        test_test.appendChild(set_options("Principles of Finance"));
        test_test.appendChild(set_options("Principles of Supervision"));
        test_test.appendChild(set_options("Substance Abuse"));
        test_test.appendChild(set_options("Technical Writing"));
        test_test.appendChild(set_options("The Civil War and Reconstruction"));
    }
    else if(event.target.value == "Dubai Health Authority"){
        test_test.appendChild(set_options("Aesthetic/Beauty Therapy"));
        test_test.appendChild(set_options("Anatomical Pathology"));
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Anesthesia Technician"));
        test_test.appendChild(set_options("Assistant Nurse"));
        test_test.appendChild(set_options("Audiology"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Cardiothoracic Surgery"));
        test_test.appendChild(set_options("Clinical Biochemistry"));
        test_test.appendChild(set_options("Clinical Biochemistry - Allied"));
        test_test.appendChild(set_options("Clinical pathology"));
        test_test.appendChild(set_options("Clinical psychology"));
        test_test.appendChild(set_options("Community Medicine"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygiene"));
        test_test.appendChild(set_options("Dental Lab Technician"));
        test_test.appendChild(set_options("Dermatologist"));
        test_test.appendChild(set_options("Dermatology Consultant"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Dietetics and Nutrition"));
        test_test.appendChild(set_options("Electrocardiograph"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endocrinology"));
        test_test.appendChild(set_options("Endodontic"));
        test_test.appendChild(set_options("Family Medicine Consultant"));
        test_test.appendChild(set_options("Family medicine"));
        test_test.appendChild(set_options("Forensic Medicine"));
        test_test.appendChild(set_options("Gastroenterology Doctor"));
        test_test.appendChild(set_options("General Dentistry"));
        test_test.appendChild(set_options("General Practice"));
        test_test.appendChild(set_options("Hematopathology"));
        test_test.appendChild(set_options("Implantology"));
        test_test.appendChild(set_options("Intensive Care"));
        test_test.appendChild(set_options("Internal Medicin"));
        test_test.appendChild(set_options("Internal Medicine Consultant"));
        test_test.appendChild(set_options("Lab Technician"));
        test_test.appendChild(set_options("Massage Therapy"));
        test_test.appendChild(set_options("Medical Laboratory Technology"));
        test_test.appendChild(set_options("Medical Microbiology"));
        test_test.appendChild(set_options("Medical Technology(Heamatology)"));
        test_test.appendChild(set_options("Microbiology technologist"));
        test_test.appendChild(set_options("Midwifery"));
        test_test.appendChild(set_options("Nephrology"));
        test_test.appendChild(set_options("Neurosurgery"));
        test_test.appendChild(set_options("Nurology"));
        test_test.appendChild(set_options("Nursing Exam"));
        test_test.appendChild(set_options("Obstetrics & Gynaecology"));
        test_test.appendChild(set_options("Occupational Therapist"));
        test_test.appendChild(set_options("Optometrist"));
        test_test.appendChild(set_options("Oral & Maxillofacial Surgery"));
        test_test.appendChild(set_options("Oral Surgery"));
        test_test.appendChild(set_options("Orthodontics"));
        test_test.appendChild(set_options("Otolaryngology"));
        test_test.appendChild(set_options("Pediatric Dentistry"));
        test_test.appendChild(set_options("Pediatric Surgery"));
        test_test.appendChild(set_options("Pediatrics Consultant"));
        test_test.appendChild(set_options("Perfusionist"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Pharmacist"));
        test_test.appendChild(set_options("Pharmacy Technician"));
        test_test.appendChild(set_options("Physical Medicine and Rehabilitation"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Physiotherapy Technician"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Prosthetics & Orthotics"));
        test_test.appendChild(set_options("Prosthodontics"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Radiographer"));
        test_test.appendChild(set_options("Radiography Technician"));
        test_test.appendChild(set_options("Radiologist"));
        test_test.appendChild(set_options("Renal Dialysis Technician"));
        test_test.appendChild(set_options("Respiratory Technician"));
        test_test.appendChild(set_options("Restorative Dentistry"));
        test_test.appendChild(set_options("Rheumatologist"));
        test_test.appendChild(set_options("Specialist General Surgery"));
        test_test.appendChild(set_options("Specialist Ophthalmology"));
        test_test.appendChild(set_options("Specialist Orthopedic Surgery"));
        test_test.appendChild(set_options("Specialist Pediatrics"));
        test_test.appendChild(set_options("Specialist Pulmonary Disease"));
        test_test.appendChild(set_options("Sport Medicine"));
        test_test.appendChild(set_options("Sterilization Health Assistant"));
        test_test.appendChild(set_options("Sterilization Technician"));
        test_test.appendChild(set_options("Urology"));
        test_test.appendChild(set_options("Vascular Surgery"));

    }
    else if(event.target.value == "Dubai Health Care City Authority"){
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("Assistant Pharmacist"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Clinical Pathology"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygienest"));
        test_test.appendChild(set_options("Dermatology"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endocrinology Exam"));
        test_test.appendChild(set_options("Endodontics"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("Gastroenterology"));
        test_test.appendChild(set_options("General Dentistry"));
        test_test.appendChild(set_options("General Medicine"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Intensive Care"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Medical Lab Technology"));
        test_test.appendChild(set_options("Medical Laboratory Technology assistant"));
        test_test.appendChild(set_options("Medical Microbiology"));
        test_test.appendChild(set_options("Midwifery"));
        test_test.appendChild(set_options("Nurse Assistant"));
        test_test.appendChild(set_options("Nurse licensing exam"));
        test_test.appendChild(set_options("Nutrition"));
        test_test.appendChild(set_options("Obstetrics & Gynecology"));
        test_test.appendChild(set_options("Occupational Therapy Specialist"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Oral Maxilliofacial Surgery"));
        test_test.appendChild(set_options("Orthodontics & Dentofacial Orthopedics"));
        test_test.appendChild(set_options("Orthopedic Surgery"));
        test_test.appendChild(set_options("Otolaryngology"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Pedodontics"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Pharmacy"));
        test_test.appendChild(set_options("Physical Therapy"));
        test_test.appendChild(set_options("Physical Therapy Assistant"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Prosthodontics"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Psychology"));
        test_test.appendChild(set_options("Pulmonology Medicine"));
        test_test.appendChild(set_options("Radiology Technologist"));
        test_test.appendChild(set_options("Registered Nurse"));
        test_test.appendChild(set_options("Respiratory Therapist"));
        test_test.appendChild(set_options("Rheumatology"));
        test_test.appendChild(set_options("Urology"));
    }else if(event.target.value == "ECOTEST Quality Certificates Issuing Services Program"){
        test_test.appendChild(set_options("Ecotest Pest Control Operator Test - Arabic"));
        test_test.appendChild(set_options("Ecotest Pest Control Operator Test - English"));
        test_test.appendChild(set_options("Ecotest Pest Control Supervisor Test - Arabic"));
        test_test.appendChild(set_options("Ecotest Pest Control Supervisor Test - English"));
    }
    else if(event.target.value == "Educational Records Bureau"){
        test_test.appendChild(set_options("ISEE Lower Level"));
        test_test.appendChild(set_options("ISEE Moddle Level"));
        test_test.appendChild(set_options("ISEE Upper Level"));
    }
    else if(event.target.value == "Food Managers Certification"){
        test_test.appendChild(set_options("Certified Food Manager Exam English"));
        test_test.appendChild(set_options("Certified Food Manager Exam Spanish"));
    }
    else if(event.target.value == "Elsevier"){
        test_test.appendChild(set_options("APN Adult Nurse Practitioner"));
        test_test.appendChild(set_options("APN Family Nurse Practitioner"));
        test_test.appendChild(set_options("APRN Exit Acute Care Exam"));
        test_test.appendChild(set_options("APRN Specialty Pathophysiology"));
        test_test.appendChild(set_options("APRN Specialty Pharmocotherapeutics"));
        test_test.appendChild(set_options("APRN Specialty Physical Assessment"));
        test_test.appendChild(set_options("Admission Assessment Grammar"));
        test_test.appendChild(set_options("Admission Assessment With Critical Thinking"));
        test_test.appendChild(set_options("Admissions Assessment"));
        test_test.appendChild(set_options("Custom 100 Question Exam"));
        test_test.appendChild(set_options("Custom 20 Question Exam"));
        test_test.appendChild(set_options("Custom 50 Question Exam"));
        test_test.appendChild(set_options("Custom 75 Question Exam"));
        test_test.appendChild(set_options("Developmental Dis Nursing Assoc Licensed Practical Nurse"));
        test_test.appendChild(set_options("Developmental Disabilities Nursing Assoc. Registered Nurse"));
        test_test.appendChild(set_options("HP Advanced EMT Exit Exam V1"));
        test_test.appendChild(set_options("HP Dental Assisting Exit Exam V1"));
        test_test.appendChild(set_options("HP Dental Hygiene Exit Exam V1"));
        test_test.appendChild(set_options("HP Dental Hygiene Exit Exam V2"));
        test_test.appendChild(set_options("HP Dental Hygiene Exit Exam V2"));
        test_test.appendChild(set_options("HP EMT Exit Exam V1"));
        test_test.appendChild(set_options("HP EMT Exit Exam V2"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam MBLEX V1"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam MBLEX V2"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam MBLEX V3"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam NCETMB  V1"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam NCETMB  V2"));
        test_test.appendChild(set_options("HP Massage Therapy Exit Exam NCETMB  V3"));
        test_test.appendChild(set_options("HP Medical Assisting Exit Exam V1"));
        test_test.appendChild(set_options("HP Medical Assisting Exit Exam V2"));
        test_test.appendChild(set_options("HP Respiratory Care Exit Exam V1"));
        test_test.appendChild(set_options("HP Veterinary Technology Exit Exam V1"));
        test_test.appendChild(set_options("Health Profession Admission Assessment Version 1"));
        test_test.appendChild(set_options("Health Profession Admission Assessment Version 2"));
        test_test.appendChild(set_options("Health Professions Paramedic"));
        test_test.appendChild(set_options("Health Professions Radiology"));
        test_test.appendChild(set_options("International RN Admission Assessment Version One"));
        test_test.appendChild(set_options("Medical Office Administration Exit Exam V1"));
        test_test.appendChild(set_options("PN Admission Assessment Version 1"));
        test_test.appendChild(set_options("PN Admission Assessment Version 2"));
        test_test.appendChild(set_options("PN Admission Assessment with Critical Thinking Version 1"));
        test_test.appendChild(set_options("PN Admission Assessment with Critical Thinking Version 2"));
        test_test.appendChild(set_options("PN Exit Exam Version 1"));
        test_test.appendChild(set_options("PN Exit Exam Version 2"));
        test_test.appendChild(set_options("PN Exit Exam Version 3"));
        test_test.appendChild(set_options("Practical Nurse Exit Exam"));
        test_test.appendChild(set_options("Practical Nursing Critical Thinking Test"));
        test_test.appendChild(set_options("Practical Nursing Fundamentals"));
        test_test.appendChild(set_options("Practical Nursing Maternity"));
        test_test.appendChild(set_options("Practical Nursing Maternity & Pediatric"));
        test_test.appendChild(set_options("Practical Nursing Med/Surg"));
        test_test.appendChild(set_options("Practical Nursing Pediatric"));
        test_test.appendChild(set_options("Practical Nursing Pharmacology"));
        test_test.appendChild(set_options("Practical Nursing Psy/Mental Health"));
        test_test.appendChild(set_options("RN Admission Assessment Version 1"));
        test_test.appendChild(set_options("RN Admission Assessment Version 2"));
        test_test.appendChild(set_options("RN Admission Assessment with Critical Thinking Version 1"));
        test_test.appendChild(set_options("RN Admission Assessment with Critical Thinking Version 2"));
        test_test.appendChild(set_options("RN Entrance EMS-ADN Exam"));
        test_test.appendChild(set_options("RN Exit Exam Version 1"));
        test_test.appendChild(set_options("RN Exit Exam Version 2"));
        test_test.appendChild(set_options("RN Exit Exam Version 3"));
        test_test.appendChild(set_options("RN Exit Exam Version 4"));
        test_test.appendChild(set_options("RN Exit Exam Version 5"));
        test_test.appendChild(set_options("RN Exit Exam Version 6"));
        test_test.appendChild(set_options("RN Exit Exam Version 7"));
        test_test.appendChild(set_options("Registered Nurse Exit Exam"));
        test_test.appendChild(set_options("Registered Nursing Biology Entrance Exam"));
        test_test.appendChild(set_options("Registered Nursing Community Health"));
        test_test.appendChild(set_options("Registered Nursing Critical Care"));
        test_test.appendChild(set_options("Registered Nursing Critical Thinking Test"));
        test_test.appendChild(set_options("Registered Nursing Fundamentals"));
        test_test.appendChild(set_options("Registered Nursing Gerontology"));
        test_test.appendChild(set_options("Registered Nursing Health Assessment"));
        test_test.appendChild(set_options("Registered Nursing Management"));
        test_test.appendChild(set_options("Registered Nursing Management/Community Health"));
        test_test.appendChild(set_options("Registered Nursing Maternity"));
        test_test.appendChild(set_options("Registered Nursing Maternity & Pediatric"));
        test_test.appendChild(set_options("Registered Nursing Med/Surg"));
        test_test.appendChild(set_options("Registered Nursing Nutritional"));
        test_test.appendChild(set_options("Registered Nursing PN-ADN"));
        test_test.appendChild(set_options("Registered Nursing Pathophysiology"));
        test_test.appendChild(set_options("Registered Nursing Pediatric"));
        test_test.appendChild(set_options("Registered Nursing Pharmacology"));
        test_test.appendChild(set_options("Registered Nursing Psy/Mental Health"));
        test_test.appendChild(set_options("Registered Nursing RN-BSN"));
        test_test.appendChild(set_options("Registered Nursing Research"));
    }
    else if(event.target.value == "GACE ParaProfessional"){
        test_test.appendChild(set_options("GACE ParaProfessional"));
    }
    else if(event.target.value == "ParaPro"){
        test_test.appendChild(set_options("ParaPro"));
    }
    else if(event.target.value == "389/21(AD6) - field of sustainable agriculture + rural devel"){
        test_test.appendChild(set_options("EPSO/AD/389/21"));
        test_test.appendChild(set_options("EPSO/AD/389/21"));
    }
    else if(event.target.value == "CAST JRC"){
        test_test.appendChild(set_options("COM/1/2015/GFIV"));
        test_test.appendChild(set_options("COM/1/2015/GFIV"));
        test_test.appendChild(set_options("COM/1/2015/GFIV"));
    }
    else if(event.target.value == "COM/AD/01/20 Internal Competition"){
        test_test.appendChild(set_options("COM/AD/01/20"));
        test_test.appendChild(set_options("COM/AD/01/20"));
    }
    else if(event.target.value == "COM/AD/02/21 Internal Competition AD5"){
        test_test.appendChild(set_options("COM/AD/02/21"));
        test_test.appendChild(set_options("COM/AD/02/21"));
        test_test.appendChild(set_options("COM/AD/02/21"));
    }
    else if(event.target.value == "COM/TA/AD/01-04/21 Translators"){
        test_test.appendChild(set_options("COM/TA/AD/01-04/21"));
        test_test.appendChild(set_options("COM/TA/AD/01-04/21"));
        test_test.appendChild(set_options("COM/TA/AD/01-04/21"));
        test_test.appendChild(set_options("COM/TA/AD/01-04/21"));
    }
    else if(event.target.value == "COM/TA/AD01-AD04/21"){
        test_test.appendChild(set_options("COM/TA/AD01-AD04/21"));
    }
    else if(event.target.value == "EPSO Certification Examination"){
        test_test.appendChild(set_options("Examen Écrit, E2, De La Procédure de Certification"));
        test_test.appendChild(set_options("Examen Écrit, E2, De La Procédure de Certification"));
        test_test.appendChild(set_options("Examen Écrit, E2, De La Procédure de Certification"));
        test_test.appendChild(set_options("Written Examination, E2, of Certification Procedure"));
        test_test.appendChild(set_options("Written Examination, E2, of Certification Procedure"));
        test_test.appendChild(set_options("Written Examination, E2, of Certification Procedure"));
    }
    else if(event.target.value == "EPSO/AD/375-379/20 Lawyer Linguists"){
        test_test.appendChild(set_options("EPSO/AD/375-379/20"));
        test_test.appendChild(set_options("EPSO/AD/375-379/20"));
        test_test.appendChild(set_options("EPSO/AD/375-379/20"));
    }
    else if(event.target.value == "EPSO/AD/375-379/20 Lawyer Linguists (AD7)"){
        test_test.appendChild(set_options("EPSO/AD/375-379/20"));
    }
    else if(event.target.value == "EPSO/AD/380/19"){
        test_test.appendChild(set_options("EPSO/AD/380/19"));
        test_test.appendChild(set_options("EPSO/AD/380/19"));
    }
    else if(event.target.value == "EPSO/AD/381/20"){
        test_test.appendChild(set_options("EPSO/AD/381/20"));
        test_test.appendChild(set_options("EPSO/AD/381/20"));
        test_test.appendChild(set_options("EPSO/AD/381/20"));
    }
    else if(event.target.value == "EPSO/AD/381/20 Administration in the field of European Law"){
        test_test.appendChild(set_options("EPSO/AD/381/20"));
        test_test.appendChild(set_options("EPSO/AD/381/20"));
    }
    else if(event.target.value == "EPSO/AD/382/20"){
        test_test.appendChild(set_options("EPSO/AD/382/20"));
        test_test.appendChild(set_options("EPSO/AD/382/20"));
    }
    else if(event.target.value == "EPSO/AD/382/20 EEAS"){
        test_test.appendChild(set_options("EPSO/AD/382/20"));
        test_test.appendChild(set_options("EPSO/AD/382/20"));
    }
    else if(event.target.value == "EPSO/AD/383-388/21 LL OT"){
        test_test.appendChild(set_options("EPSO/AD/383-388/21"));
    }
    else if(event.target.value == "EPSO/AD/383-388/21 LL OT Translation test"){
        test_test.appendChild(set_options("EPSO/AD/383/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/383/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/384/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/385/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/386/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/387/21 - Translation test"));
        test_test.appendChild(set_options("EPSO/AD/388/21 - Translation test"));
    }
    else if(event.target.value == "EPSO/AD/389/21 - field of sustainable agriculture + rural de"){
        test_test.appendChild(set_options("EPSO/AD/389/21"));
        test_test.appendChild(set_options("EPSO/AD/389/21"));
    }
    else if(event.target.value == "EPSO/AD/390/21 - field of chemicals policy Written Test"){
        test_test.appendChild(set_options("EPSO/AD/390/21"));
        test_test.appendChild(set_options("EPSO/AD/390/21"));
    }
    else if(event.target.value == "EPSO/AD/390/21 (AD6) - field of chemicals policy"){
        test_test.appendChild(set_options("EPSO/AD/390/21"));
        test_test.appendChild(set_options("EPSO/AD/390/21"));
    }
    else if(event.target.value == "EPSO/AD/391/21"){
        test_test.appendChild(set_options("EPSO/AD/391/21"));
        test_test.appendChild(set_options("EPSO/AD/391/21"));
    }
    else if(event.target.value == "EPSO/AD/392/21 - Administrators"){
        test_test.appendChild(set_options("EPSO/AD/392/21"));
        test_test.appendChild(set_options("EPSO/AD/392/21"));
    }
    else if(event.target.value == "EPSO/AD/392/21 - CO385"){
        test_test.appendChild(set_options("EPSO/AD/392/21"));
        test_test.appendChild(set_options("EPSO/AD/392/21"));
    }
    else if(event.target.value == "EPSO/AD/393/21 EDPS"){
        test_test.appendChild(set_options("EPSO/AD/393/21"));
        test_test.appendChild(set_options("EPSO/AD/393/21"));
    }
    else if(event.target.value == "EPSO/AD/393/21 European Data Protection Supervision (EDPS)"){
        test_test.appendChild(set_options("EPSO/AD/393/21"));
        test_test.appendChild(set_options("EPSO/AD/393/21"));
    }
    else if(event.target.value == "EPSO/AD/394-395/21"){
        test_test.appendChild(set_options("EPSO/AD/394-395/21"));
        test_test.appendChild(set_options("EPSO/AD/394-395/21"));
    }
    else if(event.target.value == "EPSO/AD/394-395/21 - Case Study"){
        test_test.appendChild(set_options("EPSO/AD/394-395/21"));
        test_test.appendChild(set_options("EPSO/AD/394-395/21"));
    }
    else if(event.target.value == "EPSO/AD/396/21"){
        test_test.appendChild(set_options("EPSO/AD/396/21"));
    }
    else if(event.target.value == "EPSO/AD/396/21 LL GA Translation"){
        test_test.appendChild(set_options("EPSO/AD/396/21 - Translation Test"));
    }
    else if(event.target.value == "EPSO/AD/397/21"){
        test_test.appendChild(set_options("EPSO/AD/397/21"));
    }
    else if(event.target.value == "EPSO/AD/398/22"){
        test_test.appendChild(set_options("EPSO/AD/398/22"));
        test_test.appendChild(set_options("EPSO/AD/398/22"));
    }
    else if(event.target.value == "EPSO/AD/399/22"){
        test_test.appendChild(set_options("EPSO/AD/399/22"));
        test_test.appendChild(set_options("EPSO/AD/399/22"));
    }
    else if(event.target.value == "EPSO/AST/148/21"){
        test_test.appendChild(set_options("EPSO/AST/148/21"));
    }
    else if(event.target.value == "EPSO/AST/149/21 Nuclear Inspectors"){
        test_test.appendChild(set_options("EPSO/AST/149/21"));
        test_test.appendChild(set_options("EPSO/AST/149/21"));
    }
    else if(event.target.value == "EPSO/AST/149/21 Nuclear Inspectors Case Study"){
        test_test.appendChild(set_options("EPSO/AST/149/21"));
        test_test.appendChild(set_options("EPSO/AST/149/21"));
    }
    else if(event.target.value == "EPSO/AST/150/21"){
        test_test.appendChild(set_options("EPSO/AST/150/21"));
        test_test.appendChild(set_options("EPSO/AST/150/21"));
    }
    else if(event.target.value == "EPSO/AST/151/22"){
        test_test.appendChild(set_options("EPSO/AST/151/22"));
        test_test.appendChild(set_options("EPSO/AST/151/22"));
    }
    else if(event.target.value == "EPSO/AST/152/22"){
        test_test.appendChild(set_options("EPSO/AST/152/22"));
        test_test.appendChild(set_options("EPSO/AST/152/22"));
    }
    else if(event.target.value == "EPSO/AST/152/22 FRT"){
        test_test.appendChild(set_options("EPSO/AST/152/22"));
    }
    else if(event.target.value == "EPSO/AST/153/22"){
        test_test.appendChild(set_options("EPSO/AST/153/22"));
        test_test.appendChild(set_options("EPSO/AST/153/22"));
    }
    else if(event.target.value == "EPSO/AST/154/22 (fields: 1-2)"){
        test_test.appendChild(set_options("EPSO/AST/154/22"));
    }
    else if(event.target.value == "EPSO/AST/154/22 (fields: 3-4-5-6)"){
        test_test.appendChild(set_options("EPSO/AST/154/22"));
    }
    else if(event.target.value == "EPSO/AST/155/22"){
        test_test.appendChild(set_options("EPSO/AST/154/22"));
        test_test.appendChild(set_options("EPSO/AST/154/22"));
    }
    else if(event.target.value == "EPSO/AST-SC/10/20"){
        test_test.appendChild(set_options("EPSO/AST-SC/10/20"));
        test_test.appendChild(set_options("EPSO/AST-SC/10/20"));
    }
    else if(event.target.value == "EPSO/AST-SC/11/21"){
        test_test.appendChild(set_options("EPSO/AST-SC/11/21"));
        test_test.appendChild(set_options("EPSO/AST-SC/11/21"));
    }
    else if(event.target.value == "Junior Professionals Programme"){
        test_test.appendChild(set_options("Junior Professionals Programme"));
        test_test.appendChild(set_options("Junior Professionals Programme"));
        test_test.appendChild(set_options("Junior Professionals Programme"));
    }
    else if(event.target.value == "Events Industry Council"){
        test_test.appendChild(set_options("Certified Meeting Professional"));
        test_test.appendChild(set_options("Certified Meeting Professional-Healthcare"));
    }
    else if(event.target.value == "Eversource Energy Service Company-Contractor Employees only"){
        test_test.appendChild(set_options("1 Hour Test Session"));
        test_test.appendChild(set_options("2 Hour Test Session"));
        test_test.appendChild(set_options("3 Hour Test Session"));
        test_test.appendChild(set_options("4 Hour Test Session"));
    }
    else if(event.target.value == "Eversource Energy Service Company-Eversource Employees only"){
        test_test.appendChild(set_options("1 Hour Test Session"));
        test_test.appendChild(set_options("2 Hour Test Session"));
        test_test.appendChild(set_options("3 Hour Test Session"));
        test_test.appendChild(set_options("4 Hour Test Session"));
    }
    else if(event.target.value == "Exam Master Corporation"){
        test_test.appendChild(set_options("Physician Assistant College Admission Test"));
    }
    else if(event.target.value == "F5 Networks"){
        test_test.appendChild(set_options("101-Application Delivery Fundamentals"));
        test_test.appendChild(set_options("201-TMOS Administration"));
        test_test.appendChild(set_options("202-Pre-Sales Fundamentals"));
        test_test.appendChild(set_options("301a-BIG-IP LTM Specialist: Architect, Setup and Deploy"));
        test_test.appendChild(set_options("301b-BIG-IP LTM Specialist: Maintain and Troublshoot"));
        test_test.appendChild(set_options("302-BIG-IP DNS Specialist"));
        test_test.appendChild(set_options("303-BIG-IP ASM Specialist"));
        test_test.appendChild(set_options("304-BIG_IP APM Specialist"));
        test_test.appendChild(set_options("401-Security Solutions"));
        test_test.appendChild(set_options("402-Cloud Solutions"));
    }
    else if(event.target.value == "FINRA"){
        test_test.appendChild(set_options(""));
    }
    else if(event.target.value == "FINRA RP"){
        test_test.appendChild(set_options("1-24 General Securities Principal Examination"));
        test_test.appendChild(set_options("Direct Participation Programs Rep"));
        test_test.appendChild(set_options("Financial and Operations Principal Exam"));
        test_test.appendChild(set_options("General Securities Principal Exam - Sales Supervisor"));
        test_test.appendChild(set_options("General Securities Sales Supervisor - General"));
        test_test.appendChild(set_options("Investment Banking Rep. Exam"));
        test_test.appendChild(set_options("Investment Company and Variable Contracts Products Principal"));
        test_test.appendChild(set_options("Municipal Advisor Principal"));
        test_test.appendChild(set_options("Municipal Advisor Representative Examination"));
        test_test.appendChild(set_options("Online Demo Exam"));
        test_test.appendChild(set_options("Operations Professional Exam"));
        test_test.appendChild(set_options("Research Analyst Exam - Part I - Analysis"));
        test_test.appendChild(set_options("Research Analyst Exam - Part II - Regulatory"));
        test_test.appendChild(set_options("SERIES 4 - THE REGISTERED OPTIONS PRINCIPAL EXAMINATION"));
        test_test.appendChild(set_options("Securities Industry Essentials (SIE)"));
        test_test.appendChild(set_options("Securities Trader"));
        test_test.appendChild(set_options("Series 06 - Investment Co./Variable Contracts Rep (S6TO)"));
        test_test.appendChild(set_options("Series 07 - General Securities Rep (S7TO)"));
        test_test.appendChild(set_options("Series 09 - General Securities Sales Supervisor/Options (S9)"));
        test_test.appendChild(set_options("Series 161 - Supervisory Analyst Part I Exam (S161)"));
        test_test.appendChild(set_options("Series 162 - Supervisory Analyst Part II Exam (S162)"));
        test_test.appendChild(set_options("Series 3 - National Commodity Futures Examination"));
        test_test.appendChild(set_options("Series 30 - NFA Branch Manager Examination"));
        test_test.appendChild(set_options("Series 31 - Futures Managed Funds Examination"));
        test_test.appendChild(set_options("Series 32 - Limited Futures Exam - Regulations"));
        test_test.appendChild(set_options("Series 34 - Retail Off-Exchange Forex Examination"));
        test_test.appendChild(set_options("Series 63 - Uniform Securities Agent State Law Exam (S63)"));
        test_test.appendChild(set_options("Series 82 - Private Securities Offerings Rep"));
        test_test.appendChild(set_options("UNIFORM COMBINED STATE LAW EXAMINATION"));
        test_test.appendChild(set_options("UNIFORM INVESTMENT ADVISORS LAW EXAMINATION"));
    }
    else if(event.target.value == "NMLS RP"){
        test_test.appendChild(set_options("SAFE MLO National Test"));
    }
    else if(event.target.value == "Federation of State Boards of Physical Therapy"){
        test_test.appendChild(set_options("ALABAMA JURISPRUDENCE EXAM"));
        test_test.appendChild(set_options("ARIZONA JURISPRUDENCE EXAM"));
        test_test.appendChild(set_options("California Jurisprudence Examination"));
        test_test.appendChild(set_options("District of Columbia Jurisprudence Examination"));
        test_test.appendChild(set_options("Florida Jurisprudence Examination"));
        test_test.appendChild(set_options("GEORGIA LAW EXAM"));
        test_test.appendChild(set_options("Nebraska Jurisprudence Examination"));
        test_test.appendChild(set_options("OHIO LAW EXAM"));
        test_test.appendChild(set_options("PHYSICAL THERAPIST"));
        test_test.appendChild(set_options("PHYSICAL THERAPIST ASSISTANT"));
        test_test.appendChild(set_options("PT Scenario Pilot Exam"));
        test_test.appendChild(set_options("PTA Scenario Pilot Exam"));
    }
    else if(event.target.value == "GCC Electrical Testing Laboratory"){
        test_test.appendChild(set_options("Certified Power System Operator"));
    }
    else if(event.target.value == "GISI Professional Qualification"){
        test_test.appendChild(set_options("Corporate Finance"));
        test_test.appendChild(set_options("Investment Analysis"));
        test_test.appendChild(set_options("Risk Management"));
        test_test.appendChild(set_options("Security Trading"));
        test_test.appendChild(set_options("Wealth and Portfolio Management"));
    }
    else if(event.target.value == "Chartered Fintech Professional"){
        test_test.appendChild(set_options("Level 1A"));
        test_test.appendChild(set_options("Level 1AB Foundation"));
        test_test.appendChild(set_options("Level 1B"));
        test_test.appendChild(set_options("Level 2A"));
        test_test.appendChild(set_options("Level 2B"));
    }
    else if(event.target.value == "GBCI Test Drive"){
        test_test.appendChild(set_options("GBCI Test Drive Exam"));
    }
    else if(event.target.value == "Green Business Certification lnc"){
        test_test.appendChild(set_options("LEED AP Building Design & Construction Combined"));
        test_test.appendChild(set_options("LEED AP Building Design & Construction Stand Alone"));
        test_test.appendChild(set_options("LEED AP Homes Combined"));
        test_test.appendChild(set_options("LEED AP Homes Stand Alone"));
        test_test.appendChild(set_options("LEED AP Interior Design & Construction Combined"));
        test_test.appendChild(set_options("LEED AP Interior Design & Construction Stand Alone"));
        test_test.appendChild(set_options("LEED AP Neighborhood Development Combined"));
        test_test.appendChild(set_options("LEED AP Neighborhood Development Stand Alone"));
        test_test.appendChild(set_options("LEED AP Operations & Maintenance Combined"));
        test_test.appendChild(set_options("LEED AP Operations + Maintenance Stand Alone"));
        test_test.appendChild(set_options("LEED Green Associate"));
        test_test.appendChild(set_options("LEED Project Reviewer"));
        test_test.appendChild(set_options("SITES Accredited Professional (SITES AP)"));
        test_test.appendChild(set_options("Sustainability Excellence Associate"));
        test_test.appendChild(set_options("Sustainability Excellence Professional"));
        test_test.appendChild(set_options("Urban Greenhouse Gas Inventory Specialist"));
    }
    else if(event.target.value == "Gulf Organisation for Research & Development"){
        test_test.appendChild(set_options("Global Sustainability Assessment System"));
    }
    
    else if(event.target.value == "Healthcare Sterile Processing Association (Formerly IAHCSMM)"){
        test_test.appendChild(set_options("Certified Central Service Vendor Partner"));
        test_test.appendChild(set_options("Certified Endoscope Reprocessor"));
        test_test.appendChild(set_options("Certified Healthcare Leadership"));
        test_test.appendChild(set_options("Certified Instrument Specialist"));
        test_test.appendChild(set_options("Certified Registered Central Service Technician"));
    }
    else if(event.target.value == "HelloCode Master Certificate"){
        test_test.appendChild(set_options("HelloCode Python Advanced"));
        test_test.appendChild(set_options("HelloCode Python Basic"));
        test_test.appendChild(set_options("HelloCode Python Intermediate"));
        test_test.appendChild(set_options("HelloCode SMOOTHY Advanced"));
        test_test.appendChild(set_options("HelloCode SMOOTHY Basic"));
        test_test.appendChild(set_options("HelloCode SMOOTHY Intermediate"));
        test_test.appendChild(set_options("HelloCode Web Advanced"));
        test_test.appendChild(set_options("HelloCode Web Basic"));
        test_test.appendChild(set_options("HelloCode Web Intermediate"));
    }
    else if(event.target.value == "Contractor Work Permit Receiver Prerequisite"){
        test_test.appendChild(set_options("Contractor Work Permit Receiver Prerequisite"));
    }
    else if(event.target.value == "Human Resources Professional Association"){
        test_test.appendChild(set_options("CHRL Employment Law Exam"));
        test_test.appendChild(set_options("CHRL Knowledge Exam"));
        test_test.appendChild(set_options("CHRP Employment Law Exam"));
        test_test.appendChild(set_options("CHRP Knowledge Exam"));
        test_test.appendChild(set_options("Examen des connaissances du conseiller en RH agréé"));
    }
    else if(event.target.value == "HydraFacial Connect Certification"){
        test_test.appendChild(set_options("HydraFacial Connect Certification Expert Level 2 Exam"));
        test_test.appendChild(set_options("HydraFacial Connect Certification Professional Level 1 Exam"));
    }



    

    
    


    
    
    else if(event.target.value == "SCHS Promotion Exams"){
        test_test.appendChild(set_options("Obstetrics and Gynecology"));
        test_test.appendChild(set_options("Obstetrics and Gynecology"));
    }else if(event.target.value == "Secuencias de cursos verificados de ABA Espana"){
        test_test.appendChild(set_options("Examen Final de ABA Espana"));
    }else if(event.target.value == "Sharjah Health Authority"){
        test_test.appendChild(set_options("Acupuncture Practitioner"));
        test_test.appendChild(set_options("Ayurveda Massage Therapist"));
        test_test.appendChild(set_options("Ayurveda Practitioner"));
        test_test.appendChild(set_options("Biochemistry Exam"));
        test_test.appendChild(set_options("Chinese Massage Therapist"));
        test_test.appendChild(set_options("Chiropractor Practitioner"));
        test_test.appendChild(set_options("Cupping (Hijama) Therapist"));
        test_test.appendChild(set_options("Cupping (Hijama) Therapist (Arabic)"));
        test_test.appendChild(set_options("Dermatology"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("General Dentist"));
        test_test.appendChild(set_options("General practitioner"));
        test_test.appendChild(set_options("Hematology Exam"));
        test_test.appendChild(set_options("Herbal Medicine/ Oriental Medicine"));
        test_test.appendChild(set_options("Homeopathy"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Specialist"));
        test_test.appendChild(set_options("Lab Technician"));
        test_test.appendChild(set_options("Microbiology technologist"));
        test_test.appendChild(set_options("Naturopathy"));
        test_test.appendChild(set_options("Nurse Exam"));
        test_test.appendChild(set_options("Obstetrics & Gynecology"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Orthopedics"));
        test_test.appendChild(set_options("Osteopathy"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Pharmacist"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Radiographer Exam"));
        test_test.appendChild(set_options("Registered  Midwife"));
        test_test.appendChild(set_options("Traditional Chinese Medicine"));
        test_test.appendChild(set_options("Unani Practitioner"));
    }else if(event.target.value == "Association of Clinical Documentation Integrity Specialists"){
        test_test.appendChild(set_options("Certified Clinical Documentation Specialist"));
        test_test.appendChild(set_options("Certified Clinical Documentation Specialist-Outpatient"));
    }else if(event.target.value == "Association of Home Care Coding & Compliance"){
        test_test.appendChild(set_options("Home Care Clinical Specialist-OASIS"));
        test_test.appendChild(set_options("Home Care Coding Specialist-Diagnosis"));
        test_test.appendChild(set_options("Home Care Coding Specialist-Hospice"));
    }else if(event.target.value == "National Association of Healthcare Revenue Integrity"){
        test_test.appendChild(set_options("Certification in Healthcare Revenue Integrity"));
    }else if(event.target.value == "SOA"){
        test_test.appendChild(set_options("Advanced Long-Term Actuarial Mathematics"));
        test_test.appendChild(set_options("Advanced Short-Term Actuarial Mathematics"));
        test_test.appendChild(set_options("Advanced Topics in General Insurance Exam"));
        test_test.appendChild(set_options("ERM Exam - General Corporate"));
        test_test.appendChild(set_options("ERM Exam - General Insurance"));
        test_test.appendChild(set_options("ERM Exam - Group and Health"));
        test_test.appendChild(set_options("ERM Exam - Individual Life and Annuities"));
        test_test.appendChild(set_options("ERM Exam Investment"));
        test_test.appendChild(set_options("ERM Exam Retirement"));
        test_test.appendChild(set_options("Enrolled Actuaries Basic Examination"));
        test_test.appendChild(set_options("Financial Mathematics: English or French/Canada"));
        test_test.appendChild(set_options("Financial Mathematics: English, U.S./Intl"));
        test_test.appendChild(set_options("Financial and Regulatory Environment Exam, U.S."));
        test_test.appendChild(set_options("Foundations of CFE Exam"));
        test_test.appendChild(set_options("Fundamentals of Actuarial Mathematics"));
        test_test.appendChild(set_options("Fundamentals of Actuarial Mathematics - Long Term"));
        test_test.appendChild(set_options("Fundamentals of Actuarial Mathematics - Short Term"));
        test_test.appendChild(set_options("GH Design and Pricing"));
        test_test.appendChild(set_options("GH Finance and Valuation Exam - Canada"));
        test_test.appendChild(set_options("GH Finance and Valuation Exam - U.S."));
        test_test.appendChild(set_options("Group and Health Specialty Exam"));
        test_test.appendChild(set_options("ILA Life ALM and Modeling Exam"));
        test_test.appendChild(set_options("ILA Life Financial Management Exam, Canada"));
        test_test.appendChild(set_options("ILA Life Financial Management Exam, U.S."));
        test_test.appendChild(set_options("ILA Life Product Management Exam"));
        test_test.appendChild(set_options("Investment & Financial Markets: English or French/Canada"));
        test_test.appendChild(set_options("Investment & Financial Markets: English, U.S./Intl"));
        test_test.appendChild(set_options("Pension EA-2, Segment F Examination"));
        test_test.appendChild(set_options("Pension EA-2, Segment L Examination"));
        test_test.appendChild(set_options("Predictive Analytics: English or French/Canada"));
        test_test.appendChild(set_options("Predictive Analytics: English, U.S./Intl"));
        test_test.appendChild(set_options("Probability: English or French/Canada"));
        test_test.appendChild(set_options("Probability: English, U.S./Intl"));
        test_test.appendChild(set_options("QFI Investment Risk Management Exam"));
        test_test.appendChild(set_options("QFI Portfolio Management Exam"));
        test_test.appendChild(set_options("QFI Quantitative Finance Exam"));
        test_test.appendChild(set_options("Ratemaking & Reserving Exam"));
        test_test.appendChild(set_options("Retirement Design & Accounting Exam, Canada"));
        test_test.appendChild(set_options("Retirement Design & Accounting Exam, U.S."));
        test_test.appendChild(set_options("Retirement Funding & Regulation Exam, Canada"));
        test_test.appendChild(set_options("Retirement Plan Investment and Risk Management Exam"));
        test_test.appendChild(set_options("Statistics for Risk Modeling: English or French/Canada"));
        test_test.appendChild(set_options("Statistics for Risk Modeling: English, U.S./Intl"));
        test_test.appendChild(set_options("Strategic Decision-Making Exam"));
    }else if(event.target.value == "Society for Human Resource Management"){
        test_test.appendChild(set_options("SHRM Certified Professional (in the US)"));
        test_test.appendChild(set_options("SHRM Certified Professional (outside the US)"));
        test_test.appendChild(set_options("SHRM Certified Professional In Person Only"));
        test_test.appendChild(set_options("SHRM Senior Certified Professional (in the US)"));
        test_test.appendChild(set_options("SHRM Senior Certified Professional (outside the US)"));
        test_test.appendChild(set_options("SHRM Senior Certified Professional In Person Only"));
    }else if(event.target.value == "Society for Worldwide Interbank Financial Telecommunication"){
        test_test.appendChild(set_options("Alliance Integration Platform Certification"));
        test_test.appendChild(set_options("SWIFT On-Boarding"));
        test_test.appendChild(set_options("SWIFTNet Connectivity"));
        test_test.appendChild(set_options("SWIFTNet Messaging"));
    }else if(event.target.value == "SSAT by The Enrollment Management Association"){
        test_test.appendChild(set_options("SSAT Middle Grades"));
        test_test.appendChild(set_options("SSAT Upper Grades"));
    }else if(event.target.value == "ELIGIBILITY EXAMS"){
        test_test.appendChild(set_options("No FEES"));
    }else if(event.target.value == "NON-ELIG"){
        test_test.appendChild(set_options("FEES"));
        test_test.appendChild(set_options("No FEES"));
    }else if(event.target.value == "VOUCHER_EXAM"){
        test_test.appendChild(set_options("VOUCHER_EXAM"));
    }else if(event.target.value == "Abu Dhabi Department of Community Development"){
        test_test.appendChild(set_options("Counseling Psychology"));
        test_test.appendChild(set_options("Counseling Psychology (Arabic)"));
        test_test.appendChild(set_options("Counselling in Social care"));
        test_test.appendChild(set_options("Counselling in Social care Arabic"));
        test_test.appendChild(set_options("Educational/Academic Psychology"));
        test_test.appendChild(set_options("Educational/Academic Psychology (Arabic)"));
        test_test.appendChild(set_options("Forensic Psychology"));
        test_test.appendChild(set_options("Forensic Psychology (Arabic)"));
        test_test.appendChild(set_options("Marriage & Family Psychology"));
        test_test.appendChild(set_options("Marriage & Family Psychology (Arabic)"));
        test_test.appendChild(set_options("Psychologist in Social care"));
        test_test.appendChild(set_options("Psychologist in Social care (Arabic)"));
        test_test.appendChild(set_options("Psychotherapy"));
        test_test.appendChild(set_options("Psychotherapy (Arabic)"));
        test_test.appendChild(set_options("School Psychology"));
        test_test.appendChild(set_options("School Psychology (Arabic)"));
        test_test.appendChild(set_options("Social Worker"));
        test_test.appendChild(set_options("Social Worker (Arabic)"));
    }else if(event.target.value == "UAE Ministry of Health"){
        test_test.appendChild(set_options("Anatomical Pathology"));
        test_test.appendChild(set_options("Anesthesia"));
        test_test.appendChild(set_options("BIOMEDICAL MEDICANE"));
        test_test.appendChild(set_options("Biochemistry Technician"));
        test_test.appendChild(set_options("Biomedical Technology Specialist"));
        test_test.appendChild(set_options("CARDIAC PROFUSION"));
        test_test.appendChild(set_options("Cardiology"));
        test_test.appendChild(set_options("Cardiothoracic Surgery"));
        test_test.appendChild(set_options("Clinical Nutrition"));
        test_test.appendChild(set_options("Clinical Pathology"));
        test_test.appendChild(set_options("Clinical Psychology"));
        test_test.appendChild(set_options("Community Medicine"));
        test_test.appendChild(set_options("Dental Assistant"));
        test_test.appendChild(set_options("Dental Hygiene"));
        test_test.appendChild(set_options("Dental Hygiene Tech"));
        test_test.appendChild(set_options("Dental Lab Tech"));
        test_test.appendChild(set_options("Dental Lab Technologist"));
        test_test.appendChild(set_options("Dermatologist"));
        test_test.appendChild(set_options("Diagnostic Radiology"));
        test_test.appendChild(set_options("Electrocardiography"));
        test_test.appendChild(set_options("Emergency Med Technician"));
        test_test.appendChild(set_options("Emergency Medicine"));
        test_test.appendChild(set_options("Endodontic"));
        test_test.appendChild(set_options("Family Medicine"));
        test_test.appendChild(set_options("Forensic Medicine"));
        test_test.appendChild(set_options("Gastroenterology Doctor"));
        test_test.appendChild(set_options("General Dentistry"));
        test_test.appendChild(set_options("General Practice"));
        test_test.appendChild(set_options("General Surgery"));
        test_test.appendChild(set_options("Healthcare Assistant Qualifying Exam"));
        test_test.appendChild(set_options("Implant Dentistry"));
        test_test.appendChild(set_options("Intensive Care"));
        test_test.appendChild(set_options("Internal Medicine"));
        test_test.appendChild(set_options("Lab Technologist"));
        test_test.appendChild(set_options("Medical Lab Technician"));
        test_test.appendChild(set_options("Medical Microbiology"));
        test_test.appendChild(set_options("Medical Record Arabic"));
        test_test.appendChild(set_options("Microbiology"));
        test_test.appendChild(set_options("Microbiology Technician Exam"));
        test_test.appendChild(set_options("MidWifery"));
        test_test.appendChild(set_options("MidWifery"));
        test_test.appendChild(set_options("Midwife Assistant"));
        test_test.appendChild(set_options("Nephrology"));
        test_test.appendChild(set_options("Neurosurgery"));
        test_test.appendChild(set_options("Nurse Assistance"));
        test_test.appendChild(set_options("Obstetrics & Gynaecology"));
        test_test.appendChild(set_options("Occupational Therapist"));
        test_test.appendChild(set_options("Occupational Therapy Technician"));
        test_test.appendChild(set_options("Ophthalmology"));
        test_test.appendChild(set_options("Oral & Maxillofacial Surgery"));
        test_test.appendChild(set_options("Orthodontics"));
        test_test.appendChild(set_options("Orthopedics"));
        test_test.appendChild(set_options("Orthotics and Prosthetic Technician"));
        test_test.appendChild(set_options("Otolaryngology"));
        test_test.appendChild(set_options("Pediatrics"));
        test_test.appendChild(set_options("Pedodontics"));
        test_test.appendChild(set_options("Periodontics"));
        test_test.appendChild(set_options("Pharmacist"));
        test_test.appendChild(set_options("Pharmacy Tech"));
        test_test.appendChild(set_options("Physical Medicine and Rehabilitation"));
        test_test.appendChild(set_options("Physical Therapy Assistant"));
        test_test.appendChild(set_options("Physiotherapist"));
        test_test.appendChild(set_options("Plastic Surgery"));
        test_test.appendChild(set_options("Prosthodontics"));
        test_test.appendChild(set_options("Psychiatry"));
        test_test.appendChild(set_options("Pulmonology"));
        test_test.appendChild(set_options("Radiographer"));
        test_test.appendChild(set_options("Radiology"));
        test_test.appendChild(set_options("Radiology Tech"));
        test_test.appendChild(set_options("Registered Nurse"));
        test_test.appendChild(set_options("Renal Dialysis Tech"));
        test_test.appendChild(set_options("Restorative and Protective Doctors"));
        test_test.appendChild(set_options("Urology"));
        test_test.appendChild(set_options("Vascular Surgery"));

    }else if(event.target.value == "The Association of Taxation Technicians"){
        test_test.appendChild(set_options("APS Human Capital Taxes"));
        test_test.appendChild(set_options("APS IHT Trusts and Estates"));
        test_test.appendChild(set_options("APS Taxation of Individuals"));
        test_test.appendChild(set_options("APS Taxation of Larger Companies and Groups"));
        test_test.appendChild(set_options("APS Taxation of Owner Managed Businesses"));
        test_test.appendChild(set_options("APS VAT and Other Indirect Taxes"));
        test_test.appendChild(set_options("Law"));
        test_test.appendChild(set_options("Law (Scotland)"));
        test_test.appendChild(set_options("Principles of Accounting CBE"));
        test_test.appendChild(set_options("Professional Responsibilities & Ethics"));
    }else if(event.target.value == "The Chartered Institute of Taxation"){
        test_test.appendChild(set_options("APS Human Capital Taxes"));
        test_test.appendChild(set_options("APS IHT Trusts and Estates"));
        test_test.appendChild(set_options("APS Taxation of Individuals"));
        test_test.appendChild(set_options("APS Taxation of Larger Companies and Groups"));
        test_test.appendChild(set_options("APS Taxation of Owner Managed Businesses"));
        test_test.appendChild(set_options("APS VAT and Other Indirect Taxes"));
        test_test.appendChild(set_options("Law"));
        test_test.appendChild(set_options("Law (Scotland)"));
        test_test.appendChild(set_options("Principles of Accounting CBE"));
        test_test.appendChild(set_options("Professional Responsibilities & Ethics"));
    }else if(event.target.value == "The State Bar of California"){
        test_test.appendChild(set_options("First-Year Law Students' Examination"));
        test_test.appendChild(set_options("First-Year Law Students' Practice Examination"));
        test_test.appendChild(set_options("First-Year Law Students' Test Center Examination"));
    }else if(event.target.value == "CELBAN"){
        test_test.appendChild(set_options("CELBAN"));
    }else if(event.target.value == "Practice CELBAN"){
        test_test.appendChild(set_options("Practice CELBAN"));
    }else if(event.target.value == "Uniform CPA Exam"){
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
