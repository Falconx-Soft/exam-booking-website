const test_sponsor = document.getElementById('test_sponsor');
const test_program = document.getElementById('test_program');

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
    }else if(event.target.value == "American Speech-Language-Hearing Association"){
        test_program.appendChild(set_options("ASHA Assistant Certification Program (ACP)"));
    }
});